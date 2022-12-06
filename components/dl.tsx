import { ScriptProps } from "next/script";

export default function Dl({children}: ScriptProps){
    return <dl className="row">{children}</dl>
}