import Lists from "./pages/List";
import Post from "./pages/Post";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/list" element={<Lists />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
