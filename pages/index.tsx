import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import Logo from "components/logo.svg";
import Particles, { IParticlesProps } from "react-tsparticles";

export default function Home() {
    const canvasRef = useRef<HTMLCanvasElement>();
    const [mousePos, setMousePos] = useState<{x: number, y: number}>();

    // const particlesInit: IParticlesProps["init"] = async (main) => {
    //     console.log(main);

    //     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // };

    // const particlesLoaded: IParticlesProps["loaded"] = async (container) => {
    //     console.log(container);
    // };


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
        </Head>
        <div
            className="w-full min-h-screen text-white flex flex-col items-center justify-center text-center py-8 px-6 relative"
            onMouseMove={e => setMousePos({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setMousePos(null)}
        >
            <div className="absolute inset-0 -z-10 bg-french-violet-600 dark:bg-french-violet-800">
                <canvas ref={canvasRef} className="w-full h-full dark:opacity-60" />
            </div>
            <div className="relative w-full max-w-xs pt-6 px-6 pb-7 mb-8 bg-french-violet-800 overflow-hidden dark:bg-french-violet-1000 shadow-lg shadow-brilliant-rose-500/50 rounded-full">
                <div className="shadow-lg shadow-medium-turquoise-400/50 rounded-full block">
                    <Logo className="drop-shadow-logo-inner" />
                    <div className="pointer-events-none absolute inset-0 filter blur-sm">
                        <Particles
                            id="dragonfire"
                            options={{
                                
                                "background": {
                                    "color": {
                                        "value": "#00000000"
                                    },
                                    "position": "50% 50%",
                                    "opacity": 0,
                                    "repeat": "no-repeat",
                                    "size": "cover"
                                },
                                "retinaDetect": true,
                                "fullScreen": false,
                                "interactivity": {},
                                "particles": {
                                    "color": {
                                        "value": "#000"
                                    },
                                    "links": {
                                        "color": {
                                            "value": "#000"
                                        },
                                        "distance": 150,
                                        "enable": true,
                                        "opacity": 0.4
                                    },
                                    "move": {
                                        "attract": {
                                            "rotate": {
                                                "x": 600,
                                                "y": 1200
                                            }
                                        },
                                        "enable": true,
                                        "outModes": "out"
                                    },
                                    "number": {
                                        "value": 0
                                    },
                                    "opacity": {
                                        "value": 0.5,
                                        "animation": {
                                            "speed": 1,
                                            "minimumValue": 0.1
                                        }
                                    },
                                    "size": {
                                        // @ts-ignore
                                        "random": {
                                            "enable": true
                                        },
                                        "value": {
                                            "min": 4,
                                            "max": 5
                                        },
                                        "animation": {
                                          startValue: "min",
                                          enable: true,
                                          minimumValue: 1,
                                          speed: 200,
                                          destroy: "none",
                                          sync: true
                                        }
                                        
                                    }
                                },
                                "emitters": [
                                    {
                                        "autoPlay": true,
                                        "fill": true,
                                        "life": {
                                            "wait": false
                                        },
                                        "rate": {
                                            "quantity": 5,
                                            "delay": 0.02
                                        },
                                        "shape": "square",
                                        "startCount": 0,
                                        "direction": "left",
                                        "particles": {
                                            "shape": {
                                                "type": "circle"
                                            },
                                            // @ts-ignore
                                            "color": "#ef60a350",
                                            "lineLinked": {
                                                "enable": false
                                            },
                                            "opacity": {
                                                value: 0.7,
                                                animation: {
                                                    enable: true,
                                                    speed: 5,
                                                    minimumValue: 0.0,
                                                    sync: true,
                                                    startValue: "max",
                                                    destroy: "min"
                                                }
                                            },
                                            "rotate": {
                                                "value": 0,
                                                "random": false,
                                                "direction": "counter-clockwise",
                                                "animation": {
                                                    "enable": true,
                                                    "speed": 15,
                                                    "sync": false
                                                }
                                            },
                                            "size": {
                                                "value": 12,
                                                "random": {
                                                    "enable": true,
                                                    "minimumValue": 5
                                                },
                                                "animation": {
                                                  startValue: "min",
                                                  enable: true,
                                                  minimumValue: 1,
                                                  speed: 100,
                                                  destroy: "none",
                                                  sync: true
                                                }
                                            },
                                            "move": {
                                                "speed": {
                                                    min: 16,
                                                    max: 20,
                                                },
                                                "random": false,
                                                "outMode": "destroy",
                                                gravity: {
                                                    acceleration: 100,
                                                    enable: true,
                                                    inverse: true
                                                },
                                                angle: {
                                                    offset: -10,
                                                    value: 30,
                                                },
                                                decay: 0.03,
                                            }
                                        },
                                        "position": {
                                            "x": 57.5,
                                            "y": 60,
                                        }
                                    }
                                ]
                            }}
                            />
                        </div>
                </div>
            </div>
            <h1 className="sm:text-7xl text-6xl font-semibold italic">hackBCA VI</h1>
            <p className="text-3xl"><span className="font-semibold">Soaring to new heights.</span> April 1-2, 2022.</p>
            <p className="mt-8 italic">Updates soon.</p>
            <p className="mt-8">Want to sponsor us? Contact us at <a className="text-medium-turquoise-400 hover:underline" href="mailto:contact@hackbca.com">contact@hackbca.com</a>!</p>
            <p className="mt-3 text-sm opacity-70"><a href="https://v.hackbca.com" className="hover:underline">hackBCA V (2020) <FontAwesomeIcon icon={faExternalLinkAlt} /></a></p>
            <p className="text-sm mt-3 opacity-70">Logo by Galadriel Cho. Animation by <a className="hover:underline" href="https://github.com/Blckbrry-Pi">Skyler Calaman <FontAwesomeIcon icon={faExternalLinkAlt} /></a>.</p>
        </div>
    </>;
}
