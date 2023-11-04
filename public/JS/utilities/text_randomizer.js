let previousTextId = -1;

export default function textRandomizer(json) {
  let textId = Math.floor(Math.random() * json.length);
  
  while (textId == previousTextId) {
    textId = Math.floor(Math.random() * json.length);
  }
  
  previousTextId = textId;

  console.log(`id: ${json[textId].id}, text: ${json[textId].text}`);

  return json[textId].text;
}