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


