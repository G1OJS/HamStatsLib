// ui-core.js

import * as Benchmark from './views/benchmark.js';
import Ribbon from '/src/app/ribbon.js';

const ribbon = new Ribbon({
  onModeChange: refreshCurrentView,
  onConfigChange: refreshCurrentView,
  onViewSelect: loadView
});

setInterval(() => ribbon.writeModeButtons(), 5000);
setInterval(() => refreshCurrentView(), 5000);

let currentView = null;
let currentViewName = null;
const viewHistory = [];

export function loadView(viewName) {
  if (currentViewName) {
    viewHistory.push(currentViewName);
  }

  switch (viewName) {
    case 'benchmark':
      currentView = Benchmark;
      currentViewName = viewName;
      break;
    default:
      console.warn(`Unknown view: ${viewName}`);
      return;
  }
  
  // tell the view what its DOM and ribbon references are:
  const DOMcontainer = document.getElementById('mainContent'); 
  DOMcontainer.innerHTML = '';  // Clear existing DOMcontainer
  currentView.init(DOMcontainer, {
      registerActiveModes: ribbon?.registerActiveModes.bind(ribbon),
      getWatchedMode: ribbon?.getWatchedMode.bind(ribbon),
    });
}

export function refreshCurrentView() {
  if (currentView && currentView.refresh) {
    currentView.refresh();
  }
}

export function goBack() {
  const previous = viewHistory.pop();
  if (previous) loadView(previous);
}
