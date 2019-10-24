/**
 *
 * Sample
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import makeSelectSample from './selectors';
import { callfunctionAction as callfunctionActionCreator } from './actions';
// eslint-disable-next-line react/prefer-stateless-function
export class Sample extends React.Component {
  componentDidMount() {
    const { callfunction } = this.props;
    callfunction();
  }

  render() {
    const { callfunction } = this.props;
    return (
      <h1>
        <button onClick={() => callfunction()}>Send OTP</button>
      </h1>
    );
  }
}

Sample.propTypes = {
  // eslint-disable-next-line react/no-deprecated
  // eslint-disable-next-line react/no-unused-prop-types
  // eslint-disable-next-line react/no-deprecated
  callfunction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  Sample: makeSelectSample(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    callfunction: () => dispatch(callfunctionActionCreator()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Sample);
