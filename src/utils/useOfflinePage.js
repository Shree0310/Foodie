import { useState, useEffect } from "react";

const useOfflinePage = ()=>{
    const [offlineStatus, setOfflineStatus] = useState(false); 

    //If the internet status of the user is offline display this
    //Because we want to check the online status only once , we use useEffect
    useEffect(()=>{
        window.addEventListener("online", (event) => {
            setOfflineStatus(false);
            console.log("You are now connected to the network.");
          }); 

          window.addEventListener("offline", (event) => {
            setOfflineStatus(true);
            console.log("You are now connected to the network.");
          }); 

    },[]);
     
    return offlineStatus;
}

export default useOfflinePage;