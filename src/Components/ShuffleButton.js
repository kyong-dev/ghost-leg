import React from "react";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import SubButton from "./SubButton";

const ShuffleButton = ({ gameState, page, shuffleCases }) => {
  if (
    (page === "game" && gameState !== "playing" && gameState !== "done") ||
    page === "result"
  )
    return (
      <SubButton
        label="Shuffle Cases"
        text="Shuffle Cases"
        icon={faRandom}
        event={shuffleCases}
      />
    );
  else return null;
};

export default React.memo(ShuffleButton);
