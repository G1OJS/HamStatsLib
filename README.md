# HamStatsLib
Library of components to support various views of online ham radio statistics

The current standard components are:
- geo.js:         Maidenhead squares for filtering and analysis
- mqtt.js:        Listens to the server and packages spots into a dictionary format
- conns-data.js:  Builds a live database of connections
- store-cfg.js:   Holds and manages the config data
- ribbon.js:      Main standardised interface to HTML for settings & global info

The diagram below shows the concept of how these components can be used to support different apps focussing on different aspects of the data

<img width="1202" height="673" alt="Capture" src="https://github.com/user-attachments/assets/7d1cb5b5-ba65-4bfe-876b-08c43801fd0c" />

