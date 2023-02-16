import Nabvar from "@/components/navbar/Nabvar";
import "@/styles/globals.css";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material/styles";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Nabvar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
