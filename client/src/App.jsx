import {useState,useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {Card,CardContent,CardHeader,CardTitle,CardDescription} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Label} from '@/components/ui/label';
import {Badge} from '@/components/ui/badge';
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent} from '@/components/ui/accordion';
const PHONE='7773077227',EMAIL='vermacargowayslogisticsgroup@gmail.com',WA='https://wa.me/917773077227';
/* Free-to-use photos (Pexels / Unsplash / local). Replace any URL with your own photo, e.g. '/images/fleet.jpg' */
const IMG={
hero:'https://images.pexels.com/photos/15109994/pexels-photo-15109994/free-photo-of-demolition-machine-operator-at-work.jpeg?auto=compress&cs=tinysrgb&w=1800',
excavator:'https://images.pexels.com/photos/36657010/pexels-photo-36657010/free-photo-of-yellow-excavator-at-construction-site.jpeg?auto=compress&cs=tinysrgb&w=1000',
earthmoving:'/images/dumper-earthmoving.png',
constructionEquipment:'https://images.pexels.com/photos/14484388/pexels-photo-14484388.jpeg?auto=compress&cs=tinysrgb&w=1000',
cargoFleet:'/images/cargo-fleet.png',
fleet:'https://unsplash.com/photos/JJda_SHp67M/download?force=true&w=1200'};
const P={ok:'M5 12l5 5 9-10',road:'M1 6h13v9H1zM14 9h4l3 3v3h-7M5 18a2 2 0 100-.01M17 18a2 2 0 100-.01',box:'M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10',grid:'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',key:'M8 15a4 4 0 110-8 4 4 0 010 8zM11 12h10M18 12v4M21 12v3',load:'M12 3v12M7 10l5 5 5-5M4 20h16',chain:'M5 6a2 2 0 100-.01M19 6a2 2 0 100-.01M12 19a2 2 0 100-.01M6.5 7.5L11 17M17.5 7.5L13 17M7 6h10',phone:'M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2',mail:'M3 5h18v14H3zM3 7l9 6 9-6',img:'M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M9 9a1 1 0 100-.01'};
const Ic=({d,className='h-5 w-5'})=><svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={d}/></svg>;
const Photo=({src,alt,className=''})=>{const [bad,setBad]=useState(false);return bad?<div className={'flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-slate-500 '+className}><Ic d={P.img} className="h-10 w-10"/></div>:<img src={src} alt={alt} loading="lazy" onError={()=>setBad(true)} className={'object-cover '+className}/>};
const services=[['road','Road Transportation','Dependable full-load and part-load movement of goods by road, planned for safe and on-time delivery.'],['box','Cargo & Freight Movement','End-to-end freight handling for industries, traders and projects with clear coordination.'],['grid','Fleet Management','Organised scheduling and well-maintained vehicles that keep your cargo moving.'],['key','Vehicle Hiring & Leasing','Flexible hiring, rental and leasing of commercial vehicles for short or long-term needs.'],['load','Loading & Unloading','Trained manpower and equipment for safe, efficient handling at origin and destination.'],['chain','Supply-Chain Services','Allied transportation support connecting your sites, suppliers and customers.']];
const machines=[
  ['excavator','Excavators','Purchase, hire, lease and operation of excavators for earthmoving, trenching and site development.'],
  ['earthmoving','Dumpers & Earthmoving','Dumpers and allied earthmoving machinery for construction, mining and infrastructure projects.'],
  ['constructionEquipment','Construction Equipment','Heavy and industrial equipment supplied with operation and maintenance support.'],
  ['cargoFleet','Cargo & Fleet Management','Reliable cargo logistics, fleet scheduling and freight movement for commercial and industrial projects.']
];
const formServices=['Construction Equipment','Fleet Management','Vehicle Hiring & Leasing','Machinery Hire / Lease','Loading & Unloading','Supply-Chain Services','Other'];
const industries=['Construction','Mining & Quarrying','Roads & Infrastructure','Manufacturing','Industrial Projects','Traders & Distributors'];
const steps=[['Enquiry','Share your route, load or equipment requirement.'],['Quotation','Receive a clear, tailored quotation.'],['Deployment','Vehicles or machinery are arranged and dispatched.'],['Support','We stay in touch until the job is complete.']];
const faqs=[['Which services do you provide?','Road transportation, cargo and freight movement, fleet management, vehicle hiring and leasing, loading and unloading, supply-chain services, and heavy machinery rental and sales.'],['Can I hire machinery along with transport?','Yes. We can arrange vehicles and equipment such as excavators and dumpers together, so you deal with a single team.'],['How do I get a quotation?','Use the enquiry form or call us. Share the route, load or equipment type and duration, and we will respond with a quotation.'],['Do you offer long-term contracts?','Yes. We support short-term jobs as well as long-term leasing and rental arrangements.']];
const Head=({tag,title,text})=><div className="mb-12 max-w-2xl"><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">{tag}</p><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>{text&&<p className="mt-4 text-muted-foreground">{text}</p>}</div>;
export default function App(){
const [open,setOpen]=useState(false);
const [f,setF]=useState({name:'',email:'',phone:'',service:'Construction Equipment',message:''}),[st,setSt]=useState({s:'idle',m:''});
const on=e=>setF({...f,[e.target.name]:e.target.value});
const submit=async e=>{e.preventDefault();setSt({s:'load',m:''});
try{const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(f)});const d=await r.json();if(!r.ok)throw new Error(d.error||'Failed');setSt({s:'ok',m:'Thank you. Your enquiry has been sent and our team will contact you shortly.'});setF({...f,name:'',email:'',phone:'',message:''})}
catch(err){setSt({s:'err',m:'We could not send your enquiry right now. Please call '+PHONE+' or email us directly.'})}};
const links=[['About','about'],['Services','services'],['Machinery','machinery'],['Industries','industries'],['FAQ','faq'],['Contact','contact']];
const sel="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
return(<div>
<div className="hidden bg-navy text-xs text-slate-300 md:block"><div className="container flex h-9 items-center justify-between"><div className="flex gap-6"><a href={'tel:'+PHONE} className="hover:text-white">Phone: {PHONE}</a><a href={'mailto:'+EMAIL} className="hover:text-white">{EMAIL}</a></div><span>Transportation · Logistics · Heavy Machinery</span></div></div>
<header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur"><div className="container flex h-16 items-center justify-between">
<a href="#top" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-lg font-bold text-white">V</span><span className="leading-tight"><span className="block text-sm font-bold tracking-wide">VERMA CARGOWAYS</span><span className="block text-[10px] font-medium tracking-[0.25em] text-muted-foreground">LOGISTICS GROUP</span></span></a>
<nav className="hidden items-center gap-7 lg:flex">{links.map(([t,i])=><a key={i} href={'#'+i} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{t}</a>)}<Button asChild size="sm"><a href="#contact">Get a Quote</a></Button></nav>
<button className="p-2 lg:hidden" aria-label="Menu" onClick={()=>setOpen(!open)}><Ic d={open?'M5 5l14 14M19 5L5 19':'M4 7h16M4 12h16M4 17h16'} className="h-6 w-6"/></button></div>
{open&&<div className="border-t bg-white lg:hidden"><div className="container flex flex-col py-3">{links.map(([t,i])=><a key={i} href={'#'+i} onClick={()=>setOpen(false)} className="border-b py-3 text-sm font-medium">{t}</a>)}<Button asChild className="my-3"><a href="#contact" onClick={()=>setOpen(false)}>Get a Quote</a></Button></div></div>}</header>

<section id="top" className="relative overflow-hidden bg-navy text-white"><Photo src={IMG.hero} alt="Heavy machinery at a construction site" className="absolute inset-0 h-full w-full opacity-45"/>
<div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30"/>
<div className="container relative py-24 md:py-36"><div className="max-w-2xl"><Badge className="mb-6 border-white/25 bg-white/10 text-white">Verma Cargoways Logistics Group Pvt. Ltd.</Badge>
<h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">Transportation and heavy equipment solutions you can rely on.</h1>
<p className="mt-6 text-lg text-slate-200">Road transportation, fleet services and earthmoving machinery for construction, mining and industrial businesses, delivered with discipline and transparency.</p>
<div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><a href="#contact">Request a Quotation</a></Button><Button asChild size="lg" variant="outlineLight"><a href={'tel:'+PHONE}>Call</a></Button></div></div></div>
<div className="relative border-t border-white/15 bg-white/5 backdrop-blur"><div className="container grid grid-cols-2 gap-px md:grid-cols-4">{['Road Transportation','Fleet & Vehicle Hire','Earthmoving Machinery','Loading & Unloading'].map(x=><div key={x} className="flex items-center gap-2 py-5 text-sm font-medium"><Ic d={P.ok} className="h-4 w-4 text-primary"/>{x}</div>)}</div></div></section>

<section id="about" className="py-20 md:py-28"><div className="container grid items-center gap-14 lg:grid-cols-2">
<Photo src={IMG.fleet} alt="Commercial truck fleet" className="aspect-[4/3] w-full rounded-lg shadow-lg"/>
<div><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">About the Company</p><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">A single partner for transport and heavy equipment</h2>
<p className="mt-5 text-muted-foreground">Verma Cargoways Logistics Group Private Limited provides transportation, logistics, cargo and freight movement, fleet management, vehicle hiring and leasing. We also purchase, sell, hire, lease, operate and maintain earthmoving and construction machinery for construction, mining and industrial projects.</p>
<ul className="mt-7 grid gap-3">{['Road transport and freight movement','Fleet management, hiring and leasing','Excavators, dumpers and heavy machinery','Loading, unloading and supply-chain support'].map(x=><li key={x} className="flex items-center gap-3 text-sm font-medium"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary"><Ic d={P.ok} className="h-3.5 w-3.5"/></span>{x}</li>)}</ul></div></div></section>

<section id="services" className="bg-secondary py-20 md:py-28"><div className="container"><Head tag="Our Services" title="Logistics solutions for every requirement" text="From a single load to a complete supply chain, we move your goods safely and on schedule."/>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(([i,t,d])=><Card key={t} className="transition-shadow hover:shadow-md"><CardHeader><span className="mb-3 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary"><Ic d={P[i]} className="h-6 w-6"/></span><CardTitle>{t}</CardTitle></CardHeader><CardContent><CardDescription className="leading-relaxed">{d}</CardDescription></CardContent></Card>)}</div></div></section>

<section id="machinery" className="py-20 md:py-28"><div className="container"><Head tag="Heavy Machinery" title="Equipment for construction, mining and industry" text="We purchase, sell, hire, lease, rent, operate and maintain machinery to keep your projects on schedule."/>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{machines.map(([k,t,d])=><Card key={k} className="flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-lg"><Photo src={IMG[k]} alt={t} className="aspect-[4/3] w-full object-cover"/><CardHeader className="flex-1 pb-3"><CardTitle className="text-xl">{t}</CardTitle><CardDescription className="mt-2 leading-relaxed">{d}</CardDescription></CardHeader><CardContent className="pt-0 mt-auto"><a href="#contact" className="inline-flex items-center text-sm font-semibold text-primary hover:underline">Enquire about {t.toLowerCase()} →</a></CardContent></Card>)}</div></div></section>

<section id="industries" className="bg-secondary py-20 md:py-28"><div className="container"><Head tag="Industries" title="Industries we support"/>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map(x=><div key={x} className="flex items-center gap-3 rounded-lg border bg-white px-5 py-4 text-sm font-medium"><Ic d={P.ok} className="h-4 w-4 text-primary"/>{x}</div>)}</div></div></section>

<section className="bg-navy py-20 text-white"><div className="container"><div className="mb-12 max-w-2xl"><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">How We Work</p><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">A clear, transparent process</h2></div>
<div className="grid gap-8 md:grid-cols-4">{steps.map(([t,d],i)=><div key={t} className="border-t border-white/20 pt-5"><span className="text-sm font-semibold text-primary">0{i+1}</span><h3 className="mt-2 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-slate-300">{d}</p></div>)}</div></div></section>

<section id="faq" className="py-20 md:py-28"><div className="container max-w-3xl"><Head tag="FAQ" title="Frequently asked questions"/>
<Accordion type="single" collapsible>{faqs.map(([q,a],i)=><AccordionItem key={q} value={'q'+i}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

<section id="contact" className="bg-secondary py-20 md:py-28"><div className="container grid gap-12 lg:grid-cols-5">
<div className="lg:col-span-2"><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Contact</p><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Request a quotation</h2>
<p className="mt-4 text-muted-foreground">Tell us what you need to transport or which equipment to hire. Our team will respond promptly.</p>
<div className="mt-8 grid gap-4">{[['phone','Phone',PHONE,'tel:'+PHONE],['mail','Email',EMAIL,'mailto:'+EMAIL]].map(([i,l,v,h])=><a key={l} href={h} className="flex items-center gap-4 rounded-lg border bg-white p-4 hover:shadow-md"><span className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-primary/10 text-primary"><Ic d={P[i]}/></span><span className="min-w-0"><span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{l}</span><span className="block break-all text-sm font-medium">{v}</span></span></a>)}</div></div>
<Card className="lg:col-span-3"><CardContent className="p-6 pt-6 md:p-8"><form onSubmit={submit} className="grid gap-5">
<div className="grid gap-5 sm:grid-cols-2"><div className="grid gap-2"><Label htmlFor="name">Full name</Label><Input id="name" name="name" value={f.name} onChange={on} required/></div><div className="grid gap-2"><Label htmlFor="phone">Phone <span className="text-red-500 font-bold">*</span></Label><Input id="phone" name="phone" value={f.phone} onChange={on} required/></div></div>
<div className="grid gap-2"><Label htmlFor="email">Email <span className="text-red-500 font-bold">*</span></Label><Input id="email" type="email" name="email" value={f.email} onChange={on} required/></div>
<div className="grid gap-2"><Label htmlFor="service">Service required</Label><select id="service" name="service" value={f.service} onChange={on} className={sel}>{formServices.map(s=><option key={s} value={s}>{s}</option>)}</select></div>
<div className="grid gap-2"><Label htmlFor="message">Requirement details</Label><Textarea id="message" name="message" placeholder="Route, load, equipment type, duration..." value={f.message} onChange={on} required/></div>
<Button size="lg" disabled={st.s==='load'}>{st.s==='load'?'Sending...':'Send Enquiry'}</Button>
{st.m&&<p className={'text-sm '+(st.s==='ok'?'text-green-700':'text-red-700')}>{st.m}</p>}</form></CardContent></Card></div></section>

<footer className="bg-navy text-slate-300"><div className="container grid gap-10 py-14 md:grid-cols-3"><div><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-lg font-bold text-navy">V</span><span className="leading-tight"><span className="block text-sm font-bold tracking-wide text-white">VERMA CARGOWAYS</span><span className="block text-[10px] tracking-[0.25em]">LOGISTICS GROUP</span></span></div><p className="mt-4 max-w-xs text-sm">Transportation, logistics, fleet services and heavy machinery.</p></div>
<div><h4 className="mb-4 text-sm font-semibold text-white">Quick Links</h4><div className="grid gap-2 text-sm">{links.map(([t,i])=><a key={i} href={'#'+i} className="hover:text-white">{t}</a>)}</div></div>
<div><h4 className="mb-4 text-sm font-semibold text-white">Contact</h4><div className="grid gap-2 text-sm"><a href={'tel:'+PHONE} className="hover:text-white">{PHONE}</a><a href={'mailto:'+EMAIL} className="break-all hover:text-white">{EMAIL}</a><a href={WA} className="hover:text-white">WhatsApp</a></div></div></div>
<div className="border-t border-white/15 py-5 text-center text-xs">© {new Date().getFullYear()} Verma Cargoways Logistics Group Private Limited. All rights reserved.</div></footer>
</div>)}
