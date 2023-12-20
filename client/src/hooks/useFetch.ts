import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(false);
  const [isSuccess, setIsSuccess] = useState<any>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        // setLoading(false);
        setIsSuccess(true);
      } catch (error: any) {
        setIsSuccess(false);
        setError(error);
      }
      setLoading(false);
    };
    
    fetchData();
  }, []);
  
  const reFetch = async () => {
    setLoading(true);
    setIsSuccess(false);
    try {
      const response = await axios.get(url);
      setData(response.data);
      // setLoading(false);
      setIsSuccess(true);
    } catch (error: any) {
      setIsSuccess(false);
      setError(error);
    }
    setLoading(false);
  };

  return { data, loading, isSuccess, error, reFetch };
};

export default useFetch;
