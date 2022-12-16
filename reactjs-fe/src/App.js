import { useContext } from "react";

import { AuthProvider } from "./context/AuthContext";

import { Header, RoutesPage } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <RoutesPage/>
      </AuthProvider>
    </div>
  );
}

export default App;
