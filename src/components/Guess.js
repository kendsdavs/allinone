const h = require('react-hyperscript')
const React = require('react')

module.exports = _ =>
  h('h1', 'TODO: Guess App')

// have the computer randomly select number 1 - 10

// and have the user try to guess the number
module.exports = React.createClass({
  getInitialState: function () {
    return {number: (Math.floor(Math.random() * 10)),
     guess: '', comment: ''}
  },

  onChangeHandler: function (e) {
    this.setState({ number: e.target.value })
  },

  setGuess: function (e) {
    this.setState({guess: e.target.value})
  },

  computerResponse: function () {
      if (Number(this.state.guess) > this.state.number) { this.setState({comment: 'Enter a Lower Number'})}
      if (Number(this.state.guess) < this.state.number) { this.setState({comment: 'Enter a Higher Number'})}
      if (Number(this.state.guess) === this.state.number) { this.setState({comment: 'You Win'})}
  },

  render: function () {
    return (
      h('section.form', [
        h('p', 'Enter a number between 1 and 10, then click the Generate Number button and the computer will choose a number between 1 and 10.'),
        h('input', {
          placeholder: 'Enter your number here',
          onChange: this.setGuess,
          value: this.state.guess
        }),
        h('button.ml1', { onClick: this.computerResponse }, 'Computer Generate Number'),
        h('div', this.state.comment)
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

//
