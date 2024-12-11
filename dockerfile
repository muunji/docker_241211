# Base 이미지 설정
FROM node:16

# 컨테이너 내 앱 디렉토리 설정
WORKDIR /app

# 의존성 설치
COPY package.json ./
RUN yarn install

# 앱 코드 복사
COPY . .

# 앱 실행 포트 설정
EXPOSE 3060

# 앱 실행 명령어
CMD ["yarn", "start"]