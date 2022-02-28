const express = require('express');
const { join, extname } = require('path');
const root = join(__dirname, '../dist');
const app = express();
const render = require('../dist/umi.server');

app.get('*', async (req, res) => {
  const headerMap = {
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.png': 'image/jpeg',
  };
  const ext = extname(req.url);
  res.setHeader('Content-Type', headerMap[ext] || 'text/html');
  console.log(headerMap[ext] || 'text/html');

  if (!ext) {
    const { html } = await render({
      path: req.url,
      context: {},
    });

    if (typeof html !== 'string') {
      res.pipe(html);
      html.on('end', () => {
        res.end();
      });
    } else {
      res.send(html);
    }
  } else {
    const path = join(root, req.url);
    console.log(path, req.url);
    res.sendFile(path);
  }
});

app.listen(80, () => {
  console.log('http://localhost:80');
});
