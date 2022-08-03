
<h2>완성된 GIF 파일 및 배포 링크</h2>
![앨범 확인](https://user-images.githubusercontent.com/91598778/182533582-1fbfd23a-3ad7-4152-ba09-5697695434d0.gif)
![포스트 확인](https://user-images.githubusercontent.com/91598778/182533571-3a53f1d4-5815-48d7-afe3-9d6f108dd1bf.gif)
![페이지네이션](https://user-images.githubusercontent.com/91598778/182533546-5feb612b-0350-417e-8b51-f14c340e4179.gif)
![다크모드](https://user-images.githubusercontent.com/91598778/182533562-f2d1a9ae-e20a-4d95-b4a4-b53853af1501.gif)
![검색하기](https://user-images.githubusercontent.com/91598778/182533570-6be60436-0463-4177-9a94-b5f951fcfd55.gif)


<h3><a href="http://jeongmin7.surge.sh" target='_blank'>🖥 배포 사이트로 바로가기  </a></h3>

*** 
<h2> 프로젝트 실행 방법 </h2>
1. 해당 레포지토리를 다운로드 혹은 클론한 뒤 해당 폴더를 오픈합니다. <br/>
2. npm install을 통해 필요한 패키지를 설치합니다.<br/>
3. npm start를 통해 열린 브라우저를 확인합니다<br/>

***

<h2> 사용한 스택 목록</h2>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black">

***
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

*** 

<h2>구현 방법 혹은 구현하면서 어려웠던 점</h2>

* 필수 구현
  + 리스트를 볼 수 있는 <Main />컴포넌트와 해당 게시물의 상세 내역을 볼 수 있는 <Post /> 모달로 컴포넌트를 분리했습니다.
  + <Main /> 컴포넌트의 경우 "/"로 연결 시켰고 <Post />의 경우 따로 연결되는 경로는 없으며 모달창으로 렌더링이 됩니다.  
  + styled-component를 사용하여 레이아웃을 구현했습니다. 

* 어려웠던 점 
  + useEffect 사용시 스스로 dependency를 찾는데 어려움을 겪었습니다. 
*** 

<h2> 직접 작성한 Wireframe 혹은 Prototype </h2>
<h3><a href="https://www.figma.com/file/nemugsHmucESJ2EFrfIY4F/Untitled?node-id=0%3A1" target='_blank'>🖥 와이어프레임으로 바로가기  </a></h3>

***
<h2>추가 구현 사항에 대한 구현 방법과 설명</h2>

* 게시물 리스트를 페이지네이션으로 구현
   + 리스트를 한 페이지당 10개씩 총 10개의 페이지로 구성하였습니다. 
     - 구현 방법:
     1. 총 게시글을 한 페이지당 보여줄 개수 만큼 나눈 수를 총 페이지 수로 지정합니다. 
     2. 총 페이지의 개수 만큼 array를 만들어 각 페이지로 이동할 수 있는 버튼을 만들어 줍니다.
     3. 한 페이지에서 보여줄 게시글(offset)은 (현재페이지 -1) * 한 페이지당 보여주는 개수입니다. 
     4. 게시글 목록을 만들기 위해서는 slice를 이용하여 각 페이지에 해당되는 게시글을 잘라주고 맵핑을 통해 렌더링 합니다. 
     
* Tab을 사용하여 post 메뉴 와 album 메뉴를 고를 수 있도록 구현 
   + post나 album 탭을 눌러 각 메뉴를 볼 수 있습니다.
     - 구현 방법:
     1. Post와 Album을 배열에 넣은 다음 맵핑을 통해 해당되는 메뉴를 만듭니다.
     2. 메뉴를 만들 때 선택된 경우와 선택되지 않은 경우로 나눠서  className을 설정합니다.  
     3. 클래스 네임이 설정된다면 그에 맞는 css를 구현하여 선택되었을 때와 그렇지 않았을 때를 구별합니다. 
     
   
* Toggle 버튼을 이용하여 다크모드 구현 
  + 토글버튼을 눌러 다크모드로 전환하고 취소할 수 있습니다. 
     - 구현 방법:
     1. styled-component를 이용하여 구현하기 때문에 Globalstyle을 만들어 줍니다. 
     2. 다크모드일 때는 배경색과 글자색이 바뀌기 때문에 body의 배경색과 글자색을 지정해 줍니다. 
     3. 다크모드를 구현하기 위해서는 다크모드 일때와 다크모드가 아닐때가 필요하기 때문에 따로 style 파일을 작성하여 다크모드일때 적용하는 색상과 그렇지 않을  때 적용하는 색상을 지정해줍니다. 
     4. app.js에서 return 되는 항목을 글로벌스타일로 묶어주고 묶어준 내역을 <ThemeProvider theme=/>으로 한번 더 묶어줍니다. 
     5. 이 후 토글과 연결하여 다크모드를 실행합니다.  
   
* Search 컴포넌트를 이용하여 게시글을 제목으로 검색할 수 있도록 구현 
  + 게시글을 제목의 일부로 검색할 수 있습니다. 
       - 구현 방법:
     1. 검색하기 위해서는 data가 검색하는 내역을 포함하고 있는지 그렇다면 그 해당 내역을 반환하는 함수가 필요합니다. 
    

***
