import fs from "fs";
import axios from "axios";

let db = JSON.parse(fs.readFileSync("./db.json")); // this data came from mockaroo

// let's get some weird text from hipster ipsum
// 25 sentences for short blurbs
const get25hipster = async () => {
  try {
    const res = await axios.get(
      "http://hipsum.co/api/?type=hipster-centric&sentences=25"
    );
    return res;
  } catch (error) {
    console.error(error);
    return;
  }
};

const blurbData = await get25hipster();

// 25 paragraphs for long descriptions and bios (call fn twice)
const get25hipsterParas = async () => {
  try {
    const res = await axios.get(
      "http://hipsum.co/api/?type=hipster-centric&paras=25"
    );
    return res;
  } catch (error) {
    console.error(error);
    return;
  }
};

const bioText = await get25hipsterParas();
const longDesc = await get25hipsterParas();

// use random 0-1 to fill boolean keys
const trueOrFalse = ["true", "false"];

// did this part by hand and i guess i got too many ¯\_(ツ)_/¯
// a consideration for later is that these images are full-size
const images = [
  "https://images.unsplash.com/photo-1461344577544-4e5dc9487184",
  "https://images.unsplash.com/photo-1496769843785-93aa0be525dc",
  "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9",
  "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6",
  "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
  "https://images.unsplash.com/photo-1589279715734-6631a314dfa2",
  "https://images.unsplash.com/photo-1598630388567-9fdbfd7e928e",
  "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf",
  "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f",
  "https://images.unsplash.com/photo-1608613304899-ea8098577e38",
  "https://images.unsplash.com/photo-1618090584126-129cd1f3fbae",
  "https://images.unsplash.com/photo-1596939122461-e48c8a8a2d85",
  "https://images.unsplash.com/photo-1631273553464-7595e1a5b68d",
  "https://images.unsplash.com/photo-1469833120660-1a218b53d28a",
  "https://images.unsplash.com/photo-1633887091273-a3bd71efddde",
  "https://images.unsplash.com/photo-1623526104629-f1b8eb5bd195",
  "https://images.unsplash.com/photo-1517971129774-8a2b38fa128e",
  "https://images.unsplash.com/photo-1599694522028-65abc96dfd2f",
  "https://images.unsplash.com/photo-1504222490345-c075b6008014",
  "https://images.unsplash.com/photo-1558443957-d056622df610",
  "https://images.unsplash.com/photo-1631739714671-0de24b57d810",
  "https://images.unsplash.com/photo-1618673747378-7e0d3561371a",
  "https://images.unsplash.com/photo-1578961771886-97d51aee46bc",
  "https://images.unsplash.com/photo-1493863641943-9b68992a8d07",
  "https://images.unsplash.com/photo-1607969892192-8aa9fe65ee26",
];

// fill the rest of the DB out with that awesome stuff
db.map((entry, index) => {
  entry.bio_text = bioText.data[index];
  entry.long_description = longDesc.data[index];
  entry.is_online = trueOrFalse[Math.floor(Math.random() * 2)];
  entry.is_offline = trueOrFalse[Math.floor(Math.random() * 2)];
  entry.image = images[index];
  entry.course_brief = blurbData.data[0].split(".")[index];
});

// slapped that stuff back into a new json file because i don't want
// to repeat the 90 seconds of work the db.json file took
fs.writeFileSync("./API.json", JSON.stringify(db));
