const https = require('https');

https.get('https://reactbits.dev/components/bubble-menu', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data.substring(0, 1000));
  });
});
