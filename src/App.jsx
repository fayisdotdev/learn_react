import StudnetsComponent from "./components/StudentsComponent.jsx";

export default function App() {
  const datum = [
    {
      name: "Fayis",
      description: "learning react",
    },
    {
      name: "Shahal",
      description: "Data Scientist",
    },
    {
      name: "Shafna",
      description: "UI UX Designer",
    },
  ];
  return (
    <div>
      <h2>Student Details</h2>
      <hr />
      {datum.map((showDetails) => (
        <StudnetsComponent
          name={showDetails.name}
          description={showDetails.description}
        />
        
      ))}
      <hr/>
    </div>
  );
}
