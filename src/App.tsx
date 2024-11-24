import {Route, Routes} from "react-router-dom";
import Home from "./Page/Home.tsx";

export default function App() {
  console.error = () => {} // Suppress "Not implemented" errors
  console.warn = () => {}; // Suppress "Not implemented" errors

  return (
    <Routes>
      <Route
        path={"/"}
        element={<Home/>}
      />
    </Routes>
  )
}