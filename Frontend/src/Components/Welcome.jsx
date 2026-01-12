import Cards from "./Cards";
import Technologystack from "./Technologystack";
function Welcome(){
    return(
        <>
       

  <div className="w-300 flex flex-row gap-10 m-20 justify-center items-center h-screen ">
    
        <Cards avatar='vite.svg' title="Project-1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio eaque ut dolor dolore minima fuga dolores, laudantium consequuntur! Recusandae molestiae autem quam officia voluptatibus nostrum distinctio praesentium, soluta temporibus." />
        <Cards avatar='avatar.png' title="Project-2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio eaque ut dolor dolore minima fuga dolores, laudantium consequuntur! Recusandae molestiae autem quam officia voluptatibus nostrum distinctio praesentium, soluta temporibus." />
        
        <Cards avatar='vite.svg' title="Project-3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio eaque ut dolor dolore minima fuga dolores, laudantium consequuntur! Recusandae molestiae autem quam officia voluptatibus nostrum distinctio praesentium, soluta temporibus." />
        
      </div>
      <h1 className="text-center font-bold text-2xl">Technology Learned</h1>
      <div className="flex flex-row gap-10 m-20 justify-center items-center ">
    <Technologystack img="src/assets/css.svg" />
      <Technologystack img="src/assets/js.svg" />
      <Technologystack img="src/assets/react1.svg" />
      </div>
      
        </>
    )
}
export default Welcome;