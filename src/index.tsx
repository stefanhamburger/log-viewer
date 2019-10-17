import render from "./render";
import getJson from './jsonLoader';
import { setState } from './state';

(async function() {
  const logEntries = await getJson();
  setState(logEntries);
  render();
}());
