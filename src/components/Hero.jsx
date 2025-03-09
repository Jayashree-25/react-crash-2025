const Hero = ({ title, subtitle }) => {
    
    return (
        <section className="bg-indigo-700 py-10 mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">Become a React Dev</h1>
                    <p className="my-4 text-xl text-white">Find jobs that fits your skill set</p>


                    {/* else you can do like this..
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">{title}</h1>
                    <p className="my-4 text-xl text-white">{subtitle}</p> */}

                    
                </div>
            </div>
        </section>
    )
}

export default Hero