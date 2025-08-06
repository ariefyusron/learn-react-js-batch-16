import { useGetData } from '../hooks/usePlaceholder'

const PalceholderApi = () => {
  const {
    data,
    action: getDataPlaceholder,
    isLoading,
    isError
  } = useGetData()

  return (
    <div>
      <h1>PalceholderApi</h1>

      {isLoading && <p>Loading...</p>}

      {isError && (
        <div>
          <p>Error</p>
          <button
            onClick={() => {
              getDataPlaceholder()
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