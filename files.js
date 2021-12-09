const fs = require('fs');

const message = 'Hello world and change some things!';

fs.writeFile('message.txt', message, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('We wrote to the file');
});
