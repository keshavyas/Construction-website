import * as React from "react";import {cn} from "@/lib/utils";
function Badge({className,...p}){return <div className={cn("inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",className)} {...p}/>}
export {Badge};
