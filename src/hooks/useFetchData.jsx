import { useEffect, useState } from "react";

function useFetchData(url) {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Fungsi async untuk mengambil data dari URL
      async function fetchData() {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Gagal mengambil data');
          }
          const jsonData = await response.json();
          console.log(jsonData)
          setDevices(jsonData);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
  
      fetchData();
    }, [url]);
  
    return { devices, loading, error };
  }
  
  export default useFetchData;