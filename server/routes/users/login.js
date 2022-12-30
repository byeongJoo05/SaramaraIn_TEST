const bcrypt = require('bcrypt');
//const client = require('../../client');
const Users = require("../../models/Users")
const jwt = require('../../authService/auth-jwt');
//const { redisClient } = require('../../utils/cache');

const login = async (req, res) => {
  try{
    
    console.log(req.body.email);
    console.log(req.body.password);

    const email = req.body.email;
    const password = req.body.password;

    const userinfo = await Users.findOne({
      where: {
        email: email
      }
    });

    console.log(userinfo);
    console.log(process.env.JWT_SECRET)

    if (userinfo) {
      const chk = await bcrypt.compare(password, userinfo.password);
      if (chk) {
        const accessToken = jwt.sign(userinfo);
        const refreshToken = jwt.refresh();
        
  
        // redisClient.set(username, refreshToken);
        /* const setNewToken = async() => {
          var newToken = {
            refreshToken: refreshToken,
            userId: userinfo.userId
          }
        } */
  
        res.status(200).send({
          ok: true,
          data: {
            accessToken,
            refreshToken,
          },
        });
        return;

      } else {
        res.status(401).send({
          ok: false,
          message: 'password is incorrect',
        });
        return;
      }
    }
    res.status(401).send({
      ok: false,
      message: 'user not exist',
    });

  }catch(error){
    console.log(error);

  }

  /* console.log(req.body)
  const { email, password } = req.body;
  
  // to do : check username, password are not undefined
  // if undefined return 400
  const userinfo = await Users.findOne({
    where: {
      email: email
    }
  })
  if (userinfo) {
    // const chk = await bcrypt.compare(password, userinfo.password);
    const tempPw = await Users.findOne({
      where:{
        email
      }
    })
    if (password == userinfo.test) {
      const accessToken = jwt.sign(userinfo);
      const refreshToken = jwt.refresh();
      
      // redisClient.set(username, refreshToken);
      const setNewToken = async() => {
        var newToken = {
          refreshToken: refreshToken,
          userId: userinfo.userId
        }
      }
      res.status(200).send({
        ok: true,
        data: {
          accessToken,
          refreshToken,
        },
      });
      return;
    } else {
      res.status(401).send({
        ok: false,
        message: 'password is incorrect',
      });
      return;
    }
  }
  res.status(401).send({
    ok: false,
    message: 'user not exist',
  }); */
};

module.exports = login;