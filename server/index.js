require('dotenv').config();
const express=require('express'),cors=require('cors'),nodemailer=require('nodemailer'),path=require('path');
const app=express();app.use(cors());app.use(express.json({limit:'50kb'}));
const t=nodemailer.createTransport({host:process.env.SMTP_HOST||'smtp.gmail.com',port:+(process.env.SMTP_PORT||465),secure:(process.env.SMTP_SECURE||'true')==='true',auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}});
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const hits=new Map();
app.post('/api/contact',async(req,res)=>{
 const ip=req.ip,n=Date.now(),a=(hits.get(ip)||[]).filter(x=>n-x<6e5);if(a.length>=5)return res.status(429).json({error:'Too many requests'});hits.set(ip,[...a,n]);
 const {name,email,phone,service,message}=req.body||{};
 if(!name||!email||!phone||!message||!/^\S+@\S+\.\S+$/.test(email))return res.status(400).json({error:'Please fill all fields correctly.'});
 try{await t.sendMail({from:`"Website Enquiry" <${process.env.SMTP_USER}>`,to:process.env.MAIL_TO||process.env.SMTP_USER,replyTo:email,subject:`New enquiry: ${esc(service||'General')} from ${esc(name)}`,
 html:`<h2>New website enquiry</h2><p><b>Name:</b> ${esc(name)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Phone:</b> ${esc(phone)}</p><p><b>Service:</b> ${esc(service||'-')}</p><p><b>Message:</b><br>${esc(message).replace(/\n/g,'<br>')}</p>`});
 res.json({ok:true})}catch(e){console.error(e.message);res.status(500).json({error:'Mail failed'})}});
const fs = require('fs');
const dist = fs.existsSync(path.join(__dirname, '../dist')) ? path.join(__dirname, '../dist') : path.join(__dirname, '../client/dist');
app.use(express.static(dist));app.get('*',(q,r)=>r.sendFile(path.join(dist,'index.html')));
app.listen(process.env.PORT||5000,()=>console.log('Server running'));
