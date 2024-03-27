import { useEffect, useState } from "react";
import { getWishList } from "../Utils/getReadBookLS";

const useWishBookLs = () => {
    const[wishBookLS, setWishBookLS]=useState()
    useEffect(()=>{
        setWishBookLS(getWishList())
    },[])
    return {wishBookLS}
};

export default useWishBookLs;