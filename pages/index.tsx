import Head from "next/head";
import { HeroHeader } from "components/HeroHeader";
import { Navbar } from "components/Navbar";
import { Section } from "components/Section";
import { Footer } from "components/Footer";
import { Intro } from "components/homepage/Intro";
import { Schedule } from "components/homepage/Schedule";
import { Register } from "components/homepage/Register";

function Divider() {
    return <hr className="w-full max-w-screen-lg mx-auto border-french-violet-100 dark:border-french-violet-800" />;
}

export default function Home() {
    return <>
        <Head>
            <meta name="theme-color" content="#7A28CB" />
        </Head>
        <Navbar />
        <HeroHeader />
        <Intro />
        <Divider />
        <Schedule />
        <Divider />
        <Register />
        <Divider />
        <Section id="faq" title="FAQ">
            <div className="text-center text-xl italic">Coming soon!</div>
        </Section>
        <Footer />
    </>;
}
