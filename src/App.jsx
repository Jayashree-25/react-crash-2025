import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Homecards from "./components/Homecards"
import JobListings from "./components/jobListings"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title='Become a React Dev' subtitle='Find jobs that fits your skill set' />
      <Homecards />
      <JobListings />
    </>

  )
}

export default App