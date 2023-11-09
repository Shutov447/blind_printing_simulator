import checkTextValidation from './check_text_validation.js';
import textRandomizer from './text_randomizer.js';
import { autoFocusTypingArea } from './focus_typing_area.js';

let resJson;

async function textRequest(screen) {
  if (!resJson) {
    let res = await fetch(
      'http://5.35.13.205/public/JSON/texts_for_typing.json',
      {
        // headers: {
        //   'Access-Control-Allow-Origin': 'blindprintingsimulator.ru',
        //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        //   'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        // },
        method: 'GET',
      }
    );
    resJson = await res.json();
  }

  if (screen) screen.remove();
  checkTextValidation(textRandomizer(resJson));
  autoFocusTypingArea();
}

export default textRequest;
