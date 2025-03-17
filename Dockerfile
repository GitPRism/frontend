# 1️⃣ Build Stage
FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 lock 파일 복사
COPY package.json yarn.lock ./

# 의존성 설치
RUN yarn install

# 프로젝트 파일 복사
COPY . ./

# Vite 프로젝트 빌드
RUN yarn build

EXPOSE 5173

CMD ["yarn", "dev"]