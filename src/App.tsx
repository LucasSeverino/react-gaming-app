import { useState } from "react";
import Like from "./components/Like/Like";
import produce from "immer";

const App = () => {

  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: 'Bug 1',
      fixed: false
    },
    {
      id: 2,
      title: 'Bug 2',
      fixed: false
    }
  ]);

  const handleClick = () => {
    setBugs(
      produce(draft => {
        const bug = draft.find(bug => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  }

  return (
    <div>
      {/* <Like onClick={() => console.log("You just clicked Like!")} /> */}
        {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'New'}</p>)}
        <button onClick={handleClick}>Update bug status</button>
    </div>
  );
}

export default App;
