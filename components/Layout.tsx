import Head from "next/head";
import { ScriptProps } from "next/script";

export default function Layout({children} : ScriptProps) {
    return <>
        <Head>
            <title>Сравнение карт Tinkoff</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        </Head>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="anonymous" async></script>
    </>
}