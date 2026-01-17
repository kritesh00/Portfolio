function Education(){
    return(
        <>
        <div className=" font-poppins max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-[#1D546D]/20 rounded-lg my-20" id="education">
    <h1 className="text-3xl font-bold mb-8 text-center">Education</h1>
<ol className="relative border-s border-default">                  
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
        <time className="text-sm font-normal leading-none text-body">Current</time>
        <h3 className="text-lg font-semibold text-heading my-2">Bachelor Of Engineering in Computer Enginnering</h3>
        <p className="mb-4 text-base font-normal text-body">Pursuing my bachelor degree in Computer Engineering at Himalaya College Of Engineering affiliated to Tribhuvan University.</p>
       
    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-[#5F9598] rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
        <time className="text-sm font-normal leading-none text-body">2023</time>
        <h3 className="text-lg font-semibold text-heading my-2">10+2</h3>
        <p className="text-base font-normal text-body">Completed my 10+2 education from Naya Aayam Multidisciplinary Institute (NAMI) College upholding a 3.40 GPA</p>
    </li>
    <li className="ms-4">
        <div className="absolute w-3 h-3 bg-[#5F9598] rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
        <time className="mb-1 text-sm font-normal leading-none text-body">2021</time>
        <h3 className="text-lg font-semibold text-heading my-2">SEE</h3>
        <p className="text-base font-normal text-body">Completed my Secondary Education Examination (SEE) from New Buddha Prakash Secondary School with a 3.90 GPA.</p>
    </li>
</ol>



        </div>
        
        
        </>
    )
}
export default Education;