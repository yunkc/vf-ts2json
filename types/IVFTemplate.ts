import { gui } from './Component'

export interface IVFTemplate {
    name: String,
    width: Number,
    height: Number,
    scenes: Scenes,
    assets: Assets,
    global: Global,
    baseUrl: String,
    version: String,
    conversion: String,
    loadMode: LoadMode,
    scaleMode: ScaleMode,
    components: Components
}

export type Scenes = SceneItem[]

export interface Assets {
    [key: string]: AssetItem
}

export interface Global {
    [key: string]: GlobalItem
}
export type GlobalItem = {
    value: any,
    type: string,
    describe?: string,
} | number | string | boolean | any

export interface Components {
    [key: string]: gui.AllGUI
}

export interface SceneItem {
    id: string | number,
    libId: string | number,
    transition?: Transition
}

export interface Transition {
    type: TransitionType;
    duration: number;
}

export const enum TransitionType {
    NONE = 'none',
    FADE_OUT = 'fadeOut',
    CIRCLE_WIPE = 'circleWipe',
    CROSS_ZOOM = 'crossZoom',
    DOOM_SCREEN = 'doomScreen',
    HEART_WIPE = 'heartWipe',
    LINEAR_BLUR = 'linearBlur',
    PAGE_CURL = 'pageCurl',
    TO_TEAR = 'toTear',
    WIND = 'wind',
    PAGE_FLIP_RIGHT = 'pageFlipRight',
    PAGE_FLIP_LEFT = 'pageFlipLeft',
}

export type AssetItem = {
    type: AssetType,
    url: string
    name: string,
}

export enum ScaleMode {
    SHOW_ALL = 'showAll',
    NO_SCALE = 'noScale',
    COVER = 'cover',
    CONTAIN = 'contain',
}

export enum LoadMode {
    SINGLE = 'single',
    ALL = 'all',
}

export enum AssetType {
    IMAGE = 'image',
    SOUND = 'sound',
    SHEET = 'sheet',
    SVG = 'svg',
    FONT = 'font',
    AUDIO = 'audio',
    VIDEO = 'video',
    JS = 'js',
}
