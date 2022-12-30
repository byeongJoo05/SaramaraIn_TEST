const bcrypt = require('bcrypt');
const Users = require('../../models/Users');

const join = async (req, res) => {
    console.log(req.body);
    const {email, password, nickname} = req.body;

    const hashedPassword = await bcrypt.hash(password,1);
    console.log(hashedPassword.length);
    try {
        const newUser = await Users.create({
            type:'LOCAL',
            email:email,
            nickname:nickname,
            password:hashedPassword,
            role:'BASIC',
            profileImg:'default.jpg'
        });

        res.status(200).send({
            "msg":"success",
            "data":true
        })
    } catch(err) {
        res.status(409).send({
            "msg":err.message,
            "data":false
        });
    }
};

module.exports = join;