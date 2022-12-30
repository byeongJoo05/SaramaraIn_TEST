const {promisify} = require('util');
const jwt = require('jsonwebtoken');
const jwtsecret = process.env.JWTSECRET;

module.exports = {
    sign: (user) => { // access token 발급
        const payload = { // access token에 들어갈 페이로드
            id : user.id,
            role : user.role
        };

        return jwt.sign(payload, jwtsecret, { // jwtsecret으로 sign하여 발급 후 return
            algorithm: 'HS256', // 암호화 알고리즘
            expiresIn : '1h' // 유효기간
        })
    },
    verify: (token) => { // access token 검증
        let decoded = null;
        try{
            decoded = jwt.verify(token, jwtsecret);
            return {
                ok: true,
                id: decoded.id,
                role : decoded.role,
            };
        } catch (err) {
            return{
                ok:false,
                message : err.message,
            };
        }
    },
    refresh: () => { // refresh token 발급
        return jwt.sign({}, jwtsecret, { // refresh token은 payload 없이 발급
            algorithm: 'HS256',
            expiresIn: '14d'
        });
    },
    refreshVerify: async (token, userId) => { // refresh token 검증
        /*
        이 안에 tokens 테이블의 userid가 필요함.
        */

        try {
            //refresh 토큰 가져올 때 필요.
            // verify를 통해 토큰 검증
        } catch(err) {
            return false;
        }
    }

};