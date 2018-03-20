import React from 'react';

export default class VotingForm extends React.Component {
  render() {
    return (
      <div>
        <hr className="vote_divider" />
        <div className="vote_body">
        <input
          className="input_field"
          autoFocus name="input_title"
          type="text"
          placeholder="enter your question here..." />
        <input
          className="input_field"
          autoFocus name="input_subtitle"
          type="text"
          placeholder="enter your description here..." />
        <input
          className="input_field input_field__choice"
          autoFocus name="input_choice"
          type="text"
          placeholder="Choice #1..." />
        <button className="choice-bar__badge">Save Vote</button>
        <button className="choice-bar__badge">Cancel</button>
        </div>
      </div>
    );
  }
}