import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetData = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const getData = async () => {
    try {
      setIsLoading(true)
      setIsError(false)

      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')

      setData(res.data)
    } catch (error) {
      //err
      setIsError(true)
      console.log('error',error.response)
    } finally {
      //finally
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  },[])

  return {
    data,
    action: getData,
    isLoading,
    isError
  }
}