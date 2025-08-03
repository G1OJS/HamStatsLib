# HamStatsLib
Library of components to support various views of online ham radio statistics.

Currently centred around spots from pskreporter where at least one of the Tx/Rx calls is 'nearby', but I might expand it to include data from other sources. As an example, see [Station Benchmark HamStatsLib version](https://g1ojs.github.io/HamStatsLib/apps/StationBenchmark/Station_Benchmark.html).

## Concept
The current standard components are:
- **geo.js**:         Maidenhead squares for filtering and analysis
- **mqtt.js**:        Listens to the server and packages spots into a dictionary format
- **conns-data.js**:  Builds a live database of connections
- **store-cfg.js**:   Holds and manages the config data
- **ribbon.js**:      Main standardised interface to HTML for settings & global info

The diagram below shows the concept of how these components can be used to support different apps focussing on different aspects of the data

<img width="1146" height="680" alt="Capture" src="https://github.com/user-attachments/assets/9cc91002-df33-4e1f-b7f3-72aa233499da" />


## Current Apps

This library is very new, and currently the only app created using the components is a rewrite of Station Benchmark:
- [Station Benchmark standalone repo version](https://g1ojs.github.io/Station_Benchmark/Station_Benchmark.html)
- [Station Benchmark HamStatsLib version](https://g1ojs.github.io/HamStatsLib/apps/StationBenchmark/Station_Benchmark.html)
