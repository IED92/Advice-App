import React from "react";
import { ReactComponent as DiceIcon } from "../assets/icon-dice.svg";
import { ReactComponent as Divider } from "../assets/pattern-divider-desktop.svg";

export function AdviceContainer() {
  return (
    <div className="flex flex-col text-center justify-between items-center bg-gray-700 w-6/12 h-64 rounded-lg py-10 px-20">
      <p className="text-green-400 uppercase text-xs">advice #117</p>
      <h3 className="leading- text-2xl font-semibold">
        "It is east to sit up and take notice, what's difficult is getting up
        and taking action."
      </h3>
      <Divider className="" />
      <div className="bg-green-400 w-14 h-14 justify-evenly flex items-center rounded-full absolute mt-48">
        <DiceIcon fill="374151" />
      </div>
    </div>
  );
}
