const fs = require('fs')

const fileReadStream = fs.createReadStream('README.md');
const fileWriteStream = fs.createWriteStream('_book/README.md');
fileReadStream.pipe(fileWriteStream);
fileWriteStream.on('close', function(){
    console.log('复制完成');  
})