# 인후라이프 2.0

본 프로젝트는 '인후라이프 (https://github.com/devHudi/inhoolife)' 의 리뉴얼 버전입니다.

## 소개

인후라이프는 수 많은 인하대학교 후문가의 식당들중에서 고민하지 않고 고르기 위해 만들어진 웹서비스입니다.

## 개발 스택

### 프론트엔드

- react
- react-router
- styled-components
- react-apollo
- surge.sh

### 백엔드

- node.js
- Express
- MongoDB
- graphql-yoga
- jsonwebtoken
- vultr

## 사용법

pm2 를 프로세스 매니져로 사용하기 때문에 필수적으로 글로벌 설치가 필요합니다.

반드시 `.env` 파일을 통해 JWT 와 세션키를 설정해주세요.

### 서버

**시작하기**

```
npm start
```

**종료하기**

```
npm stop
```

### 프론트엔드

기본적으로 명령어는 CRA 로 생성된 그대로 사용합니다.

반드시 `.env` 파일을 통해 서버 HOST 정보를 입력해주세요.

프론트엔드는 surge.sh 를 통해 배포하는 것을 추천드립니다.

**빌드**

```
npm run build
```

**디버깅**

```
npm start
```
