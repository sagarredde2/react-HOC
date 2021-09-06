import React from 'react';
import EnhanceComponent from './HocCounter';

const ClickCounter = props => {
  return <button onClick={props.increment}>{props.count}</button>;
};

export default EnhanceComponent(ClickCounter);
