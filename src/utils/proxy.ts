const proxyList = require("proxy-lists");

export const getProxies = () => {
  return new Promise((resolve, reject) => {
    var gettingProxies = proxyList.getProxiesFromSource("freeproxylists");
    const proxies = [];

    gettingProxies.on("data", function (proxies) {
      proxies.push(...proxies);
    });

    gettingProxies.on("error", function (error) {
      reject(error);
    });

    gettingProxies.once("end", function () {
      resolve(proxies);
    });
  });
};
