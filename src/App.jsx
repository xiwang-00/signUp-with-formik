import "./app.css"
import { SignUp } from "./components/SignUp";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
           <SignUp/>
        </div>
        <div className="col-md-7">
          <img className="img-fluid w-100" src="https://i.pinimg.com/736x/47/94/73/479473ee35eff3744b072724e7a70e7a.jpg" alt="illustrator" />
        </div>
      </div>
    </div>
  );
}

export default App;
