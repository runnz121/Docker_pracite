const express = require("express");
const redis = require("redis");
//레디스 클라이언트 생성
const client = redis.createClient({
    host : "redis-server",  //docker compose yml 파일 컨테이너명시    
    port : 6379   //레디스 기본 포트 
});

//도커환경에서 사용할 경우 : 도커 compose사용시 호스트 옵션을 docker-compose.yml파일에 명시한 컨테이너 이름으롲 준다
//도커를 사용하지 않는 경우 : 레디스 서버 주소를 입력한다


const app = express();          //express 앱 생성

//숫자는 0부터 시작합니다.
client.set("number",0);         //레디스 클라이언트 갖고와서 숫자를 0으로 초기화 

app.get('/', (req, res) => {
    client.get("number", (err, number)=> {
        //현재 숫자를 가져온 후에 1씩 올려줍니다.
        client.set("number", parseInt(number) +1)
        res.send("숫자가 1씩 올라갑니다. 숫자 :" + number)
    });
});


app.listen(8080);
console.log('Server is running');