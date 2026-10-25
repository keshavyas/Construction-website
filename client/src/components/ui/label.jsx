import * as React from "react";import {cn} from "@/lib/utils";
const Label=React.forwardRef(({className,...p},ref)=><label ref={ref} className={cn("text-sm font-medium leading-none",className)} {...p}/>);
Label.displayName="Label";
export {Label};
