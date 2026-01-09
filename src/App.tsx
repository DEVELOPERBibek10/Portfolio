import { About, Contact, Expericence, Home, Projects } from "./pages";
import Layout from "./components/Layout";
import { useActiveSection } from "./Hooks/useAciveSection";
import sectionIds from "./constants/sectionIds";

function App() {
  const activeId = useActiveSection(sectionIds);
  return (
    <>
      <Layout activeId={activeId!}>
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
