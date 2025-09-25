import Card from "./components/Cards.jsx";

export default function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React application.</p>
      <Card title = "10.00 AM" content = "Good Morning"/>
      <Card title = "12.30 PM" content = "Good Afternoon"/>
      <Card title = "04.30 PM" content = "Good Evening"/>
      <Card title = "08.30 PM" content = "Good Night"/>
    </div>
  );
}

