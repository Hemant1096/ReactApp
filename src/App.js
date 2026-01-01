  // import Login from "./Login";

  // function App() {
  //   return (
  //    <div>
  //       <Login />
  //    </div>
  //  );
  // }

  // export default App;

//  import Ludo from "./Ludo";

//  function App() {
//    return <Ludo />;
// }

//  export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Ludo from "./Ludo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ludo" element={<Ludo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


