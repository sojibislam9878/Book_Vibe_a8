import { useEffect, useState } from "react";
import { getReadBookLS } from "../Utils/getReadBookLS";

const useReadedBooksLS = () => {
    const [readedBooksLS, setReadedBooksLS]=useState()
    useEffect(()=>{
        setReadedBooksLS(getReadBookLS())
    },[])
    return {readedBooksLS}
};

export default useReadedBooksLS;