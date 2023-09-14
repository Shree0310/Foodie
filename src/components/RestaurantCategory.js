import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({catData, showItems, setShowIndex})=>{
     //console.log(catData);
     const items = catData.itemCards.forEach((item)=>item.card.info.name);
     //console.log(items);

    //By default it is closed hence keeping the default value false 
     const [toggleItem, setToggleItem] = useState(false);

     //console.log(showItems);

     const handleClick = ()=>{
        setShowIndex();  
        setToggleItem(!toggleItem);
     }

    return (
        <div>
            {/* Accordion Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{catData.title} ({catData.itemCards.length})</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                        </svg>
                </div>
                {showItems  && toggleItem  && <ItemList itemsData = {catData.itemCards} />}   
            </div>

            {/* Accordion Body */}
            

        </div>

            
  
        
        
       
    )
}

export default RestaurantCategory;