import * as React from "react";import * as A from "@radix-ui/react-accordion";import {cn} from "@/lib/utils";
const Accordion=A.Root;
const AccordionItem=React.forwardRef(({className,...p},ref)=><A.Item ref={ref} className={cn("border-b",className)} {...p}/>);
const AccordionTrigger=React.forwardRef(({className,children,...p},ref)=><A.Header className="flex"><A.Trigger ref={ref} className={cn("flex flex-1 items-center justify-between py-5 text-left font-medium transition-all hover:text-primary [&[data-state=open]>span]:rotate-45",className)} {...p}>{children}<span className="text-xl transition-transform duration-200">+</span></A.Trigger></A.Header>);
const AccordionContent=React.forwardRef(({className,children,...p},ref)=><A.Content ref={ref} className="overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...p}><div className={cn("pb-5",className)}>{children}</div></A.Content>);
export {Accordion,AccordionItem,AccordionTrigger,AccordionContent};
