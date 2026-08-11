

    alert("Thank you for visiting our school website!");




function toggleMenu() {

    const menu = document.getElementById("main-menu");

    menu.classList.toggle("show");

}

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {

    admissionForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const pupilName =
            document.getElementById("pupilName").value.trim();

        const parentName =
            document.getElementById("parentName").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const nationality =
            document.getElementById("nationality").value.trim();

        const pupilClass =
            document.getElementById("class").value;

        const formMessage =
            document.getElementById("formMessage");


        /* Check pupil's name */

        if (pupilName === "") {

            formMessage.textContent =
                "Please enter the pupil's full name.";

            return;
        }


        /* Check parent/guardian name */

        if (parentName === "") {

            formMessage.textContent =
                "Please enter the parent or guardian's name.";

            return;
        }


        /* Check nationality */

        if (nationality === "") {

            formMessage.textContent =
                "Please enter or select the nationality.";

            return;
        }


        /* Check class */

        if (pupilClass === "") {

            formMessage.textContent =
                "Please select the class.";

            return;
        }


        /* Check telephone number */

        if (!/^[0-9]{10}$/.test(phone)) {

            formMessage.textContent =
                "Please enter a valid 10-digit telephone number.";

            return;
        }


        /* Everything is correct */

        formMessage.textContent =
    "Thank you, " + parentName +
    ". The admission form for " + pupilName +
    " (" + pupilClass +
    ") has been completed successfully.";


        admissionForm.reset();

    });

}
