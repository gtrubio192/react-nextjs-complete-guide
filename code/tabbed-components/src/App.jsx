import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";

import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  console.log("APP COMPONENT EXECUTING");

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts concepts={CORE_CONCEPTS} />
        <Examples />
      </main>
    </div>
  );
}

export default App;
