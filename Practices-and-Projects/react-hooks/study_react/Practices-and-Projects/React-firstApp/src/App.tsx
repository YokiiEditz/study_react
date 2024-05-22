import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { Yoki } from "./components/Heading";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        My Button
      </Button>

      <Yoki />
    </div>
  );
}

export default App;
