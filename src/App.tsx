import { useState } from "react";
import Like from "./components/Like/Like";
import produce from "immer";
import ExpandableText from "./components/ExpandableText/ExpandableText";

const App = () => {



  return (
    <ExpandableText maxChars={10}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam accusantium itaque velit vel. Consequatur
      quia veritatis vero, libero vitae exercitationem, aspernatur nostrum doloremque recusandae maiores voluptatum repellat alias
      qui? Tempore.
    </ExpandableText>
  );
}

export default App;
