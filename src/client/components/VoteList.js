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
            currentVoteId={currentVoteId}
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