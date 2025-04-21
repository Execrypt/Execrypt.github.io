document.addEventListener("DOMContentLoaded", () => {
    const typingEffect = document.querySelector(".typing-effect");

    if (typingEffect) {
        const text = typingEffect.textContent;
        typingEffect.textContent = "";
        let i = 0;

        function type() {
            if (i < text.length) {
                typingEffect.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100); // Adjust typing speed here
            }
        }

        type();
    } else {
        console.warn("Element with class 'typing-effect' not found.");
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Sticky header behavior
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Removed Learn More button interaction logic
    // Removed contact form submission logic

    // Simplify modal logic for a cleaner design
    const modal = document.getElementById("email-confirmation-modal");
    const closeBtn = document.querySelector(".close-btn");
    if (modal) {
        modal.style.display = "none"; // Hide modal initially
        modal.style.position = "fixed";
        modal.style.bottom = "20px";
        modal.style.right = "-400px";
        modal.style.width = "300px";
        modal.style.padding = "20px";
        modal.style.backgroundColor = "#fff"; // Use a clean white background
        modal.style.transition = "right 0.5s ease"; // Faster slide-in animation
        modal.style.borderRadius = "8px";
        modal.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"; // Stronger shadow for modern look
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.right = "-400px"; // Slide modal out
            setTimeout(() => {
                modal.style.display = "none";
            }, 500); // Match transition duration
        });
    }

    // Close modal when clicking outside of it
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.right = "-400px"; // Slide modal out of view
            setTimeout(() => {
                modal.style.display = "none"; // Hide modal after animation
                modal.classList.remove("show");
            }, 500); // Match the transition duration
        }
    });

    // Hover effects for project links
    const projectLinks = document.querySelectorAll("#projects a");
    projectLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.textDecoration = "underline";
        });
        link.addEventListener("mouseout", () => {
            link.style.textDecoration = "none";
        });
    });

    // Image tilt effect based on mouse position
    const typingEffectContainer = document.querySelector(".typing-effect-container");

    if (typingEffectContainer) {
        document.addEventListener("mousemove", (e) => {
            const { clientX, clientY, innerWidth, innerHeight } = e;
            const xRotation = ((clientY / innerHeight) - 0.5) * 10; // Tilt up/down
            const yRotation = ((clientX / innerWidth) - 0.5) * 10;  // Tilt left/right

            typingEffectContainer.style.transform = `translate(-50%, -50%) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });
    }

    // FAQ dropdown logic with smoother animations
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            faqItem.classList.toggle('open');
            const answer = faqItem.querySelector('.faq-answer');
            if (faqItem.classList.contains('open')) {
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expand
            } else {
                answer.style.maxHeight = "0"; // Collapse
            }
        });
    });

    // Remove dropdown-based FAQ logic
});
