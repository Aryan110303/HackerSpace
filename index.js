
        // section scroll (only desktop)


        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.refresh();

        if ($(window).width() > 991) {
            gsap.to("#video", {
                scrollTrigger: {
                    trigger: "#container",
                    start: "top center",
                    end: "center center",
                    // markers: true,
                    scrub: 2,
                    pinSpacing: true,
                },
                width: "65vw",

            });
        }


        gsap.to("#nav-bg", {
            scrollTrigger: {
                trigger: "#section-team",
                start: "top center",
                end: "bottom center",
                // markers: true,
                toggleActions: "play pause play reverse",
            },
            onStart: () => {
                ScrollTrigger.refresh();
            },
            width: 82,
            opacity: 1,
            x: 0,
            duration: 0.2,
        });

        gsap.to("#nav-bg", {
            scrollTrigger: {
                trigger: "#section-work",
                start: "top center",
                end: "bottom center",
                // markers: true,
                toggleActions: "play none play reverse",
            },
            width: 82,
            x: 85,
            duration: 0.2,
        });

        gsap.fromTo("#nav-bg", {
            x: 85,
        }, {
            scrollTrigger: {
                trigger: "#section-benefits",
                start: "top center",
                end: "bottom center",
                // markers: true,
                toggleActions: "play pause play reverse",
            },
            width: 104,
            x: 171,
            duration: 0.2,
        });

        gsap.fromTo("#nav-bg", {
            opacity: 1,
        }, {
            scrollTrigger: {
                trigger: "#section-reviews",
                start: "top center",
                end: "bottom center",
                // markers: true,
                toggleActions: "play pause play reverse",
            },
            opacity: 0,
            duration: 0.2,
        });

        gsap.fromTo("#nav-bg", {
            opacity: 0,
            width: 94,
            x: 279,
        }, {
            scrollTrigger: {
                trigger: "#section-pricing",
                start: "top center",
                end: "bottom center",
                // markers: true,
                toggleActions: "play pause none reverse",
            },
            opacity: 1,
            width: 94,
            x: 279,
            duration: 0.2,
        });

        gsap.fromTo("#nav-bg", {
            width: 94,
            x: 279,
        }, {
            scrollTrigger: {
                trigger: "#section-faq",
                start: "top center",
                end: "bottom center",
                // markers: true,
                toggleActions: "play pause play reverse",
            },
            width: 71,
            x: 377,
            duration: 0.2,
        });

        gsap.fromTo("#nav-bg", {}, {
            scrollTrigger: {
                trigger: "#section-star-cta",
                start: "top center",
                end: "bottom center",
                // markers: true,
                toggleActions: "play pause play reverse",
            },
            opacity: 0,
            duration: 0.2,
        });


        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        let coord = {
            x: 0,
            y: 0
        };
        let strokeColor = "#f8f6f5";
        let strokeWidth = 120;


        // document.addEventListener("mouseover", start);
        document.addEventListener("mousedown", start);
        document.addEventListener("mouseup", stop);
        window.addEventListener("resize", resize);

        resize();

        function resize() {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
        }

        function reposition(event) {
            coord.x = event.clientX - canvas.offsetLeft;
            coord.y = event.clientY - canvas.offsetTop;
        }

        function start(event) {
            document.addEventListener("mousemove", draw);
            reposition(event);

        }

        function stop() {
            document.removeEventListener("mousemove", draw);
        }

        function draw(event) {
            ctx.beginPath();
            ctx.lineWidth = strokeWidth;
            ctx.lineCap = "round";
            ctx.strokeStyle = strokeColor;
            ctx.moveTo(coord.x, coord.y);
            reposition(event);
            ctx.lineTo(coord.x, coord.y);
            ctx.stroke();

            $("#line-draw").fadeTo("slow", 0, function () {
                // Animation complete.
            });
        }

        $("#picker-red").click(function () {
            strokeColor = "#f97068";
        });
        $("#picker-blue").click(function () {
            strokeColor = "#645ce7";
        });
        $("#picker-yellow").click(function () {
            strokeColor = "#ffb24b";
        });
        $("#picker-green").click(function () {
            strokeColor = "#52e0bf";
        });
        $("#picker-white").click(function () {
            strokeColor = "#fffdfb";
        });
        $("#picker-big").click(function () {
            strokeWidth = 240;
        });
        $("#picker-medium").click(function () {
            strokeWidth = 120;
        });
        $("#picker-small").click(function () {
            strokeWidth = 60;
        });

        // Slider clients
        function clientsSlider() {
            let splides = $('.clients-slider');
            for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
                new Splide(splides[i], {
                    // Desktop on down
                    autoWidth: true,
                    perMove: 1,
                    focus: 'center', // 0 = left and 'center' = center
                    type: 'loop', // 'loop' or 'slide'
                    gap: '5rem', // space between slides
                    arrows: false, // 'slider' or false
                    pagination: false, // 'slider' or false
                    dragAngleThreshold: 30, // default is 30
                    drag: false,
                    autoScroll: {
                        speed: 0.7,
                        pauseOnHover: false,
                    },
                    breakpoints: {
                        991: {
                            gap: '3em',
                        },
                        767: {
                            gap: '2.5em',
                        },

                        479: {
                            gap: '0.5em',

                        }
                    }
                }).mount(window.splide.Extensions);
            }

        }
        clientsSlider();

        // Slider work top
        function workSlidertop() {
            let splides = $('.work-slider-top');
            for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
                new Splide(splides[i], {
                    // Desktop on down
                    autoWidth: true,
                    perMove: 1,
                    focus: 'center', // 0 = left and 'center' = center
                    type: 'loop', // 'loop' or 'slide'
                    gap: '2rem', // space between slides
                    arrows: false, // 'slider' or false
                    pagination: false, // 'slider' or false
                    dragAngleThreshold: 30, // default is 30
                    autoScroll: {
                        speed: 0.5,
                        pauseOnHover: true,
                        pauseOnFocus: false,
                        resetProgress: true,


                    },
                    breakpoints: {
                        991: {
                            gap: '1.5em',
                        },
                        767: {
                            fixedWidth: false,
                            perPage: 1.5,
                            gap: '1em',
                            autoScroll: {
                                speed: 1,
                            },

                        },
                        479: {
                            fixedWidth: false,
                            perPage: 1,
                            gap: '0.5em',
                            padding: '1rem'

                        }
                    }
                }).mount(window.splide.Extensions);
            }

        }
        workSlidertop();


        // Slider work bottom
        function workSliderbottom() {
            let splides = $('.work-slider-bottom');
            for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
                new Splide(splides[i], {
                    // Desktop on down
                    autoWidth: true,
                    perMove: 1,
                    focus: 'center', // 0 = left and 'center' = center
                    type: 'loop', // 'loop' or 'slide'
                    gap: '2rem', // space between slides
                    arrows: false, // 'slider' or false
                    pagination: false, // 'slider' or false
                    dragAngleThreshold: 30, // default is 30
                    autoScroll: {
                        speed: -0.5,
                        pauseOnHover: true,
                        pauseOnFocus: false,
                    },
                    breakpoints: {
                        991: {
                            gap: '1.5em',
                        },
                        767: {
                            fixedWidth: false,
                            perPage: 1.5,
                            gap: '1em',
                            autoScroll: {
                                speed: -1,
                            },

 }}})}}