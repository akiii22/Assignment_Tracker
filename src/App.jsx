import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Support from "./pages/Support";
import Why from "./pages/Why";
import NoteApp from "./components/NoteApp";
import { AssignmentProvider } from "./context/AssignmentProvider";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/why" element={<Why />} />
          <Route path="/support" element={<Support />} />
          <Route
            path="note"
            element={
              <AssignmentProvider>
                <NoteApp />
              </AssignmentProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
