exports.getIndex = (req, res, next)=>{
    console.log('ok');
    res.status(200).sendFile('join.html');
}

exports.getChat = (req, res, next)=>{
    res.status(200).sendFile('join.html')
}
