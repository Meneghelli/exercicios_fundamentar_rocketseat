/* Celsius em Fahrenheit

Crie uma função que receba uma string em calcius ou fahrenheit e faça a transformação de uma unidade para outra

C = (F - 32) * 5/9
F = C * 9/5 + 32

*/
let temperature = {
  celsius: (('F' - 32) * 5) / 9,
  fahrenheit: ('C' * 9) / 5 + 32
}

function change(string) {
  let total = 0

  for (let string of string) {
    total += value
  }
  return total
}

function changeTemperature() {
  const calculateCelsius = sum(temperature.celsius)
  const calculateFahrenheit = sum(temperature.fahrenheit)
}

//RESOLUÇÃO

//transformDegree('50F')
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  //Fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  //Fluxo ideal, F -> C (somente para fahrenheit para celsius)
  let upgradeDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  let degreeSign = 'C'

  //Fluxo alterantivo  C -> F
  if (celsiusExists) {
    upgradeDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = celsius => (celsius * 9) / 5 + 32
    degreeSign = 'F'
  }

  return formula(upgradeDegree) + degreeSign
}
try {
  console.log(transformDegree('10C')) //Mudar sempre de C para F dependendo qual está sendo mudado
  console.log(transformDegree('50F'))
  transformDegree('50Z')
} catch (error) {
  console.log(error.message)
}
