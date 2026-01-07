import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { About, Contact, Expericence, Home, Notfound, Projects } from "./pages";
import Layout from "./components/Layout";

const route = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Expericence />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact-me" element={<Contact />} />
    </Route>,
    <Route path="*" element={<Notfound />} />,
  ])
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
