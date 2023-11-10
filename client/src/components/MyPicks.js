import React, { useState } from 'react'
import '../style.css';

export const MyPicks = () => {

    const [myPick, setMyPick] = useState([{restaurant: ""}]);
    const [renderSelection, setRenderSelection] = useState(false)
    const [randomSel, setRandomSel] = useState("false")
    console.log(myPick)
    let selectedRestaurant = "";

    const handlePickAdd = () => {
        setMyPick([...myPick, {restaurant: ""}])
    }
    
    const handlePickRemove = (index) => {
        const list = [...myPick];
        list.splice(index, 1);
        setMyPick(list)
    }

    const handleChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...myPick];
        list[index][name] = value;
        setMyPick(list);
    }

    const handleSelection = (e) => {
        e.preventDefault();
        const random = Math.floor(Math.random() * myPick.length)
        setRenderSelection(true);
        setRandomSel(myPick[random].restaurant);
        console.log("sRC ", renderSelection);
        console.log("random sel ", myPick[random].restaurant);
        selectedRestaurant = myPick[random];
    }

    return (
        <div className="bg-[url('./images/dips.jpg')] font-nunito text-center w-full h-screen bg-white bg-no-repeat bg-cover m-auto">
        <form  className="w-full flex flex-col mt-20 mx-auto my-0    h-full text-center m-auto rounded-smp pt-8 h-[625px]">
            <label className='p-1 text-xl'>Restaurant(s)</label>
            {myPick.map((item, index) => (
                <div key={index} className='flex mx-auto'>
                    <div className='flex flex-col'>
                        <input  
                        name="restaurant"
                        id="restaurant" 
                        value={item.restaurant} 
                        type="text"
                        onChange={(e) => handleChange(e, index)}
                        className='border-2 w-52 m-auto mb-2' required />
                       {myPick.length - 1 === index && myPick.length < 5 &&
                       (
                        <button 
                        onClick={handlePickAdd}
                        type="button" 
                        className="bg-red-900 w-20 mb-2 text-white rounded-sm m-auto">Add</button>
                       )}
                        
                    </div>
                    <div className='second'>
                        <button 
                        onClick={() => handlePickRemove(index)}
                        type="button" 
                        className="bg-red-900 w-20 text-white rounded-sm m-auto">Remove</button>
                    </div>
                 </div>
            ))}
           <div className='mt-20'>
            <button 
            onClick={handleSelection} 
            className="-white bg-[#899b0e] border-none cursor-pointer text-md/[17px] rounded-[3px] m-1.5 px-5 py-2 mb-2 hover:bg-[#718109]">Random Pick</button>
           <h2 className='mt-20 text-xl'>Pick:</h2>
           {    
            renderSelection &&  <h2 className='text-5xl'>{randomSel}</h2>
           }
           </div>
        </form>
        </div>
    )
};
