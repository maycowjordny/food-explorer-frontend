import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Dish } from './pages/Dish'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Details } from './pages/Details'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Menu />
    </ThemeProvider>
  </React.StrictMode>,
)
