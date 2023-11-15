import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string)  => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
