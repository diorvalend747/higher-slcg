import { useMediaQuery } from "@mui/material";
import WebVersion from "./pages/Web-Version";
import MobileVersion from "./pages/Mobile-Version";

function App() {
  const matches = useMediaQuery("(min-width:1100px)");

  return <>{matches ? <WebVersion /> : <MobileVersion />}</>;
}

export default App;
