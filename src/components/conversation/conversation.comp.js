import React from 'react'
import PropTypes from 'prop-types'
import './conversation.comp.css'


export const Conversation = ({msg}) => {
    
  if(!msg) return null;


  return msg.map((row, i)=>
    <div key={i} className="messagehistory mt-3">
    <div className="send">
        <div className="sender font-weight-bold text-secondary">{row.messageby}</div>
        <div className="date">{row.date && new Date(row.date).toLocaleString()}</div>
    </div>
    <div className="message">{row.message}</div>
    </div>) 

  
}

Conversation.propTypes={
    msg: PropTypes.array.isRequired
}
