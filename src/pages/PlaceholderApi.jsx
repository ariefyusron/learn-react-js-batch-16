import { useEffect, useState } from 'react';
import axios from 'axios';

const PalceholderApi = () => {
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

  return (
    <div>
      <h1>PalceholderApi</h1>

      {isLoading && <p>Loading...</p>}

      {isError && (
        <div>
          <p>Error</p>
          <button
            onClick={() => {
              getData()
            }}>
            Muat Ulang
          </button>
        </div>
      )}

      {(!isLoading && !isError) && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PalceholderApi;