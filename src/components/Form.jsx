import React from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';

export default function Form({ onSubmit, currentUser, amountRaised }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <p><img style={{ "width": "100%" }} src={require('../../assets/ukraine-poster.jpg')}></img></p>
        <p>Provide food and clean water to families, <span style={{ "font-weight": "600" }}>{currentUser.accountId}</span>!</p>
        <span style={{ "font-weight": "600"}}>{
          amountRaised ? <p>{amountRaised} Ⓝ raised of 100 Ⓝ goal</p> : <p>--- Ⓝ raised of 100 Ⓝ goal</p>
        } </span>
        <p>
          <label htmlFor="donation">Donate:</label>
          <input
            autoComplete="off"
            defaultValue={'1'}
            id="donation"
            max={Big(currentUser.balance).div(10 ** 24)}
            min="1"
            step="1"
            type="number"
          />
          <span title="NEAR Tokens">Ⓝ</span>
        </p>
        <button type="submit">
          Donate
        </button>
      </fieldset>
    </form >
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  })
};
