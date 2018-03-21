import React from 'react';
import VotingForm from './VotingForm';

export default function VoteComposer({ toggleRenderForm, renderFormActive, votesCount, saveVote }) {
  return (
    renderFormActive ?
      <VotingForm
        saveVote={saveVote}
        votesCount={votesCount}
        toggleRenderForm={toggleRenderForm} />
    :
      (<div className="vote_card">
        <div className="vote_summary" onClick={() => toggleRenderForm()}>
          <div className="vote_header">
            <h2 className="vote__title">What do <strong>you</strong> want to know?</h2>
            <div className="vote__votes">Add Voting</div>
          </div>
          <h4 className="vote__subtitle">Click here to ask you own question.</h4>
        </div>
      </div>)
  )
}

VoteComposer.propTypes = {
  toggleRenderForm: React.PropTypes.func.isRequired,
  renderFormActive: React.PropTypes.bool,
  votesCount: React.PropTypes.number.isRequired,
  saveVote: React.PropTypes.func.isRequired
}