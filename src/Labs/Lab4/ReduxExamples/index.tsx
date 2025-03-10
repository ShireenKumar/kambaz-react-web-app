
import { Provider } from "react-redux";
import store from "../../store";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import AddRedux from "./AddRedux";
export default function ReduxExamples() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <h1>Redux Examples</h1>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
      </div>
    </Provider>
  );
}
