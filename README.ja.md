# jma_station

気象庁（JMA）の観測所に関するオープンデータです。過去の観測所および現在運用中の観測所の情報を含みます。

## デモ

[現在運用中の観測所のインタラクティブマップを見る](https://code4fukui.github.io/jma_station/)

## 特徴

- 気象庁の観測所データをCSV、JSON、CBOR形式で包括的に提供します。
- 全観測所の完全な履歴データと、現在運用中の観測所のみを抽出したリストの2種類のデータセットを含みます。
- 観測所の詳細なメタデータ（名称、座標、標高、運用期間、観測気象要素）を含みます。
- GitHub Actionsのワークフローにより、データは毎日自動的に更新されます。

## データエンドポイント

### 全履歴（廃止された観測所を含む）
- [CSV](https://code4fukui.github.io/jma_station/jma_station.csv)
- [JSON](https://code4fukui.github.io/jma_station/jma_station.json)
- [CBOR](https://code4fukui.github.io/jma_station/jma_station.cbor)

### 現在運用中の観測所のみ
- [CSV](https://code4fukui.github.io/jma_station/jma_station_active.csv)
- [JSON](https://code4fukui.github.io/jma_station/jma_station_active.json)
- [CBOR](https://code4fukui.github.io/jma_station/jma_station_active.cbor)

## データスキーマ

データセットには以下の主要フィールドが含まれます：

- `Station Number`: 観測所の一意の識別子（地点番号）。
- `Station Name(Kanji/Kana/Roman)`: 漢字、カナ、ローマ字で表記された観測所名。
- `Latitude_...`, `Longitude_...`, `Altitude_...`: 降水量および積雪深の測定地点の地理座標と標高。
- `Start Date`, `End Date`: そのレコードにおける観測所構成の運用期間。`End Date` が `9999-99-99` の場合は、現在運用中の観測所であることを示します。
- `Precipitation`, `Wind Speed`, `Temperature` など: 観測所でどの気象要素が観測されているかを示すフラグ。

## 使い方

データを取得するためのJavaScriptの例：

```javascript
// CSVを使用する場合
import { CSV } from "https://js.sabae.cc/CSV.js";
const data = CSV.toJSON(await CSV.fetch("https://code4fukui.github.io/jma_station/jma_station.csv"));
console.log(data);
```

```javascript
// JSONを使用する場合
const data = await (await fetch("https://code4fukui.github.io/jma_station/jma_station.json")).json();
console.log(data);
```

## データソース

データは気象庁から取得しています：
- [アメダス観測所情報履歴ファイル](https://www.data.jma.go.jp/obd/stats/data/mdrr/chiten/meta/amdmaster.index4)
- [過去の気象データ検索](https://www.data.jma.go.jp/obd/stats/data/mdrr/man/kansoku_gaiyou.html)

## 自動更新

データは[GitHub Actionsのワークフロー](.github/workflows/scheduled-update.yml)により、毎日 9:15 JST に自動的に更新されます。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
