import React from "react"
import "./App.css";








const App = () => {


  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit")
  };


  const submitMemory = () => {
    alert("Memory Cast");
  }



  return (

    <div>

      {/* <label> */}


      <section className="place">
        <form>
          <h1 className="Question"> Cast your memories </h1>

          <section className="memory">
            <input
              placeholder="Place your memories in my hands"
              style={{ width: "200px" }}
              onChange

            />
          </section>
        </form>
      </section>







      <div onSubmit={handleSubmit}>
      

        <section className="memory">
        <button onClick={submitMemory} style={{ width: "100px" }} type="submit">Place </button>

        </section>
      </div>
      
      </div>
);

}

      export default App;



