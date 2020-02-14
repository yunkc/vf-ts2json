import {Ids} from "./store";
import {AssetType} from '../types/IVFTemplate'

const assets = {
    [Ids.dinoImage]: {
        type: AssetType.image,
        url: './assets/dino.png',
        name: Ids.dinoImage.toString()
    }
}

export default assets
