var refresh_mSeconds = 5000;
var watchedMode = "FT8";

import * as UI from './src/ui.js';
import * as RIBBON from '../../../src/ribbon.js'
import * as CONNSDATA from '../../../src/live-data/conns-data.js';
import * as MQTT from '../../../src/live-data/mqtt.js';
import * as STORAGE from '../../../src/app/store-cfg.js';

STORAGE.loadConfig();
setInterval(RIBBON.updateClock, 1000);
setInterval(RIBBON.writeModeButtons, refresh_mSeconds);
setInterval(CONNSDATA.purgeConnections, 30000);

setInterval(UI.writeStatsForAllBands, refresh_mSeconds);
MQTT.connectToFeed();

