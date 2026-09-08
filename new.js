let currentPage = 0;

const pages = document.querySelectorAll(".page");

function showPage(index) {

    pages.forEach((page, i) => {

        page.classList.toggle(
            "active",
            i === index
        );

    });
}


function nextPage() {

    if (currentPage < pages.length - 1) {

        currentPage++;

        showPage(currentPage);

    }
}


function previousPage() {

    if (currentPage > 0) {

        currentPage--;

        showPage(currentPage);

    }
}


/* =========================
   NO BUTTON ESCAPE
========================= */

const noButton =
    document.getElementById("noButton");


function moveNoButton() {

    const width =
        noButton.offsetWidth;

    const height =
        noButton.offsetHeight;

    const padding = 20;

    const maxX =
        window.innerWidth -
        width -
        padding;

    const maxY =
        window.innerHeight -
        height -
        padding;

    const x =
        padding +
        Math.random() *
        Math.max(1, maxX - padding);

    const y =
        padding +
        Math.random() *
        Math.max(1, maxY - padding);

    const rotation =
        Math.random() * 30 - 15;

    noButton.style.left =
        `${x}px`;

    noButton.style.top =
        `${y}px`;

    noButton.style.transform =
        `rotate(${rotation}deg)`;
}


/* Laptop */

noButton.addEventListener(
    "mouseenter",
    moveNoButton
);

noButton.addEventListener(
    "mouseover",
    moveNoButton
);

noButton.addEventListener(
    "mousemove",
    moveNoButton
);


/* Phone */

noButton.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();

    },
    {
        passive: false
    }
);


/* Just in case */

noButton.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        moveNoButton();

    }
);


/* Initial position */

window.addEventListener(
    "load",
    function() {

        setTimeout(
            moveNoButton,
            500
        );

    }
);


/* Resize */

window.addEventListener(
    "resize",
    moveNoButton
);


/* =========================
   YES BUTTON
========================= */

function forgiveMe() {

    const popup =
        document.getElementById("popup");

    popup.classList.add("show");

    createHearts();

}


/* =========================
   HEART EXPLOSION
========================= */

function createHearts() {

    const hearts = [
        "❤️",
        "💜",
        "💗",
        "💕",
        "💖",
        "🫶🏻"
    ];

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];

        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.fontSize =
            `${20 + Math.random() * 25}px`;

        heart.style.zIndex =
            "2000";

        heart.style.pointerEvents =
            "none";

        const x =
            (Math.random() - 0.5) *
            window.innerWidth;

        const y =
            (Math.random() - 0.5) *
            window.innerHeight;

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px, ${y}px) scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    1500 +
                    Math.random() * 1000,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }
        );

        document.body.appendChild(
            heart
        );

        setTimeout(
            () => heart.remove(),
            2600
        );
    }
}


/* =========================
   SWIPE FOR PHONE
========================= */

let touchStartX = 0;

document.addEventListener(
    "touchstart",
    function(event) {

        touchStartX =
            event.touches[0].clientX;

    }
);


document.addEventListener(
    "touchend",
    function(event) {

        const touchEndX =
            event.changedTouches[0].clientX;

        const difference =
            touchStartX -
            touchEndX;

        if (Math.abs(difference) < 60)
            return;

        if (difference > 0) {

            nextPage();

        } else {

            previousPage();

        }

    }
);


/* Keyboard */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "ArrowRight") {
            nextPage();
        }

        if (event.key === "ArrowLeft") {
            previousPage();
        }

    }
);