import { useState } from 'react';
import ImgList from './ImgList.js';

export default function Portfolio () {
  const filtersList = ["All", "Websites", "Flayers", "Business Cards"];
  const [filterP, setFilter] = useState("All");

  const onSelectFilter = (filter) => {  
    setFilter(filter);  
  };
  
  const filteredImages = () => {
    if (filterP === "All") {
      return(ImgList);
    }

    return ImgList.filter((image) => image.category === filterP);
  };

  return (
    <>      
      <div className='toolbar'>
        {filtersList.map((filter) => (  
          <button key={filter} onClick={() => onSelectFilter(filter)} className='btn'>{filter}</button>  
        ))} 
      </div>
      <div className='imgLists'>
        {filteredImages().map((image) => (  
          <img src={image.img} alt="img" className='imgItem' key={image.img} />  
        ))} 
      </div>
    </>
  );
}
