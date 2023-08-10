import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobaStyle } from "./styles/global"
import { Header } from "./components/Header/header"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <GlobaStyle />
    </ThemeProvider>
  )
}

export default App