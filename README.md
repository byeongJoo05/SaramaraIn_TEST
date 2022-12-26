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