import Cards from "./Cards";
import Technologystack from "./Technologystack";
function Welcome(){
    return(
        <>
       

  <div className="w-300 flex flex-row gap-10 m-15 mt-0  justify-center items-center h-screen " id="cards">
    
        <Cards avatar='algo.svg' title="Algorithm Visualizer" description="
        This project helps to visualize different algorithms of DSA. TechStack: React Django Tailwind CSS" link="https://kritesh00.github.io/AlgorithmVisualizer/" />
        <Cards avatar='pgame.svg' title="Platform Game" description="In this project I implemented different concepts of Python to make an interactive platform game." link ='https://github.com/kritesh00/CG-Platform-Game' />
        
        <Cards avatar='data.svg' title="Customer Segmentation" description="This project is an interactive web application for customer segmentation using K-Means clustering." link ='https://github.com/kritesh00/Customer-Segmentation-Project-Datascience' />
        
      </div>
      <div className="flex justify-center gap-2 items-center flex-col mb-10">
      <h1 className="font-bold text-2xl">Check Out</h1>
      <button className="mt-4 px-4 py-2 bg-[#5F9598]  text-[#061E29]  rounded hover:bg-[#5F9598]/20 hover:text-white"><a href="https://www.github.com/kritesh00">
        More Projects</a></button>
      </div>

      <h1 className=" font-poppins text-center font-bold text-2xl">Familiar With</h1>
      <div className=" flex flex-row gap-10 m-20 justify-center items-center "id="techno">
        
    <Technologystack img="html.svg" />
      <Technologystack img="css.svg" />
      <Technologystack img="js.svg"/>
      <Technologystack img="react1.svg" />
      <Technologystack img="git.svg" />
      <Technologystack img="github.svg" />
      <Technologystack img="cpp.svg" />
      
      </div>
      
        </>
    )
}
export default Welcome;