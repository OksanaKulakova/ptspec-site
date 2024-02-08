import sendData from "./send";

class AstroForm extends HTMLElement {
  constructor() {
    super();

    const form: HTMLFormElement | null = this.querySelector(".form");
    const btn: HTMLElement | null = this.querySelector(".form-submit");

    const requiredInputs: NodeListOf<HTMLInputElement> =
      form.querySelectorAll("input[required], textarea[required]");

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

      const errorInputs: NodeListOf<HTMLInputElement> =
        form.querySelectorAll(".input--invalid");

      return errorInputs.length;
    };

    btn.addEventListener("click", (event: Event) => {
      event.preventDefault();

      const errorCount: number = checkForm();

      if (!errorCount) {
        const data: FormData = new FormData(form);
        const url: string = form.action;
        const textSucсess: string = form.dataset.textSucсess;
        sendData(data, url, textSucсess);
        form.reset();
      }
    });
  }
}

customElements.define("astro-form", AstroForm);
