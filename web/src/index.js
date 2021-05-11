import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyled from './config/globalStyled'
import { Helmet } from 'react-helmet'
import Routers from './routers'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './plugins/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ReduxToastr from './components/redux-toastr'

const googleFont =
  'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'

ReactDOM.render(
  <Provider store={store}>
    <ReduxToastr />
    <Helmet>
      <link rel='stylesheet' href={googleFont} />
    </Helmet>
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()