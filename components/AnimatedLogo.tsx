import Particles from 'react-tsparticles';
import Logo from './logo.svg';

export function AnimatedLogo({className}: {className?: string}) {
    return <div className={`relative pt-6 px-6 pb-7 bg-french-violet-800 overflow-hidden dark:bg-french-violet-1000 shadow-lg shadow-brilliant-rose-500/50 rounded-full ${className || ""}`}>
        <div className="shadow-lg shadow-medium-turquoise-400/50 rounded-full block">
            <Logo className="drop-shadow-logo-inner" />
            <div className="pointer-events-none absolute inset-0 filter blur-sm">
                <Particles
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
    </div>;
}