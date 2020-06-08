import axios from "axios";
import cheerio from "cheerio";

const URL = `https://hidemy.name/en/proxy-list/?country=ALADARAMAUATAZBDBYBEBOBABWBRBGBFKHCMCACLCNCOCDHRCYCZDOECEGFIFRGEDEGRHTHNHKHUINIDIRIQIEITKZKEKRLBLSLTLUMKMWMYMVMXMDMNMEMZMMNPNLNZNINGNOPKPSPAPYPEPHPLPTPRRORURSSCSGSKSOZAESLKCHSYTWTHTRUGUAGBUSUYUZVEVN&maxtime=1000&type=hs&anon=1#list`;

export const getProxies = async ({ cookie }) => {
  var headers = {
    "user-agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
    cookie,
  };
  const { data } = await axios.get(URL, {
    headers: headers,
  });

  const $ = cheerio.load(data);
  const proxyNodes = $("div.table_block table tbody").find("tr").toArray();
  const proxies = proxyNodes.map((proxyNode) => {
    const tds = $(proxyNode).find("td").toArray();
    return {
      ip: $(tds[0]).text(),
      port: Number($(tds[1]).text()),
      speed: Number($(tds[3]).text().replace("ms", "").trim()),
      type: $(tds[4])
        .text()
        .split(",")
        .map((type) => type.trim()),
    };
  });
  return proxies;
};
