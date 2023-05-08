import { useState } from "react";
import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";
import "./App.css";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <div className="dashboard-content">
        <div className="main-heading">Library Management</div>
        <div className="heading-area">
          <p className="login">Login</p>
          <p className="signup">Signup</p>
        </div>
      </div>
      <div className="mainpage-container">
        <div className="content-area">
          <nav>
            <h3
              onClick={() => setView("basic")}
              style={{ color: view === "basic" ? "#fff" : "" }}
            >
              Signup
            </h3>
            <h3
              onClick={() => setView("advanced")}
              style={{ color: view === "advanced" ? "#fff" : "" }}
            >
              Login
            </h3>
          </nav>
          {view === "basic" ? <BasicForm /> : <AdvancedForm />}
        </div>
      </div>
    </div>
  );
}

export default App;
