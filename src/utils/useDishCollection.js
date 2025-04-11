import { useEffect, useState } from "react"
import { CDN_URL } from "../utils/constants";

const useDishCollection = (dishId) => {
    const [dishInfo, setDishInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [dishId]);

    const fetchData = async () => {
        const url = "https://swiggy.adiagr.in/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.060931&lng=82.177474&collection_id=";
        const fullUrl = `${url}${dishId}&collection_context=biryani&tags=layout_CCS_Biryani&type=rcv2`;
        
        try {
            const data = await fetch(fullUrl);
            const jsonData = await data.json();
            console.log("Dish collection data:", jsonData);
            setDishInfo(jsonData);
        } catch (error) {
            console.error("Error fetching dish collection:", error);
            setDishInfo(null);
        }
    };

    return dishInfo;
};

export default useDishCollection;