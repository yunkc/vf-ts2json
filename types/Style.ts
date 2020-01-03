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
export interface StyleSheet {
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