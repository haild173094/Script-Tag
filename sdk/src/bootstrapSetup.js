/*
 * Boostrap some initial required stuff here
 */

import AppConfig from './configs/app';

// Let's create the element for app binding
const id = AppConfig.ELEMENT_ID;
const existApp = document.getElementById(id);
if (!existApp) {
  const bar = document.createElement('div');
  bar.setAttribute('id', id);

  // place it at the bottom
  document.body.appendChild(bar);
}
