import { AuthProvider } from "./contexts/Auth";
import Rutas from "./routes";
import "./App.scss";

function App() {
  return (
    <AuthProvider>
      <Rutas />
    </AuthProvider>
  );
}

export default App;
