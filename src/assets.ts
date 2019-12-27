import {Store} from "./store";
import {Assets} from '../types/IVFTemplate'

const assets = {
    [Store.titleBackground]: {
        type: Assets.type.image,
        name: Store.titleBackground.toString(),
        url: 'title-background.png'
    },
    [Store.choiceButtonRight]: {
        type: Assets.type.image,
        name: Store.choiceButtonRight.toString(),
        url: 'choice-static-success.png'
    },
    [Store.choiceButtonWrong]: {
        type: Assets.type.image,
        name: Store.choiceButtonWrong.toString(),
        url: 'choice-static-wrong.png',
    },
    [Store.contentImgBorder]: {
        type: Assets.type.image,
        name: Store.contentImgBorder.toString(),
        url: 'content-image-border.png'
    },
    [Store.contentQuestionImg]: {
        type: Assets.type.image,
        name: Store.contentQuestionImg.toString(),
        url: 'content-question-img.png'
    }
}

export default assets