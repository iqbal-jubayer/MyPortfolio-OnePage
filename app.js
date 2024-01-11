// IMPORT PACKAGES
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

require('dotenv').config(); // IMPORT ENVIRONMENT FILE

// APP SPECS
const PORT = parseInt(process.env.PORT) || 3000;

// EXPRESS SPECS
app.set('view engine', 'pug');

app.use(express.json());
app.use('/static', express.static('static'));

// ENDPOINTS
app.get("/", (req, res) => {
  const params = {
    web_title: process.env.TITLE,
    desc: process.env.DESC,
    fb_id: process.env.FB_ID,
    ig_id: process.env.IG_ID,
    git_id: process.env.GIT_ID,
    sponsors:[process.env.SP_0,process.env.SP_1,process.env.SP_2]
  }
  res.render('index', params);
})

// START SERVER
app.listen(PORT, () => console.log(`This application is running on port ${PORT}`));