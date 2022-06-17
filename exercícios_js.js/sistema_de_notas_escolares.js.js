// SISTEMA DE NOAS ESCOLARES
/*
  Transformar notas escolares
  Crie um algorítmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

  * De 90 para cima    - A
  * Entre 80 - 89      - B
  * Entre 70 - 79      - C
  * Entre 60 - 69      - D
  * Menor que 60       - F
  
  */

let notas = 90

if (notas >= 90) {
  console.log('A')
}
if (notas >= 80 && notas <= 89) {
  console.log('B')
}
if (notas >= 70 && notas <= 79) {
  console.log('C')
}
if (notas >= 60 && notas <= 69) {
  console.log('D')
}
if (notas < 60) {
  console.log('F')
}

// Resolução

let score = 68

function getScore(score) {
  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score <= 89
  let scoreC = score >= 70 && score <= 79
  let scoreD = score >= 60 && score <= 99
  let scoreF = score < 60 && score >= 0

  let scoreFinal

  if (scoreA) {
    scoreFinal = 'A'
  } else if (scoreB) {
    scoreFinal = 'B'
  } else if (scoreC) {
    scoreFinal = 'C'
  } else if (scoreD) {
    scoreFinal = 'D'
  } else if (scoreF) {
    scoreFinal = 'F'
  } else {
    scoreFinal = 'Nota inválida'
  }
  return scoreFinal
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(10))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(76))
console.log(getScore(84))
console.log(getScore(96))
