{
const el=document.getElementById("pic");
if(el){
const cols=["#f28a17","#d81f6b","#0f9488","#7b4fe0","#f2c014"];
el.innerHTML=`<path class="str" d="M0 7 H1200"/>`+Array.from({length:20},(_,i)=>{const x=i*60+4,z=[0,1,2,3,4,5,6,7,8].map(k=>`${x+52-k*6.5},${k%2?66:58}`).join(" ");
  return `<g><polygon points="${x},7 ${x+52},7 ${z}" fill="${cols[i%5]}"/><circle class="h" cx="${x+26}" cy="30" r="9"/><circle class="h" cx="${x+11}" cy="18" r="3.5"/><circle class="h" cx="${x+41}" cy="18" r="3.5"/><circle class="h" cx="${x+11}" cy="44" r="3.5"/><circle class="h" cx="${x+41}" cy="44" r="3.5"/><path class="h" d="M${x+26} 44 l5 6 -5 6 -5 -6z"/></g>`}).join("");
}
}
