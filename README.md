🏗️ 프론트엔드: React + VS code !
이 프로젝트는 React 기반으로 개발되었으며, redux-saga를 활용하여 서버와 연동합니다!

📌 React 프로젝트 실행 방법
1️⃣ Node.js 설치
Node.js 공식 다운로드에서 최신 버전을 설치하세요.

2️⃣ Node.js 버전 확인
설치가 완료되면 **CMD(명령 프롬프트)**를 열고 다음 명령어를 실행하여 버전 확인을 합니다.
node -v
❗ 만약 버전이 정상적으로 표시되지 않는다면, 구글에서 해결 방법을 찾아보세요!

3️⃣ Yarn 설치
프론트엔드 프로젝트를 위한 패키지 매니저로 yarn을 사용합니다.
npm install -g yarn

  yarn 을 사용한 이유? 
   yarn은 npm 보다 빠르고 추가 기능을 제공하기 때문에 선택되었습니다.
 
4️⃣ Yarn 버전 확인
설치가 완료되었는지 확인합니다.
yarn -v

5️⃣ React 프로젝트 생성
우선, 프로젝트를 생성할 폴더로 이동한 후, 아래 명령어를 실행하세요.

yarn create react-app 프로젝트명
예시: yarn create react-app my-app

6️⃣ 프로젝트 구조 확인
생성이 완료되면 해당 디렉토리에 React 프로젝트 파일들이 자동으로 생성됩니다.

7️⃣ 프로젝트 실행
아래 명령어를 실행하여 개발 서버를 시작할 수 있습니다.
yarn start

또는 브라우저에서 직접 실행:🔗 http://localhost:3000/

🛠️ React 로그인 (CRUD) 구현
🎯 프론트엔드: React + Redux-Saga
이 프로젝트는 Redux-Saga를 활용하여 서버와 연동합니다.

📌 필요한 패키지 설치
VScode의 터미널을 열고 아래 명령어를 실행하세요.

yarn add redux react-redux @reduxjs/toolkit
yarn add redux-saga
yarn add axios
yarn add react-router-dom

📌 Redux Store 생성
src 폴더 안에 store.js 파일을 생성합니다.

🏗️ 백엔드 : Spring Boot + Intelij
https://start.spring.io/ 생성

DB : SQL Gate for Oracle 사용

🛠️ 백엔드 : Spring Boot + MyBatis -> 로그인 부분 구현
서버는 Spring Boot와 MyBatis를 활용하여 API를 제공합니다.
프론트엔드는 Redux-Saga를 통해 백엔드 API와 연동합니다.

🛠️ 백엔드 : Spring Boot + jpa -> 회원가입, 회원삭제, 회원정보 수정, 회원 정보 조회

jpa 부분 추가 구현

🛠️ 로그인 세션 관리 : 커스텀 백엔드 API 사용 
🛠️ 세션 관리 : true, false 조건 사용

개념 추가 : 2025-02-26 
  ssr, csr, mpa, spa 

  csr 클라이언트 사이드 렌더링 - spa 단일 
    한 번 접속할 때 프로젝트시 필요한 화면 전부 다운 하고 화면이 보인다.
    ex) 프로젝트 열기 한 후 프로젝트 안에서 /login -> /logi/project 이런식으로 url 이 변경되는 것 
    
    spa - single page application 
      하나의 페이지로 구성된 웹 애플리케이션 -> 하나의 페이지 안에서 모든 url 이동이 이루어진다. csr 을 사용
    
  ssr 서버 사이드 렌더링 - mpa 멀티
    접속 할 떄 내가 봐야할 화면 일부만 보인다.
    ex) localhost:3000 접속시, f5 화면 재 렌더링시

    mpa - multi page Application
      탭을 이동할 때마다 서버로 부터 새로운 html 을 새로 받아와서 페이지 전체를 렌더링 하는 웹 페이지 구성 방식이다.

