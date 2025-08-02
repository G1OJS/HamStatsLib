
var refresh_mSeconds = 5000;
var watchedMode = "FT8";

import * as MQTT from '../../src/live-data/mqtt.js';
import * as STORAGE from '../../src/app/store-cfg.js';

STORAGE.loadConfig();

MQTT.connectToFeed(STORAGE.squaresArr);
