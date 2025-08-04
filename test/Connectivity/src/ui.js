var tStart = Date.now(); // software start time
var HTML = "";
var activeModes = new Set();
var watchedMode="FT8";

import * as CONNSDATA from '../../../src/live-data/conns-data.js';
import * as STORAGE from '../../../src/app/store-cfg.js';

let ribbon;
export function setRibbon(r) {
  ribbon = r;
}

export function showBandConnectivity(){
	const band = "80m";
	const mode = "FT8";
	const bandModeData = CONNSDATA.connectivity_Band_Mode_HomeCall[band][mode];
    if (!bandModeData) return;

	let homeCalls = new Set();
	if(bandModeData.Tx){
		for (const key in bandModeData.Tx){
			homeCalls.add(key);
		}
	}
	if(bandModeData.Rx){
		for (const key in bandModeData.Rx){
			homeCalls.add(key);
		}
	}
	homeCalls = Array.from(homeCalls)

	let HTML = "<table id='connectivityGrid' border='1' style='border-collapse: collapse;'>";
	// Column headers
	HTML += "<thead><tr><th></th>";
	for (const colCall of homeCalls) {
		HTML += `<th class = 'vt'>${colCall}</th>`;
	}
	HTML += "</tr></thead><tbody>";
	
	// Row Headers
	for (const rowCall of homeCalls) {
		HTML += `<tr><th class=''>${rowCall}</th>`;
		// Cells 
		for (const colCall of homeCalls) {
			var txt = "";
			if(bandModeData.Rx[rowCall]){
				if(bandModeData.Rx[rowCall][colCall]){
					console.log("'"+rowCall+"-"+colCall+"'");
					txt = 'X';
				}
			}
			HTML += "<td>"+txt+"</td>";
		}
		HTML += "</tr>";
	}
	HTML += "</tbody></table>";

	// Inject HTML
	document.getElementById("mainContent").innerHTML = HTML;

}

