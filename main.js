const init = () => {
  document.querySelector('.output').textContent = 'Let\'s Play!'
  let buttons = document.getElementsByTagName('button')
  let buttonsCount = buttons.length
  for (let i = 0; i < buttonsCount; i++) {
    buttons[i].onclick = function (e) {
      console.log('User chose ', (this.id))
      const computerOptions = ['rock', 'paper', 'scissors']
      let computerSelection = computerOptions[(Math.random() * computerOptions.length) | 0]
      console.log('Computer chose ', computerSelection)
      if (computerSelection === (this.id)) {
        console.log('The result is a tie!')
        document.querySelector('.output').textContent = 'The result is a tie!'
      }
      if (computerSelection === 'rock' && (this.id) === 'scissors') {
        sessionStorage('computerScore +1')
        console.log('Computer Won')
        document.querySelector('.output').textContent = 'The Computer Won'
      }
      if (computerSelection === 'rock' && (this.id) === 'paper') {
        sessionStorage('userScore +1')
        console.log('User Won')
        document.querySelector('.output').textContent = 'You Won!'
      }
      if (computerSelection === 'paper' && (this.id) === 'rock') {
        sessionStorage('computerScore +1')
        console.log('Computer Won')
        document.querySelector('.output').textContent = 'The Computer Won'
      }
      if (computerSelection === 'paper' && (this.id) === 'scissors') {
        sessionStorage('userScore +1')
        console.log('User Won')
        document.querySelector('.output').textContent = 'You Won!'
      }
      if (computerSelection === 'scissors' && (this.id) === 'paper') {
        sessionStorage('computerScore +1')
        console.log('Computer Won')
        document.querySelector('.output').textContent = 'The Computer Won'
      }
      if (computerSelection === 'scissors' && (this.id) === 'rock') {
        sessionStorage('userScore +1')
        console.log('User Won')
        document.querySelector('.output').textContent = 'You Won!'
      }
    }
  }
}
document.addEventListener('DOMContentLoaded', init)
