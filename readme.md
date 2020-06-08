```

const { getProxies } = require("../dist");
getProxies({
  cookie: `__cfduid=d839f8c83e341f8ef8e9f440e306152e01591592737; t=176421329; _ga=GA1.2.642862715.1591592739; _gid=GA1.2.1566605144.1591592739; _ym_uid=1581047112661724140; _ym_d=1591593800; _ym_isad=1; _fbp=fb.1.1591593800630.747012303; _ym_wasSynced=%7B%22time%22%3A1591593801072%2C%22params%22%3A%7B%22eu%22%3A0%7D%2C%22bkParams%22%3A%7B%7D%7D; _ym_visorc_42065329=w; cf_clearance=2fb02eb31e11063572d98a79a5914f0547b11378-1591593853-0-150; _ym_hostIndex=0-2%2C1-0; _dc_gtm_UA-90263203-1=1; _gat_UA-90263203-1=1`,
})
  .then((proxies) => {
    console.log(proxies);
  })
  .catch((err) => {
    console.log("err", err);
  });

```
