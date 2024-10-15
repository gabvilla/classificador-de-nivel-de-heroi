const xpInput = document.querySelector("#heroXp");
const nameInput = document.querySelector("#heroName");
const verifyButton = document.querySelector("#verify-btn");
const form = document.querySelector(".form")
const output = document.querySelector("#output");

const heroi = {
   "nome": "",
   "xp": 0,
   "ranking": ""
}

form.addEventListener(("submit"), (e) => {
   e.preventDefault();
   heroi.nome = nameInput.value;
   heroi.xp = xpInput.value;

   // clean output innerHTML
   output.innerHTML = ""

   if (heroi.xp <= 0){
      window.alert("Por favor, insira um número válido")
      xpInput.value = ""
      nameInput.value = ""
   } else if (heroi.xp <= 1000){
      output.innerHTML = "<p>Seu ranking é:</p><p>Ferro!</p><p>Treine mais!</p>"
   } else if (heroi.xp > 1000 && heroi.xp <= 2000){
      output.innerHTML = "<p>Seu ranking é:</p><p>Bronze!</p><p>Está melhorando!</p>"
   } else if (heroi.xp > 2000 && heroi.xp <= 5000){
      output.innerHTML = "<p>Seu ranking é:</p><p>Prata!</p><p>Quase lá!</p>"
   } else if (heroi.xp > 5000 && heroi.xp <= 7000){
      output.innerHTML = "<p>Seu ranking é:</p><p>Ouro!</p><p>Muito bom!</p>"
   } else if (heroi.xp > 7000 && heroi.xp <= 8000){
      output.innerHTML = "<p>Seu ranking é:</p><p>Platina!</p><p>Boa, aventureiro!</p>"
   } else if (heroi.xp > 8000 && heroi.xp <= 9000){
      output.innerHTML = "<p>Seu ranking é:</p><p>Ascendente!</p><p>Excelente!</p>"
   } else if (heroi.xp > 9000 && heroi.xp <= 10000){
      output.innerHTML = "<p>Seu ranking é:</p><p>Imortal!</p><p>Semi-deus!</p>"
   } else {
      output.innerHTML = "<p>Seu ranking é:</p><p>Radiante!</p><p>Você é o Aspas?</p>"
   }
})