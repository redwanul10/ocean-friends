import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import CardPage from "./pages/CardPage";
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CardPage />
    </ThemeProvider>
  );
}

export default App;
