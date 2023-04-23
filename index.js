let gmail = "";
let senha = "";
let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const gerarGmail = () =>{
  let comprimentoGmail = parseInt( Math.random() * 30 );
  comprimentoGmail < 7 ? gerarGmail() : "";
  for(let i = 0; i < comprimentoGmail; i++){
    gmail += caracteres[parseInt( Math.random() * caracteres.length)];
  }
  return gmail + "@gmail.com";
}

const gerarSenha = () =>{
  for(let i = 0; i < 8; i++){
    senha += caracteres[parseInt( Math.random() * caracteres.length)];
  }
  return senha;
}

const gerarConta = () => {
    document.querySelectorAll("h2")[1].textContent = gerarGmail();
    document.querySelectorAll("h2")[2].textContent = gerarSenha();
    gmail = "", senha = "";
}

document.querySelector("button").addEventListener("click", gerarConta);