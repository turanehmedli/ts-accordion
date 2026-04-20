// import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
// import UseMemoL from "./components/home/UseMemoL";
// import Users from "./components/Users";
// import MyForm from "./components/MyForm";
import Register from "./pages/Register";


const App = () => {
  const [active, setActive] =  useState<boolean[]>([false, false, false])

  const toggle = (index: number) =>{
    setActive(prev=> 
      prev.map((item, i)=> (i===index? !item : false))
    )
  }
  return (
      <div className="w-full min-h-screen h-fit flex justify-center items-center p-5 flex-col gap-2  select-none bg-black text-white">
        {/* <UseMemoL/> */}
        {/* <Users/> */}
        {/* <MyForm/> */}
        <Register/>
      {/*zod, react hook form, formik, react form (tanstack form)*/}
        {/* { 
          [1,2,3].map((item,index)=>(
            <div key={index} className=" w-full h-fit border rounded-2xl overflow-hidden">
              <div className="w-full bg-zinc-500 text-white h-20 flex  items-center justify-between px-5"><p>Section {item}</p> <button onClick={()=>toggle(index)}>{active[index]? <ChevronUp/>:<ChevronDown/>}</button></div>
          <div className={`${active[index] ? 'block' :'hidden'} p-5`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corporis illum delectus beatae harum placeat quos neque alias. Neque qui assumenda accusantium odio expedita repudiandae at eius voluptates, quod quidem. Debitis ipsa rem reiciendis a repellendus illo sed amet sit deserunt voluptas nulla labore alias culpa, fugit cupiditate qui quos.
          </div>
            </div>
          ))
        } */}

      </div>
    
  );
};

export default App;
