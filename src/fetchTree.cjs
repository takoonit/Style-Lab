const https = require('https');

const options = {
  hostname: 'api.github.com',
  path: '/repos/DavidHDev/react-bits/git/trees/main?recursive=1',
  headers: {
    'User-Agent': 'Node.js'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const json = JSON.parse(data);
    if(json.tree) {
      console.log(json.tree.filter(f => f.path.toLowerCase().includes('bubble')).map(f => f.path));
    } else {
      console.log(json);
    }
  });
});
