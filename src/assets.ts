import {Store} from "./store";
import {Assets} from '../types/IVFTemplate'

const assets = {
    [Store.titleBackground]: {
        type: Assets.type.image,
        name: Store.titleBackground.toString(),
        url: 'dino.png'
    },
    [Store.choiceButtonRight]: {
        type: Assets.type.image,
        name: Store.choiceButtonRight.toString(),
        url: 'dino.png'
    },
    [Store.choiceButtonWrong]: {
        type: Assets.type.image,
        name: Store.choiceButtonWrong.toString(),
        url: 'dino.png',
    },
    [Store.contentImgBorder]: {
        type: Assets.type.image,
        name: Store.contentImgBorder.toString(),
        url: 'dino.png'
    },
    [Store.contentQuestionImg]: {
        type: Assets.type.image,
        name: Store.contentQuestionImg.toString(),
        url: 'dino.png'
    }
}

export default assets