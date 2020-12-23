import { atom } from "recoil";

export const sceneNum = atom({
    key: "scene",
    default: null
});

export const sceneObject = atom({
    key: "sceneObj",
    default: {}
});