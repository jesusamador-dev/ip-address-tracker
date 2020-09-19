import { useState, useEffect } from 'react';
import api from '../config/api';
import isIp from '../utils/isIp';

const useGetIp = (ip = '') => {
  const [data, setData]=useState(null);
  
  let params = '';
  if (ip) {
    params = isIp(ip) ? `&ipAddress=${ip}`:`&domain=${ip}`;
  }
  const getFetch = async () => {
    const url=`${api.apiUrl}?apiKey=${api.apiKey}${params}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
      getFetch();
  }, [ip])

  return data;
}

export default useGetIp;