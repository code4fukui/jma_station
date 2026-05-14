# jma_station

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Open data for Japan Meteorological Agency (JMA) observation stations, including historical and currently active locations.

## Demo

[View an interactive map of active stations](https://code4fukui.github.io/jma_station/)

## Features

- Provides comprehensive data for JMA observation stations in CSV, JSON, and CBOR formats.
- Includes two datasets: a complete history of all stations and a filtered list of currently active stations.
- Contains detailed station metadata: names, coordinates, altitude, operational periods, and observed weather elements.
- Data is automatically updated daily via a GitHub Actions workflow.

## Data Endpoints

### Full History (including discontinued stations)
- [CSV](https://code4fukui.github.io/jma_station/jma_station.csv)
- [JSON](https://code4fukui.github.io/jma_station/jma_station.json)
- [CBOR](https://code4fukui.github.io/jma_station/jma_station.cbor)

### Active Stations Only
- [CSV](https://code4fukui.github.io/jma_station/jma_station_active.csv)
- [JSON](https://code4fukui.github.io/jma_station/jma_station_active.json)
- [CBOR](https://code4fukui.github.io/jma_station/jma_station_active.cbor)

## Data Schema

The dataset includes the following key fields:

- `Station Number`: The unique station identifier.
- `Station Name(Kanji/Kana/Roman)`: The name of the station in different scripts.
- `Latitude_...`, `Longitude_...`, `Altitude_...`: Geographic coordinates and elevation for precipitation and snow measurement points.
- `Start Date`, `End Date`: The operational period for the station's configuration in that record. An `End Date` of `9999-99-99` signifies a currently active station.
- `Precipitation`, `Wind Speed`, `Temperature`, etc.: Flags indicating which meteorological elements are observed at the station.

## Usage

JavaScript examples for fetching the data:

```javascript
// Using CSV
import { CSV } from "https://js.sabae.cc/CSV.js";
const data = CSV.toJSON(await CSV.fetch("https://code4fukui.github.io/jma_station/jma_station.csv"));
console.log(data);
```

```javascript
// Using JSON
const data = await (await fetch("https://code4fukui.github.io/jma_station/jma_station.json")).json();
console.log(data);
```

## Data Source

The data is sourced from the Japan Meteorological Agency:
- [AMeDAS Station Information History File](https://www.data.jma.go.jp/obd/stats/data/mdrr/chiten/meta/amdmaster.index4)
- [Past Weather Data Search](https://www.data.jma.go.jp/obd/stats/data/mdrr/man/kansoku_gaiyou.html)

## Automatic Updates

The data is automatically updated daily at 9:15 JST via a [GitHub Actions workflow](.github/workflows/scheduled-update.yml).

## License

MIT License — see [LICENSE](LICENSE).