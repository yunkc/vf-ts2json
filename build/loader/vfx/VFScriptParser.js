"use strict";
exports.__esModule = true;
var IVFData_1 = require("./IVFData");
var TokenType;
(function (TokenType) {
    TokenType["None"] = "0";
    TokenType["ActionList"] = "a";
    TokenType["Option"] = "b";
    TokenType["Equal"] = "c";
    TokenType["Block"] = "d";
    TokenType["DefaultVariable"] = "e";
    TokenType["Variable"] = "f";
    TokenType["String"] = "g";
    TokenType["Number"] = "h";
    TokenType["Boolean"] = "i";
    TokenType["Semicolon"] = "j";
    TokenType["Function"] = "k";
    TokenType["Bracket"] = "l";
    TokenType["This"] = "m";
    TokenType["If"] = "n";
    TokenType["Else"] = "o";
    // Elseif = 'p', // 16
    TokenType["Child"] = "q";
    TokenType["Dot"] = "r";
    TokenType["Comma"] = "s";
    TokenType["Quotation"] = "t";
    TokenType["DoubleQuotation"] = "u";
    TokenType["SquareBracket"] = "v";
    TokenType["Print"] = "w";
    TokenType["Slash"] = "x";
    TokenType["VFFunction"] = "y";
    TokenType["Global"] = "z";
    TokenType["System"] = "A";
    TokenType["Random"] = "B";
    TokenType["ArrayFunction"] = "C";
    TokenType["Length"] = "D";
    TokenType["Colon"] = "E";
    TokenType["For"] = "F";
    TokenType["In"] = "G";
    TokenType["Break"] = "H";
})(TokenType || (TokenType = {}));
var VFS_Keyword;
(function (VFS_Keyword) {
    VFS_Keyword["If"] = "if";
    VFS_Keyword["Else"] = "else";
    // Elseif = 'elseif',
    VFS_Keyword["DefineVariable"] = "var";
    VFS_Keyword["Function"] = "function";
    VFS_Keyword["AddListener"] = "on";
    VFS_Keyword["RemoveListener"] = "off";
    VFS_Keyword["PlaySound"] = "playSound";
    VFS_Keyword["PauseSound"] = "pauseSound";
    VFS_Keyword["ResumeSound"] = "resumeSound";
    VFS_Keyword["JumpToScene"] = "jumpToScene";
    VFS_Keyword["JumpToNextScene"] = "jumpToNextScene";
    VFS_Keyword["JumpToPrevScene"] = "jumpToPrevScene";
    VFS_Keyword["playAnimation"] = "playAnimation";
    VFS_Keyword["gotoPlay"] = "gotoPlay";
    VFS_Keyword["gotoStop"] = "gotoStop";
    VFS_Keyword["Emit"] = "emit";
    VFS_Keyword["True"] = "true";
    VFS_Keyword["False"] = "false";
    VFS_Keyword["Print"] = "print";
    VFS_Keyword["Trace"] = "trace";
    VFS_Keyword["This"] = "this";
    VFS_Keyword["Global"] = "global";
    VFS_Keyword["System"] = "system";
    VFS_Keyword["Random"] = "random";
    VFS_Keyword["Pop"] = "pop";
    VFS_Keyword["Push"] = "push";
    VFS_Keyword["Shift"] = "shift";
    VFS_Keyword["Unshift"] = "unshift";
    VFS_Keyword["Concat"] = "concat";
    VFS_Keyword["Splice"] = "splice";
    VFS_Keyword["Length"] = "length";
    VFS_Keyword["For"] = "for";
    VFS_Keyword["In"] = "in";
    VFS_Keyword["Break"] = "break";
    // 下面为单字符关键词
    VFS_Keyword["Enter"] = "\n";
    VFS_Keyword["Space"] = " ";
    VFS_Keyword["At"] = "@";
    VFS_Keyword["Dollar"] = "$";
    VFS_Keyword["Sharp"] = "#";
    VFS_Keyword["Equal"] = "=";
    VFS_Keyword["Dot"] = ".";
    VFS_Keyword["Comma"] = ",";
    VFS_Keyword["Add"] = "+";
    VFS_Keyword["Minus"] = "-";
    VFS_Keyword["Star"] = "*";
    VFS_Keyword["Slash"] = "/";
    VFS_Keyword["Exclamation"] = "!";
    VFS_Keyword["Vertical"] = "|";
    VFS_Keyword["And"] = "&";
    VFS_Keyword["Backslash"] = "\\";
    VFS_Keyword["Percent"] = "%";
    VFS_Keyword["More"] = ">";
    VFS_Keyword["Less"] = "<";
    VFS_Keyword["BracketL"] = "(";
    VFS_Keyword["BracketR"] = ")";
    VFS_Keyword["SquareBracketL"] = "[";
    VFS_Keyword["SquareBracketR"] = "]";
    VFS_Keyword["BlockL"] = "{";
    VFS_Keyword["BlockR"] = "}";
    VFS_Keyword["SingleQuot"] = "'";
    VFS_Keyword["DoubleQuot"] = "\"";
    VFS_Keyword["Semicolon"] = ";";
    VFS_Keyword["Colon"] = ":";
    // 单字符关键字需要加到下面的数组里做分词
})(VFS_Keyword || (VFS_Keyword = {}));
var VFS_Keyword_Symbol = [VFS_Keyword.Enter,
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
var RegType;
(function (RegType) {
    RegType[RegType["DefineVariable"] = 0] = "DefineVariable";
    RegType[RegType["DefineFunction"] = 1] = "DefineFunction";
    RegType[RegType["Print"] = 2] = "Print";
    RegType[RegType["IfGroup"] = 3] = "IfGroup";
    RegType[RegType["Express"] = 4] = "Express";
    RegType[RegType["Comment"] = 5] = "Comment";
    RegType[RegType["VFFunction"] = 6] = "VFFunction";
    RegType[RegType["CusFunction"] = 7] = "CusFunction";
    RegType[RegType["ArrayRandom"] = 8] = "ArrayRandom";
    RegType[RegType["For"] = 9] = "For";
    RegType[RegType["Break"] = 10] = "Break";
})(RegType || (RegType = {}));
var TokenALL = '[0-9a-zA-Z]';
var VfComponentToken = '(' + '(' + TokenType.This + '|' + TokenType.Global + ')' + '(' + TokenType.Child +
    '(' + TokenType.Number + '|' + TokenType.String + ')' + ')*)';
var VariableToken = '(' + '(' + VfComponentToken + '|' + TokenType.Global + ')' + '?' +
    '(' + TokenType.Variable + '(' + TokenType.Number + '|' + TokenType.String + '))+)';
var PropertyToken = '(' + '(' + VfComponentToken + ')' +
    '(' + TokenType.Dot + TokenType.String + ')+)';
var ObjectToken = '(' + '(' + VariableToken + ')' +
    '(' + TokenType.Dot + TokenType.String + ')+)';
var StringValueToken = '((' + TokenType.Quotation + TokenALL + TokenType.Quotation + ')' + '|' +
    '(' + TokenType.DoubleQuotation + TokenALL + TokenType.DoubleQuotation + '))';
var ArrayValueToken = '(' + TokenType.SquareBracket + ')+';
var NumberToken = '(' + TokenType.Number + '|' +
    '(' + TokenType.Option + TokenType.Number + ')' + '|' +
    '(' + TokenType.Option + TokenType.Number + TokenType.Dot + TokenType.Number + ')' + '|' +
    '(' + TokenType.Number + TokenType.Dot + TokenType.Number + ')' + ')';
var ValueToken = '(' + StringValueToken + '|' + NumberToken + '|' +
    TokenType.Boolean + '|' + ArrayValueToken + '|' + TokenType.Block + ')';
var OperateToken = '(' + TokenType.Option + '|' + TokenType.Equal + '|' + TokenType.Slash + ')';
var ArrayIndexToken = '(' + VariableToken + ArrayValueToken + '(' + TokenType.Dot + TokenType.String + ')*)';
var ArrayFunctionToken = '(' + VariableToken + TokenType.Dot + TokenType.ArrayFunction + TokenType.Bracket + ')';
var ArrayLengthToken = '(' + VariableToken + TokenType.Dot + TokenType.Length + ')';
var ExpressItemToken = '(' + VariableToken + '|' + PropertyToken + '|' + ObjectToken + '|' +
    ArrayIndexToken + '|' + ArrayFunctionToken + '|' + ArrayLengthToken + '|' +
    TokenType.Bracket + '|' + VfComponentToken + ')';
var ArrayRandomToken = '(' + VariableToken + TokenType.Dot + TokenType.Random + TokenType.Bracket + ')';
var VFScriptParser = /** @class */ (function () {
    function VFScriptParser() {
        this.debug = false;
        this.regNumber = /^\d+$/;
        this.regDefineVariable = new RegExp(TokenType.DefaultVariable + '(' + TokenType.Global + ')?' + TokenType.Variable +
            '[' + TokenType.String + TokenType.Number + ']' +
            TokenType.Equal + TokenALL + '+'); // /56(7|8)3[0-9]*/;  var $str00 = adfafa
        this.regDefineFunction = new RegExp(TokenType.Function + TokenType.String +
            TokenType.Bracket + TokenType.Block); // /118124/;
        this.regPrint = new RegExp(TokenType.Print + TokenType.Bracket); // /2312/;
        this.regIfGroup = new RegExp(TokenType.If + TokenType.Bracket + TokenType.Block +
            '(' + TokenType.Else + TokenType.If + TokenType.Bracket + TokenType.Block + ')*' +
            '(' + TokenType.Else + TokenType.Block + ')*'); // /14124([16124]*[154]*)/;
        this.regIf = new RegExp(TokenType.If + TokenType.Bracket + TokenType.Block); // /14124/;
        this.regElseIf = new RegExp(TokenType.Else + TokenType.If + TokenType.Bracket + TokenType.Block); /// 16124/;
        this.regElse = new RegExp(TokenType.Else + TokenType.Block); // /154/;
        this.regExpress = new RegExp('(' + ArrayFunctionToken + '|' +
            '(' + '(' + ExpressItemToken + '|' + ValueToken + ')' +
            '(' + '(' + OperateToken + ')+' + '(' + ExpressItemToken + '|' + ValueToken + '))+)' +
            ')'); // /(13|17|6|7|8|9|2|3)*(2|3)(13|17|6|7|8|9|2|3)*/;
        this.regComment = new RegExp(TokenType.Slash + TokenType.Slash +
            TokenALL + '*'); // //xxxx;
        this.regVFFunction = new RegExp('(' + VfComponentToken + TokenType.Dot + ')?' + TokenType.VFFunction + TokenType.Bracket);
        this.regCusFunction = new RegExp(VfComponentToken + TokenType.Dot + TokenType.String + TokenType.Bracket);
        this.regClosureMaybe = new RegExp(TokenType.Bracket + TokenType.Equal + TokenType.Option + TokenType.Block);
        this.regEventListenerFun = new RegExp('(' + VfComponentToken + TokenType.Dot + TokenType.String + ')');
        this.regArrayRandom = new RegExp(ArrayRandomToken);
        this.regFor = new RegExp(TokenType.For + TokenType.Bracket + TokenType.Block);
        this.regBreak = new RegExp(TokenType.Break);
        this.actionRegs = [
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
        this.scriptStr = '';
        this.functionParams = [];
    }
    VFScriptParser.prototype.parse = function (vfsCode) {
        this.scriptStr = vfsCode;
        this.log('vfComponentToken: ', VfComponentToken);
        this.log('variableToken: ', VariableToken);
        this.log('propertyToken: ', PropertyToken);
        this.log('expressItemToken: ', ExpressItemToken);
        this.log('operateToken: ', OperateToken);
        this.log('ArrayFunctionToken: ', ArrayFunctionToken);
        if (this.scriptStr) {
            var splitWords = this.splitWord(this.scriptStr);
            this.log('splitWords: ', splitWords);
            var tokens = this.parseToken(splitWords);
            this.log('tokens', tokens);
            var ast = this.parseAst(tokens);
            this.log(ast);
            // this.log(JSON.stringify(ast));
            return ast;
        }
        return [];
    };
    VFScriptParser.prototype.splitWord = function (scriptStr) {
        var result = [];
        var stackWord = [];
        var slashNumber = 0;
        var oneSingleQuot = false;
        var oneDoubleQuot = false;
        for (var i = 0, len = scriptStr.length; i < len; i++) {
            var char = scriptStr.charAt(i);
            // 处理注释
            if (slashNumber === 2) {
                if (char !== '\n') {
                    stackWord.push(char);
                    continue;
                }
                else {
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
                    var w = stackWord.join('');
                    result.push(w);
                    stackWord.length = 0;
                }
                continue;
            }
            if (VFS_Keyword_Symbol.indexOf(char) >= 0) {
                if (stackWord.length > 0) {
                    var w = stackWord.join('');
                    result.push(w);
                    stackWord.length = 0;
                }
                if (char === VFS_Keyword.SingleQuot) {
                    oneSingleQuot = !oneSingleQuot;
                }
                else if (char === VFS_Keyword.DoubleQuot) {
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
            }
            else {
                stackWord.push(char);
            }
        }
        return result;
    };
    VFScriptParser.prototype.parseToken = function (splitWords) {
        var tokens = [];
        var tokenStack = [];
        var curStack;
        var lastTokenType = TokenType.None;
        for (var i = 0, len = splitWords.length; i < len; i++) {
            var word = splitWords[i];
            var token = {
                type: TokenType.None,
                value: word
            };
            if (lastTokenType === TokenType.Quotation && word !== VFS_Keyword.SingleQuot ||
                lastTokenType === TokenType.DoubleQuotation && word !== VFS_Keyword.DoubleQuot) {
                token.type = TokenType.String;
            }
            else {
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
                        }
                        else {
                            lastTokenType = TokenType.None;
                        }
                        break;
                    case VFS_Keyword.DoubleQuot:
                        token.type = TokenType.DoubleQuotation;
                        if (lastTokenType === TokenType.None) {
                            lastTokenType = TokenType.DoubleQuotation;
                        }
                        else {
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
                        }
                        else {
                            curStack = undefined;
                        }
                        break;
                    case VFS_Keyword.BlockR:
                        token.type = TokenType.Block;
                        token.value = curStack;
                        if (tokenStack.length > 0) {
                            curStack = tokenStack.pop();
                        }
                        else {
                            curStack = undefined;
                        }
                        break;
                    case VFS_Keyword.SquareBracketR:
                        token.type = TokenType.SquareBracket;
                        token.value = curStack;
                        if (tokenStack.length > 0) {
                            curStack = tokenStack.pop();
                        }
                        else {
                            curStack = undefined;
                        }
                        break;
                    default:
                        if (this.regNumber.test(word)) {
                            token.type = TokenType.Number;
                        }
                        else {
                            token.type = TokenType.String;
                        }
                        break;
                }
            }
            if (token) {
                if (curStack) {
                    curStack.push(token);
                }
                else {
                    tokens.push(token);
                }
            }
        }
        return tokens;
    };
    VFScriptParser.prototype.parseAst = function (tokens) {
        var ast = [];
        var astStack = [];
        var curToken = '';
        var action;
        var tokenActionList0 = TokenType.ActionList + TokenType.String + TokenType.Equal + TokenType.Block;
        var tokenActionList1 = TokenType.ActionList + TokenType.Number + TokenType.Equal + TokenType.Block;
        var tokenActionList2 = TokenType.ActionList + TokenType.This + TokenType.Equal + TokenType.Block;
        for (var i = 0, len = tokens.length; i < len; i++) {
            var token = tokens[i];
            if (token.type === TokenType.Semicolon) {
                action = this.parseMainAst(astStack.concat(), curToken);
                astStack.length = 0;
                curToken = '';
            }
            else {
                astStack.push(token);
                curToken += token.type.toString();
            }
            if (curToken === tokenActionList0 ||
                curToken === tokenActionList1 ||
                curToken === tokenActionList2) { // @处理漏写分号
                action = this.parseActionList(astStack.concat()); // 解析动作列表
                astStack.length = 0;
                curToken = '';
            }
            else if (i === len - 1) {
                action = this.parseMainAst(astStack.concat(), curToken);
            }
            if (action) {
                ast.push(action);
                action = undefined;
            }
        }
        return ast;
    };
    VFScriptParser.prototype.parseMainAst = function (astStack, curToken) {
        var action;
        var tokenActionList0 = TokenType.ActionList + TokenType.String + TokenType.Equal + TokenType.Block;
        var tokenActionList1 = TokenType.ActionList + TokenType.Number + TokenType.Equal + TokenType.Block;
        var tokenActionList2 = TokenType.ActionList + TokenType.This + TokenType.Equal + TokenType.Block;
        if (curToken === tokenActionList0 ||
            curToken === tokenActionList1 ||
            curToken === tokenActionList2) {
            action = this.parseActionList(astStack.concat()); // 解析动作列表
        }
        else if (this.regComment.test(curToken)) {
            action = this.parseComment(astStack.concat()); // 解析注释
        }
        else if (this.regDefineVariable.test(curToken)) { // 解析全局变量
            action = this.parseDefineVariable(astStack.concat());
        }
        return action;
    };
    VFScriptParser.prototype.parseComment = function (tokens) {
        var action = {
            type: 35 /* Comment */,
            value: ''
        };
        for (var i = 0, len = tokens.length; i < len; i++) {
            action.value += tokens[i].value;
        }
        return action;
    };
    VFScriptParser.prototype.parseActionList = function (tokens) {
        var action = {
            type: 36 /* ActionList */,
            value: tokens[1].value,
            execute: this.parseBlock(tokens[3])
        };
        return action;
    };
    VFScriptParser.prototype.parseBlock = function (blockToken) {
        var ast = [];
        var astStack = [];
        var curToken = '';
        var action;
        var tokens = [];
        var tokenDefineFunction = TokenType.Function + TokenType.String + TokenType.Bracket + TokenType.Block;
        if (blockToken.type === TokenType.Block) {
            tokens = blockToken.value;
        }
        if (!tokens || tokens.length === 0) {
            return ast;
        }
        for (var i = 0, len = tokens.length; i < len; i++) {
            var token = tokens[i];
            if (token.type === TokenType.Semicolon) {
                action = this.parseAction(astStack.concat(), curToken);
                astStack.length = 0;
                curToken = '';
            }
            else {
                astStack.push(token);
                curToken += token.type.toString();
                if (curToken === tokenDefineFunction) { // 定义方法 防止定义方法后面不加分号
                    action = this.parseAction(astStack.concat(), curToken);
                    astStack.length = 0;
                    curToken = '';
                }
                else if (this.regVFFunction.test(curToken)) { // 防止xx.on('',()=>{}) 后面不加分号
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
    };
    VFScriptParser.prototype.parseAction = function (tokens, tokenType) {
        if (tokens.length === 0) {
            return undefined;
        }
        this.log('parse action:', tokenType);
        for (var i = 0, len = this.actionRegs.length; i < len; i++) {
            var reg = this.actionRegs[i];
            if (reg.test(tokenType)) {
                var action = void 0;
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
    };
    //////////////////////// 以下为解析实际的action每个都与一个ActionType对应////////////
    VFScriptParser.prototype.parseDefineVariable = function (tokens) {
        var idIndex = 2;
        var valueIndex = 4;
        var isGlobal = false;
        if (tokens.length === 6) {
            idIndex = 3;
            valueIndex = 5;
            isGlobal = true;
        }
        var defineVariableTask = {
            type: 37 /* DefineVariable */,
            variableType: "string" /* STRING */,
            value: '',
            varId: tokens[idIndex].value
        };
        if (isGlobal) {
            defineVariableTask.target = [-1];
        }
        if (tokens[valueIndex].type === TokenType.Number || tokens[valueIndex].type === TokenType.String) {
            defineVariableTask.variableType = "number" /* NUMBER */;
            defineVariableTask.value = this.parseNumberFromTokens(tokens, valueIndex);
        }
        else if (tokens[valueIndex].type === TokenType.Quotation ||
            tokens[valueIndex].type === TokenType.DoubleQuotation) {
            defineVariableTask.variableType = "string" /* STRING */;
            defineVariableTask.value = this.parseStringFromTokens(tokens, valueIndex);
        }
        else if (tokens[valueIndex].type === TokenType.Boolean) {
            defineVariableTask.variableType = "boolean" /* BOOLEAN */;
            defineVariableTask.value = tokens[valueIndex].value === VFS_Keyword.True ? true : false;
        }
        else if (tokens[valueIndex].type === TokenType.Block) {
            defineVariableTask.variableType = "object" /* OBJECT */;
            defineVariableTask.value = this.parseObjectFromBlock(tokens[valueIndex]);
        }
        else if (tokens[valueIndex].type === TokenType.SquareBracket) {
            defineVariableTask.variableType = "array" /* ARRAY */;
            defineVariableTask.value = this.parseArrayFromSquare(tokens[valueIndex]);
        }
        return defineVariableTask;
    };
    VFScriptParser.prototype.parseDefineFunction = function (tokens) {
        // function funname (param) {}
        var params = this.parseFunctionParamFromBracket(tokens[2]);
        if (params && params.length) {
            for (var i = 0, len = params.length; i < len; i++) {
                var param = params[i];
                if (param[0] === IVFData_1.ExpressItemType.VARIABLE) {
                    this.functionParams.push(param[2]);
                }
                else {
                    throw new Error('function params error:' + params.join(','));
                }
            }
        }
        var defineFunctionTask = {
            type: 11 /* DefineFunction */,
            name: tokens[1].value,
            execute: this.parseBlock(tokens[3])
        };
        this.functionParams.length = 0;
        return defineFunctionTask;
    };
    VFScriptParser.prototype.parsePrint = function (tokens) {
        var printTask = {
            type: 0 /* Print */,
            value: ''
        };
        if (tokens[1].value && (tokens[1].value[0] === TokenType.Quotation ||
            tokens[1].value[0] === TokenType.DoubleQuotation)) {
            printTask.value = this.parseStringFromBracket(tokens[1]);
        }
        else {
            printTask.value = this.parseExpressItemFromBracket(tokens[1]);
        }
        return printTask;
    };
    VFScriptParser.prototype.parseIfGroup = function (tokens) {
        var ifGroupTask = {
            type: 7 /* IfGroup */,
            execute: []
        };
        var ifActions = [];
        var astStack = [];
        var curToken = '';
        var action;
        for (var i = 0, len = tokens.length; i < len; i++) {
            var token = tokens[i];
            astStack.push(token);
            curToken += token.type.toString();
            if (this.regElseIf.test(curToken)) {
                action = this.parseElseIf(astStack.concat());
                astStack.length = 0;
                curToken = '';
            }
            else if (this.regIf.test(curToken)) {
                action = this.parseIf(astStack.concat());
                astStack.length = 0;
                curToken = '';
            }
            else if (this.regElse.test(curToken)) {
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
    };
    VFScriptParser.prototype.parseIf = function (tokens) {
        var ifTask = {
            type: 8 /* If */,
            condition: this.parseExpressFromBracket(tokens[1]),
            execute: this.parseBlock(tokens[2])
        };
        return ifTask;
    };
    VFScriptParser.prototype.parseElseIf = function (tokens) {
        var ifTask = {
            type: 9 /* ElseIf */,
            condition: this.parseExpressFromBracket(tokens[2]),
            execute: this.parseBlock(tokens[3])
        };
        return ifTask;
    };
    VFScriptParser.prototype.parseElse = function (tokens) {
        var ifTask = {
            type: 10 /* Else */,
            execute: this.parseBlock(tokens[1])
        };
        return ifTask;
    };
    VFScriptParser.prototype.parseExpressTask = function (tokens) {
        var expressTask = {
            type: 6 /* Express */,
            express: this.parseExpressType(tokens)
        };
        return expressTask;
    };
    VFScriptParser.prototype.parseVFFunction = function (tokens) {
        var vfFunction;
        var functionToken;
        for (var i = 0, len = tokens.length; i < len; i++) {
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
    };
    VFScriptParser.prototype.parseAddListener = function (tokens) {
        var componentTokens = [];
        var paramsToken;
        for (var i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type !== TokenType.Dot) {
                componentTokens.push(tokens[i]);
            }
            else {
                break;
            }
        }
        for (var i = tokens.length - 1; i >= 0; i--) {
            if (tokens[i].type === TokenType.Bracket) {
                paramsToken = tokens[i];
                break;
            }
        }
        if (componentTokens.length > 0 && paramsToken) {
            var target = this.parseComponent(componentTokens);
            var eventParam = this.parseEventParamFromBracket(paramsToken);
            if (eventParam.ok) {
                var addListenerTask = {
                    type: 13 /* AddEventListener */,
                    event: eventParam.eventName,
                    target: target
                };
                if (componentTokens.length) {
                    if (componentTokens[0].type === TokenType.Global) {
                        addListenerTask.global = true;
                    }
                    else if (componentTokens[0].type === TokenType.System) {
                        addListenerTask.system = true;
                    }
                }
                if (Array.isArray(eventParam["function"])) {
                    addListenerTask.execute = eventParam["function"];
                }
                else {
                    addListenerTask.funName = eventParam["function"];
                    addListenerTask.type = 29 /* AddEventListenerCall */;
                }
                return addListenerTask;
            }
        }
    };
    VFScriptParser.prototype.parseRemoveListener = function (tokens) {
        var componentTokens = [];
        var paramsToken;
        for (var i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type !== TokenType.Dot) {
                componentTokens.push(tokens[i]);
            }
            else {
                break;
            }
        }
        for (var i = tokens.length - 1; i >= 0; i--) {
            if (tokens[i].type === TokenType.Bracket) {
                paramsToken = tokens[i];
                break;
            }
        }
        if (componentTokens.length > 0 && paramsToken) {
            var target = this.parseComponent(componentTokens);
            var eventParam = this.parseEventParamFromBracket(paramsToken);
            if (eventParam.eventName) {
                var addListenerTask = {
                    type: 13 /* AddEventListener */,
                    event: eventParam.eventName,
                    target: target
                };
                if (componentTokens.length) {
                    if (componentTokens[0].type === TokenType.Global) {
                        addListenerTask.global = true;
                    }
                    else if (componentTokens[0].type === TokenType.System) {
                        addListenerTask.system = true;
                    }
                }
                return addListenerTask;
            }
        }
    };
    VFScriptParser.prototype.parseEmit = function (tokens) {
        var componentTokens = [];
        var paramsToken;
        for (var i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type !== TokenType.Dot) {
                componentTokens.push(tokens[i]);
            }
            else {
                break;
            }
        }
        for (var i = tokens.length - 1; i >= 0; i--) {
            if (tokens[i].type === TokenType.Bracket) {
                paramsToken = tokens[i];
                break;
            }
        }
        if (componentTokens.length > 0 && paramsToken) {
            var target = this.parseComponent(componentTokens);
            var eventParam = this.parseExpressTypeFromBracket(paramsToken);
            var emitTask = {
                type: 15 /* EmitEvent */,
                event: '',
                target: target
            };
            if (componentTokens.length) {
                if (componentTokens[0].type === TokenType.Global) {
                    emitTask.global = true;
                }
                else if (componentTokens[0].type === TokenType.System) {
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
    };
    VFScriptParser.prototype.parseJumpToScene = function (tokens) {
        var params = this.parseFunctionParamFromBracket(tokens[1]);
        if (params.length === 0) {
            return;
        }
        var jumpToTask = {
            type: 20 /* JumpToScene */,
            value: params[0][1]
        };
        if (params.length > 1) {
            jumpToTask.transition = params[1][1];
        }
        return jumpToTask;
    };
    VFScriptParser.prototype.parseJumpToNextScene = function (tokens) {
        var params = this.parseFunctionParamFromBracket(tokens[1]);
        var jumpToTask = {
            type: 18 /* JumpToNextScene */
        };
        if (params.length > 0) {
            jumpToTask.transition = params[0][1];
        }
        return jumpToTask;
    };
    VFScriptParser.prototype.parseJumpToPrevScene = function (tokens) {
        var params = this.parseFunctionParamFromBracket(tokens[1]);
        var jumpToTask = {
            type: 19 /* JumpToPrevScene */
        };
        if (params.length > 0) {
            jumpToTask.transition = params[0][1];
        }
        return jumpToTask;
    };
    VFScriptParser.prototype.parsePlaySound = function (tokens) {
        var params = this.parseFunctionParamFromBracket(tokens[1]);
        if (params.length === 0) {
            return;
        }
        var playSoundTask = {
            type: 16 /* PlaySound */,
            value: params[0],
            trackId: '-1'
        };
        if (params.length > 1) {
            playSoundTask.trackId = params[1][1];
        }
        if (params.length > 2) {
            var otherParam = params[2];
            if (otherParam[0] === IVFData_1.ExpressItemType.CONST) {
                var p = otherParam[1];
                if (Object.prototype.toString.call(p) === '[object Object]') {
                    for (var pid in p) {
                        if (p[pid]) {
                            playSoundTask[pid] = p[pid];
                        }
                    }
                }
            }
        }
        return playSoundTask;
    };
    VFScriptParser.prototype.parsePauseSound = function (tokens) {
        var params = this.parseFunctionParamFromBracket(tokens[1]);
        if (params.length === 0) {
            return;
        }
        var playSoundTask = {
            type: 33 /* PauseSound */,
            value: params[0],
            trackId: '-1'
        };
        if (params.length > 1) {
            playSoundTask.trackId = params[1][1];
        }
        return playSoundTask;
    };
    VFScriptParser.prototype.parseResumeSound = function (tokens) {
        var params = this.parseFunctionParamFromBracket(tokens[1]);
        if (params.length === 0) {
            return;
        }
        var playSoundTask = {
            type: 34 /* ResumeSound */,
            value: params[0],
            trackId: '-1'
        };
        if (params.length > 1) {
            playSoundTask.trackId = params[1][1];
        }
        return playSoundTask;
    };
    VFScriptParser.prototype.parsePlayAnimation = function (tokens) {
        var funAction = this.parseCusFunction(tokens);
        if (funAction && funAction.params && funAction.params.length > 0) {
            var playAnimation = {
                type: 17 /* PlayAnimation */,
                name: funAction.params[0],
                target: funAction.target,
                times: 1
            };
            if (funAction.params.length > 1) {
                playAnimation.times = funAction.params[1][1];
            }
            this.log('playaniamtion', playAnimation);
            return playAnimation;
        }
        return undefined;
    };
    VFScriptParser.prototype.parseCusFunction = function (tokens) {
        var cusFunction = {
            type: 12 /* CallFunction */,
            target: [],
            name: ''
        };
        var componentTokens = [];
        var funTokens = [];
        var i = 0;
        var len = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type !== TokenType.Dot) {
                componentTokens.push(tokens[i]);
            }
            else {
                break;
            }
        }
        for (i++; i < len; i++) {
            funTokens.push(tokens[i]);
        }
        if (componentTokens.length > 0 && funTokens.length > 0) {
            var target = this.parseComponent(componentTokens);
            cusFunction.target = target;
            if (funTokens.length >= 2 &&
                (funTokens[0].type === TokenType.String || funTokens[0].type === TokenType.VFFunction) &&
                funTokens[1].type === TokenType.Bracket) {
                var funName = funTokens[0].value;
                var funParam = this.parseFunctionParamFromBracket(funTokens[1]);
                cusFunction.name = funName;
                if (funParam.length > 0) {
                    cusFunction.params = funParam;
                }
                return cusFunction;
            }
        }
        return undefined;
    };
    VFScriptParser.prototype.parseArrayRandom = function (tokens) {
        var arrayRandom = {
            type: 25 /* ArrayRandom */,
            target: []
        };
        var express = [IVFData_1.ExpressItemType.VARIABLE];
        var target = [];
        var i = 0;
        var len = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            }
            else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            }
            else if (tokens[i].type === TokenType.String ||
                tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            }
            else if (tokens[i].type === TokenType.Variable) {
                break;
            }
        }
        express.push(target);
        // find variable
        if (i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Variable) {
                    continue;
                }
                else if (tokens[i].type === TokenType.String ||
                    tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                }
                else if (tokens[i].type === TokenType.Dot) {
                    break;
                }
            }
        }
        arrayRandom.target = express;
        return arrayRandom;
    };
    VFScriptParser.prototype.parseFor = function (tokens) {
        var forin = this.parseForinFromBracket(tokens[1]);
        if (forin) {
            var forTask = {
                type: 38 /* For */,
                forin: forin,
                execute: this.parseBlock(tokens[2])
            };
            if (this.functionParams.length) {
                this.functionParams.pop();
            }
            return forTask;
        }
        return undefined;
    };
    VFScriptParser.prototype.parseBreak = function (tokens) {
        var breakTask = {
            type: 39 /* Break */
        };
        return breakTask;
    };
    VFScriptParser.prototype.parseGotoPlay = function (tokens) {
        var funAction = this.parseCusFunction(tokens);
        if (funAction) {
            funAction.type = 30 /* CallProtoFunction */;
            funAction.name = 'gotoPlay';
            return funAction;
        }
        return undefined;
    };
    VFScriptParser.prototype.parseGotoStop = function (tokens) {
        var funAction = this.parseCusFunction(tokens);
        if (funAction) {
            funAction.type = 30 /* CallProtoFunction */;
            funAction.name = 'gotoStop';
            return funAction;
        }
        return undefined;
    };
    //////////////////////// 以上为解析实际的action每个都与一个ActionType对应////////////
    VFScriptParser.prototype.parseNumberFromTokens = function (tokens, start) {
        var numStr = '';
        var startToken = tokens[start];
        numStr += startToken.value;
        if (startToken.type === TokenType.Option && startToken.value === VFS_Keyword.Minus) {
            var minsNum = this.parseNumberFromTokens(tokens, start + 1);
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
        }
        else if (startToken.type === TokenType.String) {
            if (numStr.indexOf('0x') === 0) {
                return parseInt(numStr, 16);
            }
            // tslint:disable-next-line: no-console
            this.warn('parseNumber error:', startToken.value);
        }
        // tslint:disable-next-line: no-console
        this.warn('parseNumber error:', startToken);
        return 0;
    };
    VFScriptParser.prototype.parseStringFromTokens = function (tokens, start) {
        var str = '';
        var quo = 0;
        for (var i = start, len = tokens.length; i < len; i++) {
            var token = tokens[i];
            if (token.type === TokenType.Quotation ||
                token.type === TokenType.DoubleQuotation) {
                quo++;
                if (quo >= 2) {
                    break;
                }
            }
            else {
                str += token.value;
            }
        }
        return str;
    };
    VFScriptParser.prototype.parseObjectFromBlock = function (blockToken) {
        var keyTokens = [];
        var valueTokens = [];
        var tokens = blockToken.value;
        var key = true;
        var keyConst;
        var valueConst;
        var obj = {};
        for (var i = 0, len = tokens.length; i < len; i++) {
            var token = tokens[i];
            if (token.type === TokenType.Colon) {
                key = false;
            }
            else if (token.type === TokenType.Comma) {
                key = true;
                keyConst = this.parseConst(keyTokens);
                valueConst = this.parseConst(valueTokens);
                if (keyConst && valueConst) {
                    obj[keyConst[1]] = valueConst[1];
                }
                keyTokens.length = 0;
                valueTokens.length = 0;
            }
            else {
                if (key) {
                    keyTokens.push(token);
                }
                else {
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
    };
    VFScriptParser.prototype.parseArrayFromSquare = function (arrToken) {
        var arr = [];
        var tokenStack = [];
        var tokens = arrToken.value;
        for (var i = 0, len = tokens.length; i < len; i++) {
            var token = tokens[i];
            if (token.value === VFS_Keyword.Comma) {
                if (tokenStack.length) {
                    var constItem = this.parseConst(tokenStack);
                    if (constItem) {
                        arr.push(constItem[1]);
                    }
                    tokenStack.length = 0;
                }
            }
            else {
                tokenStack.push(token);
            }
        }
        if (tokenStack.length) {
            var constItem = this.parseConst(tokenStack);
            if (constItem) {
                arr.push(constItem[1]);
            }
            tokenStack.length = 0;
        }
        return arr;
    };
    VFScriptParser.prototype.parseStringFromBracket = function (token) {
        if (token.type === TokenType.Bracket) {
            var tokens = token.value;
            for (var i = 0, len = tokens.length; i < len; i++) {
                var tok = tokens[i];
                if (tok.type === TokenType.Quotation ||
                    tok.type === TokenType.DoubleQuotation) {
                    var str = this.parseStringFromTokens(tokens, i);
                    return str;
                }
            }
        }
        return '';
    };
    VFScriptParser.prototype.parseExpressType = function (tokens) {
        var express = [];
        var astStack = [];
        var lastToken;
        var curToken = '';
        var expressItem;
        var curIsOption = false;
        if (!tokens || tokens.length === 0) {
            return express;
        }
        for (var i = 0, len = tokens.length; i < len; i++) {
            var token = tokens[i];
            if (token.type === TokenType.Bracket &&
                (!lastToken ||
                    (lastToken.type !== TokenType.ArrayFunction
                        && lastToken.type !== TokenType.Random))) { // 表达式中除了运算符括号，还有数组操作的括号和随机值的括号，需要排除
                if (token.value && Array.isArray(token.value)) {
                    var subExpressTokens = token.value;
                    var subExpress = this.parseExpressType(subExpressTokens);
                    if (subExpress.length) {
                        if (curToken && curIsOption) {
                            expressItem = this.parseOperate(astStack.concat(), curToken);
                            astStack.length = 0;
                            curToken = '';
                            curIsOption = false;
                            if (expressItem) {
                                express.push(expressItem);
                                expressItem = undefined;
                            }
                        }
                        express.push([5, '(']);
                        for (var j = 0, jlen = subExpress.length; j < jlen; j++) {
                            express.push(subExpress[j]);
                        }
                        express.push([5, ')']);
                    }
                }
            }
            else {
                if (token.type === TokenType.Option ||
                    token.type === TokenType.Slash ||
                    token.type === TokenType.Equal) {
                    var isMinus = false;
                    if (!curIsOption) {
                        expressItem = this.parseExpressItem(astStack.concat(), curToken);
                        astStack.length = 0;
                        curToken = '';
                    }
                    else if (token.value === VFS_Keyword.Exclamation) { // 处理！
                        expressItem = this.parseOperate(astStack.concat(), curToken);
                        astStack.length = 0;
                        curToken = '';
                    }
                    else if (token.value === VFS_Keyword.Minus) { // 处理负号-
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
                }
                else {
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
            lastToken = token;
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
    };
    VFScriptParser.prototype.parseExpressFromBracket = function (bracketToken) {
        var express = [];
        var tokens;
        if (bracketToken.type === TokenType.Bracket) {
            tokens = bracketToken.value;
        }
        if (!tokens || tokens.length === 0) {
            return express;
        }
        return this.parseExpressType(tokens);
    };
    VFScriptParser.prototype.parseExpressItemFromBracket = function (bracketToken) {
        var express = [];
        var tokens;
        if (bracketToken.type === TokenType.Bracket) {
            tokens = bracketToken.value;
        }
        if (!tokens || tokens.length === 0) {
            return express;
        }
        var expressItemType = '';
        for (var i = 0, len = tokens.length; i < len; i++) {
            expressItemType += tokens[i].type;
        }
        return this.parseExpressItem(tokens, expressItemType);
    };
    VFScriptParser.prototype.parseExpressItem = function (tokens, tokenType) {
        var express = [];
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
        var regProperty = new RegExp(PropertyToken);
        var regObjectValue = new RegExp(ObjectToken);
        var regConst = new RegExp(ValueToken);
        var regVariable = new RegExp(VariableToken + '$');
        var regArrayIndex = new RegExp(ArrayIndexToken);
        var regArrayLength = new RegExp(ArrayLengthToken);
        var regArrayFunction = new RegExp(ArrayFunctionToken);
        var regComponent = new RegExp(VfComponentToken);
        // this.log('parse express item:', tokenType);
        // this.log('PropertyToken', PropertyToken);
        // this.log('ValueToken', ValueToken);
        // this.log('VariableToken', VariableToken);
        // this.log('regArrayLength', ArrayLengthToken);
        this.log('pares express start:', tokens, tokenType);
        // 先长后短
        if (regArrayIndex.test(tokenType)) {
            this.log('parse array index');
            return this.parseArrayIndex(tokens);
        }
        else if (regArrayLength.test(tokenType)) {
            this.log('parse array length');
            return this.parseArrayLength(tokens);
        }
        else if (regArrayFunction.test(tokenType)) {
            this.log('parse array function');
            return this.parseArrayFunction(tokens);
        }
        else if (regVariable.test(tokenType)) {
            this.log('parse variable');
            return this.parseVariable(tokens);
        }
        else if (regProperty.test(tokenType)) {
            this.log('parse property');
            return this.parseProperty(tokens);
        }
        else if (regObjectValue.test(tokenType)) {
            this.log('parse object ');
            return this.parseVariable(tokens);
        }
        else if (regComponent.test(tokenType)) {
            this.log('parse component');
            return this.parseComponentExpress(tokens);
        }
        else if (regConst.test(tokenType)) {
            this.log('parse const');
            return this.parseConst(tokens);
        }
        this.log('pares express fail:', tokens, tokenType);
        if (express.length > 0) {
            return express;
        }
        return undefined;
    };
    VFScriptParser.prototype.parseOperate = function (tokens, tokenType) {
        var opertionStr = '';
        for (var i = 0, len = tokens.length; i < len; i++) {
            opertionStr += tokens[i].value;
        }
        // todo: check
        return [IVFData_1.ExpressItemType.OPERATION, opertionStr];
    };
    VFScriptParser.prototype.parseConst = function (tokens) {
        var exp = [0];
        if (tokens[0].type === TokenType.Quotation || tokens[0].type === TokenType.DoubleQuotation) {
            exp.push(this.parseStringFromTokens(tokens, 0)); // string
        }
        else if (tokens[0].type === TokenType.String) {
            exp.push(this.parseStringFromTokens(tokens, 0)); // object
        }
        else if (tokens[0].type === TokenType.Block) {
            exp.push(this.parseObjectFromBlock(tokens[0])); // object
        }
        else if (tokens[0].type === TokenType.SquareBracket) {
            exp.push(this.parseArrayFromSquare(tokens[0])); // array
        }
        else if (tokens[0].type === TokenType.Number) {
            exp.push(this.parseNumberFromTokens(tokens, 0)); // number
        }
        else if (tokens[0].type === TokenType.Option && tokens[0].value === VFS_Keyword.Minus) {
            exp.push(this.parseNumberFromTokens(tokens, 0)); // number
        }
        else if (tokens[0].type === TokenType.Boolean) {
            exp.push(tokens[0].value === 'true' ? true : false);
        }
        if (exp.length > 1) {
            return exp;
        }
    };
    VFScriptParser.prototype.parseVariable = function (tokens) {
        var express = [IVFData_1.ExpressItemType.VARIABLE];
        var target = [];
        var i = 0;
        var len = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            }
            else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            }
            else if (tokens[i].type === TokenType.String ||
                tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            }
            else if (tokens[i].type === TokenType.Variable) {
                break;
            }
        }
        express.push(target);
        // find variable
        if (i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Variable) {
                    continue;
                }
                else if (tokens[i].type === TokenType.String ||
                    tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                }
                else if (tokens[i].type === TokenType.Dot) {
                    break;
                }
            }
        }
        // find property
        if (i < len) {
            express[0] = IVFData_1.ExpressItemType.OBJECT_VALUE;
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Dot) {
                    continue;
                }
                else if (tokens[i].type === TokenType.String ||
                    tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                    express[0] = IVFData_1.ExpressItemType.OBJECT_VALUE;
                }
            }
        }
        if (this.functionParams.length > 0) {
            // [1, [], 'id'] => [9, 0, ''];
            var varName = express[2];
            var index = this.functionParams.indexOf(varName);
            if (index >= 0) {
                express[0] = IVFData_1.ExpressItemType.PARAM_VALUE;
                express[1] = index;
            }
        }
        return express;
    };
    VFScriptParser.prototype.parseComponentExpress = function (tokens) {
        var express = [IVFData_1.ExpressItemType.COMPONENT];
        var target = [];
        var i = 0;
        var len = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            }
            else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            }
            else if (tokens[i].type === TokenType.String ||
                tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            }
            else if (tokens[i].type === TokenType.Dot) {
                break;
            }
        }
        express.push(target);
        return express;
    };
    VFScriptParser.prototype.parseProperty = function (tokens) {
        var express = [IVFData_1.ExpressItemType.PROPERTY];
        var target = [];
        var i = 0;
        var len = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            }
            else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            }
            else if (tokens[i].type === TokenType.String ||
                tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            }
            else if (tokens[i].type === TokenType.Dot) {
                break;
            }
        }
        express.push(target);
        // find property
        if (i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Dot) {
                    continue;
                }
                else if (tokens[i].type === TokenType.String ||
                    tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                }
            }
        }
        return express;
    };
    VFScriptParser.prototype.parseArrayIndex = function (tokens) {
        var express = [IVFData_1.ExpressItemType.ARRAY_VALUE];
        var target = [];
        var arrIndexItems = [];
        var i = 0;
        var len = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            }
            else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            }
            else if (tokens[i].type === TokenType.String ||
                tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            }
            else if (tokens[i].type === TokenType.Variable) {
                break;
            }
        }
        express.push(target);
        // find variable
        if (i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Variable) {
                    continue;
                }
                else if (tokens[i].type === TokenType.String ||
                    tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                }
                else if (tokens[i].type === TokenType.SquareBracket) {
                    var indexItem = this.parseExpressTypeFromBracket(tokens[i]);
                    if (indexItem && indexItem.length) {
                        arrIndexItems.push(indexItem[0]);
                    }
                }
                else if (tokens[i].type === TokenType.Dot) {
                    break;
                }
            }
        }
        // arr index
        for (var j = 0, jlen = arrIndexItems.length; j < jlen; j++) {
            express.push(arrIndexItems[j]);
        }
        // find property
        if (i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Dot) {
                    continue;
                }
                else if (tokens[i].type === TokenType.String ||
                    tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                }
            }
        }
        return express;
    };
    VFScriptParser.prototype.parseArrayLength = function (tokens) {
        var express = [IVFData_1.ExpressItemType.ARRAY_LEN];
        var target = [];
        var i = 0;
        var len = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            }
            else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            }
            else if (tokens[i].type === TokenType.String ||
                tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            }
            else if (tokens[i].type === TokenType.Variable) {
                break;
            }
        }
        express.push(target);
        // find variable
        if (i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Variable) {
                    continue;
                }
                else if (tokens[i].type === TokenType.String ||
                    tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                }
                else if (tokens[i].type === TokenType.Dot) {
                    break;
                }
            }
        }
        return express;
    };
    VFScriptParser.prototype.parseArrayFunction = function (tokens) {
        var express = [IVFData_1.ExpressItemType.ARRAY_FUNCTION];
        var target = [];
        var params = [];
        var funName = '';
        var i = 0;
        var len = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            }
            else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            }
            else if (tokens[i].type === TokenType.String ||
                tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            }
            else if (tokens[i].type === TokenType.Variable) {
                break;
            }
        }
        express.push(target);
        // find variable
        if (i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.Variable) {
                    continue;
                }
                else if (tokens[i].type === TokenType.String ||
                    tokens[i].type === TokenType.Number) {
                    express.push(tokens[i].value);
                }
                else if (tokens[i].type === TokenType.Dot) {
                    break;
                }
            }
        }
        // function name and params;
        if (i < len) {
            for (; i < len; i++) {
                if (tokens[i].type === TokenType.ArrayFunction) {
                    funName = tokens[i].value;
                }
                else if (tokens[i].type === TokenType.Bracket) {
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
    };
    VFScriptParser.prototype.parseComponent = function (tokens) {
        var targetComponent = [];
        for (var i = 0, len = tokens.length; i < len; i++) {
            var token = tokens[i];
            if (token.type === TokenType.Number || token.type === TokenType.String) {
                targetComponent.push(token.value);
            }
        }
        return targetComponent;
    };
    VFScriptParser.prototype.parseEventParamFromBracket = function (paramToken) {
        var eventParam = {
            ok: false,
            eventName: '',
            "function": ''
        };
        var eventNameToken = [];
        var eventFunctionToken = [];
        var eventFunctionTokenType = '';
        var isFunctionToken = false;
        var hasName = false;
        var tokens = [];
        if (paramToken.type === TokenType.Bracket) {
            tokens = paramToken.value;
        }
        else {
            return eventParam;
        }
        for (var i = 0, len = tokens.length; i < len; i++) {
            var token = tokens[i];
            if (!isFunctionToken) {
                if (token.type !== TokenType.Comma) {
                    eventNameToken.push(token);
                }
                else {
                    isFunctionToken = true;
                }
            }
            else {
                eventFunctionToken.push(token);
                eventFunctionTokenType += token.type;
            }
        }
        if (eventNameToken.length === 3 &&
            (eventNameToken[1].type === TokenType.String || eventNameToken[1].type === TokenType.Number)) {
            eventParam.eventName = eventNameToken[1].value;
            hasName = true;
        }
        if (this.regClosureMaybe.test(eventFunctionTokenType) && eventFunctionToken[2].value === VFS_Keyword.More) {
            eventParam["function"] = this.parseBlock(eventFunctionToken[3]);
            if (hasName) {
                eventParam.ok = true;
            }
        }
        else if (this.regEventListenerFun.test(eventFunctionTokenType)) {
            var targetTokens = [];
            for (var i = 0, len = tokens.length; i < len; i++) {
                if (tokens[i].type === TokenType.Dot) {
                    if (i < len - 1 && tokens[i + 1].type === TokenType.String) {
                        eventParam["function"] = tokens[i + 1].value;
                        if (hasName) {
                            eventParam.ok = true;
                        }
                        break;
                    }
                }
                else {
                    targetTokens.push(tokens[i]);
                }
            }
            // todo 支持监听函数是子组件的函数
            var callbackTarget = this.parseTargetComponent(targetTokens);
        }
        return eventParam;
    };
    VFScriptParser.prototype.parseFunctionParamFromBracket = function (paramToken) {
        var funParam = [];
        var fToken = [];
        var fTokenType = '';
        var tokens = [];
        if (paramToken.type === TokenType.Bracket) {
            tokens = paramToken.value;
        }
        else {
            return funParam;
        }
        for (var i = 0, len = tokens.length; i < len; i++) {
            var token = tokens[i];
            if (token.type !== TokenType.Comma) {
                fToken.push(token);
                fTokenType += token.type;
            }
            else {
                var expressItem = this.parseExpressItem(fToken.concat(), fTokenType);
                fTokenType = '';
                fToken.length = 0;
                if (expressItem) {
                    funParam.push(expressItem);
                }
            }
            if (i >= len - 1 && fToken.length > 0) {
                var expressItem = this.parseExpressItem(fToken.concat(), fTokenType);
                fTokenType = '';
                fToken.length = 0;
                if (expressItem) {
                    funParam.push(expressItem);
                }
            }
        }
        return funParam;
    };
    VFScriptParser.prototype.parseExpressTypeFromBracket = function (bracketToken) {
        var funParam = [];
        var fToken = [];
        var fTokenType = '';
        var tokens = [];
        if (bracketToken.type === TokenType.Bracket || bracketToken.type === TokenType.SquareBracket) {
            tokens = bracketToken.value;
        }
        else {
            return funParam;
        }
        for (var i = 0, len = tokens.length; i < len; i++) {
            var token = tokens[i];
            if (token.type !== TokenType.Comma) {
                fToken.push(token);
                fTokenType += token.type;
            }
            else {
                var expressItem = this.parseExpressItem(fToken.concat(), fTokenType);
                fTokenType = '';
                fToken.length = 0;
                if (expressItem) {
                    funParam.push(expressItem);
                }
            }
            if (i >= len - 1 && fToken.length > 0) {
                var expressItem = this.parseExpressItem(fToken.concat(), fTokenType);
                fTokenType = '';
                fToken.length = 0;
                if (expressItem) {
                    funParam.push(expressItem);
                }
            }
        }
        return funParam;
    };
    VFScriptParser.prototype.parseForinFromBracket = function (bracketToken) {
        var fToken = [];
        var fTokenType = '';
        var tokens = [];
        if (bracketToken.type === TokenType.Bracket || bracketToken.type === TokenType.SquareBracket) {
            tokens = bracketToken.value;
        }
        else {
            return undefined;
        }
        if (tokens.length >= 4 && tokens[2].type === TokenType.In) {
            var tokenIndex = [tokens[0], tokens[1]];
            var tokenForin = tokens.concat();
            tokenForin.splice(0, 3);
            var index = this.parseVariable(tokenIndex);
            if (index && index.length >= 3 && index[0] === IVFData_1.ExpressItemType.VARIABLE) {
                this.functionParams.push(index[2]);
            }
            else {
                this.warn('for in params wrong', tokens);
                return undefined;
            }
            if (tokenForin.length >= 2) {
                var forin = this.parseVariable(tokenForin);
                return forin;
            }
            else if (tokenForin.length === 1) {
                var forin = this.parseConst(tokenForin);
                return forin;
            }
            else {
                this.warn('for in params wrong', tokens);
                return undefined;
            }
        }
        else {
            this.warn('for in params wrong', tokens);
        }
        return undefined;
    };
    VFScriptParser.prototype.parseTargetComponent = function (tokens) {
        var target = [];
        var i = 0;
        var len = 0;
        for (i = 0, len = tokens.length; i < len; i++) {
            if (tokens[i].type === TokenType.This ||
                tokens[i].type === TokenType.Child) {
                continue;
            }
            else if (tokens[i].type === TokenType.Global) {
                target.push(-1);
            }
            else if (tokens[i].type === TokenType.String ||
                tokens[i].type === TokenType.Number) {
                target.push(tokens[i].value);
            }
            else {
                break;
            }
        }
        return target;
    };
    VFScriptParser.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (!this.debug) {
            return;
        }
        var params = [];
        if (message) {
            params.push(message);
        }
        if (optionalParams) {
            params = params.concat(optionalParams);
        }
        // tslint:disable-next-line: no-console
        console.log.apply(this, params);
    };
    VFScriptParser.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        // if (!this.debug) {
        //     return;
        // }
        var params = [];
        if (message) {
            params.push(message);
        }
        if (optionalParams) {
            params = params.concat(optionalParams);
        }
        // tslint:disable-next-line: no-console
        console.warn.apply(this, params);
    };
    return VFScriptParser;
}());
exports["default"] = VFScriptParser;
