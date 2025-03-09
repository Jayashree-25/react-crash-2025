import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />} />
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  // (
  //   <>
  //     <Navbar />
  //     <Hero title='Become a React Dev' subtitle='Find jobs that fits your skill set' />
  //     <Homecards />
  //     <JobListings />
  //     <ViewAllJobs />
  //   </>
  // )
)}

export default App