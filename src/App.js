import { Route, Routes } from "react-router-dom";
import Photos from "./pages/Photos";
import Main from "./pages/Main";
import reset from "styled-reset";
import { darkTheme, lightTheme } from "./style/theme";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  ${reset}  
  body {        
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor}
    
  }  
`;
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={
              <Main isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
            }
          />
          <Route path="/albums/:id" element={<Photos />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
