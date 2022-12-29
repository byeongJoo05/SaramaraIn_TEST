const express = require('express');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const router = require('./routes');
// express web application server 를 9000번 포트로 생성
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('port', process.env.PORT || 9000);
//ORM을 테스트해볼 블럭
const {sequelize} = require('./models');
const {Users} = require('./models');
sequelize.sync({force:false})
    .then(()=> {
        console.log("데이터베이스 연결 성공");
    })
    .catch((err) => {
        console.log("데이터베이스 연결 실패");
    });


// 로그를 화면에 출력
app.use(morgan('dev'));

// form이 아닌 형태의 POST 방식의 파라미터를 읽기 위한 설정
// client에서 모든 데이터를 form 에 담아 보낸다면 필요없음.
let bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

// 파일 다운로드를 구현하기 위한 모듈
let util = require('util')
let mime = require('mime')

// 파일 업로드를 위한 디렉터리를 없으면 생성하는 것을 처리하는 코드
try {
    fs.readdirSync('img');
} catch (error) {
    console.error('img 폴더가 없어 img 폴더를 생성합니다.');
    fs.mkdirSync('img');
}
// DB Connection 설정 필요!!!

// 파일 업로드 설정
const upload = multer({
    storage: multer.diskStorage({

        // destination 이 업로드 할 디렉토리를 설정하는 역할
        destination(req, file, done) {
            done(null, 'img/');
        },
        // filenaname이 업로드 될 때 파일 이름 설정
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    }),
    limits: {
        fileSize: 10 * 1024 * 1024
    }
});

// 템플릿엔진(서버의 데이터를 html에 출력하기 위한 모듈) 설정
// 이번엔 ejs 사용해서 html로 출력하도록 설정한 것.
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


// 서버 처리내용 ............................
app.use('/', router);

//에러 처리를 위한 부분
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send(message);
});

// 서버 동
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});