function Cards(props){
    return(
        <>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 flex justify-center'>
            <div className="w-full max-w-sm">
                <div className="font-poppins bg-[#1D546D]/20 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-[#1D546D]/30 transition duration-300 ease-in-out text-center">
                    <img src={props.avatar} alt="project-img" className="mx-auto mb-4 max-w-full h-auto"/>
                    <h2 className="text-2xl font-bold">{props.title}</h2>
                    <p className="text-sm sm:text-base">{props.description}</p>
                    <button className="mt-4 px-4 py-2 bg-[#5F9598] text-[#061E29] rounded hover:bg-[#5F9598]/20 hover:text-white">
                        <a href={props.link}>Read More</a>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Cards;