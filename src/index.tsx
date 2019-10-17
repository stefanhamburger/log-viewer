import render from "./render";
import getJson from './jsonLoader';
import { setState } from './state';

(async function() {
  render();

  const logEntries = await getJson();
  console.log(logEntries);
  setState(logEntries);
  render();
}());
