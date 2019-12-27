export namespace Widget {
    interface Base {
        name?: string,
    }

    interface DisplayComponent {
        x?: number;
        y?: number;
        scaleX?: number;
        scaleY?: number;
        alpha?: number;
        color?: number;
        visible?: boolean;
        rotation?: any;
        width?: number;
        height?: number;
    }

    export interface Button extends Base, DisplayComponent {
        type: WidgetType.button
    }

    export interface Custom extends Base, DisplayComponent {
        type: WidgetType.custom,
        children?: CustomChildrenItem[],
        animations?: [],
        props?: object,
        actionList?: ActionType[]
    }

    export interface CustomChildrenItem extends DisplayComponent{
       id: string | number,
       libId: string | number,
       style?: StyleSheet
    }

    export interface Checkbox extends Base, DisplayComponent{
        type: WidgetType.checkbox,
        up: string,
        down: string,
        move: string,
        upAndSelected: string,
        moveAndSelected: string,
        width: number,
        height: number,
        checkGroup: string
    }

    export interface Image extends Base, DisplayComponent {
        type: WidgetType.image,
        src: string | number
    }

    export interface Text extends Base, DisplayComponent {
        type: WidgetType.text,
        style?: Object
    }

}
export enum WidgetType {
    text = 'text',
    rect = 'Rect',
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

export namespace Action {
    interface Base {}

    export interface Click extends Base {
        type: ActionType.Click,
        target: Number[]| String[],
        execute: ActionType[]
    }

    export interface Print extends Base{
        type: ActionType.Print,
        value: any
    }
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
export enum Express {}

interface StyleSheet {
    display?: Style.Display,
    width?: number,
    height?: number,
    minWidth?: number,
    maxWidth?: number,
    minHeight?: number,
    maxHeight?: number,
    left?: number,
    top?: number,
    right?: number,
    bottom?: number,
    scaleX?: number,
    scaleY?: number,
    skewX? : number,
    skewY? : number,
    rotate?: number,
    pivotY?: number,
    position?: Style.Position,
    tint?: number,
    zIndex?: number,
    alpha?: number,
    visible?: boolean,
    color? : number,
    letterSpacing? : number,
    wordWrap?: boolean,
    wordWrapWidth?: number,
    textAlign?: Style.TextAlign,
    lineHeight?: number,
    fontFamily?: string | string[],
    fontSize? : number,
    fontStyle? : Style.FontStyle,
    fontVariant?: Style.FontVariant,
    fontWeight? : Style.FontWeight,
    padding? : number,
    stroke? : number,
    strokeThickness?: number,
    dropShadow?: boolean,
    dropShadowAlpha?: boolean,
    dropShadowAngle?: number,
    dropShadowBlur? : number,
    dropShadowColor?: string,
    dropShadowDistance?: number,
    breakWords? : boolean,
    gridSize?: number[],
    gridTemplateRow?: number,
    gridTemplateColumns?: number
}
export namespace Style {
    export enum Display {
        grid = 'grid',
        block = 'block'
    }
    export enum Position {
        absolute = 'absolute'
    }
    export enum TextAlign {
        left = 'left',
        right = 'right',
        center = 'center'
    }
    export enum FontStyle {
        normal = 'normal',
        italic = 'italic',
    }
    export enum FontVariant {
        normal = 'normal',
    }
    export enum FontWeight {
        normal = 'normal',
        bold = 'bold',
        bolder = 'bolder',
        lighter = 'lighter'
    }
}

export namespace Animation {}