import { atom } from "recoil";

export const modelState = atom({
    key: "model", // unique ID (with respect to other atoms/selectors)
    default: "Beer Nuggets"
});