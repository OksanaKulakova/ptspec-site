import { getLangFromUrl} from "../../i18n/utils";

const lang = getLangFromUrl(new URL(window.location.href));

const preloader: HTMLElement | null = document.getElementById("preloader");

const showPreloader: () => void = () => {
  if (preloader) {
    preloader.style.display = "flex";
  }
};

const hidePreloader: () => void = () => {
  if (preloader) {
    preloader.style.display = "none";
  }
};

const showTextModal = (text: string): void => {
  const modal: HTMLElement | null = document.querySelector(".modal--open");
  const body: HTMLElement | null = modal.querySelector(".modal-body");
  const title: HTMLElement | null = modal.querySelector(".modal-title");
  const content: HTMLElement | null = modal.querySelector(".modal-content");
  title.style.display = "none";
  content.style.display = "none";

  const div: HTMLDivElement = document.createElement("div");
  div.className = "order-text";

  const parser: DOMParser = new DOMParser();
  const html: Document = parser.parseFromString(text, "text/html");
  div.appendChild(html.body);
  body.appendChild(div);
};

export default async function sendData(
  formData: FormData,
  url: string,
  textSucсess: string = "Успешно отправлено",
): Promise<void> {
  showPreloader();

  const data: object = Object.fromEntries(formData.entries());
  data['locale'] = lang;

  try {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ data: data }), 
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.PUBLIC_STRAPI_TOKEN}`,
      },
    })
      .then((response) => {
        hidePreloader();

        if (response.ok) {
          showTextModal(textSucсess);
        } else {
          showTextModal(`Ошибка ${response.status}: ${response.statusText}`);
        }
      });
  } catch (error) {
    hidePreloader();
    showTextModal(`Ошибка ${error}`);
  }
}
