
const DATA_ANDY="28/10/2001";

for(let i=0;i<40;i++){
 let p=document.createElement("div");
 p.style.width=p.style.height=(Math.random()*6+2)+"px";
 p.style.left=Math.random()*100+"vw";
 p.style.animationDuration=(Math.random()*10+5)+"s";
 particles.appendChild(p);
}

function show(id){
 document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
 document.getElementById(id).classList.add("active");
}

function next1(){
 if(!nome.value||!nasc.value){alert("Preencha os campos");return;}
 show("s2");
}

function verify(){
 if(senha.value!==DATA_ANDY){
  erro.textContent="❌ Data incorreta.";
  return;
 }
 show("s3");
 let w=0;
 let t=setInterval(()=>{
   w+=5; fill.style.width=w+"%";
   if(w>=100){
    clearInterval(t);
    intro();
   }
 },80);
}

function intro(){
 show("s4");
 const text=`🎮 Jogadora encontrada: ${nome.value}

🏆 Compatibilidade de Duo: 100%
❤️ Nível de importância: Máximo
✨ Memórias desbloqueadas: Incontáveis

Você entrou no meu time e tornou tudo mais especial.

Então eu queria fazer um convite...
Não para uma partida.
Não para uma ranked.
Mas para a campanha mais importante da minha vida.`;

 let i=0;
 let timer=setInterval(()=>{
   type.innerHTML += text[i]||"";
   i++;
   if(i>text.length) clearInterval(timer);
 },25);
}

function proposal(){
 nomePedido.innerText=nome.value + ",";
 show("s5");
}

function accept(){
 final.innerText="❤️ "+nome.value+" entrou no lobby de Andy.";
 show("s6");
}
