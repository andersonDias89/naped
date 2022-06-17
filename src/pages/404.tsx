import { PageNotFound } from "../components/PageNotFound";
import Head from "next/head";

export default function PageErro() {
    return (
        <>
            <Head>
                <title>Naped Desafio | 404</title>
                <meta name="description" content="Desafio Naped - Página não encontrada 404" />
            </Head>

            <main>
                <PageNotFound />
            </main>
        </>
    )
}