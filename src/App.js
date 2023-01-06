import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Voting from "./pages/Voting";
import TotalVote from "./pages/Admin/TotalVote";

function App() {
  
  const [vote, setVote] = useState(0);

  const candidate = [
    {
      candidate: "1",
      vote_Count: 0,
    },
    {
      candidate: "2",
      vote_Count: 0,
    },
    {
      candidate: "3",
      vote_Count: 0,
    },
    {
      candidate: "4",
      vote_Count: 0,
    },
  ];


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/voting"
            element={<Voting setVote={setVote} vote={vote} />}
          />
          <Route path="/AdminLogin" element={<Admin />} />

          <Route path="/AdminPage" element={<TotalVote vote={vote} />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
