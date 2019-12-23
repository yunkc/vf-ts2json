import components from "../src/components";

export interface IVFTemplate {
    assets: Assets.assets,
    global: {
        [key: string]: Global.global
    },
    scenes: Scenes.scene[],
    width: Number,
    height: Number,
    baseUrl: String,
    name: String,
    conversion: String,
    loadMode: LoadMode,
    version: String,
    scaleMode: ScaleMode,
    components: {
        [key: string]: Components.button | Components.custom | Components.text | Components.image | Components.checkbox
    }
}


export namespace Assets {
    export interface assets {
        [key: string]: {
            type: type,
            url: string
            name?: string,
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

export namespace Global {
    export interface global {
        type: string,
        value: any,
        describe?: string,
    }
}

export namespace Scenes {
    export interface scene {
        id: String,
        libId: String
    }
}

export namespace Components {
    export interface base {
        name?: string,
    }

    export interface button extends base{
        type: type.button
    }

    export interface custom extends base{
        type: type.custom,
        children: []
    }

    export interface checkbox extends base{
        type: type.checkbox,
        up: string,
        down: string,
        move: string,
        upAndSelected: string,
        moveAndSelected: string,
        width: number,
        height: number,
        checkGroup: string
    }

    export interface image extends base{
        type: type.image,
        src: string,
        width?: number,
        height: number
    }

    export interface text extends base{
        type: type.text,
        style?: Object
    }

    export enum type {
        text = 'text',
        rect = 'rect',
        image = 'Image',
        table = 'table',
        input = 'input',
        slider = 'slider',
        button = 'Button',
        custom = 'custom',
        checkbox = 'CheckBox',
        container = 'container',

        // ANI
        dragonbones = 'dragonbones',
        particle = 'particle',
        sheet = 'sheet',
        // MEDIA
        video = 'video',
        audio = 'audio',
        microphone = 'microphone',
        // NPM
        npm = 'npm',
        // VECTOR
        svg = 'svg',
        graphic = 'graphic',
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

export enum ActionType {
    Print,
    Add,
    Added,
    Remove,
    SetProperty,
    Click,
    Express,
    IfGroup,
    If,
    ElseIf,
    Else,
    DefineFunction,
    CallFunction,
    AddEventListener,
    RemoveEventListener,
    EmitEvent,
    PlaySound,
    PlayAnimation,
    JumpToNextScene,
    JumpToPrevScene,
    JumpToScene,
    ArrayInit,
    ArrayPop,
    ArrayPush,
    ArraySplice,
    ArrayRandom,
    ArrayConcat,
    ArrayShift,
    ArrayUnshift,
    AddEventListenerCall,
    CallProtoFunction,
    GotoPlay,
    GotoStop,
    PauseSound,
    ResumeSound,
}