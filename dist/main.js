(()=>{const t=document.querySelector(".parent"),a=document.querySelector(".player"),e=(t,a)=>{const e=document.createElement(t);return a&&(Array.isArray(a)?a.forEach((t=>{e.classList.add(t)})):e.classList.add(a)),e};!async function(){localStorage.removeItem("player1");const n=await fetch("https://reactmarathon-api.herokuapp.com/api/mk/players").then((t=>t.json()));let i=null;!function(a){const n=e("div",["character","div11"]),i=e("img");i.src="http://reactmarathon-api.herokuapp.com/assets/mk/avatar/11.png",n.addEventListener("click",(()=>{localStorage.setItem("player1",JSON.stringify(a)),n.classList.add("active"),setTimeout((()=>{window.location.pathname="fight.html"}),1e3)})),n.appendChild(i),t.appendChild(n)}(n[(23,Math.ceil(23*Math.random()))]),n.forEach((n=>{const c=e("div",["character",`div${n.id}`]),r=e("img");c.addEventListener("mousemove",(()=>{if(null===i){i=n.img;const t=e("img");t.src=i,a.appendChild(t)}})),c.addEventListener("mouseout",(()=>{i&&(i=null,a.innerHTML="")})),c.addEventListener("click",(()=>{localStorage.setItem("player1",JSON.stringify(n)),c.classList.add("active"),setTimeout((()=>{window.location.pathname="fight.html",fight.play(),choose.play()}),1e3)})),r.src=n.avatar,r.alt=n.name,c.appendChild(r),t.appendChild(c)}))}()})();