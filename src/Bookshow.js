import React from 'react'

function Bookshow(props) {
    return (
        <div className='col-lg-3 ms-2 mb-3'>
        <div className="card" style={{ width: "18rem" }}>
              <img src="https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/spidermannowayhome_onesheet_1400x2100_he.jpg?itok=ruA2hZJw/200x150" class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.pData.film.src}</h5>
                <h6>{props.pData.ticket}</h6>  
                {
                    props.pData.houseFull === true ?   <span>Ticket Avalible</span> :  <span>TicketNot Avalible</span>
                }
                <p className="card-text">Enjoy The Movies</p>
                <button disabled={!props.pData.houseFull} onClick={() => props.handle(props.pData)} className="btn btn-primary">BookTicket</button>
            </div>
        </div>
        </div>
    )
}
// "https://via.placeholder.com/200x150"

export default Bookshow;