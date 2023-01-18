import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import authHeader from '../../services/auth-header';

const Posting = () => {
  const id = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    setData();
    const response = axios.get(`url/${id}`, { headers: authHeader() });
    setData(response.data);
    console.log(data);
  }, [id]);
  return <div />;
};

export default Posting;
