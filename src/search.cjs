const https = require('https');

const options = {
  hostname: 'api.github.com',
  path: '/search/repositories?q=react-bits',
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
    console.log(json.items.slice(0, 5).map(item => item.full_name));
  });
});
