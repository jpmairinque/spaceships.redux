import GlobalStyle from "./styles/global";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <GlobalStyle />
    </div>
  );
}

export default App;
