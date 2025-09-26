import { useState } from "react";

export default function App() {

  const data = {
    Kerala : "Thiruvananthapuram",
    TamilNadu : "Chennai",
    Karnataka : "Bangalore",
    AndhraPradesh : "Amaravati",
    Mumbai : "Maharashtra",
    Goa : "Panaji",
    Gujarat : "Gandhinagar" 
  }

  const [selectedState, setSelectedState] = useState("Kerala")
  const [selectedStateCapital, setSelectedStateCapital] = useState("Thiruvananthapuram")

  const changeStateName = (event) => {setSelectedState(event.target.value); setSelectedStateCapital(data[event.target.value])}

  return (
    <div>
      <select onChange = {changeStateName}>
        <option value="Kerala">Kerala</option>
        <option value="TamilNadu">TamilNadu</option>
        <option value="Karnataka">Karnataka</option>
        <option value="AndhraPradesh">AndhraPradesh</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Goa">Goa</option>
      </select>
      <p>Selected: {selectedState} </p>
      <p>Capital of {selectedState} is {selectedStateCapital}.</p>
    </div>
  );
}
