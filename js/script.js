
const Email = document.getElementById('email');
const Senha = document.getElementById('senha');
const Button = document.getElementById('salvar');
const checkBox = document.getElementById('autoClick')


chrome.storage.local.get("check", (result) => {
    if(result.check){
        checkBox.checked = result.check 
    }else {
        checkBox.checked = false
    }

})
chrome.storage.local.get(["email","senha"], (result) => {

    console.log('okay')

    if(result.email && result.senha){
        console.log(result.email)
        console.log(result.senha)

        Email.value = result.email
        Senha.value = result.senha
    }

});


Button.addEventListener('click',()=>{
    
    const dados = {
        email: Email.value,
        senha: Senha.value
      };
      
      chrome.storage.local.set(dados, () => {
      });

})

checkBox.addEventListener('click', () =>{

    const check = {
        check: checkBox.checked 
    }

    chrome.storage.local.set(check, ()=>{
        console.log(checkBox.checked)
    })

})