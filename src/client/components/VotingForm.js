import React from 'react';

export default class VotingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      vote: {
        id: `vote_${Date.now()}`,
        title: "",
        description: "",
        choices: [
          {id: `choice_${Date.now()}`, title: "", count: 0}
        ]
      }
    };
  };
  onChange(e) {
    this.setState({ vote: {
      ...this.state.vote,
      [e.target.name]: e.target.value
    }});
  }
  onChoiceChange(index, title) {
    const { vote } = this.state;
    const choices = vote.choices;
    const choice = choices[index];
    const newChoice = { ...choice, title }
    const newChoices = choices.map((c) => c.id === choice.id ? newChoice : c);
    console.log(!newChoices.find((c) => c.title === ""));
    if(!newChoices.find((c) => c.title === "")) {
      newChoices.push({id: `choice_${Date.now()}`, title: "", count: 0});
    }
    this.setState({
      vote: {
        ...vote,
        choices: newChoices
      }
    });
  }
  onReset() {
    this.setState({
      errorMessage: "",
      vote: {
        id: `vote_${Date.now()}`,
        title: "",
        description: "",
        choices: [
          {id: `choice_${Date.now()}`, title: "", count: 0}
        ]
      }
    });
    this.props.toggleRenderForm();
  }
  onSubmit(e) {
    e.preventDefault();
    const { vote } = this.state;
    if (vote.id && vote.title && vote.choices.length > 1) {
      vote.choices.pop();
      this.props.saveVote(vote);
    } else {
      this.setState({
        errorMessage: "Please provide a question and at least two choices."
      });
    }
  }
  render () {
    return (
      <div className="vote_card">
        <h2 className="form_headline">Ask a new question:</h2>
        {this.state.errorMessage ? <div className="error_message">{this.state.errorMessage}</div> : null}
        <form
          id={`vote_${this.props.votesCount + 1}`}
          className="vote_body"
          onSubmit={(e) => this.onSubmit(e)}
          onReset={() => this.onReset()}>
          <input
            className="input_field"
            autoFocus
            name="title"
            type="text"
            placeholder="enter your question here..."
            value={this.state.vote.title}
            onChange={(e) => this.onChange(e)}/>
          <input
            className="input_field"
            name="description"
            type="text"
            placeholder="enter your description here..."
            value={this.state.vote.description}
            onChange={(e) => this.onChange(e)}/>
          <hr className="vote_divider" />
          {this.state.vote.choices.map((choice, index) => {
            return (<input
              key={`choices_${index}`}
              className="input_field input_field__choice"
              name={`choices_${index}`}
              type="text"
              placeholder={`Choice #${index + 1}...`}
              value={this.state.vote.choices[index].title}
              onChange={(e) => this.onChoiceChange(index, e.target.value)}/>)
          })}
          <div className="button_bar">
            <button className="vote__votes create_button" type="submit">Save Vote</button>
            <button className="vote__votes create_button" type="reset">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

VotingForm.propTypes = {
  saveVote: React.PropTypes.func.isRequired,
  toggleRenderForm: React.PropTypes.func.isRequired,
  votesCount: React.PropTypes.number.isRequired,
}