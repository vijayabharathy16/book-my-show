import React from 'react'

function Ticketbook(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{props.ticket.film}</div>
      {props.ticket.ticket}
      
    </div>
    <button onClick={() => props.removeTicket(props.ticket)}  class="badge bg-primary rounded-pill">X</button>
  </li>
  )
}

export default Ticketbook;


