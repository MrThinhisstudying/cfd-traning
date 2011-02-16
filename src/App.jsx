import { connect } from "react-redux";
import "./App.css";
import { increment, decrement } from "./store/actions/counterAction";
function App(props) {
  console.log("props:", props);
  return (
    <>
      <h1>Redux - Couter: {props.counter}</h1>
      <div className="card">
        <button onClick={() => props.increment(10)}>Counter increment</button>
        <button onClick={() => props.decrement(5)}>Counter decrement</button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};
export default connect(mapStateToProps, { increment, decrement })(App);
