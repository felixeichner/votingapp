import React from 'react';

export default function VoteSummary(
  { title, description = "", choices, onSelectVote }) {
  const totalVotes = choices.reduce((prev, curr) => prev + curr.count, 0);
  return (
    <div className="vote_summary" onClick={onSelectVote}>
      <div className="vote_header">
        <h2 className="vote__title">{title}</h2>
        <div className="vote__votes">{totalVotes} Votes</div>
      </div>
      <h4 className="vote__subtitle">{description}</h4>
    </div>
  );
}

VoteSummary.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  choices: React.PropTypes.array.isRequired,
  onSelectVote: React.PropTypes.func.isRequired
}