import { gui } from './gui'

export interface IVFTemplate {
    width: Number,
    name: String,
    height: Number,
    baseUrl: String,
    version: String,
    conversion: String,
    loadMode: LoadMode,
    scaleMode: ScaleMode,
    assets: Assets.assets,
    scenes: Scenes.scene[],
    global: { [key: string]: GlobalItem },
    components: { [key: string]: gui.AllGUI }
}

export namespace Assets {
    export interface assets {
        [key: string]: {
            type: type,
            url: string
            name: string,
        }
    }

    export enum type {
        js = 'js',
        svg = 'svg',
        font = 'font',
        image = 'image',
        sound = 'sound',
        sheet = 'sheet',
        audio = 'audio',
        video = 'video',
    }
}

export type GlobalItem = {
    value: any,
    type: string,
    describe?: string,
} | number | string | boolean | any

export namespace Scenes {
    export interface scene {
        id: String | number,
        libId: String | number
    }
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
