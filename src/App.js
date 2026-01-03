import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Ludo from "./Ludo";
import StudentForm from "./StudentForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ludo" element={<Ludo />} />
        <Route path="/StudentForm" element={<StudentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


