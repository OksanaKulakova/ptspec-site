const preloader: HTMLElement | null = document.getElementById("preloader");

const showPreloader: () => void = () => {
  if (preloader) {
    preloader.style.display = "flex";
  }
}

const hidePreloader: () => void = () => {
  if (preloader) {
    preloader.style.display = "none";
  }
}

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
  const html: Document = parser.parseFromString(text, 'text/html');
  div.appendChild(html.body);
  body.appendChild(div);
}

export default async function sendData(formData: FormData, url: string, textSucсess: string = "Успешно отправлено"): Promise<void> {
  const data: object = Object.fromEntries(formData.entries());

  const json: string = JSON.stringify({data: data});

  showPreloader();

  const XHR: XMLHttpRequest = new XMLHttpRequest();

  XHR.open('POST', url);
  XHR.setRequestHeader("Authorization", `Bearer ${import.meta.env.PUBLIC_STRAPI_TOKEN}`);
  XHR.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  XHR.send(json);

  XHR.onload = function () {
    if (XHR.status != 200) {
      showTextModal(`Ошибка ${XHR.status}: ${XHR.statusText}`);
    } else {
      showTextModal(textSucсess);
    }

    hidePreloader();
  };
}