import React from "react"
import "./App.css";

const App = () => {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit")
  }
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {

    setValue(event.target.value);

  };

  return (

    <div>

      <label>

        <h1 className="Question"> How valuable is your memory? </h1>

        <section className="memory">
          <input
            placeholder="Place your memories in my hands"
            style={{ width: "200px" }}
            onChange={() => { }}
          
          />
        </section>
        <section>
        <form onSubmit={handleSubmit}>
          <button onClick={() => { }}>Place </button>
        </form>
        </section>

        <div className="input">
          <select value={value} onChange={handleChange}>

            <option value="Extremely Important">Extremely important</option>

            <option value="Important">Important</option>

            <option value="I Would like to remember">I Would like to remember</option>

          </select>
        </div>
      </label>

      <p className="choice"> {value}</p>

    </div>




  );

};

export default App;



