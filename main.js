import { getPersonName } from './api/swapi.js';

window.getLukeSkywalker = async () => {
  const luke = await getPersonName(1);
  const target = document.getElementById('fetchedData');
  target.innerText = JSON.stringify(luke, null, 2);
};
