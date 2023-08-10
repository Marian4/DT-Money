import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobaStyle } from "./styles/global"
import { Transactions } from "./pages/Transactions"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />
      <GlobaStyle />
    </ThemeProvider>
  )
}

export default App
