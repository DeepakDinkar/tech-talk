const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/client/scripts.js',
        './dist/client/polyfills.js',
        './dist/client/main.js'
    ]
    
    await fs.ensureDir('client')
    
    await concat(files, 'client/stop-watch.js')
    console.info('Angular Elements created successfully!')

})()