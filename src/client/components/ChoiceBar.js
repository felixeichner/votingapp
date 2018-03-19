import React from 'react';

export default function ChoiceBar({ title, count, percent, onClickHandler }) {
  return (
    <div className="choice-bar" onClick={onClickHandler}>
      <div className="choice-bar__progress" style={{'width': percent + '%'}}></div>
      <div className="choice-bar__title">{title}</div>
      <div className="choice-bar__badge">{count}</div>
    </div>
  );
}

ChoiceBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  percent: React.PropTypes.number.isRequired,
  onClickHandler: React.PropTypes.func.isRequired
};