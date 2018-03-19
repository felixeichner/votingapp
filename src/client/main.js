import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import VoteController from './components/VoteController';

const votes = [
  {
    id: 'vote_1',
    title: "How was your day?",
    description: "Tell me: How has your day been so far?",
    choices: [
      {id: 'choice_1', title: 'Good', count: 4},
      {id: 'choice_2', title: 'Average', count: 10},
      {id: 'choice_3', title: 'Bad', count: 6}
    ]
  },
  {
    id: 'vote_2',
    title: "What's your favorite fast food meal?",
    description: "Tell me: Which fast food meal do like the most?",
    choices: [
      {id: 'choice_1', title: 'Pizza', count: 7},
      {id: 'choice_2', title: 'Burger', count: 11},
      {id: 'choice_3', title: 'Chicken Nuggets', count: 3}
    ]
  }
];

ReactDOM.render(
  <Layout><VoteController votes={votes} /></Layout>,
  document.getElementById('voteAppMountPoint')
);