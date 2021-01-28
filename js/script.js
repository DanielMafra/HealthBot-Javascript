/* VARS */

let userData = [];
let userDataControl = [];
let isTyping = false;

const areaMessages = document.getElementById('area-messages');

const inputMessage = document.getElementById('message');
const sendMessage = document.getElementById('send');

/* TYPING BOT CONTROL */
function typingControl() {
  if (isTyping) {
    document.getElementById('typing').classList.remove('no-typing');
    document.getElementById('typing').classList.add('is-typing');
  } else {
    document.getElementById('typing').classList.remove('is-typing');
    document.getElementById('typing').classList.add('no-typing');
  }
}

/* WRITE */

inputMessage.addEventListener("input", _ => {
  if (inputMessage.value.length > 0) {
    sendMessage.style.background = '#63E2DB'
  } else {
    sendMessage.style.background = '#181E2A'
  }
});

inputMessage.addEventListener("keyup", event => {
  if (event.code === 'Enter') {
    event.preventDefault();
    getData();
  }
});

/* SCROLL */

function autoScroll() {
  const heightPage = document.body.scrollHeight;
  window.scrollTo(0, heightPage);
}

function scrollDiv() {
  areaMessages.scrollTo(0, 10000);
}

/* GET USER DATA */

function getData() {

  if (inputMessage.value != '' && inputMessage.value != undefined && inputMessage.value != null) {
    userData.push(inputMessage.value);
    userDataControl.push(inputMessage.value);
    inputMessage.value = '';
    sendMessage.style.background = '#181E2A'
    controlInteraction();
  }
}

/* CONFIG USER DATA */

function configData() {
  let levelAc = userData[5];
  let compare = levelAc.toUpperCase();
  switch (compare) {
    case 'Nenhuma':
      userData[5] = 1.2;
      break;
    case 'Leve':
      userData[5] = 1.375;
      break;
    case 'Moderada':
      userData[5] = 1.55;
      break;
    case 'Intensa':
      userData[5] = 1.725;
      break;
  }
}

function loadData() {
  userName = userData[0];
  userGender = userData[1];
  userWeight = parseInt(userData[2]);
  userHeight = parseInt(userData[3]);
  userAge = parseInt(userData[4]);
  userActivity = userData[5];
  calcAll();
}

/* START INTERACTION */
function startInteraction() {

  setTimeout(function () {
    areaMessages.innerHTML += `<p class="bot-message">Olá, eu sou o Healthbot e estou aqui para ajudar você a calcular seu IMC, peso ideal e gasto calórico! &#128170&#128526</p><br>`;
    isTyping = true;
    typingControl();
  }, 1000);

  setTimeout(function () {
    areaMessages.innerHTML += `<p class="bot-message">Como posso chamar você?</p>`;
    isTyping = false;
    typingControl();
    autoScroll();
  }, 2000);

}

startInteraction();

/* CONTROL INTERACTION */

function controlInteraction() {

  /* USER NAME */
  if (userDataControl[0] != null) {
    areaMessages.innerHTML += `<p class="user-message">Pode me chamar de ${userData[0]}</p>`;
    userDataControl[0] = null;
    isTyping = true;
    typingControl();
    scrollDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Certo ${userData[0]}, vou precisar de algumas informações pra poder fazer os cálculos</p><br>`;
      scrollDiv();
    }, 3000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Qual o seu sexo? Para ser mais acertivo nos cálculos preciso dessa informação, por favor digite "<span class="info">Masculino</span>" ou "<span class="info">Feminino</span>".</p>`;
      isTyping = false;
      typingControl();
      scrollDiv();
    }, 6000);
  }

  /* USER GENDER */
  if (userDataControl[1] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[1]}</p>`;
    userDataControl[1] = null;
    isTyping = true;
    typingControl();
    scrollDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Legal, quantos quilos você está pesando? <span class="example">Exemplo: 65</span></p>`;
      isTyping = false;
      typingControl();
      scrollDiv();
    }, 3000);
  }

  /* user WEIGHT */
  if (userDataControl[2] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[2]} Kg</p>`;
    userDataControl[2] = null;
    isTyping = true;
    typingControl();
    scrollDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">E qual a sua altura em centímetros? <span class="example">Exemplo: 170</span></p>`;
      isTyping = false;
      typingControl();
      scrollDiv();
    }, 3000);
  }

  /* USER HEIGHT */
  if (userDataControl[3] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[3]} cm</p>`;
    userDataControl[3] = null;
    isTyping = true;
    typingControl();
    scrollDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Certo, já falta pouco. Quantos anos você tem? <span class="example">Exemplo: 25</span></p>`;
      isTyping = false;
      typingControl();
      scrollDiv();
    }, 3000);
  }

  /* USER AGE */
  if (userDataControl[4] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[4]} anos</p>`;
    userDataControl[4] = null;
    isTyping = true;
    typingControl();
    scrollDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Ótimo! Por último preciso saber qual é o seu nível de atividade física, por tanto digite uma das opções a seguir:</p><br>`;
      scrollDiv();
    }, 4000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message"><span class="info">Nenhuma, Leve, Moderada, Intensa</span></p>`;
      isTyping = false;
      typingControl();
      scrollDiv();
    }, 6000);
  }

  /* USER ACTIVITY */
  if (userDataControl[5] != null) {
    areaMessages.innerHTML += `<p class="user-message">${userData[5]}</p>`;
    configData();
    userDataControl[5] = null;
    isTyping = true;
    typingControl();
    scrollDiv();

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Perfeito, já tenho tudo o que preciso para calcular aqui.</p><br>`;
      loadData();
      scrollDiv();
    }, 3000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Mas antes uma informação muito importante, ${userName}:</p><br>`;
      scrollDiv();
    }, 5000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">O resultado que irei te mostrar <span class="info">são apenas médias obtidas através de fórmulas</span>, por tanto você não deve levar ao pé da letra.</p><br>`;
      scrollDiv();
    }, 10000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Sendo assim é fundamental que você procure um nutricionista para que ele possa te orientar com mais precisão!</p><br>`;
      scrollDiv();
    }, 16000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Mas vamos lá, enquanto falava com você já fiz os cálculos aqui... &#128540</p><br>`;
      scrollDiv();
    }, 19000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Seu IMC é de <span class="info">${userIMC} kg/m² - ${resultIMC}</span></p><br>`;
      scrollDiv();
    }, 22000);

    setTimeout(function () {
      switch (resultIMC) {
        case 'Baixo peso':
          areaMessages.innerHTML += `<p class="bot-message">Infelizmente você está abaixo do seu peso ideal, onde a média é de <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          scrollDiv();
          break;
        case 'Peso normal':
          areaMessages.innerHTML += `<p class="bot-message">Parabéns, você está dentro dos limites do seu peso ideal, onde a média é de <span class="info">${idealWeight} Kg &#128516</span></p><br>`;
          scrollDiv();
          break;
        case 'Sobrepeso':
          areaMessages.innerHTML += `<p class="bot-message">Infelizmente você está um pouco acima do seu peso ideal, onde a média é de <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          scrollDiv();
          break;
        case 'Obesidade de grau 1':
          areaMessages.innerHTML += `<p class="bot-message">Infelizmente você está acima do seu peso ideal, onde a média é de <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          scrollDiv();
          break;
        case 'Obesidade de grau 2':
          areaMessages.innerHTML += `<p class="bot-message">Infelizmente você está acima do seu peso ideal, onde a média é de <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          scrollDiv();
          break;
        case 'Obesidade de grau 3':
          areaMessages.innerHTML += `<p class="bot-message">Infelizmente você está acima do seu peso ideal, onde a média é de <span class="info">${idealWeight} Kg &#128533</span></p><br>`;
          scrollDiv();
          break;
      }
    }, 24000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Se você consumir uma quantidade estimada de <span class="info">${resultMetabolic} calorias</span> diariamente, você irá manter o seu peso atual de <span class="info">${userWeight} Kg</span> (mantendo também a mesma rotina de atividade física)</p><br>`;
      scrollDiv();
    }, 33000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Caso você tenha a intenção de mudar o seu peso atual, procure um nutricionista para que ele possa montar um plano alimentar com as calorias necessárias para você.</p><br>`;
      scrollDiv();
    }, 41000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Bom, são essas informações que consigo dar a você até o momento. Espero ter ajudado você, ${userName}! &#128521</p><br>`;
      scrollDiv();
    }, 46000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message"><span class="info">Muito obrigado por utilizar o Healthbot!</span></p>`;
      isTyping = false;
      typingControl();
      scrollDiv();
      //console.log(`Just for control analyse: ${userGender}`)
    }, 49000);

    setTimeout(function () {
      document.getElementById('area-interaction').innerHTML = '<p class="example">Chat finalizado.</p>'
    }, 50000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="credits">Healthbot foi desenvolvido por Daniel Mafra. Acompanhe mais em:<br><br><a class="social" href="https://www.linkedin.com/in/daniel-mafra/"><i class="fab fa-linkedin"></i></a><a class="social" href="https://github.com/DanielMafra"><i class="fab fa-github"></i></a><a class="social" href="https://www.instagram.com/danielmafraoficial/"><i class="fab fa-instagram"></i></a></p>`;
      scrollDiv();
    }, 51000);
  }

}
