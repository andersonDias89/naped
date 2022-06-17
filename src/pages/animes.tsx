import Head from "next/head";

import { Animes } from "../components/Animes";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function PageAnimes() {
    return (
        <>
            <Head>
                <title>Naped Desafio | Animes</title>
                <meta name="description" content="Desafio Naped - Página de animes e artigos relacionados" />
            </Head>

            <Header />
            <main>
                <Animes />
            </main>
            <Footer />
        </>
    )
}