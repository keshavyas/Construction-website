import * as React from "react";import {cn} from "@/lib/utils";
const Card=React.forwardRef(({className,...p},ref)=><div ref={ref} className={cn("rounded-lg border bg-card text-foreground shadow-sm",className)} {...p}/>);
const CardHeader=React.forwardRef(({className,...p},ref)=><div ref={ref} className={cn("flex flex-col space-y-1.5 p-6",className)} {...p}/>);
const CardTitle=React.forwardRef(({className,...p},ref)=><h3 ref={ref} className={cn("text-lg font-semibold leading-tight tracking-tight",className)} {...p}/>);
const CardDescription=React.forwardRef(({className,...p},ref)=><p ref={ref} className={cn("text-sm text-muted-foreground",className)} {...p}/>);
const CardContent=React.forwardRef(({className,...p},ref)=><div ref={ref} className={cn("p-6 pt-0",className)} {...p}/>);
export {Card,CardHeader,CardTitle,CardDescription,CardContent};
