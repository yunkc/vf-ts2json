/*
*   全部文档: https://code.vipkid.com.cn/xyz/docs
*   动画文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/animation.md
*   VFX 使用文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/aciton.md
* */

import {App, Ids} from "./store";
import {gui, guiType} from "../types/Component";
import {Components} from "../types/IVFTemplate";

const dinoWidth = 83
const dino: gui.Image = {
    type: guiType.IMAGE,
    y: 140,
    width: dinoWidth,
    height: 138,
    src: Ids.dinoImage,
    x: App.width / 2 -  dinoWidth / 2,
};

const title: gui.Text = {
    type: guiType.TEXT,
    width: 100,
    style: {
        color: '#000000'
    }
}

const root: gui.Custom = {
    type: guiType.CUSTOM,
    children: [
        {
            id: Ids.dinoImage,
            libId: Ids.dinoImage
        },
        {
            id: Ids.title,
            libId: Ids.title,
            text: 'Hello World!',
            y: dino.y! + 138 + 20,
            x: App.width / 2 - title.width! / 2
        }
    ],
    // 用 VFX 编写的可执行逻辑，文档请见 https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/aciton.md
    actionList: []
};

const allComponents: Components = {
    [Ids.root]: root,
    [Ids.title]: title,
    [Ids.dinoImage]: dino
}

export default allComponents
