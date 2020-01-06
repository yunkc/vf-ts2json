
    export interface IVFDataV1 {
        name: string;
        version: string;
        width: number;
        height: number;
        fps: number;
        scaleMode: ScaleMode;
        loadMode: LoadMode;
        baseUrl: string;
        conversion: string;
        global?: {[id: string]: IVariableData};
        assets: {[id: string]: IAsset};
        components: {[id: string]: AllComponent};
        scenes: IScene[];
    }

    export const enum ScaleMode {
        SHOW_ALL = 'showAll',
        NO_SCALE = 'noScale',
        COVER = 'cover',
        CONTAIN = 'contain',
    }
    export const enum LoadMode {
        SINGLE = 'single',
        ALL = 'all',
    }

    export const enum VariableType {
        NUMBER = 'number',
        STRING = 'string',
        BOOLEAN = 'boolean',
        ARRAY = 'array',
        OBJECT = 'object',
    }
    // tslint:disable-next-line: array-type
    export type VariableDataValue = number | string | boolean| Array<any> | any;
    export interface IVariableData {
        id?: string;
        type: VariableType;
        value: VariableDataValue;
    }

    export const enum AssetType {
        IMAGE = 'image',
        SOUND = 'sound',
        SHEET = 'sheet',
        SVG = 'svg',
        FONT = 'font',
        AUDIO = 'audio',
        VIDEO = 'video',
        JS = 'js',
    }
    export interface IAsset {
        id?: string;
        name?: string;
        type: AssetType;
        url: string;
    }

    export const enum ComponentType {
        // UI
        CONTAINER = 'container',
        TABLE = 'table',
        IMAGE = 'Image',
        BUTTON = 'Button',
        RADIO = 'CheckBox',
        CHECKBOX = 'CheckBox',
        INPUT = 'input',
        SLIDER = 'slider',
        TEXT = 'Text',
        RECT = 'Rect',
        // ANI
        DRAGONBONES = 'dragonbones',
        PARTICLE = 'particle',
        SHEET = 'sheet',
        // MEDIA
        VIDEO = 'video',
        AUDIO = 'audio',
        MICROPHONE = 'microphone',
        // NPM
        NPM = 'npm',
        // VECTOR
        SVG = 'svg',
        GRAPHIC = 'graphic',
        // CUSTOM
        CUSTOM = 'custom',
    }
    export interface IComponent {
        id: string;
        name: string;
        type?: ComponentType;
        resourceIds?: number[];
        libId?: number;
    }
    export interface IDisplayComponent extends IComponent {
        x: number;
        y: number;
        scaleX: number;
        scaleY: number;
        alpha: number;
        color: number;
        visible: boolean;

        rotation: any;
        width: number;
        height: number;

    }

    export interface IImage extends IDisplayComponent {

    }
    export interface IText extends IDisplayComponent{

    }
    export interface IRadio extends IDisplayComponent{

    }
    export interface IRect extends IDisplayComponent{

    }
    export interface IAnimation {
        name: string;
        duration: number;
        autoPlay?: boolean;
        loop?: boolean;
        children: {[id: string]: ISubAnimation};
    }
    export interface ISubAnimation {
        duration: number;
        loop?: boolean;
        timelines: ITimeline[];
    }
    export interface ITimeline {
        type: TimelineType;
        loop?: boolean;
        frames: IFrame[];
    }
    export interface IEventData {
        type: string;
        data?: any;
    }
    export const enum TimelineType {
        X = 'x',
        Y = 'y',
        SCALE_X = 'scaleX',
        SCALE_Y = 'scaleY',
        ROTATION = 'rotation',
        COLOR = 'color',
        ALPHA = 'alpha',
        VISIBLE = 'visible',
        TEXT = 'text',
        PROGRESS = 'progress',
        SKEW_X = 'skewX',
        SKEW_Y = 'skewY',
        PLAY = 'play',
        VOLUME = 'volume',
        ENABLED = 'enabled',
        FITERBLUR = 'filterBlur',
        EVENT = 'event',
    }
    export const enum CurveType {
        None,
        Linear,
        EaseOutQuad,
        EaseInQuad,
        EaseInOutQuad,
        EaseInCubic,
        EaseOutCubic,
        EaseInOutCubic,
        EaseInQuart,
        EaseOutQuart,
        EaseInOutQuart,
        EaseInQuint,
        EaseOutQuint,
        EaseInOutQuint,
        EaseInSine,
        EaseOutSine,
        EaseInOutSine,
        EaseInExpo,
        EaseOutExpo,
        EaseInOutExpo,
        EaseInCirc,
        EaseOutCirc,
        EaseInOutCirc,
        EaseOutBounce,
        EaseInBack,
        EaseOutBack,
        EaseInOutBack,
        Elastic,
        EaseOutElastic,
        EaseOutElasticTmp,
        SwingFromTo,
        SwingFrom,
        SwingTo,
        Bounce,
        BouncePast,
        EaseFromTo,
        EaseFrom,
        EaseTo,
        Sinusoidal,
        Reverse,
        Wobble,
        Spring,
    }
    export interface IFrame {
        frame: number;
        value: any;
        curve?: number[];
    }

    export interface ICustomComponent extends IDisplayComponent {
        children?: AllComponent[];
        animations?: IAnimation[];
        props?: {[id: string]: IVariableData};
        actionList?: AllAction[] | string;
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
    export interface ITransitionData {
        type: TransitionType;
        duration: number;
    }
    export interface IScene {
        id: string;
        libId: string;
        transition?: ITransitionData;
    }
    export interface ISoundTrackMedia {
        id: string;
        media: any;
        sound: any;
    }
    export type AllComponent = (IComponent | IDisplayComponent | ICustomComponent |
        IRadio | IImage | IText | IRect);

    /// actionList ////////////////////////////////

    export enum ExpressItemType {
        CONST,     // 常量
        VARIABLE,  // 变量
        RANDOM,    // 随机值
        STSTEN,    // 系统数值
        PROPERTY,  // 组件属性
        OPERATION, // 运算符
        ARRAY_LEN,     // 数组长度
        ARRAY_VALUE,   // 数组取值
        OBJECT_VALUE,  // 对象取值
        PARAM_VALUE,   // 参数取值
        ARRAY_FUNCTION, // 数组 pop push shift unshift concat splice
        COMPONENT,     // 组件
    }
    export enum SystemValueType {
        TIME,
        YEAR,
        MONTH,
        DAY,
        DATE,
    }
    export type ExpressItem = any[];   // 表达式的项
    export type ExpressType = ExpressItem[]; // 表达式

    /** 通用状态 */
    export const enum VFStateCode {
        ERROR = 'error',
        INIT = 'init',
        LOAD = 'load',
        LOADED = 'loaded',
        READY = 'ready',
        SCENE_CREATE = 'sceneCreate',
    }

    export const enum ComponentEvent {
        Add = 'Add',
        Added= 'Added',
        Remove = 'Remove',
        Removed = 'Removed',
        Click = 'click',
    }

    export const enum SceneEvent {
        TransitionStart = 'TransitionStart',
        TransitionEnd = 'TransitionEnd',
        LoadProgress = 'LoadProgress',
        LoadComplete = 'LoadComplete',
    }
    export const enum AnimationEvent {
        AnimationComplete = 'AnimationComplete',
        AnimationLoopComplete = 'AnimationLoopComplete',
    }
    export const enum SoundEvent {
        SoundEnd = 'SoundEnd',
        SoundStart = 'SoundStart',
    }
    export const enum AnimationStatus {
        STOP,
        PLAYING,
    }

    export const enum ActionType {
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
        Comment,
        ActionList,
        DefineVariable,
    }

    export type AllAction = ( IAction | IActionSetProperty | IActionExpress | IActionFunction
                            | IActionAddEventListener | IActionPlayAnimation);

    export interface IAction {
        type: ActionType;
        execute?: AllAction[];
        target?: string[];
        value?: any;
    }

    export interface IActionSetProperty extends IAction {
        property: string;
        value: any;
    }
    export interface IActionPlayAnimation extends IAction {
        name: string | ExpressItem;
        times?: number;
    }
    export interface IActionExpress extends IAction {
        express: ExpressType;
    }
    export interface IActionIFPart extends IAction {
        condition: ExpressType;
    }
    export interface IActionFunction extends IAction {
        name: string;
    }
    export interface IActionAddEventListener extends IAction {
        event: string;
        system?: boolean;
        global?: boolean;
        funName?: string;
    }
    export interface IActionEmitEvent extends IAction {
        event: string;
        system?: boolean;
        global?: boolean;
        eventData?: any;
    }
    export interface IActionJump extends IAction {
        transition?: ITransitionData;
    }
    export interface IActionArraySplice extends IAction {
        start: number;
        deleteCount: number;
    }
    export interface IActionArrayConcat extends IAction {
        concatArr: ExpressItem;
    }
    export interface IActionCallFunction extends IAction {
        name: string | ExpressItem;
        params?: ExpressItem[];
    }
    export interface IActionPlaySound extends IAction {
        trackId?: string;
        useNative?: boolean;
        mode?: 'sound' | 'effect';
    }
    export interface IActionGoto extends IAction {
        name: string | ExpressItem;
        frame: number| ExpressItem;
        times?: number | ExpressItem;
    }
    export interface IActionDefineVariable extends IAction {
        variableType: VariableType;
        varId: string;
    }

