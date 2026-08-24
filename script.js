document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "Rocket One v3 loaded successfully."
        );


        // =====================================================
        // ELEMENT REFERENCES
        // =====================================================

        const mobileMenuButton =
            document.getElementById(
                "mobile-menu-button"
            );


        const navLinks =
            document.getElementById(
                "nav-links"
            );


        const galleryImage =
            document.getElementById(
                "gallery-image"
            );


        const galleryLabel =
            document.getElementById(
                "gallery-label"
            );


        const galleryTitle =
            document.getElementById(
                "gallery-title"
            );


        const galleryDescription =
            document.getElementById(
                "gallery-description"
            );


        const galleryThumbnails =
            document.querySelectorAll(
                ".gallery-thumb"
            );


        const benchmarkButton =
            document.getElementById(
                "benchmark-button"
            );


        const benchmarkResult =
            document.getElementById(
                "benchmark-result"
            );


        const cpuMeter =
            document.getElementById(
                "cpu-meter"
            );


        const memoryOptions =
            document.getElementById(
                "memory-options"
            );


        const storageOptions =
            document.getElementById(
                "storage-options"
            );


        const configurationSummary =
            document.getElementById(
                "configuration-summary"
            );


        const totalPrice =
            document.getElementById(
                "total-price"
            );


        const buyButton =
            document.getElementById(
                "buy-button"
            );


        const toast =
            document.getElementById(
                "toast"
            );


        const tourButton =
            document.getElementById(
                "tour-button"
            );


        const productModal =
            document.getElementById(
                "product-modal"
            );


        const modalClose =
            document.getElementById(
                "modal-close"
            );


        const modalBackdrop =
            document.querySelector(
                ".modal-backdrop"
            );


        const modalConfigure =
            document.getElementById(
                "modal-configure"
            );


        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );


        const counters =
            document.querySelectorAll(
                ".counter"
            );


        // =====================================================
        // MOBILE MENU
        // =====================================================

        mobileMenuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    navLinks
                        .classList
                        .toggle(
                            "open"
                        );


                mobileMenuButton
                    .setAttribute(
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


                            mobileMenuButton
                                .setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                        }
                    );

                }
            );


        // =====================================================
        // PRODUCT IMAGE GALLERY
        // =====================================================

        galleryThumbnails.forEach(
            (thumbnail) => {

                thumbnail.addEventListener(
                    "click",
                    () => {

                        galleryThumbnails
                            .forEach(
                                (item) => {

                                    item
                                        .classList
                                        .remove(
                                            "active"
                                        );

                                }
                            );


                        thumbnail
                            .classList
                            .add(
                                "active"
                            );


                        galleryImage.style.opacity =
                            "0";


                        setTimeout(
                            () => {

                                galleryImage.src =
                                    thumbnail.dataset.image;


                                galleryLabel.textContent =
                                    thumbnail.dataset.label;


                                galleryTitle.textContent =
                                    thumbnail.dataset.title;


                                galleryDescription.textContent =
                                    thumbnail.dataset.description;


                                galleryImage.style.opacity =
                                    "1";

                            },
                            180
                        );

                    }
                );

            }
        );


        // =====================================================
        // PERFORMANCE COUNTERS
        // =====================================================

        let countersAnimated =
            false;


        function animateCounters() {

            if (
                countersAnimated
            ) {
                return;
            }


            countersAnimated =
                true;


            counters.forEach(
                (counter) => {

                    const target =
                        Number(
                            counter.dataset.target
                        );


                    const decimals =
                        Number(
                            counter.dataset.decimals ||
                            0
                        );


                    const duration =
                        1300;


                    const startTime =
                        performance.now();


                    function updateCounter(
                        currentTime
                    ) {

                        const elapsed =
                            currentTime -
                            startTime;


                        const progress =
                            Math.min(
                                elapsed /
                                duration,
                                1
                            );


                        const eased =
                            1 -
                            Math.pow(
                                1 - progress,
                                3
                            );


                        const value =
                            target *
                            eased;


                        counter.textContent =
                            value.toFixed(
                                decimals
                            );


                        if (
                            progress < 1
                        ) {

                            requestAnimationFrame(
                                updateCounter
                            );

                        }

                    }


                    requestAnimationFrame(
                        updateCounter
                    );

                }
            );

        }


        // =====================================================
        // BENCHMARK DEMO
        // =====================================================

        let benchmarkRunning =
            false;


        benchmarkButton.addEventListener(
            "click",
            () => {

                if (
                    benchmarkRunning
                ) {
                    return;
                }


                benchmarkRunning =
                    true;


                benchmarkButton.disabled =
                    true;


                benchmarkButton.textContent =
                    "Testing system...";


                benchmarkResult.textContent =
                    "Initializing Rocket One performance test...";


                cpuMeter.style.width =
                    "42%";


                setTimeout(
                    () => {

                        benchmarkResult.textContent =
                            "Testing sustained multi-core workload...";


                        cpuMeter.style.width =
                            "73%";

                    },
                    650
                );


                setTimeout(
                    () => {

                        benchmarkResult.textContent =
                            "Testing memory and NVMe throughput...";


                        cpuMeter.style.width =
                            "91%";

                    },
                    1350
                );


                setTimeout(
                    () => {

                        benchmarkResult.textContent =
                            "Performance test complete · Rocket One operating at full capability.";


                        cpuMeter.style.width =
                            "100%";


                        benchmarkButton.textContent =
                            "Test complete";


                        showToast(
                            "Rocket One benchmark complete."
                        );


                        setTimeout(
                            () => {

                                benchmarkButton.disabled =
                                    false;


                                benchmarkButton.textContent =
                                    "Run performance demo";


                                cpuMeter.style.width =
                                    "88%";


                                benchmarkRunning =
                                    false;

                            },
                            2500
                        );

                    },
                    2200
                );

            }
        );


        // =====================================================
        // CONFIGURATOR STATE
        // =====================================================

        const configuration = {
            basePrice: 899,

            memory: {
                name: "32 GB",
                price: 0
            },

            storage: {
                name: "1 TB",
                price: 0
            }
        };


        function updateConfiguration() {

            const price =
                configuration.basePrice +
                configuration.memory.price +
                configuration.storage.price;


            configurationSummary.textContent =
                `${configuration.memory.name} · ${configuration.storage.name}`;


            totalPrice.textContent =
                price.toLocaleString();

        }


        function setupConfigGroup(
            container,
            type
        ) {

            container.addEventListener(
                "click",
                (event) => {

                    const option =
                        event.target.closest(
                            ".config-option"
                        );


                    if (
                        !option
                    ) {
                        return;
                    }


                    container
                        .querySelectorAll(
                            ".config-option"
                        )
                        .forEach(
                            (item) => {

                                item
                                    .classList
                                    .remove(
                                        "active"
                                    );

                            }
                        );


                    option
                        .classList
                        .add(
                            "active"
                        );


                    if (
                        type ===
                        "memory"
                    ) {

                        configuration.memory = {
                            name:
                                option.dataset.memory,

                            price:
                                Number(
                                    option.dataset.price
                                )
                        };

                    }


                    if (
                        type ===
                        "storage"
                    ) {

                        configuration.storage = {
                            name:
                                option.dataset.storage,

                            price:
                                Number(
                                    option.dataset.price
                                )
                        };

                    }


                    updateConfiguration();

                }
            );

        }


        setupConfigGroup(
            memoryOptions,
            "memory"
        );


        setupConfigGroup(
            storageOptions,
            "storage"
        );


        // =====================================================
        // BUY / RESERVE BUTTON
        // =====================================================

        buyButton.addEventListener(
            "click",
            () => {

                const currentPrice =
                    configuration.basePrice +
                    configuration.memory.price +
                    configuration.storage.price;


                showToast(
                    `Rocket One · ${configuration.memory.name} · ${configuration.storage.name} · $${currentPrice.toLocaleString()} selected.`
                );

            }
        );


        // =====================================================
        // SPECIFICATION ACCORDION
        // =====================================================

        const specButtons =
            document.querySelectorAll(
                ".spec-button"
            );


        specButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const row =
                            button.closest(
                                ".spec-row"
                            );


                        const detail =
                            row.querySelector(
                                ".spec-detail"
                            );


                        const symbol =
                            button.querySelector(
                                "b"
                            );


                        const isOpen =
                            row.classList.contains(
                                "open"
                            );


                        if (
                            isOpen
                        ) {

                            row
                                .classList
                                .remove(
                                    "open"
                                );


                            detail.style.maxHeight =
                                null;


                            button
                                .setAttribute(
                                    "aria-expanded",
                                    "false"
                                );


                            symbol.textContent =
                                "+";

                        } else {

                            row
                                .classList
                                .add(
                                    "open"
                                );


                            detail.style.maxHeight =
                                `${detail.scrollHeight}px`;


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


        // =====================================================
        // FAQ ACCORDION
        // =====================================================

        const faqButtons =
            document.querySelectorAll(
                ".faq-question"
            );


        faqButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const item =
                            button.closest(
                                ".faq-item"
                            );


                        const answer =
                            item.querySelector(
                                ".faq-answer"
                            );


                        const icon =
                            button.querySelector(
                                "b"
                            );


                        const isOpen =
                            item.classList.contains(
                                "open"
                            );


                        document
                            .querySelectorAll(
                                ".faq-item"
                            )
                            .forEach(
                                (faqItem) => {

                                    faqItem
                                        .classList
                                        .remove(
                                            "open"
                                        );


                                    faqItem
                                        .querySelector(
                                            ".faq-answer"
                                        )
                                        .style
                                        .maxHeight =
                                        null;


                                    faqItem
                                        .querySelector(
                                            ".faq-question"
                                        )
                                        .setAttribute(
                                            "aria-expanded",
                                            "false"
                                        );


                                    faqItem
                                        .querySelector(
                                            ".faq-question b"
                                        )
                                        .textContent =
                                        "+";

                                }
                            );


                        if (
                            !isOpen
                        ) {

                            item
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


                            icon.textContent =
                                "−";

                        }

                    }
                );

            }
        );


        // =====================================================
        // PRODUCT TOUR MODAL
        // =====================================================

        function openModal() {

            productModal
                .classList
                .add(
                    "open"
                );


            productModal
                .setAttribute(
                    "aria-hidden",
                    "false"
                );


            document.body
                .classList
                .add(
                    "modal-open"
                );

        }


        function closeModal() {

            productModal
                .classList
                .remove(
                    "open"
                );


            productModal
                .setAttribute(
                    "aria-hidden",
                    "true"
                );


            document.body
                .classList
                .remove(
                    "modal-open"
                );

        }


        tourButton.addEventListener(
            "click",
            openModal
        );


        modalClose.addEventListener(
            "click",
            closeModal
        );


        modalBackdrop.addEventListener(
            "click",
            closeModal
        );


        modalConfigure.addEventListener(
            "click",
            closeModal
        );


        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key ===
                    "Escape" &&
                    productModal
                        .classList
                        .contains(
                            "open"
                        )
                ) {

                    closeModal();

                }

            }
        );


        // =====================================================
        // TOAST
        // =====================================================

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
                    2500
                );

        }


        // =====================================================
        // SCROLL REVEALS
        // =====================================================

        if (
            "IntersectionObserver"
            in window
        ) {

            const revealObserver =
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


                                    revealObserver
                                        .unobserve(
                                            entry.target
                                        );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.12
                    }
                );


            revealElements.forEach(
                (element) => {

                    revealObserver.observe(
                        element
                    );

                }
            );


            const performanceSection =
                document.querySelector(
                    ".performance-dashboard"
                );


            const counterObserver =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    animateCounters();


                                    counterObserver
                                        .disconnect();

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.25
                    }
                );


            if (
                performanceSection
            ) {

                counterObserver.observe(
                    performanceSection
                );

            }

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


            animateCounters();

        }


        // =====================================================
        // INITIAL STATE
        // =====================================================

        updateConfiguration();


        console.log(
            "Rocket One initialization complete."
        );

    }
);
