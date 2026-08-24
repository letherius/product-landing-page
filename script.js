document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "Rocket Product v2 loaded."
        );


        // ==================================================
        // ELEMENTS
        // ==================================================

        const menuToggle =
            document.getElementById(
                "menu-toggle"
            );


        const navLinks =
            document.getElementById(
                "nav-links"
            );


        const launchDemo =
            document.getElementById(
                "launch-demo"
            );


        const momentumValue =
            document.getElementById(
                "momentum-value"
            );


        const momentumBar =
            document.getElementById(
                "momentum-bar"
            );


        const focusScore =
            document.getElementById(
                "focus-score"
            );


        const automationCount =
            document.getElementById(
                "automation-count"
            );


        const demoStatus =
            document.getElementById(
                "demo-status"
            );


        const monthlyToggle =
            document.getElementById(
                "monthly-toggle"
            );


        const annualToggle =
            document.getElementById(
                "annual-toggle"
            );


        const priceValues =
            document.querySelectorAll(
                ".price-value"
            );


        const faqButtons =
            document.querySelectorAll(
                ".faq-question"
            );


        const planButtons =
            document.querySelectorAll(
                ".plan-button"
            );


        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );


        const toast =
            document.getElementById(
                "toast"
            );


        // ==================================================
        // MOBILE NAVIGATION
        // ==================================================

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    navLinks.classList.toggle(
                        "open"
                    );


                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );


        navLinks
            .querySelectorAll("a")
            .forEach(
                (link) => {

                    link.addEventListener(
                        "click",
                        () => {

                            navLinks
                                .classList
                                .remove(
                                    "open"
                                );


                            menuToggle
                                .setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                        }
                    );

                }
            );


        // ==================================================
        // LIVE HERO DEMO
        // ==================================================

        let demoRunning =
            false;


        launchDemo.addEventListener(
            "click",
            () => {

                if (demoRunning) {
                    return;
                }


                demoRunning =
                    true;


                launchDemo.disabled =
                    true;


                launchDemo.innerHTML =
                    `
                        <span class="play-icon">
                            •
                        </span>
                        Launching...
                    `;


                demoStatus.textContent =
                    "Initializing automation sequence...";


                momentumBar.style.width =
                    "82%";


                momentumValue.textContent =
                    "82%";


                setTimeout(
                    () => {

                        demoStatus.textContent =
                            "Analyzing priority queue...";

                        focusScore.textContent =
                            "96";

                        momentumBar.style.width =
                            "89%";

                        momentumValue.textContent =
                            "89%";

                    },
                    700
                );


                setTimeout(
                    () => {

                        demoStatus.textContent =
                            "Automating routine tasks...";

                        automationCount.textContent =
                            "27";

                        momentumBar.style.width =
                            "96%";

                        momentumValue.textContent =
                            "96%";

                    },
                    1450
                );


                setTimeout(
                    () => {

                        demoStatus.textContent =
                            "Launch complete. Workflow operating at full momentum.";

                        momentumBar.style.width =
                            "100%";

                        momentumValue.textContent =
                            "100%";

                        focusScore.textContent =
                            "98";

                        automationCount.textContent =
                            "31";


                        launchDemo.innerHTML =
                            `
                                <span class="play-icon">
                                    ✓
                                </span>
                                Demo Complete
                            `;


                        showToast(
                            "Rocket launch sequence complete."
                        );


                        setTimeout(
                            () => {

                                launchDemo.disabled =
                                    false;


                                launchDemo.innerHTML =
                                    `
                                        <span class="play-icon">
                                            ▶
                                        </span>
                                        Run Live Demo
                                    `;


                                demoRunning =
                                    false;

                            },
                            2500
                        );

                    },
                    2300
                );

            }
        );


        // ==================================================
        // PRICING TOGGLE
        // ==================================================

        function updatePricing(
            billing
        ) {

            priceValues.forEach(
                (price) => {

                    price.textContent =
                        price.dataset[
                            billing
                        ];

                }
            );


            monthlyToggle
                .classList
                .toggle(
                    "active",
                    billing ===
                    "monthly"
                );


            annualToggle
                .classList
                .toggle(
                    "active",
                    billing ===
                    "annual"
                );

        }


        monthlyToggle.addEventListener(
            "click",
            () => {

                updatePricing(
                    "monthly"
                );

            }
        );


        annualToggle.addEventListener(
            "click",
            () => {

                updatePricing(
                    "annual"
                );

            }
        );


        // ==================================================
        // FAQ ACCORDION
        // ==================================================

        faqButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const faqItem =
                            button.closest(
                                ".faq-item"
                            );


                        const answer =
                            faqItem.querySelector(
                                ".faq-answer"
                            );


                        const symbol =
                            button.querySelector(
                                "b"
                            );


                        const isOpen =
                            faqItem.classList.contains(
                                "open"
                            );


                        document
                            .querySelectorAll(
                                ".faq-item"
                            )
                            .forEach(
                                (item) => {

                                    item
                                        .classList
                                        .remove(
                                            "open"
                                        );


                                    item
                                        .querySelector(
                                            ".faq-answer"
                                        )
                                        .style
                                        .maxHeight =
                                        null;


                                    item
                                        .querySelector(
                                            ".faq-question"
                                        )
                                        .setAttribute(
                                            "aria-expanded",
                                            "false"
                                        );


                                    item
                                        .querySelector(
                                            ".faq-question b"
                                        )
                                        .textContent =
                                        "+";

                                }
                            );


                        if (!isOpen) {

                            faqItem
                                .classList
                                .add(
                                    "open"
                                );


                            answer.style.maxHeight =
                                `${answer.scrollHeight}px`;


                            button
                                .setAttribute(
                                    "aria-expanded",
                                    "true"
                                );


                            symbol.textContent =
                                "−";

                        }

                    }
                );

            }
        );


        // ==================================================
        // PRICING BUTTONS
        // ==================================================

        planButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const plan =
                            button
                                .closest(
                                    ".pricing-card"
                                )
                                .querySelector(
                                    ".plan-name"
                                )
                                .textContent
                                .trim();


                        if (
                            plan ===
                            "Scale"
                        ) {

                            showToast(
                                "Sales request started for Rocket Scale."
                            );

                        } else {

                            showToast(
                                `${plan} selected. Your launch is ready.`
                            );

                        }

                    }
                );

            }
        );


        // ==================================================
        // SCROLL REVEAL
        // ==================================================

        if (
            "IntersectionObserver"
            in window
        ) {

            const observer =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target
                                        .classList
                                        .add(
                                            "visible"
                                        );


                                    observer
                                        .unobserve(
                                            entry.target
                                        );

                                }

                            }
                        );

                    },
                    {
                        threshold:
                            0.12
                    }
                );


            revealElements.forEach(
                (element) => {

                    observer.observe(
                        element
                    );

                }
            );

        } else {

            revealElements.forEach(
                (element) => {

                    element
                        .classList
                        .add(
                            "visible"
                        );

                }
            );

        }


        // ==================================================
        // TOAST
        // ==================================================

        let toastTimer;


        function showToast(
            message
        ) {

            clearTimeout(
                toastTimer
            );


            toast.textContent =
                message;


            toast
                .classList
                .add(
                    "show"
                );


            toastTimer =
                setTimeout(
                    () => {

                        toast
                            .classList
                            .remove(
                                "show"
                            );

                    },
                    2400
                );

        }

    }
);
