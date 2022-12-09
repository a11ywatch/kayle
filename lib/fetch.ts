import { get } from "https";

// get the html from a website
export const fetchHtml = (url: string): Promise<string> => {
  return new Promise((resolve) => {
    get(url, (res) => {
      res.setEncoding("utf8");
      let rawData = "";

      res.on("data", (chunk) => {
        rawData += chunk;
      });

      res.on("end", () => {
        let parsedData = null;
        try {
          parsedData = JSON.parse(rawData);
        } catch (e) {
          console.error(e);
        }

        resolve(parsedData);
      });
    }).on("error", (err) => {
      console.error(err.message);
      resolve("");
    });
  });
};
