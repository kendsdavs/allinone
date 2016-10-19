const h = require('react-hyperscript')
const React = require('react')

module.exports = _ =>
  h('h1', 'TODO: Guess App')

// have the computer randomly select number 1 - 10
var Image = _ => h('div', [
             h('img', { src:'http://www.slotclub.co.uk/wp-content/uploads/2016/01/Win.jpg' })
    ])


// and have the user try to guess the number
module.exports = React.createClass({

  getInitialState: function () {
    return {number: (Math.floor(Math.random() * 10)),
     guess: '', comment: '', compGuess: '', userRes:''}
  },

  onChangeHandler: function (e) {
    this.setState({ number: e.target.value })
  },

  setGuess: function (e) {
    this.setState({guess: e.target.value})
  },
  setUserRes: function (e) {
    this.setState({ userRes: e.target.value})
  },
  computerResponse: function () {
      if (Number(this.state.guess) > this.state.number) { this.setState({comment: 'Enter a Lower Number'})}
      if (Number(this.state.guess) < this.state.number) { this.setState({comment: 'Enter a Higher Number'})}
      if (Number(this.state.guess) === this.state.number) { this.setState({comment: 'You Win'})}
  },
   computerGuess: function () {
     this.setState({ compGuess: (Math.floor(Math.random() * 10)) })
   },

   userResponse: function () {
   if(this.state.userRes === 'lower') { this.setState({ compGuess: this.state.compGuess - 1 }) }
   if(this.state.userRes === 'higher') { this.setState({ compGuess: this.state.compGuess + 1 }) }
   if(this.state.userRes === 'winner') { this.setState({ compGuess: 'winner' }) }

 },
  render: function () {
    return (
      h('div.pa4', [
        h('div', [
        h('p', 'Enter a number between 1 and 10, then click the Generate Number button and the computer will choose a number between 1 and 10.'),
        h('input', {
          placeholder: 'Enter your number here',
          onChange: this.setGuess,
          value: this.state.guess
        }),
        h('button.ml1', { onClick: this.computerResponse }, 'Computer Generate Number'),
        h('div', this.state.comment)
      ]),
      h('div', [
        h('p', 'Now play with the computer guessing the number.'),
        h('button.ml1', { onClick: this.computerGuess}, 'Get a guess'),
        h('div.pa1', [this.state.compGuess === 'winner' ? h(Image) : this.state.compGuess]),
        h('input', {
          placeholder: 'Say higher, lower, win',
          onChange: this.setUserRes,
          value: this.state.userRes
        }),
        h('button.ml1', { onClick: this.userResponse }, 'Enter'),


      ])
      ])
    )
  }
})



// and the computer will respond higher or lower
// until

// ----

// have the user think of a number 1 - 10, and
// make the computer guess the number
// by the user providing input
// higher or lower
