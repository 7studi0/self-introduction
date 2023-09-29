import React, { Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </Suspense>
  );
};

export default App;
