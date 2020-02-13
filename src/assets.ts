import {Store} from "./store";
import {Assets} from '../types/IVFTemplate'

const assets = {
    [Store.titleBackground]: {
        type: Assets.type.image,
        name: Store.titleBackground.toString(),
        url: './assets/dino.png'
    },
    [Store.choiceButtonRight]: {
        type: Assets.type.image,
        name: Store.choiceButtonRight.toString(),
        url: './assets/dino.png'
    },
    [Store.choiceButtonWrong]: {
        type: Assets.type.image,
        name: Store.choiceButtonWrong.toString(),
        url: './assets/dino.png',
    },
    [Store.contentImgBorder]: {
        type: Assets.type.image,
        name: Store.contentImgBorder.toString(),
        url: './assets/dino.png'
    },
    [Store.contentQuestionImg]: {
        type: Assets.type.image,
        name: Store.contentQuestionImg.toString(),
        url: './assets/dino.png'
    }
}

export default assets