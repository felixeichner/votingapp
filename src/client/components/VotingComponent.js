import React from 'react';
import ChoiceBar from './ChoiceBar';

export default function VotingComponent ({ choices, onRegisterVote }) {
  const totalVotes = choices.reduce((prev, curr) => prev + curr.count, 0);
  return (
    <div>
      <hr className="vote_divider" />
      <div className="vote_body">
        {choices.map((choice) =>
          <ChoiceBar
            key={choice.id}
            percent={choice.count / totalVotes * 100}
            {...choice}
            onClickHandler={() => onRegisterVote(choice)}
          />
        )}
      </div>
    </div>
  );
}

VotingComponent.propTypes = {
  choices: React.PropTypes.array.isRequired
}