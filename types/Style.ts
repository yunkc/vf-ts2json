export namespace Style {
    export enum display {
        grid = 'grid',
        block = 'block',
        none = 'none'
    }
    export enum position {
        absolute = 'absolute',
        fixed = 'fixed',
        static = 'static'
    }
    export enum textAlign {
        left = 'left',
        right = 'right',
        center = 'center'
    }
    export enum fontStyle {
        normal = 'normal',
        italic = 'italic',
    }
    export enum fontVariant {
        normal = 'normal',
    }
    export enum fontWeight {
        normal = 'normal',
        bold = 'bold',
        bolder = 'bolder',
        lighter = 'lighter'
    }
}
export interface StyleSheet {
    display?: Style.display | string,
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
    position?: Style.position | string,
    tint?: number,
    zIndex?: number,
    alpha?: number,
    visible?: boolean,
    color? : number | string,
    letterSpacing? : number,
    wordWrap?: boolean,
    wordWrapWidth?: number,
    textAlign?: Style.textAlign | string,
    lineHeight?: number,
    fontFamily?: string | string[],
    fontSize? : number,
    fontStyle? : Style.fontStyle | string,
    fontVariant?: Style.fontVariant | string,
    fontWeight? : Style.fontWeight | number,
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
    gridTemplateColumns?: any[],
    gridColumnGap?: number,
    gridTemplateRows?: any[],
    gridRowGap? : number,
    filter?: any,
    maskImage?: string,
    maskSize?: number[],
    maskPosition?: number[],
    justifyContent?: string,
    alignContent?: string,
    visibility? : boolean,
    backgroundColor?: number
}
