import { useState } from "react";

const Home = () => {
  const[name , setName]=useState('Karen')
  const handleclick = (e) => {
    console.log("hi you clicked me ", e.target);
  };
  const handlclickagain=(name,e)=>{
    console.log('hello' + name, e.target)
  }
  
  const handleclickname = (e) => {
    console.log("hi you clicked me ", e.target);
    setName('Jude')
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleclick}> hancdle button</button>
      <button onClick={(e)=>{handlclickagain('mario',e)}}> handle button</button>
      <button onClick={handleclickname}>name change button</button>

    </div>
  );
};

export default Home;
   