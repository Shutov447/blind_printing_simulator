let previousTextId = -1;

export default function textRandomizer(json) {
  let textId = Math.floor(Math.random() * json.length);

  // console.log('id до изменений: ' + previousTextId);
  
  while (textId == previousTextId) {
    // console.log('id повторилось: ' + previousTextId);
    textId = Math.floor(Math.random() * json.length);
  }
  
  previousTextId = textId;
  
  // console.log('id после изменений: ' + previousTextId);
  console.log(`id: ${json[textId].id}, text: ${json[textId].text}`);

  return json[textId].text;
}