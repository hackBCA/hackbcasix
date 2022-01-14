import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useRef, useState, useEffect } from "react";

export default function Home() {
    const canvasRef = useRef();
    const [mousePos, setMousePos] = useState();

    useEffect(() => {
        const request = requestAnimationFrame(() => {
            if (mousePos) {
                canvasRef.current.width = canvasRef.current.clientWidth;
                canvasRef.current.height = canvasRef.current.clientHeight;
                const context = canvasRef.current.getContext("2d");
                context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                const { x, y } = mousePos;
                const gradient = context.createRadialGradient(x, y, 5, x, y, 250);
                gradient.addColorStop(0, "#55DDE07F");
                gradient.addColorStop(1, "#55DDE000");
                context.fillStyle = gradient;
                context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            }
        });

        return () => cancelAnimationFrame(request);
    }, [mousePos]);

    return <>
        <Head>
            <meta name="theme-color" content="#7A28CB" />
            <meta name="theme-color" content="#471777" media="(prefers-color-scheme: dark)" />
        </Head>
        <div
            className="w-full h-screen text-white flex flex-col items-center justify-center text-center p-8 relative"
            onMouseMove={e => setMousePos({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setMousePos(null)}
        >
            <div className="absolute inset-0 -z-10 bg-french-violet-600 dark:bg-french-violet-800">
                <canvas ref={canvasRef} className="w-full h-full dark:opacity-60" />
            </div>
            <h1 className="text-7xl font-semibold italic">hackBCA VI</h1>
            <p className="text-3xl">April 1-2, 2022</p>
            <p className="mt-8 italic">Updates soon.</p>
            <p className="mt-8">Want to sponsor us? Contact us at <a className="text-medium-turquoise-400 hover:underline" href="mailto:contact@hackbca.com">contact@hackbca.com</a>!</p>
            <p className="mt-3 text-sm opacity-60"><a href="https://2020.hackbca.com" className="hover:underline">hackBCA V (2020) <FontAwesomeIcon icon={faExternalLinkAlt} /></a></p>
        </div>
    </>;
}