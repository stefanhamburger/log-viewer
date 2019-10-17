import render from "./render";
import getJson from './jsonLoader';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { setState } from './state';

(async function() {
  initializeIcons();
  const logEntries = await getJson();
  setState(logEntries);
  render();
}());
