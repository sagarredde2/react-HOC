import React from 'react';
import EnhanceComponent from './HocCounter';

const HoverCounter = props => {
  return <h2 onMouseOver={props.increment}>{props.count}</h2>;
};
export default EnhanceComponent(HoverCounter);
