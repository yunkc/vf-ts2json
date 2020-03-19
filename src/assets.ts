import {Ids} from "./store";
import {Assets, AssetType} from '../types/IVFTemplate'

const assets: Assets = {
    [Ids.dinoImage]: {
        type: AssetType.IMAGE,
        url: './assets/dino.png',
        name: Ids.dinoImage.toString()
    },
}

export default assets
