import useHomeStore from '../../stores/useHomeStore'

const Header = () => {
  const count = useHomeStore((state) => state.count)

  return (
    <div>
      <div>Header</div>
      <p>count: {count}</p>
    </div>
  );
}

export default Header;