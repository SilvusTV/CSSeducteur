import {Route, Routes} from "react-router-dom";
import Home from "./Page/Home.tsx";
import Blogs from "./Page/Blogs.tsx";
import {Blog} from "./Page/Blog.tsx";

export default function App() {

  return (
    <Routes>
      <Route
        path={"/"}
        element={<Home/>}
      />
    <Route
      path={"/blogs"}
      element={<Blogs/>}
    />
    <Route
      path={"/blog"}
      element={<Blogs/>}
    />
    <Route
      path={"/blog/:slug"}
      element={<Blog/>}
    />
    </Routes>
  )
}