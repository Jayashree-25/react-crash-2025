import logo from '../assets/logo.svg'
const Navbar = () => {
    return (
        <nav className='bg-indigo-700 border-b border-indigo-500'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                        <a
                            className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                            <img className="h-10 w-auto" src={logo} alt="React job" />
                            <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                                React Jobs
                            </span>
                        </a>
                    </div>

                    {/* Right Section - Navigation Links */}
                    <div className='hidden md:flex space-x-6'>
                        <a href="/" className='text-white text-lg hover:text-gray-300'>
                            Home
                        </a>
                        <a href="/jobs" className='text-white text-lg hover:text-gray-300'>
                            Jobs
                        </a>
                        <a href="/add-job" className='text-white text-lg hover:text-gray-300'>
                            Add Job
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar