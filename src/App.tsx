import { useContext } from "react";
import Dashboard from "./components/Dashboard";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";

function PageLayout() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Dashboard />
    </div>
  );
}

function App() {
  return (
    <>
      <ThemeProvider>
        <PageLayout />
      </ThemeProvider>
    </>
  );
}

export default App;