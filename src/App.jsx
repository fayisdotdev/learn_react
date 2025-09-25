function increment() {
  console.log("Increment");
}
export default function App() {
  return (
    <div>
      <h1>0</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}
