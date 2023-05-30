const express = require("express");
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();


// 한국 타임존으로 기본셋팅
const dayjs = require('dayjs');
const timezone = require('dayjs/plugin/timezone')
const utc = require('dayjs/plugin/utc');

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Seoul');


const app = express();
const port = process.env.PORT;

// API 버전별 라우터분리
const indexRouter = require('./routes');
const v1RegisterRouter = require('./routes/v1/register');
const v1CommonRouter = require('./routes/v1/common');

// 보안설정 및 데이터타입지정
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

// cors 설정
app.use(cors({
    origin: [
        'http://localhost:3000', 
	    'http://127.0.0.1:3000',
    ],
    credentials: true,
}));

// 동적 요청에 대한 응답을 보낼 때 etag 생성을 하지 않도록 설정
app.set("etag", false);

// 정적 요청에 대한 응답을 보낼 때 etag 생성을 하지 않도록 설정
const options = { etag: false };
app.use(express.static("public", options));

// 세부 라우터 정보출력
app.use('/', indexRouter);
app.use('/api/v1/register', v1RegisterRouter);
app.use('/api/v1/common', v1CommonRouter);

app.listen(port,'0.0.0.0', () => {
    console.log("server Start at", port);
});


