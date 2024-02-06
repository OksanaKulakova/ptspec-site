const replaceQuotes = (str, openingQuote = '"', closingQuote = '"') => {
  let insideQuotes = true;
  let result = '';
  if (str) {
    for (let i = 0; i < str.length; i += 1) {
      const char = str[i];
      if (char === openingQuote || char === closingQuote) {
        if (insideQuotes && (str[i - 1] === ' ' || i === 0)) {
          result += '«';
        } else if (insideQuotes) {
          insideQuotes = false;
          result += '»';
        } else if (!insideQuotes && i !== str.length - 1) {
          insideQuotes = true;
          result += '«';
        } else if (!insideQuotes && i === str.length - 1) {
          insideQuotes = false;
          result += '»';
        } else {
          result += char;
        }
      } else {
        result += char;
      }
    }
  }
  return result;
};

export default replaceQuotes;
