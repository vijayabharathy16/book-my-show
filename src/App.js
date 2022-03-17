import logo from './logo.svg';
import './App.css';
import Bookshow from './Bookshow';
import Ticketbook from './Ticketbook';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { BrowserRouter,Router,Route} from "react-router-dom";
import ReserveTicket from './ReserveTicket';
import Form from './Form';

function App() {
  let movies = [
    {
      id: 1,
      film: "Spiderman part 1",
      ticket: 600,
      houseFull: false,
    },
    {
      id: 2,
      film: "Spiderman part 2",
      ticket: 300,
      houseFull: true,
    },
    {
      id: 3,
      film:"Spiderman part 3",
      ticket: 500,
      houseFull: true,
    },
    {
      id: 4,
      film:"Spiderman part 4",
      ticket: 150,
      houseFull: true,
    },
    {
      id: 5,
      film:"Spiderman part 5",
      ticket: 200,
      houseFull: true,
    },
    {
      id: 6,
      film: "Spiderman part 6",
      ticket: 250,
      houseFull: true,
    },
    {
      id: 7,
      film: "Spiderman 7",
      ticket: 100,
      houseFull: false
    },
  ];

  useEffect (async ()=>{
    let users = await axios.get("http://localhost:3001/users")
    console.log(users.data)
  },[])

  const [tickets , setTickets] = useState([]);
  const [total,setTotal] = useState(0)
  let showPrice = (data) => {
    setTickets([...tickets,data])
    setTotal(total + data.ticket)
  }
   
  let removeTicket = (ticket) =>{
    let index = tickets.findIndex(cTicket =>cTicket.id === ticket.id);
    tickets.splice(index,1);
    setTickets([...tickets])
    setTotal(total - ticket.ticket)
  }
  return (
    <BrowserRouter>
    
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-10'>
          <div className='row'> 
          <Navbar></Navbar>     
           {
             movies.map((movie) =>{
               return <Bookshow pData={movie} handle={showPrice}></Bookshow>
             })
           }
          
          </div>
        </div>
        <div className='col-lg-2'>
          <h2>Movies ({tickets.length})</h2>
          <ol class="list-group list-group-numbered">

           {
             tickets.map((ticket) =>{
               return <Ticketbook removeTicket={removeTicket} ticket={ticket} ></Ticketbook>
             })
           }

          </ol>
          <h2>Total : {total}</h2>
        </div>
      </div>
    </div>
    <Router>
      <Route path = '/' element={<ReserveTicket/>}/>
      <Route path = '/form' element = {<Form/>}/>
    </Router>
    </BrowserRouter>

  );
}

export default App;
