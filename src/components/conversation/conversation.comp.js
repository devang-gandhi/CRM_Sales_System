import React from 'react'
import PropTypes from 'prop-types'
import './conversation.comp.css'

export const Conversation = ({msg}) => {
  if(!msg) return null;

  return msg.map((row, i)=>    <div className="messagehistory mt-3">
    <div key={i} className="send">
        <div className="sender font-weight-bold text-secondary">{row.MessageBy}</div>
        <div className="date">{row.Date}</div>
    </div>
    <div className="message">{row.Message}</div>
    </div>) 

  
}

Conversation.propTypes={
    msg: PropTypes.array.isRequired
}
