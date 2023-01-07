import Head from "next/head";
import { ScriptProps } from "next/script";
import Image from "next/image";
import { ReactNode } from "react";
import { Group } from "../types/group";
import Link from "next/link";

export interface DlProps {
    children: ReactNode
    groups: Group[]
    selectedGroup: Group
}

export default function Layout({ children, groups, selectedGroup }: DlProps) {
    return <>
        <Head>
            <title>RESPECARD</title>
            <link rel="icon" href="/icon.svg"></link>
        </Head>
        <header>
            <Link href="/"><Image src="/icon.svg" width="0" height="0" style={{ width: 'auto', height: '100%' }} alt="RESPECARD"></Image></Link>
            {groups.map(group =>
                <Link key={group.name} href={'/' + group.name} className={"btn btn-primary" + (group.name == selectedGroup.name ? " btn-highlighted" : "")}>
                    {group.title}
                </Link>)}
        </header>
        <div className="d-flex align-items-center justify-content-center">
            <main>{children}</main>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="anonymous" async></script>
    </>
}
