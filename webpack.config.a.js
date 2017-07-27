var path = require('path');
module.exports = [{
    entry: './pageA.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'pageA.bundle.js'
    }
}/*, {
    entry: './pageB.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'pageB.bundle.js'
    }
}*/];