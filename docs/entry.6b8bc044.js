let d=localStorage.getItem("player-score"),g=localStorage.getItem("computer-score");const c=[...document.querySelectorAll('[class*="score__"] span:last-child')],u=document.querySelector(".choose-attribute"),p=document.querySelector("ul"),y=[...p.querySelectorAll('span[class*="attribute-"]')],l=document.querySelector(".game-results"),o=l.querySelector(".player__choice"),r=l.querySelector(".computer__choice"),m=l.querySelector(".game-results__conclusion p"),L=document.getElementById("play-again"),f=document.getElementById("reset-game"),h=document.querySelector("h1");console.log(c);const I=s=>Math.floor(Math.random()*s.length),S=s=>`<span class="attribute-${s}" data-type="${s}">
      <img src="/icon-${s}.svg" alt="">
    </span>`,v=()=>{u.classList.add("visible"),u.classList.remove("hidden"),l.classList.add("hidden"),l.classList.remove("visible"),o.classList.contains("winner")?o.classList.remove("winner"):o.classList.remove("loser"),r.classList.contains("winner")?r.classList.remove("winner"):r.classList.remove("loser"),m.parentElement.style.opacity="0",p.classList.add("animate"),h.focus()},i=()=>{let s=parseInt(localStorage.getItem("player-score")),a;o.classList.add("winner"),r.classList.add("loser"),m.textContent="You win",a=s+1,localStorage.setItem("player-score",`${a}`),setTimeout(()=>{c[0].innerHTML=localStorage.getItem("player-score")},1500)},n=()=>{let s=parseInt(localStorage.getItem("computer-score")),a;o.classList.add("loser"),r.classList.add("winner"),m.textContent="You lose",a=s+1,localStorage.setItem("computer-score",`${a}`),setTimeout(()=>{c[1].innerHTML=localStorage.getItem("computer-score")},1500)};d===null&&(d=localStorage.setItem("player-score",0));g===null&&(g=localStorage.setItem("computer-score",0));c[0].innerHTML=localStorage.getItem("player-score");c[1].innerHTML=localStorage.getItem("computer-score");p.addEventListener("click",s=>{if(!s.target.closest("button"))return;const e=s.target.querySelector("span:last-child").getAttribute("data-type"),t=y[I(y)].getAttribute("data-type");p.classList.remove("animate"),u.classList.remove("visible"),u.classList.add("hidden"),l.classList.remove("hidden"),l.classList.add("visible"),e==="scissors"&&(t==="paper"||t==="lizard")||e==="paper"&&(t==="rock"||t==="spock")||e==="rock"&&(t==="lizard"||t==="scissors")||e==="lizard"&&(t==="spock"||t==="paper")||e==="spock"&&(t==="scissors"||t==="rock")?i():t==="scissors"&&(e==="paper"||e==="lizard")||t==="paper"&&(e==="rock"||e==="spock")||t==="rock"&&(e==="lizard"||e==="scissors")||t==="lizard"&&(e==="spock"||e==="paper")||t==="spock"&&(e==="scissors"||e==="rock")?n():e===t&&(m.textContent="Nobody won"),o.innerHTML=S(e),r.innerHTML=S(t),setTimeout(()=>{o.firstElementChild.style.opacity="1",o.firstElementChild.style.transform="scale(1)"},500),setTimeout(()=>{r.firstElementChild.style.opacity="1",r.firstElementChild.style.transform="scale(1)"},1e3),setTimeout(()=>{m.parentElement.style.opacity="1"},1500)});L.addEventListener("click",v);f.addEventListener("click",()=>{localStorage.setItem("player-score",0),localStorage.setItem("computer-score",0),c[0].innerHTML=localStorage.getItem("player-score"),c[1].innerHTML=localStorage.getItem("computer-score"),closeModal()});
