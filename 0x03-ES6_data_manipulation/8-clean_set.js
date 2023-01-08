export default function cleanset(set, startString) {
  let text = '';
  const array = [];

  if (startString && typeof startString === 'string') {
    for (const elem of set) {
      if (startString && elem.startsWith(startString)) {
        const word = elem.slice(startString.length);
        array.push(word);
      }
    }
    text = array.join('-');
  }

  return text;
}
