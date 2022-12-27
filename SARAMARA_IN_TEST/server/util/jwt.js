const {promisify} = require('util');
const jwt = require('jsonwebtoken');
const jwtsecret = process.env.JWTSECRET;

module.exports = {
    sign: (user) => { // access token 발급
        const payload = { // access token에 들어갈 페이로드
            id : user.id,
            role : user.role
        };

        return jwt.sign(payload, jwtsecret, {
            algorithm: 'HS256'
        })
    }
}