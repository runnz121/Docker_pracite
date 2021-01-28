
#base image
FROM node:10

#이미지 안에서 어플레키에션 소스코드를 갖고 있을 디렉토리를 생성하는 것
#이 디렉토리가 어플리케이션의 working dircetory가 된다
#사용하는 이유?
#1. 이미 있는 이미지와 이름이 동일한 것이있으면 덮어씌어져 버린다 이를 방지
#2. 파일 정렬이 너무 난잡하다 => working을 위한 앱을 따로 정리 
WORKDIR /usr/src/app

#package.json이 컨테이너안에 없기 때문에 이를 복사하기 위한 명령어
#server.js도 없다고 뜬다
#따라서 모든 파일 전체를 복사를 해서 컨테이너 안으로 넣기위해 다음과 같이 적음
COPY ./ ./

#npm : node.js로 만들어진 모듈을 웹이서 받아서 설치하고 관리해주는 프로그램 
RUN npm install

CMD ["node", "server.js"]

#컨테이너를 내부에 있는 네트워크에 연결시켜주어야 한다 
#이미지 빌드 : docker build -t runnz121/nodejs ./
#docker run -p 5000:8080 runnz121/nodejs 5000번(임의의) 포트를 8080(컨테이너 내부 포트)와 연결시켜준다 
#확인하기위해선 localhost:5000으로 접속하면 됨(앞의 포트가 url에 입력할 포트번호)
#docker run -it runnz121/nodejs sh 쉘환경 접속 
#