
<h2>완성된 GIF 파일 및 배포 링크</h2>
<h3><a href="http://jeongmin7.surge.sh" target='_blank'>🖥 배포 사이트로 바로가기  </a></h3>


<h2> 프로젝트 실행 방법 </h2>
1. 해당 레포지토리를 다운로드 혹은 클론한 뒤 해당 폴더를 오픈합니다. <br/>
2. npm install을 통해 필요한 패키지를 설치합니다.<br/>
3. npm start를 통해 열린 브라우저를 확인합니다<br/>


<h2> 사용한 스택 목록</h2>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black">

<h2> 구현한 기능 목록 (Software Requirement Specification)</h2>

우선순위|내용|
|---|---|
|필수 구현|게시물 리스트와 게시물 상세 페이지|
||게시물 리스트는 게시판 형태로 구성합니다.|
||각 게시물 상세 페이지에는 댓글 수가 표기되고 게시물 내용의 하단에 댓글이 나열됩니다.|
|추가 구현 | 게시물 리스트를 페이지네이션으로 구현|
||[JSON Placeholder] API 중 포토와 앨범을 이용하여 동적라우팅을 이용한 페이지 구현 |
||[JSON Placeholder] API 중 user에서 사용자 이름을 따와 포스트 내용에서 사용자 이름을 확인 할 수 있도록 구현 |
||리스트에서 특정 게시물 선택시 Modal을 띄워 내용 확인할 수 있도록 구현|
||Tab을 사용하여 post 메뉴 와 album 메뉴를 고를 수 있도록 구현 |
|| Toggle 버튼을 이용하여 다크모드 구현 |
||Search 컴포넌트를 이용하여 게시글을 제목으로 검색할 수 있도록 구현  |
||loading 페이지 구현  |


<h2>구현 방법 혹은 구현하면서 어려웠던 점</h2>
- 전체적인 구조


필수 구현에 대해서 먼저 설명드리자면 리스트를 볼 수 있는 <Main />컴포넌트와 해당 게시물의 상세 내역을 볼 수 있는 <Post /> 모달로 컴포넌트를 분리했습니다.
<Main /> 컴포넌트의 경우 "/"로 라우팅 시켰고 <Post />의 경우 <Main /> 컴포넌트안에서 렌더링이 되기 때문에 따로 연결되는 경로는 없습니다. 




<h2> 직접 작성한 Wireframe 혹은 Prototype </h2>
https://www.figma.com/file/nemugsHmucESJ2EFrfIY4F/Untitled?node-id=0%3A1

<h2>추가 구현 사항에 대한 구현 방법과 설명</h2>
<h3>- 게시물 리스트를 페이지네이션으로 구현</h3>
<h3>- Tab을 사용하여 post 메뉴 와 album 메뉴를 고를 수 있도록 구현 </h3>
<h3>- Toggle 버튼을 이용하여 다크모드 구현 </h3>
<h3>- Search 컴포넌트를 이용하여 게시글을 제목으로 검색할 수 있도록 구현  </h3>

