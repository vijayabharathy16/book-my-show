import React from 'react'
import { Link } from 'react-router-dom';

function ReserveTicket() {
  return (
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Link class="btn btn-outline-success" type="submit">Search</Link>
      </form>
  )
}

export default ReserveTicket;
