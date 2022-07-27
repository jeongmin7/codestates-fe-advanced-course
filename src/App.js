import Post from "./pages/Post";
import { Route, Routes } from "react-router-dom";
import Photos from "./pages/Photos";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/albums/:id" element={<Photos />} />
      </Routes>
    </div>
  );
}

export default App;
