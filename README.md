# ThunderCMS

A high-level, simple, performant, and easy-to-use CMS using NodeJS.

## Install

1. Clone the repository: `git clone https://github.com/thunder-red-star/ThunderCMS.git`.
2. In the directory, install all the necessary packages: `npm install`.
3. ~~Run the server: `npm start` or `node src/index.js`.~~
4. Create an instance of the server, so you can call programmable APIs:
  ```js
  const CMS = require("../src/index");

  let ThunderCMS = new CMS();

  ThunderCMS.start();
  ```

## TODO:

- [x] Readme
- [x] License
- [x] Base server
- [ ] Database methods
- [ ] Content retrieval system
- [ ] API system
- [ ] Multiple templating engines
- [ ] Docs
- [ ] Plugin system
- [ ] Theme system
