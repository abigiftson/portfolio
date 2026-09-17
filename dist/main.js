
        /* =========================================================
           GSAP
        ========================================================= */

        gsap.registerPlugin(ScrollTrigger);


        /* =========================================================
           LENIS
        ========================================================= */

        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: false,
            wheelMultiplier: 1,
            touchMultiplier: 1.5
        });


        lenis.on("scroll", ScrollTrigger.update);


        gsap.ticker.add((time) => {

            lenis.raf(time * 1000);

        });


        gsap.ticker.lagSmoothing(0);


        /* =========================================================
           LOADER
        ========================================================= */

        const loaderTimeline = gsap.timeline();


        loaderTimeline
            .to(".loader-line", {
                width: "100%",
                duration: 1.5,
                ease: "power2.inOut"
            })
            .to(".loader-name", {
                yPercent: -120,
                duration: .8,
                ease: "power4.inOut"
            })
            .to(".loader-text", {
                yPercent: -100,
                opacity: 0,
                duration: .5
            }, "<")
            .to(".loader", {
                yPercent: -100,
                duration: 1,
                ease: "power4.inOut"
            });


        /* =========================================================
           HERO ANIMATION
        ========================================================= */

        gsap.from(".hero-line-inner", {

            yPercent: 120,

            duration: 1.5,

            stagger: .15,

            ease: "power4.out",

            delay: 1.5

        });


        gsap.from(".hero-reveal", {

            opacity: 0,
            y: 30,

            duration: 1,

            stagger: .15,

            ease: "power3.out",

            delay: 1.8

        });


        /* =========================================================
           HERO IMAGE PARALLAX
        ========================================================= */

        gsap.to(".hero-image img", {

            yPercent: -15,

            ease: "none",

            scrollTrigger: {

                trigger: ".hero",

                start: "top top",

                end: "bottom top",

                scrub: true

            }

        });


        /* =========================================================
           HERO GRID PARALLAX
        ========================================================= */

        gsap.to(".hero-grid", {

            yPercent: 20,

            ease: "none",

            scrollTrigger: {

                trigger: ".hero",

                start: "top top",

                end: "bottom top",

                scrub: true

            }

        });


        /* =========================================================
           ROTATING SCROLL CIRCLE
        ========================================================= */

        gsap.to(".hero-scroll span", {

            rotation: 360,

            duration: 8,

            repeat: -1,

            ease: "none"

        });


        /* =========================================================
           INTRO TEXT
        ========================================================= */

        gsap.from(".intro-text", {

            y: 100,

            opacity: 0,

            duration: 1,

            scrollTrigger: {

                trigger: ".intro",

                start: "top 70%",

                toggleActions: "play none none reverse"

            }

        });


        /* =========================================================
           MARQUEE
        ========================================================= */

        const marquee = document.querySelector(".marquee");

        gsap.to(".marquee-inner", {

            xPercent: -100,

            duration: 18,

            repeat: -1,

            ease: "none"

        });


        /* =========================================================
           HORIZONTAL PROJECT SCROLL
        ========================================================= */

        const projectsSection =
            document.querySelector(".projects-section");

        const projectsTrack =
            document.querySelector(".projects-track");

        const projects =
            gsap.utils.toArray(".project");

        const progressBar =
            document.querySelector(".project-progress-bar");


        function getScrollAmount() {

            return projectsTrack.scrollWidth -
                window.innerWidth;

        }


        const horizontalTween = gsap.to(projectsTrack, {

            x: () => -getScrollAmount(),

            ease: "none",

            scrollTrigger: {

                trigger: projectsSection,

                start: "top top",

                end: () => "+=" + getScrollAmount(),

                pin: true,

                scrub: 1,

                invalidateOnRefresh: true,

                anticipatePin: 1,

                onUpdate: (self) => {

                    progressBar.style.width =
                        (self.progress * 100) + "%";

                }

            }

        });


        /* =========================================================
           PROJECT IMAGE SCALE
        ========================================================= */

        projects.forEach((project) => {

            const image =
                project.querySelector("img");


            gsap.fromTo(

                image,

                {
                    scale: 1.25
                },

                {
                    scale: 1,

                    ease: "none",

                    scrollTrigger: {

                        trigger: project,

                        containerAnimation:
                            horizontalTween,

                        start: "left right",

                        end: "right left",

                        scrub: true

                    }

                }

            );

        });


        /* =========================================================
           PROJECT IMAGE PARALLAX
        ========================================================= */

        projects.forEach((project) => {

            const image =
                project.querySelector("img");


            gsap.to(image, {

                xPercent: -8,

                ease: "none",

                scrollTrigger: {

                    trigger: project,

                    containerAnimation:
                        horizontalTween,

                    start: "left right",

                    end: "right left",

                    scrub: true

                }

            });

        });


        /* =========================================================
           SERVICES REVEAL
        ========================================================= */

        gsap.from(".service", {

            y: 80,

            opacity: 0,

            duration: 1,

            stagger: .12,

            scrollTrigger: {

                trigger: ".service-list",

                start: "top 80%"

            }

        });


        /* =========================================================
           ABOUT IMAGE PARALLAX
        ========================================================= */

        gsap.to(".about-image img", {

            yPercent: -15,

            ease: "none",

            scrollTrigger: {

                trigger: ".about-image",

                start: "top bottom",

                end: "bottom top",

                scrub: true

            }

        });


        /* =========================================================
           ABOUT TEXT
        ========================================================= */

        gsap.from(".about-text h2", {

            y: 100,

            opacity: 0,

            duration: 1,

            scrollTrigger: {

                trigger: ".about",

                start: "top 70%"

            }

        });


        /* =========================================================
           SKILLS MARQUEE
        ========================================================= */

        gsap.to(".skills-track", {

            xPercent: -30,

            ease: "none",

            scrollTrigger: {

                trigger: ".skills",

                start: "top bottom",

                end: "bottom top",

                scrub: true

            }

        });


        /* =========================================================
           CONTACT TITLE
        ========================================================= */

        gsap.from(".contact-title", {

            y: 120,

            opacity: 0,

            duration: 1.3,

            ease: "power4.out",

            scrollTrigger: {

                trigger: ".contact",

                start: "top 70%"

            }

        });


        /* =========================================================
           MAGNETIC BUTTON
        ========================================================= */

        const magneticButtons =
            document.querySelectorAll(".magnetic");


        magneticButtons.forEach(button => {

            button.addEventListener("mousemove", (e) => {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    e.clientX - rect.left - rect.width / 2;

                const y =
                    e.clientY - rect.top - rect.height / 2;


                gsap.to(button, {

                    x: x * .25,
                    y: y * .25,

                    duration: .4,

                    ease: "power3.out"

                });

            });


            button.addEventListener("mouseleave", () => {

                gsap.to(button, {

                    x: 0,
                    y: 0,

                    duration: .7,

                    ease: "elastic.out(1,.3)"

                });

            });

        });


        /* =========================================================
           CUSTOM CURSOR
        ========================================================= */

        const cursor =
            document.querySelector(".cursor");


        if (window.innerWidth > 900) {

            window.addEventListener("mousemove", (e) => {

                gsap.to(cursor, {

                    x: e.clientX,
                    y: e.clientY,

                    duration: .15,

                    ease: "power2.out"

                });

            });


            document
                .querySelectorAll("a, .service, .project")
                .forEach(element => {

                    element.addEventListener("mouseenter", () => {

                        cursor.classList.add("active");

                    });


                    element.addEventListener("mouseleave", () => {

                        cursor.classList.remove("active");

                    });

                });

        }


        /* =========================================================
           NAVIGATION SMOOTH LINKS
        ========================================================= */

        document
            .querySelectorAll('a[href^="#"]')
            .forEach(anchor => {

                anchor.addEventListener("click", function (e) {

                    const target =
                        document.querySelector(
                            this.getAttribute("href")
                        );

                    if (!target) return;

                    e.preventDefault();

                    lenis.scrollTo(target, {

                        offset: 0,

                        duration: 1.5

                    });

                });

            });


        /* =========================================================
           BACK TO TOP
        ========================================================= */

        const topButton =
            document.querySelector('footer a[href="#"]');


        topButton.addEventListener("click", (e) => {

            e.preventDefault();

            lenis.scrollTo(0, {

                duration: 1.5

            });

        });


        /* =========================================================
           REFRESH SCROLLTRIGGER AFTER IMAGES LOAD
        ========================================================= */

        window.addEventListener("load", () => {

            ScrollTrigger.refresh();

        });


        /* =========================================================
           RESIZE
        ========================================================= */

        let resizeTimer;

        window.addEventListener("resize", () => {

            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(() => {

                ScrollTrigger.refresh();

            }, 300);

        });
