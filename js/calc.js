/* USER DATA */
let userHeight = 170;
let userWeight = 65;
let userIMC = 0;
let userActivity = 1.2;
let userGender = '';
let userAge = 25;
let userName = '';

/* VARS CALC IMC */
let resultCalcIMC = 0;
let resultIMC = '';

/* VARS CALC IDEAL WEIGHT */
let idealWeight = 0;

/* VARS CALC METABOLIC */
let resultMetabolic = 0;

/* FUNCTION FOR CALC IMC */
function calcIMC(height, weight) {

  resultCalcIMC = weight / ((height / 100) * (height / 100));
  userIMC = resultCalcIMC - (resultCalcIMC % .01);

  //console.log(`Valor IMC: ${userIMC}`)

}

/* execute CALC IMC */
//calcIMC(userHeight, userWeight);

/* FUNCTION FOR VALIDATE IMC */
function validateIMC(imc) {

  if (imc < 18.50) {
    resultIMC = 'Baixo peso';
  } else if (imc >= 18.50 && imc <= 24.99) {
    resultIMC = 'Peso normal';
  } else if (imc >= 25 && imc <= 29.99) {
    resultIMC = 'Sobrepeso';
  } else if (imc >= 30 && imc <= 34.99) {
    resultIMC = 'Obesidade de grau 1';
  } else if (imc >= 35 && imc <= 39.99) {
    resultIMC = 'Obesidade de grau 2';
  } else {
    resultIMC = 'Obesidade de grau 3';
  }

  //console.log(`Tipo IMC: ${resultIMC}`)

}

/* execute VALIDATE IMC */
//validateIMC(userIMC);


/* FUNCTION CALC IDEAL WEIGHT */
function calcWeight(height, gender) {

  let userGenderCalc = gender.toUpperCase();

  if (userGenderCalc == 'MASCULINO') {
    idealWeight = (height - 100) * 0.90;
  } else {
    idealWeight = (height - 100) * 0.85;
  }

  //console.log(`Peso ideal: ${idealWeight}kg`)

}

/* execute CALC IDEAL WEIGHT */
//calcWeight(userHeight, userGender);

/* FUNCTION CALC METABOLIC */
function calcMetabolic(height, weight, activity, gender, age) {

  let userGenderCalc = gender.toUpperCase();

  if (userGenderCalc == 'MASCULINO') {
    resultMetabolic = parseInt(((13.75 * weight) + (5 * height) - (6.76 * age) + 66.5) * activity);
  } else {
    resultMetabolic = parseInt(((9.56 * weight) + (1.85 * height) - (4.68 * age) + 665) * activity);
  }

  //console.log(`Gasto calórico: ${resultMetabolic} calorias`)

}

/* execute CALC METABOLIC */
//calcMetabolic(userHeight, userWeight, userActivity, userGender, userAge);


/* EXECUTE CALC AFTER USER SEND DATA */
function calcAll() {

  /* execute CALC IMC */
  calcIMC(userHeight, userWeight);

  /* execute VALIDATE IMC */
  validateIMC(userIMC);

  /* execute CALC IDEAL WEIGHT */
  calcWeight(userHeight, userGender);

  /* execute CALC METABOLIC */
  calcMetabolic(userHeight, userWeight, userActivity, userGender, userAge);

}