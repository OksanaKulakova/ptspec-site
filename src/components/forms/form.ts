class AstroForm extends HTMLElement {
  constructor() {
    super();

    const form: HTMLFormElement | null = this.querySelector(".form");
    const btn: HTMLElement | null = this.querySelector(".form-submit");

    const requiredInputs: NodeListOf<HTMLInputElement> = form.querySelectorAll("input[required]");

    const checkInput = (input: HTMLInputElement): void => {
      if (input.value && input.value.length) {
        input.classList.remove("input--invalid");
      } else {
        input.classList.add("input--invalid");
      }
    };

    requiredInputs.forEach((input: HTMLInputElement) => {
      input.addEventListener("input", () => {
        checkInput(input);
      });
    });
    
    const checkForm = (): number => {
      requiredInputs.forEach((input: HTMLInputElement) => {
        checkInput(input);
      });

      const errorInputs: NodeListOf<HTMLInputElement> = form.querySelectorAll(".input--invalid");
      
      return errorInputs.length;
    };

    function sendData() {
      const XHR = new XMLHttpRequest();
      const data = new FormData(form);
    
      // form.classList.add('callback__form--preloader');
      // XHR.open('POST', url);
      // XHR.send(data);
      // XHR.onload = function () {
      //   if (XHR.status != 200) {
      //     console.log(`Ошибка ${XHR.status}: ${XHR.statusText}`);
      //     form.classList.add('callback__form--error');
      //   } else {
      //     console.log(`Готово, получили ${XHR.response}`);
      //     form.classList.add('callback__form--succes');
      //   }
      //   form.classList.remove('callback__form--preloader');
      // };
    }
    
    btn.addEventListener("click", function (event: Event) {
      event.preventDefault();
    
      const errorCount = checkForm();

      if (!errorCount) {
        sendData();
      }
    });
  }
}

customElements.define("astro-form", AstroForm);
