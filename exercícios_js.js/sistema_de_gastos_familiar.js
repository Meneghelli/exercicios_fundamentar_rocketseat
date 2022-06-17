/* SISTEMA DE GASTOS FAMILIAR
  Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * Receitas: []
    * Despesas: []
  
  Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/
let family = {
  incomes: [5000, 3000, 4000],
  expenses: [800, 250, 500, 1250]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }
  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses

  const itsOk = total >= 0

  let balanceText = 'Negativo'

  if (itsOk) {
    balanceText = 'Positivo'
  }
  console.log(`Seu saldo é ${balanceText}: R$ ${total}`)
}

calculateBalance()
