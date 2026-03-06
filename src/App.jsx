import { Suspense, useEffect, useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import Bars from './Components/Bars/Bars'
import CustomerTickets from './Components/CustomerTickets/CustomerTickets'
import Navbar from './Components/Navbar'
import TaskStatus from './Components/TaskStatus/TaskStatus'
import Footer from './Components/Footer/Footer'

const fetchIssue = async() => {
    const res = await fetch("/customerIssue.json")
    return res.json()
}

const issuePromise = fetchIssue();
function App() {
  const [tickets, setTickets] = useState([])

  const [status, setStatus] = useState([])

  const [complete, setComplete] = useState([])

  useEffect(() => {
    fetch("/customerIssue.json")
    .then(res => res.json())
    .then(data => setTickets(data))
  },[])

  const handleStatus = (ticketTitle) => {
    console.log(ticketTitle);
    setStatus([...status, ticketTitle]);
  }

  // const handleComplete = (ticketTask) => {
  //   console.log(ticketTask);
  //   const remaining = status.filter(t => t !== ticketTask)
    
  //   setStatus(remaining)
  //   setComplete([...complete, ticketTask])
  // }
  const handleComplete = (ticketTask) => {
    setStatus(status.filter(t => t.id !== ticketTask.id))

    setComplete([...complete, ticketTask])

    setTickets(tickets.filter(t => t.id !== ticketTask.id))
  }

  console.log(status.length)
  return (
    <>
      <Navbar></Navbar>
      <div className='bg-slate-100 pb-20'>
        <Bars
          status={status}
          complete={complete}
        ></Bars>
      <div className='md:flex gap-8 w-11/12 mx-auto'>
        <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
          <CustomerTickets
              className='w-full md:w-3/4'
              tickets={tickets}
              issuePromise={issuePromise}
              handleStatus={handleStatus}
          ></CustomerTickets>
        </Suspense>
        <TaskStatus
          status={status}
          handleComplete={handleComplete}
          complete={complete}
        ></TaskStatus>
      </div>
      </div>
      <Footer></Footer>

      <ToastContainer
        position='top-center'
      ></ToastContainer>
    </>
  )
}

export default App
