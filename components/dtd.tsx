import { ReactNode } from "react";

export interface DtdProps {
    children: ReactNode
    k: string
}

export function Dtd({children, k}: DtdProps){
    return <>
    <dt>{k}</dt>
    <dd>{children}</dd>
    <br/>
    </>
}