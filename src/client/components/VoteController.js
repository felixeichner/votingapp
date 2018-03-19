import React from 'react';
import VoteList from './VoteList';
import VoteComposer from './VoteComposer';

export default class VoteController extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      votes: props.votes
    }
  }
  setCurrentVote(vote) {
    this.setState({ currentVoteId: vote && vote.id !== this.state.currentVoteId ? vote.id : null });
  }
  registerChoice(v, c) {
    const newVote = {
      ...v,
      choices: v.choices.map(
        (choice) => (choice.id === c.id ? {...choice, count: choice.count + 1} : choice))
    }
    return newVote;
  }
  registerVote(v, c) {
    const newVotes = this.state.votes.map(
      (vote) => vote.id === v.id ? this.registerChoice(v, c) : vote);
    this.setState({
      votes: newVotes
    });
  }
  render() {
    const { votes, currentVoteId } = this.state;
    return (
      <div>
        <div>
          <VoteList
            votes={votes}
            currentVoteId={currentVoteId}
            onSelectVote={(vote) => this.setCurrentVote(vote)}
            onRegisterVote={(vote, choice) => this.registerVote(vote, choice)}
          />
        </div>
        <div><VoteComposer /></div>
      </div>
    )
  }
}