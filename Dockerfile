#베이스 이미지를 명시해준다
#이미지 생성시 기반이 되는 이미지 레이어
#<이미지 이름><태그> 형식으로 작성
#태그를 붙이지 않으면 자동적으로 최신것을 다운받음 ex)ubuntu:14.04
#FROM baseImage
FROM alpine

#추가적으로 필요한 파일들을 다운로드 받는다.
#도커 이미지가 생성되기 전에 수행할 쉘 명령어
#RUN command

#컨테이너 시작시 실행 될 명령어를 명시해준다.
#컨테이너가 시작되었을 떄 실행할 실행 파일 또는 쉘 스크립트
#도커 파일내에 1회만 쓸 수 있다.
#CMD ["excutable"]
CMD ["echo", "hello"]



#docker build ./ 로 빌드 실행
#이미지 -> 임시컨테이너 (명령어 + 스냅샷) -> 새로운 이미지 생성(임시컨테이너는 삭제)

#도커 컨테이너에 이름 붙이기
# docker build -t 나의 도커 아이디 / 저장소/프로젝트 이름 : 버전 ./
#docker build -t runnz121/hello:latest ./
#실행 :docker run -it runnz121/hello