import"./main-YUFwIMYL.js";import{T as g}from"./three-animation-Diz8w3v2.js";import"./main-G5sCyNoy.js";window.threeAnimation=new g("tree");const t={en:{quote:'"Where art meets code, imagination becomes reality."',welcome:"Welcome, my name is Danny Lahcene.",description:`I started with traditional art, which paved the way for my passion for digital design.
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
            Mon parcours artistique et mes compétences techniques me permettent de donner vie à des idées créatives.`}};document.addEventListener("DOMContentLoaded",()=>{const l=document.getElementById("lang-en"),d=document.getElementById("lang-fr"),r=document.getElementById("close-bento"),s=document.querySelector(".about-container");l&&d&&(l.addEventListener("click",()=>{document.getElementById("quote").innerHTML=t.en.quote,document.getElementById("welcome-message").innerHTML=t.en.welcome,document.getElementById("description").innerHTML=t.en.description}),d.addEventListener("click",()=>{document.getElementById("quote").innerHTML=t.fr.quote,document.getElementById("welcome-message").innerHTML=t.fr.welcome,document.getElementById("description").innerHTML=t.fr.description})),r&&s&&r.addEventListener("click",()=>{s.classList.toggle("hidden"),r.textContent=s.classList.contains("hidden")?"+":"×"}),document.querySelectorAll(".bento-item").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-10px) scale(1.02)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0) scale(1)"})});let m=0,u=0,o=0,a=0,c=0;document.addEventListener("mousemove",e=>{m=(e.clientX-window.innerWidth/2)*.002,u=(e.clientY-window.innerHeight/2)*.002});function w(){if(!window.threeAnimation||!window.threeAnimation.camera)return;c+=.01,o+=(m-o)*.05,a+=(u-a)*.05;const e=Math.sin(c*.5)*.3,i=Math.cos(c*.4)*.2;window.threeAnimation.camera.position.x+=(o*100+e-window.threeAnimation.camera.position.x)*.05,window.threeAnimation.camera.position.y+=(-a*100+i-window.threeAnimation.camera.position.y)*.05,window.threeAnimation.camera.lookAt(o*20,-a*20,0),requestAnimationFrame(w)}w();const n=document.querySelector(".curriculum");n&&n.addEventListener("click",()=>{const e="cv.pdf",i=document.createElement("a");i.href=e,i.download="Danny_Lahcene_CV.pdf",n.classList.add("loading");const h=n.innerHTML;n.innerHTML=`
                <div class="download-icon">↓</div>
                <h3>Downloading...</h3>
                <p class="cv-info">Please wait</p>
            `,setTimeout(()=>{i.click(),n.classList.remove("loading"),n.innerHTML=h},800)})});
//# sourceMappingURL=about-CliLV7iO.js.map
