import { atom } from "recoil";

export const shipPositionState = atom({
    key: "model", // unique ID (with respect to other atoms/selectors)
    default: { theModel: null } // default value (aka initial value)
});