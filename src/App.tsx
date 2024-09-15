import Button from "./components/Button/Button";
import Like from "./components/Like/like";

const App = () => {


  return (
    <div>
      <Like onClick={() => console.log("You just clicked Like!")} />
    </div>
  );
}

export default App;
