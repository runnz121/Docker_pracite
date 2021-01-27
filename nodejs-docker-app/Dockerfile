
#base image
FROM node:10

#package.json이 컨테이너안에 없기 때문에 이를 복사하기 위한 명령어
#server.js도 없다고 뜬다
#따라서 모든 파일 전체를 복사를 해서 컨테이너 안으로 넣기위해 다음과 같이 적음
COPY ./ ./

#npm : node.js로 만들어진 모듈을 웹이서 받아서 설치하고 관리해주는 프로그램 
RUN npm install

CMD ["node", "server.js"]

#컨테이너를 내부에 있는 네트워크에 연결시켜주어야 한다 
#docker run -p 5000:8080 runnz121/nodejs 5000번(임의의) 포트를 8080(컨테이너 내부 포트)와 연결시켜준다 
#확인하기위해선 localhost:5000으로 접속하면 됨(앞의 포트가 url에 입력할 포트번호)