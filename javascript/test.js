// export default function logText(text){
//   console.log(text);
// }
import { convertCtoF as cCF } from './convertJS.js';

function logText(temp){
  console.log(cCF(temp));
}

//export { logText }; 
export default logText;  // of no curley braces need to use default and no curleys on import