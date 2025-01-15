// import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Page from "./pages/page";
import Login from "./pages/login";


const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>  
          <Route path="/" element={<Page />} />
          <Route path="/login" element={<Login />} />
        </Routes>  
    </Layout>
    </BrowserRouter>
  );
};

export default App;