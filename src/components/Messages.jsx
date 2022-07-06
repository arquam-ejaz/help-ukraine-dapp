import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <div style={{ "margin-top": "20px" }}>
        <h2>Donors</h2>
        {messages.reverse().map((message, i) =>
          // TODO: format as cards, add timestamp
          <p key={i} className={message.premium ? 'is-premium' : ''}>
            <span style={{"font-weight":"600"}}>{message.sender}</span>:<br/>
            {message.text}
          </p>
        )}
      </div>
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
