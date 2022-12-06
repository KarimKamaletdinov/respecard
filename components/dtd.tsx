import { ReactNode } from "react";

export interface DtdProps {
    children: ReactNode
    k: string
}

export function Dtd({children, k}: DtdProps){
    return <>
    <dt className="col-sm-3">{k}</dt>
    <dd className="col-sm-9">{children}</dd>
    </>
}