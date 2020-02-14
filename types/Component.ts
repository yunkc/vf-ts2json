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
    }

    export interface Button extends Base, DisplayComponent {
        type: guiType.button
    }

    export interface Custom extends Base, DisplayComponent {
        type: guiType.custom,
        children?: CustomChildrenItem[],
        animations?: [],
        props?: object,
        actionList?: ActionType[] | string
    }

    export interface CustomChildrenItem extends DisplayComponent{
        name?: string,
        text?: string
        style?: StyleSheet
        id: string | number,
        libId: string | number,
    }

    export interface Checkbox extends Base, DisplayComponent{
        type: guiType.checkbox,
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
        type: guiType.image,
        src: string | number
    }

    export interface Text extends Base, DisplayComponent {
        type: guiType.text,
        style?: Object
    }

    export interface Rect extends Base, DisplayComponent {
        type: guiType.rect,
        color: number
        width: number,
        height: number,
        radius?: number,
    }

    export type AllGUI = gui.Button | gui.Custom | gui.Text | gui.Image | gui.Checkbox | gui.Rect
}

export enum guiType {
    svg = 'svg',
    npm = 'npm',
    text = 'Label',
    rect = 'Rect',
    video = 'video',
    audio = 'audio',
    sheet = 'sheet',
    image = 'Image',
    table = 'table',
    input = 'input',
    slider = 'slider',
    button = 'Button',
    custom = 'custom',
    graphic = 'graphic',
    particle = 'particle',
    checkbox = 'CheckBox',
    container = 'container',
    dragonbones = 'dragonbones',
    microphone = 'microphone',
}
