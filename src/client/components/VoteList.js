import React from 'react';
import VoteSummary from './VoteSummary';
import VotingComponent from './VotingComponent';

export default function VoteList({votes, currentVoteId, onSelectVote, onRegisterVote}) {
  return (
    <div>
      {votes.map((vote) =>
        <div key={vote.id} className="vote_card">
          <VoteSummary
            {...vote}
            onSelectVote={() => onSelectVote(vote)}
          />
          { currentVoteId === vote.id ? 
            <VotingComponent
              choices={vote.choices}
              onRegisterVote={(choice) => onRegisterVote(vote, choice)}
            />
          : null }
        </div>
      )}
    </div>
  )
}

VoteList.propTypes = {
  votes: React.PropTypes.array.isRequired,
  currentVoteId: React.PropTypes.string.isRequired,
  onSelectVote: React.PropTypes.func.isRequired,
  onRegisterVote: React.PropTypes.func.isRequired
}