import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
