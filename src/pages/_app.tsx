
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../../store/reducer";

const store = createStore(reducer, applyMiddleware(thunk));

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
     <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp

