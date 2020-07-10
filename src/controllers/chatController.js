const path = require('path')


exports.getIndex = (req, res, next)=>{
    console.log(req.get('Cookie'))
    res.sendFile(path.join(path.dirname(__dirname), 'views', 'index.html'));
}

exports.postUsername = (req, res, next)=>{
    res.setHeader('Set-Cookie', `name=${req.body.name};sameSite=None;Secure`);
    res.status(200).json({msg:'nome atualizado com sucesso'});
}
// path.join(path.dirname(__dirname), 'views', 'index.html')
