import { ActionType } from "./Action";
import { StyleSheet } from "./Style";

export namespace gui {
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
        filterBlur?: number;
        interactabled?: boolean;
        style?: any;
        dragOption?: any,
        pivotX?: number;
        pivotY?: number;
    }

    export interface Button extends Base, DisplayComponent {
        type: guiType.Button,
        up: number | string,
        move: number | string,
        down: number | string,
        upAndSelected?: number | string,
        downAndSelected?: number | string,
        moveAndSelected?: number | string
    }

    export interface Custom extends Base, DisplayComponent {
        type: guiType.Custom,
        children?: CustomChildrenItem[],
        animations?: AnimationItem[],
        props?: object,
        actionList?: ActionType[] | string
    }

    export interface AnimationItem  {
        name: string;
        duration?: number;
        autoPlay?: boolean;
        loop?: boolean;
        children: { [id: string]: ISubAnimation };
    }

    export interface ISubAnimation {
        duration?: number;
        loop?: boolean;
        timelines: ITimeline[];
    }

    export interface ITimeline {
        type: TimelineType | string;
        loop?: boolean;
        frames: IFrame[];
    }

    export interface IFrame {
        frame: number;
        value: any;
        curve?: number[];
    }

    export const enum LinePosition {
        leftTop = 'leftTop',
        centerTop = 'centerTop',
        rightTop = 'rightTop',
        leftCenter = 'leftCenter',
        center = 'center',
        rightCenter = 'rightCenter',
        leftBottom = 'leftBottom',
        centerBottom = 'centerBottom',
        rightBottom = 'rightBottom'
    }

    export const enum TimelineType {
        x = 'x',
        y = 'y',
        scaleX = 'scaleX',
        scaleY = 'scaleY',
        rotation = 'rotation',
        color = 'color',
        alpha = 'alpha',
        visible = 'visible',
        text = 'text',
        progress = 'progress',
        skewX = 'skewX',
        skewY = 'skewY',
        play = 'play',
        volume = 'volume',
        enabled = 'enabled',
        filterBlur = 'filterBlur',
        event = 'event',
    }

    export interface CustomChildrenItem extends Base, DisplayComponent{
        text?: string
        style?: StyleSheet
        id: string | number,
        libId: string | number,
        loop?: boolean,
        loopCount?: number,
        autoPlay?: boolean,
        animationSpeed?: number,
        animationName ?: string,
        isPlay?: boolean,
        lineColor?: number,
        lineWidth?: number,
        radius?: number
    }

    export interface Checkbox extends Base, DisplayComponent{
        type: guiType.CheckBox,
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
        type: guiType.Image,
        src: string | number
    }

    export interface Text extends Base, DisplayComponent {
        type: guiType.Text,
        style?: StyleSheet,
        text? : String,
        resolution?: number
    }

    export interface Rect extends Base, DisplayComponent {
        type: guiType.Rect,
        lineWidth?: number,
        radius?: number,
        lineColor?: number,
        anchorX?: number,
        anchorY?: number
    }

    export interface Circle extends Base, DisplayComponent {
        type: guiType.Circle,
        lineWidth?: number,
        anchorX?: number,
        anchorY?: number,
        radius?: number,
        lineColor?: number,
    }

    export interface TextInput extends Base, DisplayComponent {
        type: guiType.TextInput,
        text?: string,
        placeholder?: string,
        maxLength?: string,
        restrict? : any,
        up?: number | string,
        down?: number | string,
        move?: number | string,
        disabled?: number | string
    }

    export interface Slider extends Base, DisplayComponent {
        type: guiType.Slider,
        maxValue?: number,
        minValue?: number,
        thumb?: number | string,
        track?: number | string,
        tracklight?: number | string,
        value?: number | string,
        vertical?: boolean
    }

    export interface ConnectLine extends Base, DisplayComponent {
        type: guiType.ConnectLine,
        play?: number,
        autoPlay?: boolean,
        source?: string | object,
        sourcePosition?: string | number,
        target?: string | object,
        targetPosition?: LinePosition | number[],
        lineColor?: number,
        lineWidth?: number,
        isAnimation?: boolean,
        isClear?: boolean,
    }

    export interface FollowLine extends Base, DisplayComponent {
        type: guiType.FollowLine,
        lineColor?: number,
        source?: string[],
        role?: string,
        isErasing?: boolean,
        isPause?: boolean
    }

    export interface SpriteAnimated extends Base, DisplayComponent {
        type: guiType.SpriteAnimated,
        src?: string | number,
    }

    export interface Evaluater extends Base, DisplayComponent {
        type: guiType.Evaluater,
        appId?: string ,
        userId?: string ,
        env?: string ,
        sdkType?: string ,
        debug?: boolean ,
        audioFormat?: string ,
        mediaCheck?: boolean ,
        initRecorder?: boolean ,
        recorderMinTime?: number ,
        autoStopMinRecord?: boolean ,
        refText?: string ,
        keyWords?: string ,
        textMode?: number ,
        evalMode?: number,
        rank?: number ,
        resultMode?: number ,
        receiveTimeout?: number ,
        recorderMinTime_start?: number ,
        autoStopMinRecord_start?: boolean ,
        recorderMaxTime?: number ,
        autoStopMaxRecord?: boolean ,
        useVAD?: boolean ,
        vadSensivity?: number ,
        vadDuration?: number ,
        vadMaxRecordDuration?: number ,
        vadAutoStop?: boolean
    }

    export type AllGUI = gui.Button | gui.Custom | gui.Text | gui.Image | gui.Checkbox |
                         gui.Rect | gui.SpriteAnimated | gui.Circle | gui.Evaluater |
                         gui.FollowLine | gui.ConnectLine | gui.Slider | gui.TextInput
}

export enum guiType {
    Rect = 'Rect',
    Text = 'Label',
    Image = 'Image',
    Custom = 'custom',
    Slider = 'Slider',
    Circle = 'Circle',
    Button = 'Button',
    CheckBox = 'CheckBox',
    TextInput = 'TextInput',
    Evaluater = 'Evaluater',
    FollowLine = 'FollowLine',
    ConnectLine = 'ConnectLine',
    SpriteAnimated = 'SpriteAnimated',

    // Table = 'table',
    // Input = 'input',
    // Graphic = 'graphic',
    // Container = 'container',
    // Dragonbones = 'dragonbones',
    // Particle = 'particle',
    // Sheet = 'sheet',
    // Video = 'video',
    // Audio = 'audio',
    // Microphone = 'microphone',
    // js = 'js'
    // svg = 'svg',
}
