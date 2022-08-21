# jma_station 気象庁 地点番号オープンデータ

- [気象庁｜過去の気象データ検索](https://www.data.jma.go.jp/obd/stats/data/mdrr/man/kansoku_gaiyou.html)
- [アメダス地点情報履歴ファイル](https://www.data.jma.go.jp/obd/stats/data/mdrr/chiten/meta/amdmaster.index4)をCSV/JSONデータ化

## サンプルアプリ

- [気象庁 地点番号マップ](https://code4fukui.github.io/jma_station/)

## 使い方

[地点番号データ](https://code4fukui.github.io/jma_station/jma_station.csv) (終了したものも含む地点番号データ)
```js
import { CSV } from "https://js.sabae.cc/CSV.js";
const data = CSV.toJSON(await CSV.fetch("https://code4fukui.github.io/jma_station/jma_station.csv"));
console.log(data);
```
```js
const data = await (await fetch("https://code4fukui.github.io/jma_station/jma_station.json")).json();
console.log(data);
```


[アクティブな地点番号データ](https://code4fukui.github.io/jma_station/jma_station_active.csv) (終了していない地点番号データ)
```js
import { CSV } from "https://js.sabae.cc/CSV.js";
const data = CSV.toJSON(await CSV.fetch("https://code4fukui.github.io/jma_station/jma_station_active.csv"));
console.log(data);
```
```js
const data = await (await fetch("https://code4fukui.github.io/jma_station/jma_station_active.json")).json();
console.log(data);
```

## 自動更新

- [scheduled-update.yml](.github/workflows/scheduled-update.yml) 毎日9:15(JST)に更新
