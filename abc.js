const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const division = document.getElementById('division')
const resultt = document.getElementById('result')

plus.addEventListener('click', () => {
  const firstNumber = document.getElementById('first').value
  const secondNumber = document.getElementById('second').value
  if (firstNumber && secondNumber) {
    const finalNumber = Number(firstNumber) + Number(secondNumber)
    resultt.style.color = 'black';
    resultt.innerText = "Result is  = " + finalNumber
  } else {
    alert("Please fill the data for action")
  }
})



minus.addEventListener('click', () => {
  const firstNumber = document.getElementById('first').value
  const secondNumber = document.getElementById('second').value
  if (firstNumber && secondNumber) {
    const finalNumber = Number(firstNumber) - Number(secondNumber)
    resultt.style.color = 'black';
    resultt.innerText = "Result is  = " + finalNumber
  } else {
    alert("Please fill the data for action")
  }
})

division.addEventListener('click', () => {
  const firstNumber = document.getElementById('first').value
  const secondNumber = document.getElementById('second').value
  if (firstNumber && secondNumber) {
    const finalNumber = Number(firstNumber) / Number(secondNumber)
    resultt.style.color = 'black';
    resultt.innerText = "Result is  = " + finalNumber
  } else {
    alert("Please fill the data for action")
  }
})

multiply.addEventListener('click', () => {
  const firstNumber = document.getElementById('first').value
  const secondNumber = document.getElementById('second').value
  if (firstNumber && secondNumber) {
    const finalNumber = Number(firstNumber) * Number(secondNumber)
    resultt.style.color = 'black';
    resultt.innerText = "Result is  = " + finalNumber
  } else {
    alert("Please fill the data for action")
  }
})