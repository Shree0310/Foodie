import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

//Custom hook to fetch the restaurant data to be displayed in the restuarant menu
const useRestaurantMenu = (resId)=>{
//fetch data

const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();;
    }, []);

    const fetchData = async ()=>{
        const url = 'https://corsproxy.io/?' + encodeURIComponent(MENU_API); 
        const data = await fetch(url + resId + "&catalog_qa=undefined&submitAction=ENTER");
        let jsonData = await data.json();
        // console.log(jsonData);    
        setResInfo(jsonData); 
    }

    return resInfo;
};

export default useRestaurantMenu; 