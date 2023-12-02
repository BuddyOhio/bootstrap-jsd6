// ==================== FORM SUBMIT SECTION =======================
const formSubmit = () => {
  "use strict";

  const form = document.querySelector(".needs-validation");

  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      const inputFirstName = document.getElementById("first-name").value;
      const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

      // if (!form.checkValidity()) {
      //   // event.preventDefault();
      //   // event.stopPropagation();
      // } else {
      //   // event.preventDefault();
      //   // event.stopPropagation();
      //   alertPlaceholder.innerHTML = [
      //     `<div class="alert alert-success alert-dismissible" role="alert">
      //        <div>Nice, ${inputFirstName} has submitted this form success!</div>
      //        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      //     </div>`,
      //   ];
      // }

      if (form.checkValidity()) {
        alertPlaceholder.innerHTML = [
          `<div class="alert alert-success alert-dismissible" role="alert">
             <div>Nice, ${inputFirstName} has submitted this form success!</div>
             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`,
        ];
      }

      form.classList.add("was-validated");
    },
    false
  );
};

formSubmit();
