import getJson from './jsonLoader';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { setEntries } from './state';

(async function() {
  initializeIcons();
  try {
    const logEntries = await getJson();
    setEntries(logEntries);
  } catch (error) {
    const root = document.getElementById("root");
    if (root !== null) {
      root.innerText = `Could not load log file: ${error.message}`;
    }
  }
}());
