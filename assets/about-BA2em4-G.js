import"./main-C8F5p8Aj.js";import{T as w}from"./three-animation-D76hoDgC.js";window.threeAnimation=new w("tree");const t={en:{quote:'"Where art meets code, imagination becomes reality."',welcome:"Welcome, my name is Danny Lahcene.",description:`I started with traditional art, which paved the way for my passion for digital design.
            I studied at 
            <a href="https://www.gobelins.fr/" target="_blank" class="school-link">Gobelins</a> 
            and 
            <a href="https://www.lecolededesign.com/" target="_blank" class="school-link">École de Design Nantes Atlantique (EDNA)</a>, 
            two top schools in France.
            <br><br>
            I bring design and code together to create experiences that feel great and work well. 
            With my artistic background and technical skills, I turn creative ideas into reality.`},fr:{quote:"« Là où l'art rencontre le code, l'imagination devient réalité. »",welcome:"Bienvenue, je m'appelle Danny Lahcene.",description:`J'ai débuté par l'art traditionnel, qui a nourri ma passion pour le design numérique.
            J'ai eu la chance d'étudier à 
            <a href="https://www.gobelins.fr/" target="_blank" class="school-link">Gobelins</a> 
            et à 
            <a href="https://www.lecolededesign.com/" target="_blank" class="school-link">École de Design Nantes Atlantique (EDNA)</a>, 
            deux écoles renommées en France.
            <br><br>
            J'allie design et code pour concevoir des expériences à la fois esthétiques et intuitives. 
            Mon parcours artistique et mes compétences techniques me permettent de donner vie à des idées créatives.`}};document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("lang-en"),c=document.getElementById("lang-fr"),o=document.getElementById("close-bento"),a=document.querySelector(".about-container");s&&c&&(s.addEventListener("click",()=>{document.getElementById("quote").innerHTML=t.en.quote,document.getElementById("welcome-message").innerHTML=t.en.welcome,document.getElementById("description").innerHTML=t.en.description}),c.addEventListener("click",()=>{document.getElementById("quote").innerHTML=t.fr.quote,document.getElementById("welcome-message").innerHTML=t.fr.welcome,document.getElementById("description").innerHTML=t.fr.description})),o&&a&&o.addEventListener("click",()=>{a.classList.toggle("hidden"),o.textContent=a.classList.contains("hidden")?"+":"×"}),document.querySelectorAll(".bento-item").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-10px) scale(1.02)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0) scale(1)"})});let l=0,d=0,n=0,i=0,r=0;document.addEventListener("mousemove",e=>{l=(e.clientX-window.innerWidth/2)*.002,d=(e.clientY-window.innerHeight/2)*.002});function m(){if(!window.threeAnimation||!window.threeAnimation.camera)return;r+=.01,n+=(l-n)*.05,i+=(d-i)*.05;const e=Math.sin(r*.5)*.3,u=Math.cos(r*.4)*.2;window.threeAnimation.camera.position.x+=(n*100+e-window.threeAnimation.camera.position.x)*.05,window.threeAnimation.camera.position.y+=(-i*100+u-window.threeAnimation.camera.position.y)*.05,window.threeAnimation.camera.lookAt(n*20,-i*20,0),requestAnimationFrame(m)}m()});
//# sourceMappingURL=about-BA2em4-G.js.map
