let usrname = document.getElementById('username')
let password = document.getElementById('password')
let button = document.getElementById('loginbtn')

try {

    console.log('Try')

    chrome.storage.local.get(["email","senha"], (result) => {
    
        if(result.email && result.senha){
            usrname.value = result.email
            password.value = result.senha
        }
    
    });
    
    const eventoClique = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      chrome.storage.local.get("check", (result) => {
        if(result.check){
            button.dispatchEvent(eventoClique)
        }
    
    })
        
} catch (error) {
    console.log('Catch')

    const buttonCancelar = document.getElementById('single_button64c3c2afca11a14')

    const eventoClique = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });

    buttonCancelar.dispatchEvent(eventoClique)

    
}


    


