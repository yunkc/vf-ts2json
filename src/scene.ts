import {Ids} from "./store";
import {Scenes, SceneItem} from '../types/IVFTemplate'

const sceneItem1: SceneItem = {
    id: Ids.root,
    libId: Ids.root.toString()
}

const allScenes: Scenes = [
    sceneItem1,
]

export default allScenes
