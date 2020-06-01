import action from "./action"
import {App, Ids} from "../store";
import {gui, guiType} from "../../types/Component";
import {Components} from "../../types/IVFTemplate";

const dinoWidth = 83
const dino: gui.Image = {
    type: guiType.Image,
    y: 140,
    width: dinoWidth,
    height: 138,
    src: Ids.dinoImage,
    x: App.width / 2 -  dinoWidth / 2,
};

const title: gui.Text = {
    type: guiType.Text,
    width: 100,
    style: {
        color: '#000'
    }
}

const root: gui.Custom = {
    type: guiType.Custom,
    children: [
        {
            id: Ids.dinoImage,
            libId: Ids.dinoImage
        },
        {
            id: Ids.title,
            libId: Ids.title,
            text: 'Hello World!',
            y: dino.y! + 158,
            x: App.width / 2 - title.width! / 2
        }
    ],
    // 用 VFX 编写的可执行逻辑，文档请见 https://vipkid-edu.github.io/vf-docs/handbook/action.html
    actionList: action
};

const allComponents: Components = {
    [Ids.root]: root,
    [Ids.title]: title,
    [Ids.dinoImage]: dino
}

export default allComponents
