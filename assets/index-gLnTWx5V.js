(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const m="user",f=e=>{localStorage.setItem(m,JSON.stringify(e))},b=()=>{const e=localStorage.getItem(m);return e?JSON.parse(e):null},h=()=>{localStorage.removeItem(m)},x=(e,n="",r="")=>{const l={username:e,email:n,bio:r};return f(l),l},y=e=>{const n=b();if(!n)return null;const r={...n,...e};return f(r),r},w=()=>!!b(),a={createUser:x,updateUser:y,getUserFromLocalStorage:b,removeUserFromLocalStorage:h,isLoggedIn:w},p=()=>{const e=a.isLoggedIn(),n=e?'<li><a id="logout" href="/login" class="text-gray-600">로그아웃</a></li>':'<li><a href="/login" class="text-gray-600">로그인</a></li>',r=location.hash.replace("#","")||"/",l=(o,s)=>o===s?"text-blue-600":"text-gray-600";return`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
     
      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class="${l(r,"/")}">홈</a></li>
         ${e?`<li><a href="/profile" class="${l(r,"/profile")}">프로필</a></li>`:""}
          ${n}
        </ul>
      </nav>`},g=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`;function L(){return`
<div class="mb-4 bg-white rounded-lg shadow p-4">
  <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
  <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
</div>
`}const I=()=>`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${p()}
  
        <main class="p-4">
          ${a.isLoggedIn()?L():""}
  
          <div class="space-y-4">
  
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">홍길동</p>
                  <p class="text-sm text-gray-500">5분 전</p>
                </div>
              </div>
              <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">김철수</p>
                  <p class="text-sm text-gray-500">15분 전</p>
                </div>
              </div>
              <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">이영희</p>
                  <p class="text-sm text-gray-500">30분 전</p>
                </div>
              </div>
              <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">박민수</p>
                  <p class="text-sm text-gray-500">1시간 전</p>
                </div>
              </div>
              <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">정수연</p>
                  <p class="text-sm text-gray-500">2시간 전</p>
                </div>
              </div>
              <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
          </div>
        </main>
  
        ${g()}
      </div>
    </div>
  </div>
`,S=()=>{const e=a.getUserFromLocalStorage();return`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${p()}

          <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                내 프로필
              </h2>
              <form id="profile-form">
                <div class="mb-4">
                  <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >사용자 이름</label
                  >
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value="${e.username}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >이메일</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="${e.email}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="bio"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >자기소개</label
                  >
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    class="w-full p-2 border rounded"
                  >${e.bio} 자기소개입니다.</textarea
                  >
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-600 text-white p-2 rounded font-bold"
                >
                  프로필 업데이트
                </button>
              </form>
            </div>
          </main>

          ${g()}
        </div>
      </div>
    </div>
  `},$=()=>`
  <div id="root">
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
          </div>
          <button id="login-btn" type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
  </div>
`,E=()=>`
<div id="root">
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
</div>
`,u="/front_5th_chapter1-1",d=function(){const e={};function n(t,i){e[t]=i}function r(t){const i=e[t]||e["/404"],c=e[t]?t:"/404";history.pushState(null,"",`${u}${c}`),i()}function l(t){if(t=t.replace(u,""),!a.isLoggedIn()&&t==="/profile")return l("/login");if(a.isLoggedIn()&&t==="/login")return l("/");r(t)}function o(){let t=window.location.hash.replace("#","")||window.location.pathname;t=t.replace(u,""),!a.isLoggedIn()&&t==="/profile"&&(t="/login"),a.isLoggedIn()&&t==="/login"&&(t="/"),r(t)}function s(){window.addEventListener("hashchange",o),window.addEventListener("load",o),window.addEventListener("popstate",()=>{const t=location.pathname.replace(u,"");if(t==="/login"&&a.isLoggedIn()){history.go(1);return}l(t)}),window.addEventListener("click",function(t){const i=t.target.getAttribute("href");if(i){if(t.preventDefault(),history.pushState(null,"",`#${i}`),t.target.id==="logout"){a.removeUserFromLocalStorage(),e["/login"]();return}(e[i]||e["/404"])()}}),window.addEventListener("submit",function(t){if(t.preventDefault(),t.target.id==="login-form"){const i=document.getElementById("username").value;a.createUser(i),history.pushState(null,"","#/profile"),e["/profile"]()}else if(t.target.id==="profile-form"){const i=document.getElementById("username").value,c=document.getElementById("email").value,v=document.getElementById("bio").value;a.updateUser({username:i,email:c,bio:v}),alert("프로필이 업데이트되었습니다.")}}),l(location.pathname)}return{addRoute:n,navigate:l,init:s}}();d.addRoute("/",()=>{document.body.innerHTML=I()});d.addRoute("/profile",()=>{document.body.innerHTML=S()});d.addRoute("/login",()=>{document.body.innerHTML=$()});d.addRoute("/404",()=>{document.body.innerHTML=E()});d.init();
