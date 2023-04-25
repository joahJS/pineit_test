import express from 'express'
import history from 'connect-history-api-fallback';
import indexRouter from './routes/index.js';

const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`서버가 ${port}에서 동작중입니다.`)
})






//Vue Router와 Express 연동을 위한 connect-history-api-fallbac 설치가 진행되었음(npm i connect-history-api-fallback)
//Vue Router는 기본적으로 hash mode를 사용하지만 앞서 작성한 라우터 코드를 확인해보면 mode: 'history'를 통해 hash mode가 아닌 history mode를 사용
//그리고 Express 서버에서 history API를 사용하기 위해 connect-history-api-fallback 설치


// app.use(express.static('../'));

app.use('/', indexRouter); // api로 사용할 라우터를 indexRouter보다 위에 위치시켜야함
app.use(history()); // 라우터보다 먼저 실행되어야함?

