import {useState} from "react";

function DarkLight(){
     const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
   
    
    
  }

  return (
    <>
      <button className="bg-[#5F9598] h-10 w-20 rounded-full flex items-center p-1 cursor-pointer" onClick={handleCheckboxChange}>
        <div className={`bg-white h-8 w-8 rounded-full shadow-md transform duration-300 ease-in-out ${isChecked ? 'translate-x-10' : ''}`}>
             {isChecked ? "🌙" : "🌞"}
             {isChecked ? 'dark' : 'light'}
        </div>

      </button>
    </>
        
   
    )
}
export default DarkLight;