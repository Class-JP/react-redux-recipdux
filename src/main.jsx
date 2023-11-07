import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

//  Load our store file
import { store } from './redux/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  // We might need to wrapp all our app to meke affective the use of the global state
  <Provider store={store}>
    <App />
  </Provider>,
)
