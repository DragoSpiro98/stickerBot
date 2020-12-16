const gm = require('gm')

exports.imageCrop = (input) => {
    gm(input)
        .resize('512', '512')
        .gravity('Center')
        .crop('512', '512')
        .write('../../media/output/output.jpeg', function (err) {
            if (!err) console.log(' hooray! ')
        })
}
