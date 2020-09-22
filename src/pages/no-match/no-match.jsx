import React from 'react';
import { withRouter } from 'react-router-dom';

class NoMatch extends React.Component {
  state = {
    error: null
  };

  componentDidUpdate() {
    const { error } = this.props;
    if (error && !this.state.error) {
      this.setState({ error });
    }
  }

  render() {
    const { error } = this.state;
    return (
      error && (
        <div>
          <h3>
            {error.status} {error.statusText}
          </h3>
        </div>
      )
    );
  }
}

export default withRouter(NoMatch);
