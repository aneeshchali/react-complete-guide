import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import ErrorF from "./components/ErrorF";
import Home from "./components/Home";
import BookRoutes from "./BookRoutes";

function App() {
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "*",
  //     element: <ErrorF />,
  //   },
  //   {
  //     path: "/welcome",
  //     element: <Welcome />,
  //   },
  // ]);

  return (
    <div>
      <Routes>
        <Route path="/products" element={<h2>Title</h2>} />
        <Route path="/welcome" element={<h2>welcome Title</h2>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
        </ul>
      </nav>
      {/* {element} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/*" element={<BookRoutes />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<ErrorF />} />
      </Routes>
    </div>
  );
}

export default App;
