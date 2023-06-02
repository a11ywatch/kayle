import assert from "assert";
import puppeteer from "puppeteer";
import { extractLinks } from "kayle/build/wasm";
import { performance } from "perf_hooks";
import { drakeMock } from "./mocks/html-mock";

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setContent(drakeMock);
  const startTime = performance.now();
  const links = await extractLinks({ page, browser });
  const nextTime = performance.now() - startTime;

  console.log("time took", nextTime);
  console.log(links);
  // valid list
  assert(Array.isArray(links));
  assert.deepEqual(
    links.sort(),
    [
      "https://www.drake.com/cs/c/?cta_guid=df9b8acf-0dcd-47a3-b4de-964bb5fb1d5c&signature=AAH58kGWEvGeTEJHld_qQVlMOIeT0StWlQ&pageId=8839032963&placement_guid=c6bb571b-d0e3-4b19-8cfc-e4c399f4e7d7&click=554c87e1-7120-4a1e-9078-5a5c8aecccc8&hsutk=&canon=https%3A%2F%2Fwww.drake.com%2F&portal_id=5479613&redirect_url=APefjpEEGTBq9FxKLqLCRZV6VHqe4BEl4DOfR3p4s-WJPB9d-Ffh5lviyl7aaglP1hsiBM2PVysHipIJeUgCTMW0riyACmWDJdOX41_ufODHrQuq4FIM-gjkDjzLig7MCFKJD06RORQX",
      "/?hsLang=en",
      "https://www.drake.com",
      "https://www.drake.com/products",
      "https://www.drake.com/labels",
      "https://www.drake.com/name-plates",
      "https://www.drake.com/equipment-panel-overlays",
      "https://www.drake.com/membrane-switches",
      "https://www.drake.com/oem-bezel-re-branding",
      "https://www.drake.com/safety",
      "https://www.drake.com/industries",
      "https://www.drake.com/capabilities",
      "https://www.drake.com/ul-solutions",
      "https://www.drake.com/tamper-resistant-void-labels",
      "https://www.drake.com/die-cutting",
      "https://www.drake.com/wide-narrow-format-digital-cutting",
      "https://www.drake.com/full-color-digital-printing",
      "https://www.drake.com/wide-format-digital-printing",
      "https://www.drake.com/flexographic-printing",
      "https://www.drake.com/hot-stamp-labels",
      "https://www.drake.com/silk-screen-printing",
      "https://www.drake.com/materials",
      "https://www.drake.com/metalphoto-photosensitive-aluminum",
      "https://www.drake.com/stainless-steel",
      "https://www.drake.com/anodized-aluminum",
      "https://www.drake.com/lexan-polycarbonate",
      "https://www.drake.com/mylar-polyester",
      "https://www.drake.com/vinyl-pvc",
      "https://www.drake.com/videos",
      "https://www.drake.com/about",
      "https://www.drake.com/blog",
      "https://www.drake.com/testimonials",
      "https://www.drake.com/terms-of-service",
      "https://www.drake.com/privacy-policy",
      "https://www.drake.com/contact",
      "https://www.drake.com/cs/c/?cta_guid=194b0892-e4a9-41da-856b-ac3dab1de122&signature=AAH58kFzHOX7ZBuUW0ajj6GGXQnU6_qR2g&pageId=8839032963&placement_guid=35a2f8b1-1a3b-4565-ab55-7d3fa7204fc5&click=a5edf779-b2fc-4ebc-968f-54ef6ce8f6e5&hsutk=&canon=https%3A%2F%2Fwww.drake.com%2F&portal_id=5479613&redirect_url=APefjpHMoGLgqmQXrhbfAVk95GIUCTcOYCLZ-HkVK5No2YiIPdwldtOR2fMk99zuifQ64I7cwkV0Tfd46lYOy9ljLsX7dImtftHc0KLAXWYRwqRqf1VwEU_4e2kbIwBKxfcAbQZ9fWSh",
      "https://www.drake.com/labels?hsLang=en",
      "https://www.drake.com/name-plates?hsLang=en",
      "https://www.drake.com/equipment-panel-overlays?hsLang=en",
      "https://www.drake.com/membrane-switches?hsLang=en",
      "https://www.drake.com/oem-bezel-re-branding?hsLang=en",
      "https://www.drake.com/safety?hsLang=en",
      "https://www.drake.com/cs/c/?cta_guid=34d266db-0b65-4753-b5cf-2621a0bb36eb&signature=AAH58kGT5pOwgCBBxb7F-JNkaNDHMhDg0g&pageId=8839032963&placement_guid=86d6c762-411a-4956-9636-fc97da9ae88c&click=54d8c378-a8c8-4ebc-993f-420867c3e1eb&hsutk=&canon=https%3A%2F%2Fwww.drake.com%2F&portal_id=5479613&redirect_url=APefjpHDJCKW4ySGJ8y-mwClNEpK-G_eh5faSauXXj8eCngOlfqvGH9Ra8_rwP7UpRpQPhy_RTtIXuBRZeHptBMOyur9y5oBrSauBWoVvnbWpaxrjfHs9j7pKh88qnxe3xibn3PiXl1z",
      "https://www.drake.com/cs/c/?cta_guid=e9c3ff65-5303-42df-b466-cd64a84bfc67&signature=AAH58kGAMYo1BUIq0oKzlaNzc9AdXBdQ2g&pageId=8839032963&placement_guid=b850b68f-326a-43cb-8f57-07d5e8074b31&click=f0dadaef-482c-4ad8-a99b-50c8fa696ee7&hsutk=&canon=https%3A%2F%2Fwww.drake.com%2F&portal_id=5479613&redirect_url=APefjpHE5LOSYqNF1GNqmQks_W9gj3ScglrFw0HWzVxyChWyFqVA2nQLvqNNvyy-mhFLn9g1KmW3DYjYBclTm_3gHVVzYMKrZAyaTxY2jHkX7mEMcVkPmNA",
      "https://www.drake.com/cs/c/?cta_guid=5d5e3141-f749-4fa7-b734-25667e531cfe&signature=AAH58kHo1qzsXaPOT8WcWuRYgZglZwRuZw&pageId=8839032963&placement_guid=991abde1-792b-4f15-b338-a79c214c3e94&click=aaa81f3e-e51b-4052-ba47-7a135df27f08&hsutk=&canon=https%3A%2F%2Fwww.drake.com%2F&portal_id=5479613&redirect_url=APefjpHej9vH1GzgHzvrvXJWs46LAUdSi68znGg5JCnXydxadajJ7Y4eXyAt3IgMeL11OjTJ8mfQXs9JkqLhbrlErXZ-AnO345u1hYKziAGvcIqimEN4L6lrVEa0NJtUzJLxbieUs1jt",
      "https://www.drake.com/overview",
      "https://www.drake.com/industries",
      "https://www.drake.com/capabilities",
      "https://www.drake.com/materials",
      "https://www.drake.com/videos",
      "https://www.drake.com/about",
      "https://www.drake.com/contact",
      "tel:1-800-531-5073",
      "tel:512-251-2231",
      "https://www.drake.com/cs/c/?cta_guid=5d5e3141-f749-4fa7-b734-25667e531cfe&signature=AAH58kHo1qzsXaPOT8WcWuRYgZglZwRuZw&pageId=8839032963&placement_guid=991abde1-792b-4f15-b338-a79c214c3e94&click=aaa81f3e-e51b-4052-ba47-7a135df27f08&hsutk=&canon=https%3A%2F%2Fwww.drake.com%2F&portal_id=5479613&redirect_url=APefjpHej9vH1GzgHzvrvXJWs46LAUdSi68znGg5JCnXydxadajJ7Y4eXyAt3IgMeL11OjTJ8mfQXs9JkqLhbrlErXZ-AnO345u1hYKziAGvcIqimEN4L6lrVEa0NJtUzJLxbieUs1jt",
    ].sort()
  );
  await browser.close();
})();
