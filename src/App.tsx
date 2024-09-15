import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {

  const [showAlert, setShowAlert] = useState(false);


  return (
    <div>
      {
        showAlert && <Alert onClose={() => setShowAlert(false)}>Button Clicked!</Alert>
      }
      
      <Button buttonType="primary" onClick={() => setShowAlert(true)}>
        Primary Button
      </Button>
    </div>
  );
}

export default App;
