const path = require('path')


exports.getIndex = (req, res, next)=>{
    console.log('ok');
    res.status(200).sendFile(path.join(path.dirname(__dirname), 'views', 'index.html'));
}

exports.getJoin = (req, res, next)=>{
    res.status(200).sendFile(path.join(path.dirname(__dirname), 'views', 'join.html'))
}
