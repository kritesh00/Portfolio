function Cards(props){
    return(
        <>
        <div className ='w-max-screen  h-100 '>
            <div>
                <div className="font-poppins bg-[#1D546D]/20 p-10 rounded-lg shadow-lg hover:scale-105 hover:bg-[#1D546D]/30 transition duration-300 ease-in-out text-center">
                    <img src={props.avatar} height="150" width="150"/>
                    <h2 className="text-2xl font-bold ">{props.title}</h2>
                    <p>{props.description}</p>
                    <button className="mt-4 px-4 py-2 bg-[#5F9598]  text-[#061E29]  rounded hover:bg-[#5F9598]/20 hover:text-white">Read More</button>
                </div>
            </div>
            
        
        </div>
        </>

    )
}
export default Cards;