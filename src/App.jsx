import { Suspense } from 'react'
import './App.css'
import Bars from './Components/Bars/Bars'
import CustomerTickets from './Components/CustomerTickets/CustomerTickets'
import Navbar from './Components/Navbar'
import TaskStatus from './Components/TaskStatus/TaskStatus'

const fetchIssue = async() => {
    const res = await fetch("/customerIssue.json")
    return res.json()
}

const issuePromise = fetchIssue();
function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='bg-slate-100'>
        <Bars></Bars>
      <div className='md:flex gap-8 w-11/12 mx-auto border border-red-500'>
        <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
          <CustomerTickets className='w-full md:w-3/4 border border-green-500' issuePromise={issuePromise}></CustomerTickets>
        </Suspense>
        <TaskStatus></TaskStatus>
      </div>
      </div>
    </>
  )
}

export default App
