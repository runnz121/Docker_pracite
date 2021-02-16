
FROM node:alpine as builder

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build



FROM nginx

EXPOSE 3000 

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#./nginx/default.conf우리가 작성한 파일을 컨테이너 안의 /etc/nginx/conf.d/default.conf 경로에 덮어준다

COPY --from=builder /app/build  /usr/share/nginx/html
