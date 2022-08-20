import { CSV } from "https://js.sabae.cc/CSV.js";
import { HankakuKana } from "https://code4fukui.github.io/mojikiban/HankakuKana.js";
import { writeData } from "https://js.sabae.cc/writeData.js";

const url = "https://www.data.jma.go.jp/obd/stats/data/mdrr/chiten/meta/amdmaster.index4";
const csv = await CSV.fetch(url);
const opt = csv.splice(1, 1)[0];
for (let i = 0; i < csv[0].length; i++) {
  csv[0][i] = (csv[0][i] + opt[i]).trim();
}
const data = CSV.toJSON(csv);
data.forEach(d => {
  // trim
  for (const name in d) {
    d[name] = d[name].trim();
  }

  // delete null column
  delete d[""];

  // convert hankaku-kana to zenkaku-kana
  const kanas = ["Station Name(Kana)", "Station Name of Snow(Kana)"];
  for (const kana of kanas) {
    d[kana] = HankakuKana.toZen(d[kana]);
  }

  // convert 0 padding num to num
  const numsi = ["Altitude_Precipitation(m)", "Altitude_Snow(m)"];
  for (const num of numsi) {
    d[num] = d[num] ? parseInt(d[num], 10).toString() : "";
  }
  const numsf = ["Height of Anemometer(m)"]
  for (const num of numsf) {
    d[num] = d[num] ? parseFloat(d[num]).toFixed(1) : "";
  }
});

const active = data.filter(d => d["End Date"] == "9999-99-99");

await writeData("jma_station", data);
await writeData("jma_station_active", active);

/*
> data.length
7301
> const active = data.filter(d => d["End Date"] == "9999-99-99");

undefined
> active.length
1286
*/
