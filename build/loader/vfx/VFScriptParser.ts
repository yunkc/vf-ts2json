import { ActionType, IAction, VariableType, IActionDefineVariable, IActionFunction,
         IActionIFPart, ExpressItem, ExpressType, ExpressItemType, IActionExpress,
         IActionAddEventListener, IActionJump, IActionPlaySound, IActionCallFunction,
         IActionPlayAnimation,
         IActionEmitEvent,
         IActionFor} from './IVFData';


interface IToken {
    type: TokenType;
    value?: string | IToken[];
}

enum TokenType {
    None = '0', // 0
    ActionList = 'a', // 1
    Option = 'b', // 2
    Equal = 'c', // 3
    Block = 'd', // 4
    DefaultVariable = 'e', // 5
    Variable = 'f', // 6
    String = 'g', // 7
    Number = 'h', // 8
    Boolean = 'i', // 9
    Semicolon = 'j', // 10
    Function = 'k', // 11
    Bracket = 'l', // 12
    This = 'm', // 13
    If = 'n', // 14
    Else = 'o', // 15
    // Elseif = 'p', // 16
    Child = 'q', // 17
    Dot = 'r', // 18
    Comma = 's', // 19
    Quotation = 't', // 20
    DoubleQuotation = 'u', // 21
    SquareBracket = 'v', // 22
    Print = 'w', // 23
    Slash = 'x',
    VFFunction = 'y',
    Global = 'z',
    System = 'A',
    Random = 'B',
    ArrayFunction = 'C',
    Length = 'D',
    Colon = 'E',
    For = 'F',
    In = 'G',
    Break = 'H',
}

enum VFS_Keyword {
    If = 'if',
    Else = 'else',
    // Elseif = 'elseif',
    DefineVariable = 'var',
    Function = 'function',
    AddListener = 'on',
    RemoveListener = 'off',
    PlaySound = 'playSound',
    PauseSound = 'pauseSound',
    ResumeSound = 'resumeSound',
    JumpToScene = 'jumpToScene',
    JumpToNextScene = 'jumpToNextScene',
    JumpToPrevScene = 'jumpToPrevScene',
    playAnimation = 'playAnimation',
    gotoPlay = 'gotoPlay',
    gotoStop = 'gotoStop',
    Emit = 'emit',
    True = 'true',
    False = 'false',
    Print = 'print',
    Trace = 'trace',
    This = 'this',
    Global = 'global',
    System = 'system',
    Random = 'random',
    Pop = 'pop',
    Push = 'push',
    Shift = 'shift',
    Unshift = 'unshift',
    Concat = 'concat',
    Splice = 'splice',
    Length = 'length',
    For = 'for',
    In = 'in',
    Break = 'break',
    // 下面为单字符关键词
    Enter = '\n',
    Space = ' ',
    At = '@',
    Dollar = '$',
    Sharp = '#',
    Equal = '=',
    Dot = '.',
    Comma = ',',
    Add = '+',
    Minus = '-',
    Star = '*',
    Slash = '/',
    Exclamation = '!',
    Vertical = '|',
    And = '&',
    Backslash = '\\',
    Percent = '%',
    More = '>',
    Less = '<',
    BracketL = '(',
    BracketR = ')',
    SquareBracketL = '[',
    SquareBracketR = ']',
    BlockL = '{',
    BlockR = '}',
    SingleQuot = '\'',
    DoubleQuot = '"',
    Semicolon = ';',
    Colon = ':',
    // 单字符关键字需要加到下面的数组里做分词
}
const VFS_Keyword_Symbol: string[] = [VFS_Keyword.Enter,
                            VFS_Keyword.Space,
                            VFS_Keyword.At,
                            VFS_Keyword.Dollar,
                            VFS_Keyword.Sharp,
                            VFS_Keyword.Equal,
                            VFS_Keyword.Dot,
                            VFS_Keyword.Comma,
                            VFS_Keyword.Add,
                            VFS_Keyword.Minus,
                            VFS_Keyword.Star,
                            VFS_Keyword.Slash,
                            VFS_Keyword.Exclamation,
                            VFS_Keyword.Vertical,
                            VFS_Keyword.And,
                            VFS_Keyword.Backslash,
                            VFS_Keyword.Percent,
                            VFS_Keyword.More,
                            VFS_Keyword.Less,
                            VFS_Keyword.BracketL,
                            VFS_Keyword.BracketR,
                            VFS_Keyword.SquareBracketL,
                            VFS_Keyword.SquareBracketR,
                            VFS_Keyword.BlockL,
                            VFS_Keyword.BlockR,
                            VFS_Keyword.SingleQuot,
                            VFS_Keyword.DoubleQuot,
                            VFS_Keyword.Semicolon,
                            VFS_Keyword.Colon,
                        ];
enum RegType {
    DefineVariable,
    DefineFunction,
    Print,
    IfGroup,
    Express,
    Comment,
    VFFunction,
    CusFunction,
    ArrayRandom,
    For,
    Break,
}
const TokenALL = '[0-9a-zA-Z]';
const VfComponentToken: string = '(' + '(' + TokenType.This + '|' + TokenType.Global + ')' + '(' + TokenType.Child +
                                      '(' + TokenType.Number + '|' + TokenType.String + ')' + ')*)';
const VariableToken: string = '(' + '(' + VfComponentToken + '|' + TokenType.Global + ')' + '?' +
                                '(' + TokenType.Variable + '(' + TokenType.Number + '|' + TokenType.String + '))+)';
const PropertyToken: string = '(' + '(' + VfComponentToken + ')' +
                                '(' + TokenType.Dot + TokenType.String + ')+)';
const ObjectToken: string = '(' + '(' + VariableToken + ')' +
                                '(' + TokenType.Dot + TokenType.String + ')+)';
const StringValueToken: string = '((' + TokenType.Quotation + TokenALL + TokenType.Quotation + ')' + '|' +
                                    '(' + TokenType.DoubleQuotation + TokenALL + TokenType.DoubleQuotation + '))';
const ArrayValueToken: string = '(' + TokenType.SquareBracket + ')+';
const NumberToken: string = '(' + TokenType.Number + '|' +
                                 '(' + TokenType.Option + TokenType.Number + ')' + '|' +
                                 '(' + TokenType.Option + TokenType.Number + TokenType.Dot + TokenType.Number + ')' + '|' +
                                 '(' + TokenType.Number + TokenType.Dot + TokenType.Number + ')' + ')';
const ValueToken: string = '(' + StringValueToken + '|' + NumberToken + '|' +
                                 TokenType.Boolean + '|' + ArrayValueToken + '|' + TokenType.Block + ')';

const OperateToken: string = '(' + TokenType.Option + '|' + TokenType.Equal + '|' + TokenType.Slash + ')';
const ArrayIndexToken: string = '(' + VariableToken + ArrayValueToken + '(' + TokenType.Dot + TokenType.String + ')*)';
const ArrayFunctionToken: string = '(' + VariableToken + TokenType.Dot + TokenType.ArrayFunction + TokenType.Bracket + ')';
const ArrayLengthToken: string = '(' + VariableToken + TokenType.Dot + TokenType.Length + ')';
const ExpressItemToken: string = '(' + VariableToken + '|' + PropertyToken + '|' + ObjectToken + '|' +
                                       ArrayIndexToken + '|' + ArrayFunctionToken +  '|' + ArrayLengthToken + ')';
const ArrayRandomToken: string = '(' + VariableToken + TokenType.Dot + TokenType.Random + TokenType.Bracket + ')';
export default class VFScriptParser {

    public debug: boolean = false;
    public regNumber = /^\d+$/;

    public regDefineVariable = new RegExp(
        TokenType.DefaultVariable + '(' + TokenType.Global + ')?' + TokenType.Variable +
        '[' + TokenType.String + TokenType.Number + ']' +
        TokenType.Equal + TokenALL + '+',
    ); // /56(7|8)3[0-9]*/;  var $str00 = adfafa
    public regDefineFunction = new RegExp(
        TokenType.Function + TokenType.String +
        TokenType.Bracket + TokenType.Block,
    ); // /118124/;
    public regPrint = new RegExp(
        TokenType.Print + TokenType.Bracket,
    ); // /2312/;
    public regIfGroup = new RegExp(
        TokenType.If + TokenType.Bracket + TokenType.Block +
        '(' + TokenType.Else + TokenType.If + TokenType.Bracket + TokenType.Block + ')*' +
        '(' + TokenType.Else + TokenType.Block + ')*',
    ); // /14124([16124]*[154]*)/;
    public regIf = new RegExp(
        TokenType.If + TokenType.Bracket + TokenType.Block,
    ); // /14124/;
    public regElseIf = new RegExp(
        TokenType.Else + TokenType.If + TokenType.Bracket + TokenType.Block,
    ); /// 16124/;
    public regElse = new RegExp(
        TokenType.Else + TokenType.Block,
    ); // /154/;
    public regExpress = new RegExp(
        '(' + ArrayFunctionToken + '|' +
            '(' + '(' + ExpressItemToken + '|' + ValueToken + ')' +
                  '(' + '(' + OperateToken + ')+' + '(' + ExpressItemToken + '|' + ValueToken + '))+)' +
        ')',
    ); // /(13|17|6|7|8|9|2|3)*(2|3)(13|17|6|7|8|9|2|3)*/;

    public regComment = new RegExp(
        TokenType.Slash + TokenType.Slash +
        TokenALL + '*',
    ); // //xxxx;

    public regVFFunction = new RegExp(
        '(' + VfComponentToken + TokenType.Dot + ')?' + TokenType.VFFunction + TokenType.Bracket,
    );
    public regCusFunction = new RegExp(
        VfComponentToken + TokenType.Dot + TokenType.String + TokenType.Bracket,
    );
    public regClosureMaybe = new RegExp(
        TokenType.Bracket + TokenType.Equal + TokenType.Option + TokenType.Block,
    );
    public regEventListenerFun = new RegExp (
        '(' + VfComponentToken + TokenType.Dot + TokenType.String + ')',
    );
    public regArrayRandom = new RegExp ( ArrayRandomToken);
    public regFor = new RegExp(
        TokenType.For + TokenType.Bracket + TokenType.Block,
    );
    public regBreak = new RegExp(
        TokenType.Break,
    );
    public actionRegs: RegExp[] = [
        this.regDefineVariable,
        this.regDefineFunction,
        this.regPrint,
        this.regIfGroup,
        this.regExpress,
        this.regComment,
        this.regVFFunction,
        this.regCusFunction,
        this.regArrayRandom,
        this.regFor,
        this.regBreak,
    ];
    public scriptStr: string = '';

    public functionParams: string[] = [];

    public parse(vfsCode: string): IAction[] {
        this.scriptStr = vfsCode;
        this.log('vfComponentToken: ', VfComponentToken);
        this.log('variableToken: ', VariableToken);
        this.log('propertyToken: ', PropertyToken);
        this.log('expressItemToken: ', ExpressItemToken);
        this.log('operateToken: ', OperateToken);
        this.log('ArrayFunctionToken: ', ArrayFunctionToken);
        if (this.scriptStr) {
            const splitWords = this.splitWord(this.scriptStr);
            this.log('splitWords: ', splitWords);
            const tokens = this.parseToken(splitWords);
            this.log('tokens', tokens);
            const ast = this.parseAst(tokens);
            this.log(ast);
            // this.log(JSON.stringify(ast));
            return ast;
        }
        return [];
    }

    private splitWord(scriptStr: string): string[] {
        const result: string[] = [];
        const stackWord: string[] = [];
        let slashNumber = 0;
        let oneSingleQuot: boolean = false;
        let oneDoubleQuot: boolean = false;

        for (let i: number = 0, len: number = scriptStr.length; i < len; i++) {
            let char = scriptStr.charAt(i);
            // 处理注释
            if (slashNumber === 2) {
                if (char !== '\n') {
                    stackWord.push(char);
                    continue;
                } else {
                    char = ';';
                    slashNumber = 0;
                }
            }

            // 处理引号
            if (oneSingleQuot && char !== VFS_Keyword.SingleQuot ||
                oneDoubleQuot && char !== VFS_Keyword.DoubleQuot) {
                if (char !== '\n') {
                    stackWord.push(char);
                }
                continue;
            }
            if (char === '\n' || char === ' ' || char === '\t') {
                if (stackWord.length > 0) {
                    const w = stackWord.join('');
                    result.push(w);
                    stackWord.length = 0;
                }
                continue;
            }
            if (VFS_Keyword_Symbol.indexOf(char) >= 0) {
                if (stackWord.length > 0) {
                    const w = stackWord.join('');
                    result.push(w);
                    stackWord.length = 0;
                }
                if (char === VFS_Keyword.SingleQuot) {
                    oneSingleQuot = !oneSingleQuot;
                } else if (char === VFS_Keyword.DoubleQuot) {
                    oneDoubleQuot = !oneDoubleQuot;
                }
                switch (char) {
                    case '/n':
                    case ' ':
                        break;
                    default:
                        if (char === VFS_Keyword.Slash) { // 处理注释
                            slashNumber++;
                        }
                        result.push(char);
                        break;
                }
            } else {
                stackWord.push(char);
            }
        }
        return result;
    }
    private parseToken(splitWords: string[]): IToken[] {
        const tokens: IToken[] = [];
        const tokenStack: IToken[][] = [];
        let curStack: IToken[] | undefined;
        let lastTokenType: TokenType = TokenType.None;

        for (let i: number = 0, len: number = splitWords.length; i < len; i++) {
            const word = splitWords[i];
            let token: IToken | undefined = {
                type: TokenType.None,
                value: word,
            };
            if (lastTokenType === TokenType.Quotation && word !== VFS_Keyword.SingleQuot ||
                lastTokenType === TokenType.DoubleQuotation && word !== VFS_Keyword.DoubleQuot) {
                token.type = TokenType.String;
            } else {
                switch (word) {
                    case VFS_Keyword.At:
                        token.type = TokenType.ActionList;
                        break;
                    case VFS_Keyword.Equal:
                        token.type = TokenType.Equal;
                        break;
                    case VFS_Keyword.DefineVariable:
                        token.type = TokenType.DefaultVariable;
                        break;
                    case VFS_Keyword.SingleQuot:
                        token.type = TokenType.Quotation;
                        if (lastTokenType === TokenType.None) {
                            lastTokenType = TokenType.Quotation;
                        } else {
                            lastTokenType = TokenType.None;
                        }
                        break;
                    case VFS_Keyword.DoubleQuot:
                        token.type = TokenType.DoubleQuotation;
                        if (lastTokenType === TokenType.None) {
                            lastTokenType = TokenType.DoubleQuotation;
                        } else {
                            lastTokenType = TokenType.None;
                        }
                        break;
                    case VFS_Keyword.Function:
                        token.type = TokenType.Function;
                        break;
                    case VFS_Keyword.If:
                        token.type = TokenType.If;
                        break;
                    case VFS_Keyword.Else:
                        token.type = TokenType.Else;
                        break;
                    // case VFS_Keyword.Elseif:
                    //     token.type = TokenType.Elseif;
                    //     break;
                    case VFS_Keyword.Dollar:
                        token.type = TokenType.Variable;
                        break;
                    case VFS_Keyword.Sharp:
                        token.type = TokenType.Child;
                        break;
                    case VFS_Keyword.Dot:
                        token.type = TokenType.Dot;
                        break;
                    case VFS_Keyword.Semicolon:
                        token.type = TokenType.Semicolon;
                        break;
                    case VFS_Keyword.Slash:
                        token.type = TokenType.Slash;
                        break;
                    case VFS_Keyword.True:
                    case VFS_Keyword.False:
                        token.type = TokenType.Boolean;
                        break;
                    case VFS_Keyword.Comma:
                        token.type = TokenType.Comma;
                        break;
                    case VFS_Keyword.Print:
                    case VFS_Keyword.Trace:
                        token.type = TokenType.Print;
                        break;
                    case VFS_Keyword.This:
                        token.type = TokenType.This;
                        break;
                    case VFS_Keyword.Global:
                        token.type = TokenType.Global;
                        break;
                    case VFS_Keyword.System:
                        token.type = TokenType.System;
                        break;
                    case VFS_Keyword.Random:
                        token.type = TokenType.Random;
                        break;
                    case VFS_Keyword.Length:
                        token.type = TokenType.Length;
                        break;
                    case VFS_Keyword.For:
                        token.type = TokenType.For;
                        break;
                    case VFS_Keyword.In:
                        token.type = TokenType.In;
                        break;
                    case VFS_Keyword.Break:
                        token.type = TokenType.Break;
                        break;
                    case VFS_Keyword.Pop:
                    case VFS_Keyword.Push:
                    case VFS_Keyword.Shift:
                    case VFS_Keyword.Unshift:
                    case VFS_Keyword.Concat:
                    case VFS_Keyword.Splice:
                        token.type = TokenType.ArrayFunction;
                        break;
                    case VFS_Keyword.AddListener:
                    case VFS_Keyword.RemoveListener:
                    case VFS_Keyword.Emit:
                    case VFS_Keyword.PlaySound:
                    case VFS_Keyword.PauseSound:
                    case VFS_Keyword.ResumeSound:
                    case VFS_Keyword.JumpToScene:
                    case VFS_Keyword.JumpToNextScene:
                    case VFS_Keyword.JumpToPrevScene:
                    case VFS_Keyword.playAnimation:
                    case VFS_Keyword.gotoPlay:
                    case VFS_Keyword.gotoStop:
                        token.type = TokenType.VFFunction;
                        break;
                    case VFS_Keyword.Add:
                    case VFS_Keyword.Minus:
                    case VFS_Keyword.Star:
                    case VFS_Keyword.Exclamation:
                    case VFS_Keyword.Vertical:
                    case VFS_Keyword.And:
                    case VFS_Keyword.Percent:
                    case VFS_Keyword.More:
                    case VFS_Keyword.Less:
                        token.type = TokenType.Option;
                        break;
                    case VFS_Keyword.Colon:
                        token.type = TokenType.Colon;
                        break;
                    case VFS_Keyword.BracketL:
                    case VFS_Keyword.BlockL:
                    case VFS_Keyword.SquareBracketL:
                        token = undefined;
                        if (curStack) {
                            tokenStack.push(curStack);
                        }
                        curStack = [];
                        break;
                    case VFS_Keyword.BracketR:
                        token.type = TokenType.Bracket;
                        token.value = curStack;
                        if (tokenStack.length > 0) {
                            curStack = tokenStack.pop();
                        } else {
                            curStack = undefined;
                        }
                        break;
                    case VFS_Keyword.BlockR:
                        token.type = TokenType.Block;
                        token.value = curStack;
                        if (tokenStack.length > 0) {
                            curStack = tokenStack.pop();
                        } else {
                            curStack = undefined;
                        }
                        break;
                    case VFS_Keyword.SquareBracketR:
                        token.type = TokenType.SquareBracket;
                        token.value = curStack;
                        if (tokenStack.length > 0) {
                            curStack = tokenStack.pop();
                        } else {
                            curStack = undefined;
                        }
                        break;
                    default:
                        if (this.regNumber.test(word)) {
                            token.type = TokenType.Number;
                        } else {
                            token.type = TokenType.String;
                        }
                        break;

                }
            }
            if (token) {
                if (curStack) {
                    curStack.push(token);
                } else {
                    tokens.push(token);
                }
            }
        }
        return tokens;
    }

    private parseAst(tokens: IToken[]): IAction[] {
        const ast: IAction[] = [];
        const astStack: IToken[] = [];
        let curToken: string = '';
        let action: IAction|undefined;
        const tokenActionList0 = TokenType.ActionList + TokenType.String + TokenType.Equal + TokenType.Block;
        const tokenActionList1 = TokenType.ActionList + TokenType.Number + TokenType.Equal + TokenType.Block;
        const tokenActionList2 = TokenType.ActionList + TokenType.This + TokenType.Equal + TokenType.Block;
        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            const token = tokens[i];
            if (token.type === TokenType.Semicolon) {
                action = this.parseMainAst(astStack.concat(), curToken);
                astStack.length = 0;
                curToken = '';
            } else {
                astStack.push(token);
                curToken += token.type.toString();
            }

            if (curToken === tokenActionList0 ||
                curToken === tokenActionList1 ||
                curToken === tokenActionList2) { // @处理漏写分号
                action = this.parseActionList(astStack.concat()); // 解析动作列表
                astStack.length = 0;
                curToken = '';

            } else if (i === len - 1) {
                action = this.parseMainAst(astStack.concat(), curToken);
            }

            if (action) {
                ast.push(action);
                action = undefined;
            }
        }
        return ast;
    }

    private parseMainAst(astStack: IToken[], curToken: string): IAction | undefined {
        let action: IAction|undefined;
        const tokenActionList0 = TokenType.ActionList + TokenType.String + TokenType.Equal + TokenType.Block;
        const tokenActionList1 = TokenType.ActionList + TokenType.Number + TokenType.Equal + TokenType.Block;
        const tokenActionList2 = TokenType.ActionList + TokenType.This + TokenType.Equal + TokenType.Block;
        if (curToken === tokenActionList0 ||
            curToken === tokenActionList1 ||
            curToken === tokenActionList2) {
            action = this.parseActionList(astStack.concat()); // 解析动作列表
        } else if (this.regComment.test(curToken)) {
            action = this.parseComment(astStack.concat()); // 解析注释
        } else if (this.regDefineVariable.test(curToken)) { // 解析全局变量
            action = this.parseDefineVariable(astStack.concat());
        }
        return action;
    }

    private parseComment(tokens: IToken[]): IAction {
        const action: IAction = {
            type : ActionType.Comment,
            value : '',
        };

        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            action.value += tokens[i].value;
        }
        return action;
    }

    private parseActionList(tokens: IToken[]): IAction {
        const action: IAction = {
            type : ActionType.ActionList,
            value : tokens[1].value,
            execute: this.parseBlock(tokens[3]),
        };
        return action;
    }

    private parseBlock(blockToken: IToken): IAction[] {
        const ast: IAction[] = [];
        const astStack: IToken[] = [];
        let curToken: string = '';
        let action: IAction|undefined;
        let tokens: IToken[] = [];
        const tokenDefineFunction = TokenType.Function + TokenType.String + TokenType.Bracket + TokenType.Block;
        if (blockToken.type === TokenType.Block) {
            tokens = blockToken.value as IToken[];
        }
        if (!tokens || tokens.length === 0) {
            return ast;
        }

        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            const token = tokens[i];

            if (token.type === TokenType.Semicolon) {
                action = this.parseAction(astStack.concat(), curToken);
                astStack.length = 0;
                curToken = '';
            } else {
                astStack.push(token);
                curToken += token.type.toString();
                if (curToken === tokenDefineFunction) { // 定义方法 防止定义方法后面不加分号
                    action = this.parseAction(astStack.concat(), curToken);
                    astStack.length = 0;
                    curToken = '';
                } else if (this.regVFFunction.test(curToken)) { // 防止xx.on('',()=>{}) 后面不加分号
                    action = this.parseAction(astStack.concat(), curToken);
                    astStack.length = 0;
                    curToken = '';
                }
            }

            if (i === len - 1 && astStack.length > 0) {
                action = this.parseAction(astStack.concat(), curToken);
                astStack.length = 0;
                curToken = '';
            }
            if (action) {
                ast.push(action);
                action = undefined;
            }
        }
        return ast;
    }
    private parseAction(tokens: IToken[], tokenType: string): IAction|undefined {
        if (tokens.length === 0) {
            return undefined;
        }
        this.log('parse action:', tokenType);
        for (let i: number = 0, len: number = this.actionRegs.length; i < len; i++) {
            const reg = this.actionRegs[i];
            if (reg.test(tokenType)) {
                let action: IAction|undefined;
                switch (i) {
                    case RegType.DefineVariable:
                        action = this.parseDefineVariable(tokens);
                        break;
                    case RegType.DefineFunction:
                        action = this.parseDefineFunction(tokens);
                        break;
                    case RegType.Print:
                        action = this.parsePrint(tokens);
                        break;
                    case RegType.IfGroup:
                        action = this.parseIfGroup(tokens);
                        break;
                    case RegType.Express:
                        action = this.parseExpressTask(tokens);
                        break;
                    case RegType.Comment:
                        action = this.parseComment(tokens);
                        break;
                    case RegType.VFFunction:
                        action = this.parseVFFunction(tokens);
                        break;
                    case RegType.CusFunction:
                        action = this.parseCusFunction(tokens);
                        break;
                    case RegType.ArrayRandom:
                        action = this.parseArrayRandom(tokens);
                        break;
                    case RegType.For:
                        action = this.parseFor(tokens);
                        break;
                    case RegType.Break:
                        action = this.parseBreak(tokens);
                        break;
                    default:
                        break;
                }
                this.log('parse action result:', action);
                return action;
            }
        }
        this.warn('parse action result: undefined', tokens);
        return undefined;
    }
    //////////////////////// 以下为解析实际的action每个都与一个ActionType对应////////////
    private parseDefineVariable(tokens: IToken[]): IAction {
        let idIndex = 2;
        let valueIndex = 4;
        let isGlobal = false;
        if (tokens.length === 6) {
            idIndex = 3;
            valueIndex = 5;
            isGlobal = true;
        }
        const defineVariableTask: IActionDefineVariable = {
            type: ActionType.DefineVariable,
            variableType: VariableType.STRING,
            value: '',
            varId: tokens[idIndex].value as string,
        };
        if (isGlobal) {
            defineVariableTask.target = [-1] as any;
        }
        if (tokens[valueIndex].type === TokenType.Number || tokens[valueIndex].type === TokenType.String) {
            defineVariableTask.variableType = VariableType.NUMBER;
            defineVariableTask.value = this.parseNumberFromTokens(tokens, valueIndex);
        } else if (tokens[valueIndex].type === TokenType.Quotation ||
                   tokens[valueIndex].type === TokenType.DoubleQuotation) {
            defineVariableTask.variableType = VariableType.STRING;
            defineVariableTask.value = this.parseStringFromTokens(tokens, valueIndex);
        } else if (tokens[valueIndex].type === TokenType.Boolean) {
            defineVariableTask.variableType = VariableType.BOOLEAN;
            defineVariableTask.value = tokens[valueIndex].value === VFS_Keyword.True ? true : false;
        } else if (tokens[valueIndex].type === TokenType.Block) {
            defineVariableTask.variableType = VariableType.OBJECT;
            defineVariableTask.value = this.parseObjectFromBlock(tokens[valueIndex]);
        } else if (tokens[valueIndex].type === TokenType.SquareBracket) {
            defineVariableTask.variableType = VariableType.ARRAY;
            defineVariableTask.value = this.parseArrayFromSquare(tokens[valueIndex]);
        }
        return defineVariableTask;
    }

    private parseDefineFunction(tokens: IToken[]): IAction {
        // function funname (param) {}
        const params = this.parseFunctionParamFromBracket(tokens[2]);
        if (params && params.length) {
            for (let i: number = 0, len: number = params.length; i < len; i++) {
                const param = params[i];
                if (param[0] === ExpressItemType.VARIABLE) {
                    this.functionParams.push(param[2]);
                } else {
                    throw new Error( 'function params error:' + params.join(','));
                }
            }
        }

        const defineFunctionTask: IActionFunction = {
            type: ActionType.DefineFunction,
            name: tokens[1].value as string,
            execute: this.parseBlock(tokens[3]),
        };
        this.functionParams.length = 0;
        return defineFunctionTask;
    }
    private parsePrint(tokens: IToken[]): IAction {
        const printTask: IAction = {
            type: ActionType.Print,
            value: '',
        };
        if (tokens[1].value && (tokens[1].value[0] === TokenType.Quotation ||
                               tokens[1].value[0] === TokenType.DoubleQuotation)) {
            printTask.value = this.parseStringFromBracket(tokens[1]);
        } else {
            printTask.value  = this.parseExpressItemFromBracket(tokens[1]);
        }
        return printTask;
    }
    private parseIfGroup(tokens: IToken[]): IAction {
        const ifGroupTask: IAction = {
            type: ActionType.IfGroup,
            execute: [],
        };
        const ifActions: IAction[] = [];
        const astStack: IToken[] = [];
        let curToken: string = '';
        let action: IAction|undefined;

        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            const token = tokens[i];
            astStack.push(token);
            curToken += token.type.toString();
            if (this.regElseIf.test(curToken)) {
                action = this.parseElseIf(astStack.concat());
                astStack.length = 0;
                curToken = '';
            } else if (this.regIf.test(curToken)) {
                action = this.parseIf(astStack.concat());
                astStack.length = 0;
                curToken = '';
            } else if (this.regElse.test(curToken)) {
                action = this.parseElse(astStack.concat());
                astStack.length = 0;
                curToken = '';
            }
            if (action) {
                ifActions.push(action);
                action = undefined;
            }
        }
        ifGroupTask.execute = ifActions;
        return ifGroupTask;
    }
    private parseIf(tokens: IToken[]): IAction {
        const ifTask: IActionIFPart = {
            type: ActionType.If,
            condition: this.parseExpressFromBracket(tokens[1]),
            execute: this.parseBlock(tokens[2]),
        };
        return ifTask;
    }
    private parseElseIf(tokens: IToken[]): IAction {
        const ifTask: IActionIFPart = {
            type: ActionType.ElseIf,
            condition: this.parseExpressFromBracket(tokens[2]),
            execute: this.parseBlock(tokens[3]),
        };
        return ifTask;
    }
    private parseElse(tokens: IToken[]): IAction {
        const ifTask: IAction = {
            type: ActionType.Else,
            execute: this.parseBlock(tokens[1]),
        };
        return ifTask;
    }
    private parseExpressTask(tokens: IToken[]): IAction {
        const expressTask: IActionExpress = {
            type: ActionType.Express,
            express: this.parseExpressType(tokens),
        };
        return expressTask;
    }
    private parseVFFunction(tokens: IToken[]): IAction | undefined {
        let vfFunction: IAction | undefined;
        let functionToken: IToken | undefined;
        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.VFFunction) {
                functionToken = tokens[i];
                break;
            }
        }
        this.log('parse vf function before：', functionToken, tokens);
        if (functionToken) {
            switch (functionToken.value) {
                case VFS_Keyword.AddListener:
                    vfFunction = this.parseAddListener(tokens);
                    break;
                case VFS_Keyword.RemoveListener:
                    vfFunction = this.parseRemoveListener(tokens);
                    break;
                case VFS_Keyword.Emit:
                    vfFunction = this.parseEmit(tokens);
                    break;
                case VFS_Keyword.PlaySound:
                    vfFunction = this.parsePlaySound(tokens);
                    break;
                case VFS_Keyword.PauseSound:
                    vfFunction = this.parsePauseSound(tokens);
                    break;
                case VFS_Keyword.ResumeSound:
                    vfFunction = this.parseResumeSound(tokens);
                    break;
                case VFS_Keyword.JumpToScene:
                    vfFunction = this.parseJumpToScene(tokens);
                    break;
                case VFS_Keyword.JumpToNextScene:
                    vfFunction = this.parseJumpToNextScene(tokens);
                    break;
                case VFS_Keyword.JumpToPrevScene:
                    vfFunction = this.parseJumpToPrevScene(tokens);
                    break;
                case VFS_Keyword.playAnimation:
                    vfFunction = this.parsePlayAnimation(tokens);
                    break;
                case VFS_Keyword.gotoPlay:
                    vfFunction = this.parseGotoPlay(tokens);
                    break;
                case VFS_Keyword.gotoStop:
                    vfFunction = this.parseGotoStop(tokens);
                    break;
                default:
                    break;
            }
        }
        this.log('parse vf function after:', vfFunction);
        return vfFunction;
    }
    private parseAddListener(tokens: IToken[]): IAction | undefined {
        const componentTokens: IToken[] = [];
        let paramsToken: IToken | undefined;

        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            if (tokens[i].type !== TokenType.Dot) {
                componentTokens.push(tokens[i]);
            } else {
                break;
            }
        }
        for (let i: number = tokens.length - 1; i >= 0; i--) {
            if (tokens[i].type === TokenType.Bracket) {
                paramsToken = tokens[i];
                break;
            }
        }
        if (componentTokens.length > 0 && paramsToken) {

            const target = this.parseComponent(componentTokens);
            const eventParam = this.parseEventParamFromBracket(paramsToken);
            if (eventParam.ok) {
                const addListenerTask: IActionAddEventListener = {
                    type: ActionType.AddEventListener,
                    event: eventParam.eventName,
                    target,
                };
                if (componentTokens.length) {
                    if (componentTokens[0].type === TokenType.Global) {
                        addListenerTask.global = true;
                    } else if (componentTokens[0].type === TokenType.System) {
                        addListenerTask.system = true;
                    }
                }
                if (Array.isArray(eventParam.function)) {
                    addListenerTask.execute = eventParam.function;
                } else {
                    addListenerTask.funName = eventParam.function;
                    addListenerTask.type = ActionType.AddEventListenerCall;
                }
                return addListenerTask;
            }

        }
    }

    private parseRemoveListener(tokens: IToken[]): IAction | undefined {
        const componentTokens: IToken[] = [];
        let paramsToken: IToken | undefined;

        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            if (tokens[i].type !== TokenType.Dot) {
                componentTokens.push(tokens[i]);
            } else {
                break;
            }
        }
        for (let i: number = tokens.length - 1; i >= 0; i--) {
            if (tokens[i].type === TokenType.Bracket) {
                paramsToken = tokens[i];
                break;
            }
        }
        if (componentTokens.length > 0 && paramsToken) {

            const target = this.parseComponent(componentTokens);
            const eventParam = this.parseEventParamFromBracket(paramsToken);
            if (eventParam.eventName) {
                const addListenerTask: IActionAddEventListener = {
                    type: ActionType.AddEventListener,
                    event: eventParam.eventName,
                    target,
                };
                if (componentTokens.length) {
                    if (componentTokens[0].type === TokenType.Global) {
                        addListenerTask.global = true;
                    } else if (componentTokens[0].type === TokenType.System) {
                        addListenerTask.system = true;
                    }
                }
                return addListenerTask;
            }

        }
    }

    private parseEmit(tokens: IToken[]): IAction | undefined {
        const componentTokens: IToken[] = [];
        let paramsToken: IToken | undefined;

        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            if (tokens[i].type !== TokenType.Dot) {
                componentTokens.push(tokens[i]);
            } else {
                break;
            }
        }
        for (let i: number = tokens.length - 1; i >= 0; i--) {
            if (tokens[i].type === TokenType.Bracket) {
                paramsToken = tokens[i];
                break;
            }
        }
        if (componentTokens.length > 0 && paramsToken) {

            const target = this.parseComponent(componentTokens);
            const eventParam = this.parseExpressTypeFromBracket(paramsToken);

            const emitTask: IActionEmitEvent = {
                type: ActionType.EmitEvent,
                event: '',
                target,
            };
            if (componentTokens.length) {
                if (componentTokens[0].type === TokenType.Global) {
                    emitTask.global = true;
                } else if (componentTokens[0].type === TokenType.System) {
                    emitTask.system = true;
                }
            }
            if (eventParam && eventParam.length) {
                emitTask.event = eventParam[0][1];
                if (eventParam.length > 1) {
                    emitTask.eventData = eventParam[1];
                }
            }
            return emitTask;


        }
    }


    private parseJumpToScene(tokens: IToken[]): IAction | undefined {
        const params = this.parseFunctionParamFromBracket(tokens[1]);
        if (params.length === 0) {
            return;
        }
        const jumpToTask: IActionJump = {
            type: ActionType.JumpToScene,
            value: params[0][1],
        };
        if (params.length > 1) {
            jumpToTask.transition = params[1][1];
        }
        return jumpToTask;
    }

    private parseJumpToNextScene(tokens: IToken[]): IAction | undefined {
        const params = this.parseFunctionParamFromBracket(tokens[1]);
        const jumpToTask: IActionJump = {
            type: ActionType.JumpToNextScene,
        };
        if (params.length > 0) {
            jumpToTask.transition = params[0][1];
        }
        return jumpToTask;
    }

    private parseJumpToPrevScene(tokens: IToken[]): IAction | undefined {
        const params = this.parseFunctionParamFromBracket(tokens[1]);
        const jumpToTask: IActionJump = {
            type: ActionType.JumpToPrevScene,
        };
        if (params.length > 0) {
            jumpToTask.transition = params[0][1];
        }
        return jumpToTask;
    }

    private parsePlaySound(tokens: IToken[]): IAction | undefined {
        const params = this.parseFunctionParamFromBracket(tokens[1]);
        if (params.length === 0) {
            return;
        }
        const playSoundTask: IActionPlaySound = {
            type: ActionType.PlaySound,
            value: params[0],
            trackId: '-1',
        };
        if (params.length > 1) {
            playSoundTask.trackId = params[1][1];
        }
        if (params.length > 2) {
            const otherParam = params[2];
            if (otherParam[0] === ExpressItemType.CONST) {
                const p = otherParam[1];
                if (Object.prototype.toString.call(p) === '[object Object]') {
                    for ( const pid in p) {
                        if (p[pid]) {
                            (playSoundTask as any)[pid] = p[pid];
                        }
                    }
                }
            }
        }
        return playSoundTask;
    }

    private parsePauseSound(tokens: IToken[]): IAction | undefined {
        const params = this.parseFunctionParamFromBracket(tokens[1]);
        if (params.length === 0) {
            return;
        }
        const playSoundTask: IActionPlaySound = {
            type: ActionType.PauseSound,
            value: params[0],
            trackId: '-1',
        };
        if (params.length > 1) {
            playSoundTask.trackId = params[1][1];
        }
        return playSoundTask;
    }

    private parseResumeSound(tokens: IToken[]): IAction | undefined {
        const params = this.parseFunctionParamFromBracket(tokens[1]);
        if (params.length === 0) {
            return;
        }
        const playSoundTask: IActionPlaySound = {
            type: ActionType.ResumeSound,
            value: params[0],
            trackId: '-1',
        };
        if (params.length > 1) {
            playSoundTask.trackId = params[1][1];
        }
        return playSoundTask;
    }

    private parsePlayAnimation(tokens: IToken[]): IAction | undefined {

        const funAction: IActionCallFunction = this.parseCusFunction(tokens) as IActionCallFunction;
        if (funAction && funAction.params && funAction.params.length > 0) {
            const playAnimation: IActionPlayAnimation = {
                type: ActionType.PlayAnimation,
                name: funAction.params[0],
                target: funAction.target,
                times: 1,
            };
            if (funAction.params.length > 1 ) {
                playAnimation.times = funAction.params[1][1];
            }
            this.log('playaniamtion', playAnimation);
            return playAnimation;
        }
        return undefined;
    }
    private parseCusFunction(tokens: IToken[]): IAction | undefined {
        const cusFunction: IActionCallFunction =  {
            type: ActionType.CallFunction,
            target: [],
            name: '',
        };

        const componentTokens: IToken[] = [];
        const funTokens: IToken[] = [];
        let i: number = 0;
        let len: number = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type !== TokenType.Dot) {
                componentTokens.push(tokens[i]);
            } else {
                break;
            }
        }
        for (i++ ; i < len; i++) {
            funTokens.push(tokens[i]);
        }
        if (componentTokens.length > 0 && funTokens.length > 0) {

            const target = this.parseComponent(componentTokens);
            cusFunction.target = target;
            if (funTokens.length >= 2 &&
               (funTokens[0].type === TokenType.String  || funTokens[0].type === TokenType.VFFunction) &&
               funTokens[1].type === TokenType.Bracket)  {
                const funName: string = funTokens[0].value as string;
                const funParam = this.parseFunctionParamFromBracket(funTokens[1]);
                cusFunction.name = funName;
                if (funParam.length > 0) {
                    cusFunction.params = funParam;
                }
                return cusFunction;
            }

        }
        return undefined;
    }

    private parseArrayRandom(tokens: IToken[]): IAction | undefined {
        const arrayRandom: IAction =  {
            type: ActionType.ArrayRandom,
            target: [],
        };
        const express: ExpressItem = [ExpressItemType.VARIABLE];
        const target = [];
        let i: number = 0;
        let len: number = 0;

        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            } else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            } else if (tokens[i].type === TokenType.String ||
                        tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            } else if (tokens[i].type === TokenType.Variable) {
                break;
            }
        }
        express.push(target);

        // find variable
        if ( i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Variable) {
                    continue;
                } else if (tokens[i].type === TokenType.String ||
                            tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                } else if (tokens[i].type === TokenType.Dot) {
                    break;
                }
            }
        }
        arrayRandom.target = express;
        return arrayRandom;
    }
    private parseFor(tokens: IToken[]): IAction | undefined {
        const forin = this.parseForinFromBracket(tokens[1]);
        if (forin) {
            const forTask: IActionFor = {
                type: ActionType.For,
                forin,
                execute: this.parseBlock(tokens[2]),
            };

            if (this.functionParams.length) {
                this.functionParams.pop();
            }
            return forTask;
        }
        return undefined;


    }
    private parseBreak(tokens: IToken[]): IAction {
        const breakTask: IAction = {
            type: ActionType.Break,
        };
        return breakTask;
    }
    private parseGotoPlay(tokens: IToken[]): IAction | undefined {

        const funAction: IActionCallFunction = this.parseCusFunction(tokens) as IActionCallFunction;
        if (funAction) {
            funAction.type = ActionType.CallProtoFunction;
            funAction.name = 'gotoPlay';
            return funAction;
        }
        return undefined;
    }
    private parseGotoStop(tokens: IToken[]): IAction | undefined {

        const funAction: IActionCallFunction = this.parseCusFunction(tokens) as IActionCallFunction;
        if (funAction) {
            funAction.type = ActionType.CallProtoFunction;
            funAction.name = 'gotoStop';
            return funAction;
        }
        return undefined;
    }
    //////////////////////// 以上为解析实际的action每个都与一个ActionType对应////////////
    private parseNumberFromTokens(tokens: IToken[], start: number): number {
        let numStr: string = '';
        const startToken = tokens[start];
        numStr += startToken.value;
        if (startToken.type === TokenType.Option && startToken.value === VFS_Keyword.Minus) {
            const minsNum = this.parseNumberFromTokens(tokens, start + 1);
            return -minsNum;
        }
        if (tokens.length > start + 2) {
            if (tokens[start + 1].type === TokenType.Dot &&
                tokens[start + 2].type === TokenType.Number) {
                numStr = numStr + '.' + tokens[start + 2].value;
                return parseFloat(numStr);
            }
        }
        if (startToken.type === TokenType.Number) {
            return parseInt(numStr, 10);
        } else if (startToken.type === TokenType.String) {
            if (numStr.indexOf('0x') === 0) {
                return parseInt(numStr, 16);
            }
            // tslint:disable-next-line: no-console
            this.warn('parseNumber error:', startToken.value);
        }
        // tslint:disable-next-line: no-console
        this.warn('parseNumber error:', startToken);
        return 0;
    }

    private parseStringFromTokens(tokens: IToken[], start: number): string {
        let str: string = '';
        let quo: number = 0;
        for (let i: number = start, len: number = tokens.length; i < len; i++) {
            const token = tokens[i];
            if (token.type === TokenType.Quotation ||
                token.type === TokenType.DoubleQuotation) {
                quo ++;
                if (quo >= 2) {
                    break;
                }
            } else {
                str += token.value;
            }
        }
        return str;
    }
    private parseObjectFromBlock(blockToken: IToken): any {
        const keyTokens: IToken[] = [];
        const valueTokens: IToken[] = [];
        const tokens = blockToken.value as IToken[];
        let key: boolean = true;
        let keyConst: ExpressItem | undefined;
        let valueConst: ExpressItem | undefined;
        const obj: any = {};
        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            const token = tokens[i];
            if (token.type === TokenType.Colon) {
                key = false;
            } else if (token.type === TokenType.Comma) {
                key = true;
                keyConst = this.parseConst(keyTokens);
                valueConst = this.parseConst(valueTokens);
                if (keyConst && valueConst) {
                    obj[keyConst[1]] = valueConst[1];
                }
                keyTokens.length = 0;
                valueTokens.length = 0;
            } else {
                if (key) {
                    keyTokens.push(token);
                } else {
                    valueTokens.push(token);
                }
            }
        }
        if (keyTokens.length > 0 && valueTokens.length > 0) {
            keyConst = this.parseConst(keyTokens);
            valueConst = this.parseConst(valueTokens);
            if (keyConst && valueConst) {
                obj[keyConst[1]] = valueConst[1];
            }
            keyTokens.length = 0;
            valueTokens.length = 0;
        }

        return obj;
    }
    private parseArrayFromSquare(arrToken: IToken): any[] {

        const arr: any[] = [];
        const tokenStack: IToken[] = [];
        const tokens = arrToken.value as IToken[];
        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            const token = tokens[i];
            if (token.value === VFS_Keyword.Comma) {
                if (tokenStack.length) {
                    const constItem = this.parseConst(tokenStack);
                    if (constItem) {
                        arr.push(constItem[1]);
                    }
                    tokenStack.length = 0;
                }
            } else {
                tokenStack.push(token);
            }
        }
        if (tokenStack.length) {
            const constItem = this.parseConst(tokenStack);
            if (constItem) {
                arr.push(constItem[1]);
            }
            tokenStack.length = 0;
        }
        return arr;
    }
    private parseStringFromBracket(token: IToken): string {
        if (token.type === TokenType.Bracket) {
            const tokens: IToken[] = token.value as IToken[];
            for (let i: number = 0, len: number = tokens.length; i < len; i++) {
                const tok = tokens[i];
                if (tok.type === TokenType.Quotation ||
                    tok.type === TokenType.DoubleQuotation) {
                    const str = this.parseStringFromTokens(tokens, i);
                    return str;
                }
            }
        }
        return '';
    }

    private parseExpressType(tokens: IToken[]): ExpressType {
        const express: ExpressType = [];

        const astStack: IToken[] = [];
        let curToken: string = '';
        let expressItem: ExpressItem|undefined;
        let curIsOption: boolean = false;

        if (!tokens || tokens.length === 0) {
            return express;
        }
        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            const token = tokens[i];

            if (token.type === TokenType.Option ||
                token.type === TokenType.Slash  ||
                token.type === TokenType.Equal) {
                let isMinus: boolean = false;
                if (!curIsOption) {

                    expressItem = this.parseExpressItem(astStack.concat(), curToken);
                    astStack.length = 0;
                    curToken = '';
                } else if (token.value === VFS_Keyword.Exclamation) { // 处理！
                    expressItem = this.parseOperate(astStack.concat(), curToken);
                    astStack.length = 0;
                    curToken = '';
                } else if (token.value === VFS_Keyword.Minus) { // 处理负号-
                    expressItem = this.parseOperate(astStack.concat(), curToken);
                    astStack.length = 0;
                    curToken = '';
                    isMinus = true;
                }
                astStack.push(token);
                curToken += token.type.toString();
                curIsOption = true;
                if (isMinus) {
                    curIsOption = false;
                    isMinus = false;
                }
            } else {
                if (curIsOption) {

                    expressItem = this.parseOperate(astStack.concat(), curToken);
                    astStack.length = 0;
                    curToken = '';
                }
                astStack.push(token);
                curToken += token.type.toString();
                curIsOption = false;
            }
            if (expressItem) {
                express.push(expressItem);
                expressItem = undefined;
            }
        }
        if (!curIsOption && astStack.length > 0) {
            expressItem = this.parseExpressItem(astStack.concat(), curToken);
            astStack.length = 0;
            curToken = '';
        }
        if (expressItem) {
            express.push(expressItem);
            expressItem = undefined;
        }
        return express;
    }
    private parseExpressFromBracket(bracketToken: IToken): ExpressType {
        const express: ExpressType = [];
        let tokens: IToken[] | undefined;
        if (bracketToken.type === TokenType.Bracket) {
            tokens = bracketToken.value as IToken[];
        }
        if (!tokens || tokens.length === 0) {
            return express;
        }
        return this.parseExpressType(tokens);
    }

    private parseExpressItemFromBracket(bracketToken: IToken): ExpressItem | undefined {
        const express: ExpressType = [];
        let tokens: IToken[] | undefined;
        if (bracketToken.type === TokenType.Bracket) {
            tokens = bracketToken.value as IToken[];
        }
        if (!tokens || tokens.length === 0) {
            return express;
        }
        let expressItemType: string = '';
        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            expressItemType += tokens[i].type;
        }
        return this.parseExpressItem(tokens, expressItemType);
    }


    private parseExpressItem(tokens: IToken[], tokenType: string): ExpressItem|undefined {
        const express: ExpressItem = [];
        /* todo: support
            CONST,     // 常量  ok
            VARIABLE,  // 变量  ok
            RANDOM,    // 随机值
            STSTEN,    // 系统数值
            PROPERTY,  // 组件属性 ok
            OPERATION, // 运算符 ok
            ARRAY_LEN,     // 数组长度 ok
            ARRAY_VALUE,   // 数组取值 ok
            OBJECT_VALUE,  // 对象取值 ok
            PARAM_VALUE,   // 参数取值 ok
            ARRAY_FUNCTION, // 数组 pop push shift unshift concat splice ok
            COMPONENT, // 组件， 仅在print/trace中使用
        */
        if (!tokens || tokens.length === 0) {
            return undefined;
        }
        const regProperty = new RegExp(PropertyToken);
        const regObjectValue = new RegExp(ObjectToken);
        const regConst = new RegExp(ValueToken);
        const regVariable = new RegExp(VariableToken + '$');
        const regArrayIndex = new RegExp(ArrayIndexToken);
        const regArrayLength = new RegExp(ArrayLengthToken);
        const regArrayFunction = new RegExp(ArrayFunctionToken);
        const regComponent = new RegExp(VfComponentToken);
        // this.log('parse express item:', tokenType);
        // this.log('PropertyToken', PropertyToken);
        // this.log('ValueToken', ValueToken);
        // this.log('VariableToken', VariableToken);
        // this.log('regArrayLength', ArrayLengthToken);

        // 先长后短
        if (regArrayIndex.test(tokenType)) {
            this.log('parse array index');
            return this.parseArrayIndex(tokens);
        } else if (regArrayLength.test(tokenType)) {
            this.log('parse array length');
            return this.parseArrayLength(tokens);
        } else if (regArrayFunction.test(tokenType)) {
            this.log('parse array function');
            return this.parseArrayFunction(tokens);
        } else if (regVariable.test(tokenType)) {
            this.log('parse variable');
            return this.parseVariable(tokens);
        } else if (regProperty.test(tokenType)) {
            this.log('parse property');
            return this.parseProperty(tokens);
        } else if (regObjectValue.test(tokenType)) {
            this.log('parse object ');
            return this.parseVariable(tokens);
        } else if (regComponent.test(tokenType)) {
            this.log('parse component');
            return this.parseComponentExpress(tokens);
        } else if (regConst.test(tokenType)) {
            this.log('parse const');
            return this.parseConst(tokens);
        }
        this.log('pares express:', tokens, tokenType);

        if (express.length > 0) {
            return express;
        }
        return undefined;
    }

    private parseOperate(tokens: IToken[], tokenType: string): ExpressItem|undefined {
        let opertionStr: string = '';
        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            opertionStr += tokens[i].value;
        }
        // todo: check
        return [ExpressItemType.OPERATION, opertionStr];
    }
    private parseConst(tokens: IToken[]): ExpressItem|undefined {
        const exp: ExpressItem = [0];
        if (tokens[0].type === TokenType.Quotation || tokens[0].type === TokenType.DoubleQuotation) {
            exp.push(this.parseStringFromTokens(tokens, 0)); // string
        } else if (tokens[0].type === TokenType.String) {
            exp.push(this.parseStringFromTokens(tokens, 0)); // object
        } else if (tokens[0].type === TokenType.Block) {
            exp.push(this.parseObjectFromBlock(tokens[0])); // object
        } else if (tokens[0].type === TokenType.SquareBracket) {
            exp.push(this.parseArrayFromSquare(tokens[0])); // array
        } else if (tokens[0].type === TokenType.Number) {
            exp.push(this.parseNumberFromTokens(tokens, 0)); // number
        } else if (tokens[0].type === TokenType.Option && tokens[0].value === VFS_Keyword.Minus) {
            exp.push(this.parseNumberFromTokens(tokens, 0)); // number
        } else if (tokens[0].type === TokenType.Boolean) {
            exp.push(tokens[0].value === 'true' ? true : false);
        }
        if (exp.length > 1) {
            return exp;
        }
    }

    private parseVariable(tokens: IToken[]): ExpressItem|undefined {
        const express: ExpressItem = [ExpressItemType.VARIABLE];
        const target = [];
        let i: number = 0;
        let len: number = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            } else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            } else if (tokens[i].type === TokenType.String ||
                        tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            } else if (tokens[i].type === TokenType.Variable) {
                break;
            }
        }
        express.push(target);
        // find variable
        if ( i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Variable) {
                    continue;
                } else if (tokens[i].type === TokenType.String ||
                            tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                } else if (tokens[i].type === TokenType.Dot) {
                    break;
                }
            }
        }
        // find property
        if ( i < len) {
            express[0] = ExpressItemType.OBJECT_VALUE;
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Dot) {
                    continue;
                } else if (tokens[i].type === TokenType.String ||
                            tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                    express[0] = ExpressItemType.OBJECT_VALUE;
                }
            }
        }
        if (this.functionParams.length > 0) {
            // [1, [], 'id'] => [9, 0, ''];
            const varName = express[2];
            const index = this.functionParams.indexOf(varName);
            if (index >= 0) {
                express[0] = ExpressItemType.PARAM_VALUE;
                express[1] = index;
            }

        }
        return express;
    }
    private parseComponentExpress(tokens: IToken[]): ExpressItem|undefined {
        const express: ExpressItem = [ExpressItemType.COMPONENT];
        const target = [];
        let i: number = 0;
        let len: number = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            } else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            } else if (tokens[i].type === TokenType.String ||
                        tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            } else if (tokens[i].type === TokenType.Dot) {
                break;
            }
        }
        express.push(target);
        return express;
    }
    private parseProperty(tokens: IToken[]): ExpressItem|undefined {
        const express: ExpressItem = [ExpressItemType.PROPERTY];
        const target = [];
        let i: number = 0;
        let len: number = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            } else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            } else if (tokens[i].type === TokenType.String ||
                        tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            } else if (tokens[i].type === TokenType.Dot) {
                break;
            }
        }
        express.push(target);
        // find property
        if ( i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Dot) {
                    continue;
                } else if (tokens[i].type === TokenType.String ||
                            tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                }
            }
        }
        return express;
    }
    private parseArrayIndex(tokens: IToken[]): ExpressItem|undefined {
        const express: ExpressItem = [ExpressItemType.ARRAY_VALUE];
        const target = [];
        const arrIndexItems = [];
        let i: number = 0;
        let len: number = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            } else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            } else if (tokens[i].type === TokenType.String ||
                        tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            } else if (tokens[i].type === TokenType.Variable) {
                break;
            }
        }
        express.push(target);

        // find variable
        if ( i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Variable) {
                    continue;
                } else if (tokens[i].type === TokenType.String ||
                            tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                } else if (tokens[i].type === TokenType.SquareBracket) {
                    const indexItem = this.parseExpressTypeFromBracket(tokens[i]);
                    if (indexItem && indexItem.length) {
                        arrIndexItems.push(indexItem[0]);
                    }
                } else if (tokens[i].type === TokenType.Dot) {
                    break;
                }
            }
        }
        // arr index
        for (let j = 0, jlen = arrIndexItems.length; j < jlen; j++) {
            express.push(arrIndexItems[j]);
        }
        // find property
        if ( i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Dot) {
                    continue;
                } else if (tokens[i].type === TokenType.String ||
                            tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                }
            }
        }


        return express;
    }

    private parseArrayLength(tokens: IToken[]): ExpressItem|undefined {
        const express: ExpressItem = [ExpressItemType.ARRAY_LEN];
        const target = [];
        let i: number = 0;
        let len: number = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            } else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            } else if (tokens[i].type === TokenType.String ||
                        tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            } else if (tokens[i].type === TokenType.Variable) {
                break;
            }
        }
        express.push(target);

        // find variable
        if ( i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Variable) {
                    continue;
                } else if (tokens[i].type === TokenType.String ||
                            tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                } else if (tokens[i].type === TokenType.Dot) {
                    break;
                }
            }
        }
        return express;
    }

    private parseArrayFunction(tokens: IToken[]): ExpressItem|undefined {
        const express: ExpressItem = [ExpressItemType.ARRAY_FUNCTION];
        const target = [];
        let params: ExpressType = [];
        let funName: string = '';
        let i: number = 0;
        let len: number = 0;

        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            } else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            } else if (tokens[i].type === TokenType.String ||
                        tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            } else if (tokens[i].type === TokenType.Variable) {
                break;
            }
        }
        express.push(target);

        // find variable
        if ( i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Variable) {
                    continue;
                } else if (tokens[i].type === TokenType.String ||
                            tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                } else if (tokens[i].type === TokenType.Dot) {
                    break;
                }
            }
        }
        // function name and params;
        if ( i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.ArrayFunction) {
                    funName = tokens[i].value as string;
                } else if (tokens[i].type === TokenType.Bracket) {
                    params = this.parseExpressTypeFromBracket(tokens[i]);
                }
            }
        }
        express.push(funName);
        if (params && params.length) {
            for (i = 0, len = params.length; i < len; i++) {
                express.push(params[i]);
            }
        }
        return express;
    }

    private parseComponent(tokens: IToken[]): string[] {
        const targetComponent: string[] = [];
        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            const token = tokens[i];
            if (token.type === TokenType.Number || token.type === TokenType.String) {
                targetComponent.push(token.value as string);
            }
        }
        return targetComponent;
    }

    private parseEventParamFromBracket(paramToken: IToken): {ok: boolean,
                                                             eventName: string,
                                                             function: string | IAction[]} {
        const eventParam: {ok: boolean, eventName: string, function: string | IAction[]} = {
            ok: false,
            eventName: '',
            function: '',
        };
        const eventNameToken: IToken[] = [];
        const eventFunctionToken: IToken[] = [];
        let eventFunctionTokenType: string = '';
        let isFunctionToken: boolean = false;
        let hasName: boolean = false;
        let tokens: IToken[] = [];
        if (paramToken.type === TokenType.Bracket) {
            tokens = paramToken.value as IToken[];
        } else {
            return eventParam;
        }
        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            const token = tokens[i];
            if (!isFunctionToken) {
                if (token.type !== TokenType.Comma) {
                    eventNameToken.push(token);
                } else {
                    isFunctionToken = true;
                }
            } else {
                eventFunctionToken.push(token);
                eventFunctionTokenType += token.type;
            }
        }
        if (eventNameToken.length === 3 &&
           (eventNameToken[1].type === TokenType.String || eventNameToken[1].type === TokenType.Number)) {
            eventParam.eventName = eventNameToken[1].value as string;
            hasName = true;
        }
        if (this.regClosureMaybe.test(eventFunctionTokenType) && eventFunctionToken[2].value === VFS_Keyword.More) {
            eventParam.function = this.parseBlock(eventFunctionToken[3]);
            if (hasName) {
                eventParam.ok = true;
            }
        } else if (this.regEventListenerFun.test(eventFunctionTokenType)) {
            const targetTokens: IToken[] = [];
            for (let i: number = 0, len: number = tokens.length; i < len; i++) {
                if (tokens[i].type === TokenType.Dot) {
                    if ( i < len - 1 && tokens[i + 1].type === TokenType.String) {
                        eventParam.function = tokens[i + 1].value as string;
                        if (hasName) {
                            eventParam.ok = true;
                        }
                        break;
                    }
                } else {
                    targetTokens.push(tokens[i]);
                }
            }
            // todo 支持监听函数是子组件的函数
            const callbackTarget = this.parseTargetComponent(targetTokens);
        }
        return eventParam;
    }

    private parseFunctionParamFromBracket(paramToken: IToken): ExpressType {
        const funParam: ExpressType = [];

        const fToken: IToken[] = [];
        let fTokenType: string = '';
        let tokens: IToken[] = [];

        if (paramToken.type === TokenType.Bracket) {
            tokens = paramToken.value as IToken[];
        } else {
            return funParam;
        }
        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            const token = tokens[i];

            if (token.type !== TokenType.Comma) {
                fToken.push(token);
                fTokenType += token.type;
            } else {
                const expressItem = this.parseExpressItem(fToken.concat(), fTokenType);
                fTokenType = '';
                fToken.length = 0;
                if (expressItem) {
                    funParam.push(expressItem);
                }
            }
            if (i >= len - 1 && fToken.length > 0) {
                const expressItem = this.parseExpressItem(fToken.concat(), fTokenType);
                fTokenType = '';
                fToken.length = 0;
                if (expressItem) {
                    funParam.push(expressItem);
                }
            }
        }
        return funParam;
    }

    private parseExpressTypeFromBracket(bracketToken: IToken): ExpressType {
        const funParam: ExpressType = [];

        const fToken: IToken[] = [];
        let fTokenType: string = '';
        let tokens: IToken[] = [];

        if (bracketToken.type === TokenType.Bracket || bracketToken.type === TokenType.SquareBracket) {
            tokens = bracketToken.value as IToken[];
        } else {
            return funParam;
        }
        for (let i: number = 0, len: number = tokens.length; i < len; i++) {
            const token = tokens[i];

            if (token.type !== TokenType.Comma) {
                fToken.push(token);
                fTokenType += token.type;
            } else {
                const expressItem = this.parseExpressItem(fToken.concat(), fTokenType);
                fTokenType = '';
                fToken.length = 0;
                if (expressItem) {
                    funParam.push(expressItem);
                }
            }
            if (i >= len - 1 && fToken.length > 0) {
                const expressItem = this.parseExpressItem(fToken.concat(), fTokenType);
                fTokenType = '';
                fToken.length = 0;
                if (expressItem) {
                    funParam.push(expressItem);
                }
            }
        }
        return funParam;
    }

    private parseForinFromBracket(bracketToken: IToken): ExpressItem | undefined {

        const fToken: IToken[] = [];
        const fTokenType: string = '';
        let tokens: IToken[] = [];

        if (bracketToken.type === TokenType.Bracket || bracketToken.type === TokenType.SquareBracket) {
            tokens = bracketToken.value as IToken[];
        } else {
            return undefined;
        }
        if (tokens.length >= 4 && tokens[2].type === TokenType.In) {
            const tokenIndex = [tokens[0], tokens[1]];
            const tokenForin = tokens.concat();
            tokenForin.splice(0, 3);
            const index = this.parseVariable(tokenIndex);
            if (index && index.length >= 3 && index[0] === ExpressItemType.VARIABLE) {
                this.functionParams.push(index[2]);
            } else {
                this.warn('for in params wrong', tokens);
                return undefined;
            }
            if (tokenForin.length >= 2) {
                const forin = this.parseVariable(tokenForin);
                return forin;
            } else if (tokenForin.length === 1) {
                const forin = this.parseConst(tokenForin);
                return forin;
            } else {
                this.warn('for in params wrong', tokens);
                return undefined;
            }

        } else {
            this.warn('for in params wrong', tokens);
        }
        return undefined;
    }

    private parseTargetComponent(tokens: IToken[]): any[] {
        const target = [];
        let i: number = 0;
        let len: number = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            } else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            } else if (tokens[i].type === TokenType.String ||
                        tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            } else {
                break;
            }
        }
        return target;
    }
    private log(message?: any, ...optionalParams: any[]): void {
        if (!this.debug) {
            return;
        }
        let params = [];
        if (message) {
            params.push(message);
        }
        if (optionalParams) {
            params = params.concat(optionalParams);
        }
        // tslint:disable-next-line: no-console
        console.log.apply(this, params as any);
    }
    private warn(message?: any, ...optionalParams: any[]): void {
        // if (!this.debug) {
        //     return;
        // }
        let params = [];
        if (message) {
            params.push(message);
        }
        if (optionalParams) {
            params = params.concat(optionalParams);
        }
        // tslint:disable-next-line: no-console
        console.warn.apply(this, params as any);
    }
}
