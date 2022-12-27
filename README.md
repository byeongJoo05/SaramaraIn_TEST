사라마라인 프로젝트를 진행하기 앞서 혼자 테스트코드를 작성하는 개인적 공간

<br/>

# 개발일지

**221225**
<br/>
1. 개발 내용
- 개발에 필요한 modules 설치 및 실행 테스트
- Sequelize를 통한 users, posts 테이블 생성 및 두 테이블 관계 매핑
  
2. 개발 이슈/고민 & 해결
- react를 실행 오류 -> react-scripts 모듈 설치 후 정상 작동.
   
3. 깨달은 점
- Sequelize 모듈에서 ENUM은 인자값을 포함하고 있어야 한다.
- unique + not null 은 primary key 처럼 사용 가능하다.
  
4. 참고 레퍼런스
- [Sequelize](https://sequelize.org/)
  
<br/>

**221227** 
<br/>
1. 개발 내용
- Sequelize를 통해 users 테이블과 JWT Token을 관리할 tokens 테이블 관계 매핑
- util 디렉토리 내 jwt 유틸 함수 작성
  
2. 개발 이슈/고민
- JWT를 이용해 access token과 refresh token을 쿠키에 삽입하여 관리할 수 있는 방법이 뭐가 있을지 고민이 된다.
- 쿠키에 access token과 userid를 key-value 형식으로 담으면 보안에 문제 생기지 않을까 의심스럽다.
- DB에 저장될 refresh token을 적재적소에 꺼내와야 트래픽 문제가 생기지 않을거라고 보는데, 어떻게 구현해야 될지 모르겠다.
  
3. 깨달은 점
- module.expert 를 Array function 형식이 아닌 중괄호를 이용하여 '함수명:{사용할 내용}' 처럼 만들어준다면 가독성이 좋아지는 듯 하다.
- expert와 module.expert는 다른 듯 하다.

4. 참고 레퍼런스
- [Express에서 JWT로 인증시스템 구현하기](https://velog.io/@kshired/Express%EC%97%90%EC%84%9C-JWT%EB%A1%9C-%EC%9D%B8%EC%A6%9D%EC%8B%9C%EC%8A%A4%ED%85%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-Access-Token%EA%B3%BC-Refresh-Token)
- [안전하게 로그인 처리하기](https://overcome-the-limits.tistory.com/611)