import { useState } from 'react';
import ImgList from './ImgList.js';
import React from 'react';  

export default function Portfolio () {
  let selected = "All";
  let state = { stateIn: selected };
  const filtersList = ["All", "Websites", "Flayers", "Business Cards"];

  const [filter, setFilter] = useState(state);

  // setFilter() {
  //   selected = filtersList.filter(s => { s === selected });
    
  // }

  const stateConsole = (state) => {
    // setFilter({ filter: state });
    console.log(state);
  };


  return (
    <>      
      <div className='toolbar'>
        <button onClick={() => stateConsole("All")} className="btn">{filtersList[0]}</button>
        <button onClick={() => stateConsole("Websites")} className='btn'>{filtersList[1]}</button>
        <button onClick={() => stateConsole("Flayers")} className='btn'>{filtersList[2]}</button>
        <button onClick={() => stateConsole("Business Cards")} className='btn'>{filtersList[3]}</button>
      </div>
      <div className='imgLists'>
       {ImgList.map((imgage) => (<img src={imgage.img} key={imgage.category} alt="img" className='imgItem'/>))}
      </div>
    </>
  );

}
