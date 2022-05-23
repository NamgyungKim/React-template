import useKeyPress from "./hooks/useKeyPress";

const App = () => {
  const keyPressed = useKeyPress("a");
  return <div>key: {keyPressed && "Pressed"}</div>;
};

export default App;
