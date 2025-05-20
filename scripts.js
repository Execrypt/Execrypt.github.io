document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const form = document.querySelector('#contact-form');

    // Ensure this logic only applies to the contact form modal
    if (modal && modal.id === 'contact-modal') {
        // Ensure modal is hidden on page load
        modal.classList.remove('show');

        // Show modal only after form submission
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission behavior
            // ...handle form submission logic (e.g., send email)...

            // Show the modal after successful submission
            modal.classList.add('show');
        });

        // Close modal on clicking the close button
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    }
});