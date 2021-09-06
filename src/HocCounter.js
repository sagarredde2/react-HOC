import React from 'react';

const EnhanceComponent = OrignComponent => {
  class ModComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0
      };
    }
    increment = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <div>
          <OrignComponent
            count={this.state.count}
            increment={this.increment}
            name="Milk And Sugar"
          />
        </div>
      );
    }
  }

  return ModComponent;
};

export default EnhanceComponent;
