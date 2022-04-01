import Head from "next/head";
import { HeroHeader } from "components/HeroHeader";
import { Navbar } from "components/Navbar";
import { Section } from "components/Section";
import { Footer } from "components/Footer";
import { Intro } from "components/homepage/Intro";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Divider() {
    return <hr className="w-full max-w-screen-lg mx-auto border-french-violet-100 dark:border-french-violet-800" />;
}

export default function Home() {
    return <>
        <Head>
            <meta name="theme-color" content="#7A28CB" />
        </Head>
        <Navbar hidesAtTop={true} />
        <HeroHeader />
        <Intro />
        <Divider />
        <Section id="schedule" title="Schedule">
            <div className="flex items-center justify-center">
                <Link href="/schedule">
                    <a className="px-6 text-lg py-3 rounded-full bg-medium-turquoise-400 text-black hover:bg-brilliant-rose-500 transition-colors">
                        View schedule
                        <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                    </a>
                </Link>
            </div>
        </Section>
        <Footer />
    </>;
}
