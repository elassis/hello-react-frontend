import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETING_REQUEST = 'GET_GREETING_REQUEST';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETING_SUCCESS,
    json,
  };
}
function getGreetings() {
  return (dispatch) => {
    dispatch({ type: GET_GREETING_REQUEST });
    return fetch('http://localhost:3001/greetings')
      .then((response) => response.json())
      .then((json) => dispatch(getGreetingsSuccess(json)));
  };
}

function Greeting(props) {
  const { greetings } = props;
  const { id, message } = greetings[0];
  const { getGreetings } = props;
  return (
    <div className="greeting-container">
      <p><li key={id}>{message}</li></p>
      <button className="btn" type="button" onClick={getGreetings}>update greeting</button>
    </div>
  );
}

Greeting.propTypes = {
  greetings: PropTypes.arrayOf(PropTypes.object),
  getGreetings: PropTypes.func,
};

Greeting.defaultProps = {
  greetings: '',
  getGreetings: null,
};

const structuredSelector = createStructuredSelector({
  greetings: (state) => state.greetings,
});
const mapDispatchToProps = { getGreetings };

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
