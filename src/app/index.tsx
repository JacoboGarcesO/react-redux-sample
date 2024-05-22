import { Provider } from "react-redux"
import { store } from "./core/store/store"
import { CountContainer } from "./containers/CountContainer"

export const App =() => {
  return <Provider store={store}>
    <CountContainer/>
  </Provider>
}