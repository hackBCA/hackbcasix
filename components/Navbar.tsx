import { useEffect, useState } from "react";
import Logo from './logo.svg';

export function Navbar() {
    const [isPageAtTop, setPageAtTop] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            setPageAtTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", onScroll);
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return <header className={`w-full fixed z-10 top-0 left-0 right-0 hidden sm:flex items-center transition-all border-white/0 ${isPageAtTop ? "" : "bg-french-violet-600/90 dark:bg-french-violet-800/70 backdrop-blur-md border-b border-white/10"}`}>
        <a href="#" className={`transition-opacity flex items-center pl-4 text-white ${isPageAtTop ? "opacity-0" : "opacity-100 hover:opacity-70"}`}>
            <Logo className="h-10 mr-2" />
            <div className="text-2xl font-semibold italic">hackBCA VI</div>
        </a>
        <span className="flex-grow" />
        <div className="flex items-center justify-between py-2 pr-4 text-lg text-white/70">
            <a href="#" className="mr-4 hover:text-white transition-colors">Home</a>
            <a href="#schedule" className="mr-4 hover:text-white transition-colors">Schedule</a>
            <a href="#register" className="px-4 py-1 rounded-full bg-medium-turquoise-400 text-black hover:bg-brilliant-rose-500 transition-colors">Register</a>
        </div>
    </header>
}