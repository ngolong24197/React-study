import React from 'react';


const AddToSArray = () => {
  const [myArray, setMyArray] = React.useState([]);
  const [userInput, setUserInput] = React.useState("");

  const addToArray = () => {
    if (userInput.trim() === "") {
      alert("Please enter a value");
      return;
    } else {
      setMyArray(prevMyArray => [...prevMyArray, userInput]);
      setUserInput("");
    }
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const listArrayItem = myArray.map((item, index) => (
    <li key={index} className="li-addArray">{item}</li>
  ));

  return (
    <div className="div-addArray">
      <h1 className="h1-addArray">Add To Array</h1>
      <div className='button-container'>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Type something..."
        className="input-addArray"
      />

      <button onClick={addToArray} className="button-addArray">Add</button>
      </div>
      <h2 className="h2-addArray">Array display:</h2>
      <ul className="ul-addArray">{listArrayItem}</ul>
    </div>
  );
};

export default AddToSArray;
