import { useState, useEffect } from 'react';
import JobListing from './JobListing';

const jobListings = ({ isHome = false }) => {
    const [jobs, SetJobs] = useState([]);
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch('http://localhost:3000/jobs');
                const data = await res.json();
                SetJobs(data);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                SetLoading(false);
            }
        }
        fetchJobs();
    }, []);

    return (
        <section className='bg-blue-50 px-4 py-10'>
            <div className='container-xl lg:container m-auto'>
                <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                    {isHome ? 'Recent Jobs' : 'Browser Jobs'}
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {loading ? (<h2>Loading..</h2>) : (
                        <>
                            {jobs.map((job) => (
                                <JobListing key={job.id} job={job} />
                            ))}
                        </>
                    )}

                </div>
            </div>
        </section>
    )
}

export default jobListings