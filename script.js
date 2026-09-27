document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
            });
        });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

const admissionForm = document.getElementById('admissionForm');

if (admissionForm) {
    admissionForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const pupilName = document.getElementById('pupilName')?.value.trim();
        const parentName = document.getElementById('parentName')?.value.trim();
        const phone = document.getElementById('phone')?.value.trim();
        const nationality = document.getElementById('nationality')?.value.trim();
        const pupilClass = document.getElementById('class')?.value;
        const formMessage = document.getElementById('formMessage');

        if (!formMessage) return;

        if (!pupilName) {
            formMessage.textContent = "Please enter the pupil's full name.";
            formMessage.className = 'form-message error';
            return;
        }

        if (!parentName) {
            formMessage.textContent = "Please enter the parent or guardian's name.";
            formMessage.className = 'form-message error';
            return;
        }

        if (!nationality) {
            formMessage.textContent = 'Please enter or select the nationality.';
            formMessage.className = 'form-message error';
            return;
        }

        if (!pupilClass) {
            formMessage.textContent = 'Please select the class.';
            formMessage.className = 'form-message error';
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            formMessage.textContent = 'Please enter a valid 10-digit telephone number.';
            formMessage.className = 'form-message error';
            return;
        }

        formMessage.textContent = `Thank you, ${parentName}! The admission form for ${pupilName} (${pupilClass}) has been submitted successfully.`;
        formMessage.className = 'form-message success';
        admissionForm.reset();
    });
}
