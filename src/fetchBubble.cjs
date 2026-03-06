const https = require('https');

const options = {
  hostname: 'raw.githubusercontent.com',
  path: '/DavidHDev/react-bits/main/src/ts-tailwind/Components/BubbleMenu/BubbleMenu.tsx',
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
    console.log(data);
  });
});
