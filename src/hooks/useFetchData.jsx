import {  useState } from "react";
import useSWR from "swr";
import { fetcher } from "./useFetcher";

function useFetchData(id) {
    const [device, setDevices] = useState([]);
  
    const { data } = useSWR(`https://iotbackend-1-g4573555.deta.app/user/${id}`, fetcher)

    setDevices(data)
  
    return { device };
  }
  
  export default useFetchData;