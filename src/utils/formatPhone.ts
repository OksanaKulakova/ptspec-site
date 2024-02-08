const formatPhone = (str) => {
  let result = "";

  if (str) {
    let value = str.replace(/\D+/g, "");

    if (value.length > 10) {
      value = value.slice(1);
    }

    if (value[0] === "7" || value[0] === "8") {
      value = value.slice(1);
    }
    const numberLength = 10;

    result = "+7 (";
    [...value].slice(0, numberLength).forEach((char, index) => {
      switch (index) {
        case 3:
          result += ") ";
          break;
        case 6:
          result += "-";
          break;
        case 8:
          result += "-";
          break;
        default:
          break;
      }

      result += char;
    });
  }

  return result;
};

export default formatPhone;
