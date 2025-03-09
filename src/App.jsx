import {
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider
}
  from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Homecards from "./components/Homecards"
import JobListings from "./components/jobListings"
import ViewAllJobs from "./components/ViewAllJobs"

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={ <h1>My app</h1> } />)
)


const App = () => {
  return <RouterProvider router={router}/>
  // (
  //   <>
  //     <Navbar />
  //     <Hero title='Become a React Dev' subtitle='Find jobs that fits your skill set' />
  //     <Homecards />
  //     <JobListings />
  //     <ViewAllJobs />
  //   </>
  // )
}

export default App