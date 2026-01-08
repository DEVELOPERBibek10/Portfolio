import { About, Contact, Expericence, Home, Projects } from "./pages";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Expericence />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
