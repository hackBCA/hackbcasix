import { useEffect, useRef, useState } from "react";
import { AnimatedLogo } from "./AnimatedLogo";

export function HeroHeader() {
    const canvasRef = useRef<HTMLCanvasElement>();
    const [mousePos, setMousePos] = useState<{ x: number, y: number }>();

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

    return <div
        className="w-full text-white flex flex-col items-center justify-center py-16 px-6 relative"
        onMouseMove={e => setMousePos({ x: e.clientX, y: e.clientY })}
        onMouseLeave={() => setMousePos(null)}
    >
        <div className="absolute inset-0 -z-10 bg-french-violet-600 dark:bg-french-violet-800">
            <canvas ref={canvasRef} className="w-full h-full dark:opacity-60" />
        </div>
        <div className="text-center sm:text-left flex flex-col sm:flex-row items-center">
            <AnimatedLogo className="w-64 mb-8 sm:mb-0 sm:mr-8" />
            <div>
                <h1 className="sm:text-7xl text-6xl font-semibold italic mb-4">hackBCA VI</h1>
                <p className="text-3xl font-semibold">Soaring to new heights.</p>
                <p className="text-2xl">April 1-2, 2022.</p>
            </div>
        </div>
        <div className="mt-16 text-lg">hackBCA is complete. Thanks for joining us!</div>
    </div>;
}