export default async function sendEmail(formData: FormData): Promise<void> {
  const url = "https://api.emailjs.com/api/v1.0/email/send";
  const data: object = Object.fromEntries(formData.entries());

  const json: string = JSON.stringify({
    "service_id": "service_kvwbcb6",
    "template_id": "template_94v0w9o",
    "user_id": "Fb0tAMX5KRLhhs1ZE",
    "accessToken": "t1U1KAkSD9oUz3b2zCkgH",
    "template_params": data
  });

  const XHR: XMLHttpRequest = new XMLHttpRequest();

  XHR.open("POST", url);

  XHR.setRequestHeader("Content-type", "application/json; charset=utf-8");

  XHR.send(json);

  XHR.onload = function () {
    if (XHR.status != 200) {
      console.log(`${XHR.status}: ${XHR.statusText}`);
    } else {
      console.log(`${XHR.status}`);
    }
  };
}