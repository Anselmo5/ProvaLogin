let input = document.querySelectorAll('#email')
let h1 = document.querySelectorAll('#informe')
let naovalido = document.querySelectorAll('#Coloqueumemail')

let checkbox = document.querySelector(".checkbox");
let active = 0;

checkbox.onclick = () => {
    if(active == 0){
        checkbox.classList.add("active");
        active = 1;         
    } else {
        checkbox.classList.remove("active");
        active = 0;
    }
}


function setErro(index){
    input[index].style.border = '1px solid #e63636 ';
    h1[index].style.display = 'block';
}

function Errostring(index){
    naovalido[index].style.display ='block' ;
    input[index].style.border = '1px solid #e63636 ';
   
}

function troca(index){
    naovalido[index].style.display ='none' ;
}

const login = () => {
    let email = document.getElementById("email").value
    let substrair = email.split("@");
    let counter = 0

    naovalido[0].style.display = "none";
    h1[0].style.display = "none"

    // Não é e-mail:

    for (i = 0; i <= email.length; i++) {
        console.log(email[i]);
        if (email[i] == "@") {
            counter += 1
            break
        }
    }

    if (counter == 0) {
      Errostring(0)
    } 


    // E-mail não institucional:
    else if (substrair[1] != "estudante.sesisenai.org.br") {  //validação do input email


        setErro(0)

    // Informações corretas:

    } else {
        let hide = document.querySelector('.div-3');
        document.querySelector('.main').innerHTML = `
            <h2> Logado com sucesso</h2>
            <h2> Acesse a página inicial para começar</h2>
           <div class="btn_1"> <button  onclick="voltar()">Início</button> </div>
            `
    }
}

const voltar = () => {    
    window.location.reload()
}

 const cadastrar = () => {
    let hide = document.querySelector('.div-3');
  
   document.querySelector('.main').innerHTML = `

     <div class =" forns-cadastro">
        <h2>CADASTRO</h2>
         <div class="div_cadastro">
             <div class="ipt2">
                 <p id="nome">Nome</p>
                <input id="email" type="text" placeholder="Nome">
            </div>
            <div class="ipt1">
                <p id="email_para">Email</p>
                <input id="email" type="email" placeholder="E-mail">
            </div>
            <div class="ipt3">
                <p id="email_para">Senha</p>
          
                <input id="email" type="password" placeholder="Senha">
            </div>

           <div class ="btn2"> <button onclick="cadastro()">Cadastro</button> </div>
            
        </div>
    </div>
        `
}


















