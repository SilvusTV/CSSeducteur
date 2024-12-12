import {Route, Routes} from "react-router-dom";
import Home from "./Page/Home.tsx";
import Blogs from "./Page/Blogs.tsx";
import {Blog} from "./Page/Blog.tsx";
import About from "./Page/About.tsx";

export default function App() {

  return (
    <Routes>
      <Route
        path={"/"}
        element={<Home/>}
      />
      <Route
        path={"/blog"}
        element={<Blogs/>}
      />
      <Route
        path={"/blog/:slug"}
        element={<Blog/>}
      />
      <Route
        path={"/about"}
        element={<About/>}
      />
    </Routes>
  )
}