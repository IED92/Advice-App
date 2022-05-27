import React from "react";
import { ReactComponent as DiceIcon } from "../../assets/icon-dice.svg";
import { ReactComponent as Divider } from "../../assets/pattern-divider-desktop.svg";

const AdviceItem = ({ adviceId, advice }) => {
  return (
    <div className="flex flex-col text-center justify-between items-center bg-gray-700 w-6/12 rounded-lg py-10 px-10 relative h-80">
      <p className="text-green-400 uppercase text-xs">advice #{adviceId}</p>
      <h3 className="leading- text-2xl font-semibold px-10 py-6 pb-8">
        {advice}
      </h3>
      <Divider className="mb-3" />
      <div className="bg-green-400 w-14 h-14 justify-evenly flex items-center rounded-full -mb-16">
        <DiceIcon fill="374151" />
      </div>
    </div>
  );
};

export default AdviceItem;
