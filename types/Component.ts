import {ActionType} from "./Action";
import {StyleSheet} from "./Style";

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
        filterBlur?: number,
        interactabled?: boolean
    }

    export interface Button extends Base, DisplayComponent {
        type: guiType.BUTTON,
        up: number | string,
        move: number | string,
        down: number | string,
        upAndSelected?: number | string,
        downAndSelected?: number | string,
        moveAndSelected?: number | string,
    }

    export interface Custom extends Base, DisplayComponent {
        type: guiType.CUSTOM,
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
        type: TimelineType;
        loop?: boolean;
        frames: IFrame[];
    }

    export interface IFrame {
        frame: number;
        value: any;
        curve?: number[];
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
        FILTER_BLUR = 'filterBlur',
        EVENT = 'event',
    }

    export interface CustomChildrenItem extends DisplayComponent{
        name?: string,
        text?: string
        style?: StyleSheet
        id: string | number,
        libId: string | number
    }

    export interface Checkbox extends Base, DisplayComponent{
        type: guiType.CHECKBOX,
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
        type: guiType.IMAGE,
        src: string | number
    }

    export interface Text extends Base, DisplayComponent {
        type: guiType.TEXT,
        style?: StyleSheet
    }

    export interface Rect extends Base, DisplayComponent {
        type: guiType.RECT,
        color: number
        width: number,
        height: number,
        radius?: number,
    }
    export interface Evaluater extends Base, DisplayComponent {
        type: guiType.EVALUATER,
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

    export type AllGUI = gui.Button | gui.Custom | gui.Text | gui.Image | gui.Checkbox | gui.Rect | gui.Evaluater
}

export enum guiType {
    // UI
    CONTAINER = 'container',
    TABLE = 'table',
    IMAGE = 'Image',
    BUTTON = 'Button',
    RADIO = 'CheckBox',
    CHECKBOX = 'CheckBox',
    INPUT = 'input',
    SLIDER = 'slider',
    TEXT = 'Label',
    RECT = 'Rect',
    CIRCLE = 'Circle',
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
    EVALUATER = 'Evaluater'
}
