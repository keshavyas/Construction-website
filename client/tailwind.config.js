const path=require('path');const c=n=>`hsl(var(--${n}) / <alpha-value>)`;
module.exports={content:[path.join(__dirname,'index.html'),path.join(__dirname,'src/**/*.{js,jsx}')],
theme:{container:{center:true,padding:'1.25rem',screens:{'2xl':'1200px'}},extend:{fontFamily:{sans:['Inter','system-ui','sans-serif']},
colors:{border:c('border'),input:c('input'),ring:c('ring'),background:c('background'),foreground:c('foreground'),navy:c('navy'),
primary:{DEFAULT:c('primary'),foreground:c('primary-foreground')},secondary:{DEFAULT:c('secondary'),foreground:c('foreground')},
muted:{DEFAULT:c('muted'),foreground:c('muted-foreground')},accent:{DEFAULT:c('accent'),foreground:c('foreground')},card:{DEFAULT:c('card'),foreground:c('foreground')}},
borderRadius:{lg:'var(--radius)',md:'calc(var(--radius) - 2px)',sm:'calc(var(--radius) - 4px)'},
keyframes:{'accordion-down':{from:{height:'0'},to:{height:'var(--radix-accordion-content-height)'}},'accordion-up':{from:{height:'var(--radix-accordion-content-height)'},to:{height:'0'}}},
animation:{'accordion-down':'accordion-down .2s ease-out','accordion-up':'accordion-up .2s ease-out'}}},plugins:[require('tailwindcss-animate')]};
