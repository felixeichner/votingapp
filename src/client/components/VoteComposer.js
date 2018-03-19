import React from 'react';

export default class VoteComposer extends React.Component {
  render() {
    return (
      <div>
        <hr className="new_vote_divider" />
        <div className="vote_card">
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