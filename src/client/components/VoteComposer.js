import React from 'react';
import VotingForm from './VotingForm';

export default class VoteComposer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  toggleRenderForm() {
    this.setState({
      active: !this.state.active
    });
  }
  render() {
    if (this.state.active) {
      return (
        <div className="vote_card">
          <h2 className="form_headline">Ask a new question:</h2>
          <div className="vote_body">
            <input
              className="input_field"
              autoFocus
              name="input_title"
              type="text"
              placeholder="enter your question here..." />
            <input
              className="input_field"
              name="input_subtitle"
              type="text"
              placeholder="enter your description here..." />
          <hr className="vote_divider" />
            <input
              className="input_field input_field__choice"
              name="input_choice"
              type="text"
              placeholder="Choice #1..." />
            <div className="button_bar">
              <button className="vote__votes create_button">Save Vote</button>
              <button className="vote__votes create_button">Cancel</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="vote_card">
          <div className="vote_summary" onClick={() => this.toggleRenderForm()}>
            <div className="vote_header">
              <h2 className="vote__title">What do <strong>you</strong> want to know?</h2>
              <div className="vote__votes">Add Voting</div>
            </div>
            <h4 className="vote__subtitle">Click here to ask you own question.</h4>
          </div>
        </div>        
      );
    }
  }
}