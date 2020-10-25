import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "./actions";

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    // initialize state
    this.state = { currentGuess: null };

    // bind this for submitGuessWord
    this.submitGuessWord = this.submitGuessWord.bind(this);
  }

  submitGuessWord(e) {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;

    if (guessWord && guessWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  }
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          value={this.state.currentGuess}
          onChange={(e) => this.setState({ currentGuess: e.target.value })}
          placeholder="enter guess"
        ></input>
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary"
          onClick={this.submitGuessWord}
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
