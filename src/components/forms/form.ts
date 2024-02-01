class AstroForm extends HTMLElement {
  constructor() {
    super();

    const form: HTMLElement | null = this.querySelector(".form");
    const btn: HTMLElement | null = this.querySelector(".form-submit");

    const requiredInputs: NodeListOf<HTMLInputElement> = form.querySelectorAll("input[required]");

    const checkInput = (input: HTMLInputElement): void => {
      if (input.value) {
        input.classList.remove("input--invalid");
      } else {
        input.classList.add("input--invalid");
      }
    };
    
    const checkForm = (): void => {
      requiredInputs.forEach((input: HTMLInputElement) => {
        checkInput(input);
      });
    };
    
    requiredInputs.forEach((input: HTMLInputElement) => {
      input.addEventListener("input", () => {
        checkInput(input);
      });
    });
    
    btn.addEventListener("click", function (event: Event) {
      event.preventDefault();
    
      checkForm();
    });
  }
}

customElements.define("astro-form", AstroForm);
