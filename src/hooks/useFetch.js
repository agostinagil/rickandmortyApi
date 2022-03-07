import { useEffect, useState, useCallback } from "react";
import API from "../API";

export const useFetch = (endpoint) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await API.get(endpoint);
      setData(data);
      setLoading(false);
    } catch (error) {
      setData(false);
    }
  }, [endpoint]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return [data, loading];
};
