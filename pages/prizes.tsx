import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { Section } from "components/Section";
import { NextSeo } from "next-seo";

function Prize({category, detail = "???"}: {category: string, detail?: string}) {
    return <li><strong>{category}:</strong> {detail}</li>;
}

export default function Prizes() {
    return <>
        <NextSeo title="Prizes &amp; Categories" />
        <Navbar hidesAtTop={false} />
        <h1 className="mt-24 mb-8 text-5xl text-bold text-center font-bold">Prizes &amp; Categories</h1>
        <Section>
            <ul className="list-disc">
                <Prize category="Best Overall" detail="???" />
                <Prize category="Best Theme-Related" detail="???" />
                <Prize category="Best Beginner" detail="???" />
                <Prize category="Best Game" detail="???" />
                <Prize category="Best Web" detail="???" />
                <Prize category="Best Mobile" detail="???" />
                <Prize category="🌶️🌶️🌶️🌶️ Spiciest Project" detail="???" />
            </ul>
        </Section>
        <Footer />
    </>;
}