import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";


const App = () => {
  const [active, setActive] =  useState<boolean[]>([false, false, false])

  const toggle = (index: number) =>{
    setActive(prev=> 
      prev.map((item, i)=> (i===index? !item : false))
    )
  }
  return (
    <>
      <div className="w-full max-w-[1340px] flex justify-center items-center p-5 flex-col gap-2">

        {
          [1,2,3].map((item,index)=>(
            <div key={index} className=" w-full h-fit border rounded-2xl overflow-hidden">
              <div className="w-full bg-zinc-500 text-white h-20 flex  items-center justify-between px-5"><p>Section {item}</p> <button onClick={()=>toggle(index)}>{active[index]? <ChevronUp/>:<ChevronDown/>}</button></div>
          <div className={`${active[index] ? 'block' :'hidden'} p-5`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae eveniet molestias ut veritatis? Error cum nihil quam est similique.
          </div>
            </div>
          ))
        }

      </div>
    </>
  );
};

export default App;
