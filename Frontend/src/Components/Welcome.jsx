import Cards from "./Cards";
import Technologystack from "./Technologystack";
function Welcome(){
    return(
        <>
       

  <div className="w-300 flex flex-row gap-10 m-15 mt-0  justify-center items-center h-screen " id="cards">
    
        <Cards avatar='vite.svg' title="Project-1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio eaque ut dolor dolore minima fuga dolores, laudantium consequuntur! Recusandae molestiae autem quam officia voluptatibus nostrum distinctio praesentium, soluta temporibus." />
        <Cards avatar='avatar.png' title="Project-2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio eaque ut dolor dolore minima fuga dolores, laudantium consequuntur! Recusandae molestiae autem quam officia voluptatibus nostrum distinctio praesentium, soluta temporibus." />
        
        <Cards avatar='vite.svg' title="Project-3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio eaque ut dolor dolore minima fuga dolores, laudantium consequuntur! Recusandae molestiae autem quam officia voluptatibus nostrum distinctio praesentium, soluta temporibus." />
        
      </div>
      <div className="flex justify-center gap-2 items-center flex-col mb-10">
      <h1 className="font-bold text-2xl">Check Out</h1>
      <button className="mt-4 px-4 py-2 bg-[#5F9598]  text-[#061E29]  rounded hover:bg-[#5F9598]/20 hover:text-white">More Projects</button>
      </div>

      <h1 className=" font-poppins text-center font-bold text-2xl">Familiar With</h1>
      <div className=" flex flex-row gap-10 m-20 justify-center items-center "id="techno">
        
    <Technologystack img="src/assets/css.svg" />
      <Technologystack img="src/assets/js.svg" />
      <Technologystack img="src/assets/react1.svg"/>
      <Technologystack img="vite.svg" />
      <Technologystack img="vite.svg" />
      <Technologystack img="vite.svg" />
      <Technologystack img="vite.svg" />
      <Technologystack img="vite.svg" />
      <Technologystack img="vite.svg" />
      <Technologystack img="vite.svg" />
      </div>
      
        </>
    )
}
export default Welcome;