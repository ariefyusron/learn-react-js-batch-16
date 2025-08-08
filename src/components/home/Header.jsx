import useHomeStore from '../../stores/useHomeStore'

const Header = ({ title }) => {
  const count = useHomeStore((state) => state.count)

  return (
    <div>
      <div>{title}</div>
      <p>count: {count}</p>
    </div>
  );
}

export default Header;