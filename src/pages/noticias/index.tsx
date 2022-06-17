import Head from "next/head";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { News } from "../../components/News";
import { RecentNews } from "../../components/RecentNews";

export default function PageNews() {
    return (
        <>
            <Head>
                <title>Naped Desafio | Artigo</title>
                <meta name="description" content="Desafio Naped - Página de animes e artigos relacionados" />
            </Head>

            <Header />
            <main>
                <News />
                <RecentNews />
            </main>
            <Footer />
        </>
    )
}