import '@/styles/globals.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main : "#1976d2"
    },
    text: {
      success: "#00FF00",
      danger :"#FF0000"
    }
 }
});
export default function App({ Component, pageProps }) {
  
  return (
     <ThemeProvider theme={theme}>
       < Component {...pageProps } />
     </ThemeProvider>
  )
}
