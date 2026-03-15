# jma_station

Open data of station numbers from the Japan Meteorological Agency.

## Demo
[JMA Station Map](https://code4fukui.github.io/jma_station/)

## Features
- Provides CSV and JSON data on JMA observation stations, including active and discontinued stations
- Data includes station number, name, coordinates, altitude, and observation data

## Data / API
- The data is sourced from the [JMA Past Weather Data Search](https://www.data.jma.go.jp/obd/stats/data/mdrr/man/kansoku_gaiyou.html) and [JMA Automated Meteorological Data Acquisition System (AMeDAS) station information history file](https://www.data.jma.go.jp/obd/stats/data/mdrr/chiten/meta/amdmaster.index4).

## Usage
The data files are available at the following URLs:

[Full station data](https://code4fukui.github.io/jma_station/jma_station.csv)
```js
import { CSV } from "https://js.sabae.cc/CSV.js";
const data = CSV.toJSON(await CSV.fetch("https://code4fukui.github.io/jma_station/jma_station.csv"));
console.log(data);
```
```js
const data = await (await fetch("https://code4fukui.github.io/jma_station/jma_station.json")).json();
console.log(data);
```

[Active stations only](https://code4fukui.github.io/jma_station/jma_station_active.csv)
```js
import { CSV } from "https://js.sabae.cc/CSV.js";
const data = CSV.toJSON(await CSV.fetch("https://code4fukui.github.io/jma_station/jma_station_active.csv"));
console.log(data);
```
```js
const data = await (await fetch("https://code4fukui.github.io/jma_station/jma_station_active.json")).json();
console.log(data);
```

## Automatic Updates
The data is automatically updated daily at 9:15 JST using a GitHub Actions workflow.

## License
MIT