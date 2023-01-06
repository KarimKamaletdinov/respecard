import { ReactNode } from "react";

export interface DtdProps {
    k: string
    v: string
}

export function Dtd({k, v}: DtdProps){
    return <>
    <dt dangerouslySetInnerHTML={{__html: k}}></dt>
    <dd dangerouslySetInnerHTML={{__html: v}}></dd>
    <br/>
    </>
}