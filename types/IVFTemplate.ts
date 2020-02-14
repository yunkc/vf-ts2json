import { gui } from './Component'

export interface IVFTemplate {
    width: Number,
    name: String,
    height: Number,
    baseUrl: String,
    version: String,
    conversion: String,
    loadMode: LoadMode,
    scenes: SceneItem[],
    scaleMode: ScaleMode,
    assets: { [key: string]: AssetItem },
    global: { [key: string]: GlobalItem },
    components: { [key: string]: gui.AllGUI }
}

type GlobalItem = {
    value: any,
    type: string,
    describe?: string,
} | number | string | boolean | any

type SceneItem = {
    id: string | number
    libId: string | number
}

type AssetItem = {
    type: AssetType,
    url: string
    name: string,
}

export enum ScaleMode {
    cover = 'cover',
    showAll = 'showAll',
    noScale = 'noScale',
    contain = 'contain',
}

export enum LoadMode {
    all = 'all',
    single = 'single'
}

export enum AssetType {
    js = 'js',
    svg = 'svg',
    font = 'font',
    image = 'image',
    sound = 'sound',
    sheet = 'sheet',
    audio = 'audio',
    video = 'video',
}
