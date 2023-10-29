import "./App.css";
import { AppContext } from "./Components/Context/AppContext";
import Main from "./Components/Main";
import IntroLoader from "./Components/IntroLoader";
// import Paypal from "./Components/ticket components/Pay"

function App() {
  return (
    <AppContext>
      <IntroLoader />
      <Main />
      {/* <Paypal /> */}
    </AppContext>
  );
}

export default App;
