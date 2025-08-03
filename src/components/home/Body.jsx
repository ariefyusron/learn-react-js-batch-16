import useHomeStore from "../../stores/useHomeStore";

const Body = () => {
  const count = useHomeStore((state) => state.count)
  const setCount = useHomeStore((state) => state.setCount)

  return (
    <div>
      <div>Body</div>
      <p>count: {count}</p>
      <button onClick={() => setCount()}>count</button>
    </div>
  );
}

export default Body;