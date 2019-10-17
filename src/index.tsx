import getJson from './jsonLoader';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { setEntries } from './state';

(async function() {
  initializeIcons();
  const logEntries = await getJson();
  setEntries(logEntries);
}());
