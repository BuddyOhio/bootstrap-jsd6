// ==================== FORM SUBMIT SECTION =======================
const formSubmit = () => {
  "use strict";

  const form = document.querySelector(".needs-validation");

  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
};

formSubmit();

//===================== ALERT SECTION ============================
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    const inputFirstName = document.getElementById("first-name").value;
    const inputLastName = document.getElementById("last-name").value;
    const inputEmail = document.getElementById("input-email").value;
    const inputPass = document.getElementById("input-pass").value;

    // Email Pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Reduce Pattern for Bootstrap5
    const emailRegex = /^[^\s@]+@[^\s@]+$/;

    // Use test() method for check the email input matches the pattern.
    const emailValid = emailRegex.test(inputEmail);

    const allInput =
      inputFirstName === "" && inputLastName === "" && inputPass === "";

    if (!allInput && emailValid) {
      appendAlert(
        `Nice, ${inputFirstName} ${inputLastName} submitted this form success!`,
        "success"
      );
    }
  });
}
