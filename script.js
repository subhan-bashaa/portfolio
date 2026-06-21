// ======================================
// LOADER
// ======================================

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }, 1000);

});

// ======================================
// TYPING ANIMATION
// ======================================

const typingText =
    document.getElementById("typing");

const words = [
    "AI/ML Enthusiast",
    "Full Stack Developer",
    "Computer Science Student",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord =
        words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex ===
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}

typeEffect();

// ======================================
// SCROLL PROGRESS BAR
// ======================================

window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            (scrollTop / scrollHeight) * 100;

        document.getElementById(
            "progress-bar"
        ).style.width =
            progress + "%";

    }
);

// ======================================
// REVEAL ANIMATION
// ======================================

const revealElements = document.querySelectorAll(
    ".reveal, .stat-box, .skill-card, .project-card, .certificate-card"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("active", "show");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.2,
            rootMargin: "0px 0px -10% 0px"
        }
    );

    revealElements.forEach((element, index) => {

        element.style.setProperty(
            "--reveal-delay",
            `${index * 90}ms`
        );

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("active", "show");

    });

}

// ======================================
// ACTIVE NAVBAR
// ======================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(
            (section) => {

                const sectionTop =
                    section.offsetTop - 200;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );

        navLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);

// ======================================
// MOBILE MENU
// ======================================

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {

    menuIcon.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

        });

    });

}

// ======================================
// CERTIFICATE MODAL
// ======================================

const modal =
    document.getElementById(
        "certificateModal"
    );

const certificateFrame =
    document.getElementById(
        "certificateFrame"
    );

const closeBtn =
    document.querySelector(
        ".close-btn"
    );

function openCertificate(file) {

    if (!modal) return;

    modal.style.display =
        "block";

    certificateFrame.src =
        file;

}

function closeModal() {

    modal.style.display =
        "none";

    certificateFrame.src = "";

}

if (closeBtn) {

    closeBtn.addEventListener(
        "click",
        closeModal
    );

}

window.addEventListener(
    "click",
    (e) => {

        if (
            e.target === modal
        ) {

            closeModal();

        }

    }
);

document.addEventListener(
    "keydown",
    (e) => {

        if (
            e.key === "Escape"
        ) {

            closeModal();

        }

    }
);

// ======================================
// BACK TO TOP BUTTON
// ======================================

const topBtn =
    document.getElementById(
        "topBtn"
    );

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 400
        ) {

            topBtn.style.display =
                "block";

        } else {

            topBtn.style.display =
                "none";

        }

    }
);

topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior:
                "smooth"

        });

    }
);

// ======================================
// HEADER SHADOW
// ======================================

const header =
    document.querySelector(".header");

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 50
        ) {

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);

// ======================================
// SCROLL DOWN BUTTON
// ======================================

const scrollDown =
    document.querySelector(
        ".scroll-down a"
    );

if (scrollDown) {

    scrollDown.addEventListener(
        "click",
        (e) => {

            e.preventDefault();

            document
                .querySelector(
                    "#about"
                )
                .scrollIntoView({

                    behavior:
                        "smooth"

                });

        }
    );

}

// ======================================
// CURRENT YEAR
// ======================================

const yearElement =
    document.getElementById(
        "year"
    );

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}
// ======================================
// CONSOLE MESSAGE
// ======================================

console.log(`
🚀 Portfolio Loaded Successfully

Developer:
Shaik Subhan Basha

GitHub:
https://github.com/subhan-bashaa

LinkedIn:
https://www.linkedin.com/in/subhanbashaa
`);
