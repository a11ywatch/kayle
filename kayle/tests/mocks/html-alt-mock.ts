export const htmlAltMock = `
<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="A11yWatch testing homepage">
    <meta name="author" content="Jeff Mendez">
    <title>A11yWatch Example Playground</title>
    <link rel="stylesheet" href="http://127.0.0.1:8050/site.css"> <link rel="shortcut icon" type="image/png" href="http://127.0.0.1:8050/favicon.ico"> <link href="http://127.0.0.1:8050/rss.xml" rel="feed" type="application/rss+xml" title="A11yWatch Example Playground">
  </head>
  <body>
    <nav id="header">
      <h1 class="logo"><a href="/">PlayGround</a></h1>
    </nav>
    <div id="content">
      <div class="intro">
        <img class="cat" src="images/cat.png">
        <img class="dog" src="images/husky.png" alt="">
        <img class="ocr" src="images/ocr.png">
        <div id="backgroundContainer">
          <p id="catText">I love cats and dogs</p>
        </div>
        <a href="https://www.facebook.com/a11ywatch/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
          </svg>
        </a>
      </div>
    </div>
</body></html>
`;
