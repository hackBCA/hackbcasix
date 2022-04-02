import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from './logo.svg';

export function Navbar({hidesAtTop}: {hidesAtTop: boolean}) {
    const [isPageAtTop, setPageAtTop] = useState(hidesAtTop);

    useEffect(() => {
        if (hidesAtTop) {
            const onScroll = () => {
                setPageAtTop(window.scrollY === 0);
            };

            window.addEventListener("scroll", onScroll);
            onScroll();

            return () => window.removeEventListener("scroll", onScroll);
        } else {
            setPageAtTop(false);
        }
    }, [hidesAtTop]);

    return <header className={`w-full fixed z-10 top-0 left-0 right-0 flex items-center transition-all ${isPageAtTop ? "border-white/0" : "bg-french-violet-600/90 dark:bg-french-violet-800/70 backdrop-blur-md border-b border-white/10"}`}>
        <Link href="/">
            <a className={`transition-opacity flex items-center pl-4 text-white ${isPageAtTop ? "opacity-0" : "opacity-100 hover:opacity-70"}`}>
                <Logo className="h-10 mr-2" />
                <div className="text-2xl font-semibold italic hidden sm:block">hackBCA VI</div>
            </a>
        </Link>
        <span className="flex-grow" />
        <div className="flex items-center justify-between py-2 pr-4 text-lg text-white/70">
            <Link href="/"><a className="mr-4 sm:inline hidden hover:text-white transition-colors">Home</a></Link>
            <Link href="/schedule"><a className="mr-4 hover:text-white transition-colors">Schedule</a></Link>
            <Link href="/prizes"><a className="mr-4 hover:text-white transition-colors">Prizes</a></Link>
            <a href="https://hackbca-vi.devpost.com" className="hover:text-white transition-colors">Devpost</a>
        </div>
    </header>
}