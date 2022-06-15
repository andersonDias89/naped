import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { News } from "../../components/News";
import { RecentNews } from "../../components/RecentNews";

export default function PageNews() {
    return (
        <>
            <Header />
            <News />
            <RecentNews />
            <Footer />
        </>
    )
}