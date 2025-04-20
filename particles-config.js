document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        tsParticles.load("tsparticles", {
            particles: {
                number: {
                    value: 50,
                },
                color: {
                    value: "#ffffff",
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    value: 0.5,
                },
                size: {
                    value: 3,
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    outMode: "out",
                },
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                },
                modes: {
                    repulse: {
                        distance: 100,
                    },
                    push: {
                        quantity: 4,
                    },
                },
            },
            background: {
                color: "#000000",
            },
        });
    }, 100); // Small delay to ensure DOM is fully ready
});
