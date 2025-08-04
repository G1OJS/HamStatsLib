var refresh_mSeconds = 5000;
var watchedMode = "FT8";

import * as UI from '../../../src/app/ui.js';
import * as ENG from '../../../src/live-data/conns-data.js';
import * as MQTT from '../../../src/live-data/mqtt.js';
import * as STORAGE from '../../../src/app/store-cfg.js';

STORAGE.loadConfig();
setInterval(UI.updateClock, 1000);
setInterval(UI.writeStatsForAllBands, refresh_mSeconds);
setInterval(UI.writeModeButtons, refresh_mSeconds);
setInterval(ENG.purgeConnections, 30000);
MQTT.connectToFeed();

