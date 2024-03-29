var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Queue = /** @class */ (function () {
    function Queue() {
        this.prev = this;
        this.next = this;
    }
    Queue.prototype.push = function (item) {
        /*
        let q:Queue<T> = new Queue<T>();
        q.data = item;

        q.prev = this.prev;
        q.next = this;

        this.prev.next = q;
        this.prev = q;
        */
        this.prev.next = new Queue();
        this.prev.next.data = item;
        this.prev = this.prev.next;
        this.prev.prev = null;
    };
    Queue.prototype.pop = function () {
        var q = new Queue();
        q = this.next;
        this.next.next.prev = this;
        this.next = this.next.next;
        return q.data;
    };
    return Queue;
}());
var QueueB = /** @class */ (function () {
    function QueueB() {
        this.next = this;
        this.count = 0;
    }
    QueueB.prototype.push = function (item) {
        var q = new QueueB();
        q.data = item;
        q.next = this;
        if (this.count == 0)
            this.next = q;
        else {
            var last_one = this;
            for (var i = 0; i < this.count; i++) {
                last_one = last_one.next;
            }
            last_one.next = q;
        }
    };
    QueueB.prototype.pop = function () {
        var q = new QueueB();
        q = this.next;
        this.next = this.next.next;
        return q.data;
    };
    return QueueB;
}());
var ArrayQueue = /** @class */ (function () {
    function ArrayQueue() {
        var _this = this;
        this.data = new Array();
        this.push = function (item) { return _this.data.push(item); };
        this.pop = function () { return _this.data.shift(); };
    }
    return ArrayQueue;
}());
/**
 * 0代表 按下 左键 ，1 代表按下 滚轮 ，2 代表按下 右键
 */
var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["LEFT_BUTTON"] = 0] = "LEFT_BUTTON";
    MouseButton[MouseButton["RIGHT_BUTTON"] = 2] = "RIGHT_BUTTON";
})(MouseButton || (MouseButton = {}));
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.Motion = function (e) {
        var me = new MouseMotionEvent(EventType.MOUSE_MOTION, e.which, null, e.pageX, e.pageY, EventManager.EVENT.mouse_motion_event.x, EventManager.EVENT.mouse_motion_event.y);
        EventManager.EVENT.AddEventB(EventType.MOUSE_MOTION, me);
    };
    Mouse.ButtonDwon = function (e) {
        var me = new MouseButtonEvent(EventType.MOUSE_BUTTON_DOWN, e.which, e.button, null, 1, e.pageX, e.pageY);
        EventManager.EVENT.AddEventB(EventType.MOUSE_BUTTON_DOWN, me);
    };
    Mouse.ButtonUp = function (e) {
        var me = new MouseButtonEvent(EventType.MOUSE_BUTTON_UP, e.which, e.button, null, 1, e.pageX, e.pageY);
        EventManager.EVENT.AddEventB(EventType.MOUSE_BUTTON_UP, me);
    };
    Mouse.Wheel = function (e) {
        var me = new _MouseWheelEvent_(EventType.MOUSE_WHEEL);
        EventManager.EVENT.AddEventB(EventType.MOUSE_WHEEL, me);
    };
    return Mouse;
}());
var KeyCode;
(function (KeyCode) {
    /** 与 Backspace 的键控代码值(8)关联的常数。*/
    KeyCode[KeyCode["BACKSPACE"] = 8] = "BACKSPACE";
    /** 与 Tab 的键控代码值(9)关联的常数。*/
    KeyCode[KeyCode["TAB"] = 9] = "TAB";
    /** 与 Enter 的键控代码值(13)关联的常数。*/
    KeyCode[KeyCode["ENTER"] = 13] = "ENTER";
    /** 与 Mac 命令键(15)关联的常数。*/
    KeyCode[KeyCode["COMMAND"] = 15] = "COMMAND";
    /** 与 Shift 的键控代码值(16)关联的常数。*/
    KeyCode[KeyCode["SHIFT"] = 16] = "SHIFT";
    /** 与 Ctrl 的键控代码值(17)关联的常数。*/
    KeyCode[KeyCode["CONTROL"] = 17] = "CONTROL";
    /** 与 Alternate(Option)键的键控代码值(18)关联的常数。*/
    KeyCode[KeyCode["ALTERNATE"] = 18] = "ALTERNATE";
    /** 与 Caps Lock 的键控代码值(20)关联的常数。*/
    KeyCode[KeyCode["CAPS_LOCK"] = 20] = "CAPS_LOCK";
    /** 与数字键盘的伪键控代码(21)关联的常数。*/
    KeyCode[KeyCode["NUMPAD"] = 21] = "NUMPAD";
    /** 与 Esc 的键控代码值(27)关联的常数。*/
    KeyCode[KeyCode["ESCAPE"] = 27] = "ESCAPE";
    /** 与空格键的键控代码值(32)关联的常数。*/
    KeyCode[KeyCode["SPACE"] = 32] = "SPACE";
    /** 与 Page Up 的键控代码值(33)关联的常数。*/
    KeyCode[KeyCode["PAGE_UP"] = 33] = "PAGE_UP";
    /** 与 Page Down 的键控代码值(34)关联的常数。*/
    KeyCode[KeyCode["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    /** 与 End 的键控代码值(35)关联的常数。*/
    KeyCode[KeyCode["END"] = 35] = "END";
    /** 与 Home 的键控代码值(36)关联的常数。*/
    KeyCode[KeyCode["HOME"] = 36] = "HOME";
    /** 与向左箭头键的键控代码值(37)关联的常数。*/
    KeyCode[KeyCode["LEFT"] = 37] = "LEFT";
    /** 与向上箭头键的键控代码值(38)关联的常数。*/
    KeyCode[KeyCode["UP"] = 38] = "UP";
    /** 与向右箭头键的键控代码值(39)关联的常数。*/
    KeyCode[KeyCode["RIGHT"] = 39] = "RIGHT";
    /** 与向下箭头键的键控代码值(40)关联的常数。*/
    KeyCode[KeyCode["DOWN"] = 40] = "DOWN";
    /** 与 Insert 的键控代码值(45)关联的常数。*/
    KeyCode[KeyCode["INSERT"] = 41] = "INSERT";
    /** 与 Delete 的键控代码值(46)关联的常数。*/
    KeyCode[KeyCode["DELETE"] = 42] = "DELETE";
    /** 与 0 的键控代码值(48)关联的常数。*/
    KeyCode[KeyCode["NUMBER_0"] = 48] = "NUMBER_0";
    /** 与 1 的键控代码值(49)关联的常数。*/
    KeyCode[KeyCode["NUMBER_1"] = 49] = "NUMBER_1";
    /** 与 2 的键控代码值(50)关联的常数。*/
    KeyCode[KeyCode["NUMBER_2"] = 50] = "NUMBER_2";
    /** 与 3 的键控代码值(51)关联的常数。*/
    KeyCode[KeyCode["NUMBER_3"] = 51] = "NUMBER_3";
    /** 与 4 的键控代码值(52)关联的常数。*/
    KeyCode[KeyCode["NUMBER_4"] = 52] = "NUMBER_4";
    /** 与 5 的键控代码值(53)关联的常数。*/
    KeyCode[KeyCode["NUMBER_5"] = 53] = "NUMBER_5";
    /** 与 6 的键控代码值(54)关联的常数。*/
    KeyCode[KeyCode["NUMBER_6"] = 54] = "NUMBER_6";
    /** 与 7 的键控代码值(55)关联的常数。*/
    KeyCode[KeyCode["NUMBER_7"] = 55] = "NUMBER_7";
    /** 与 8 的键控代码值(56)关联的常数。*/
    KeyCode[KeyCode["NUMBER_8"] = 56] = "NUMBER_8";
    /** 与 9 的键控代码值(57)关联的常数。*/
    KeyCode[KeyCode["NUMBER_9"] = 57] = "NUMBER_9";
    /** 与 A 键的键控代码值(65)关联的常数。*/
    KeyCode[KeyCode["A"] = 65] = "A";
    /** 与 B 键的键控代码值(66)关联的常数。*/
    KeyCode[KeyCode["B"] = 66] = "B";
    /** 与 C 键的键控代码值(67)关联的常数。*/
    KeyCode[KeyCode["C"] = 67] = "C";
    /** 与 D 键的键控代码值(68)关联的常数。*/
    KeyCode[KeyCode["D"] = 68] = "D";
    /** 与 E 键的键控代码值(69)关联的常数。*/
    KeyCode[KeyCode["E"] = 69] = "E";
    /** 与 F 键的键控代码值(70)关联的常数。*/
    KeyCode[KeyCode["F"] = 70] = "F";
    /** 与 G 键的键控代码值(71)关联的常数。*/
    KeyCode[KeyCode["G"] = 71] = "G";
    /** 与 H 键的键控代码值(72)关联的常数。*/
    KeyCode[KeyCode["H"] = 72] = "H";
    /** 与 I 键的键控代码值(73)关联的常数。*/
    KeyCode[KeyCode["I"] = 73] = "I";
    /** 与 J 键的键控代码值(74)关联的常数。*/
    KeyCode[KeyCode["J"] = 74] = "J";
    /** 与 K 键的键控代码值(75)关联的常数。*/
    KeyCode[KeyCode["K"] = 75] = "K";
    /** 与 L 键的键控代码值(76)关联的常数。*/
    KeyCode[KeyCode["L"] = 76] = "L";
    /** 与 M 键的键控代码值(77)关联的常数。*/
    KeyCode[KeyCode["M"] = 77] = "M";
    /** 与 N 键的键控代码值(78)关联的常数。*/
    KeyCode[KeyCode["N"] = 78] = "N";
    /** 与 O 键的键控代码值(79)关联的常数。*/
    KeyCode[KeyCode["O"] = 79] = "O";
    /** 与 P 键的键控代码值(80)关联的常数。*/
    KeyCode[KeyCode["P"] = 80] = "P";
    /** 与 Q 键的键控代码值(81)关联的常数。*/
    KeyCode[KeyCode["Q"] = 81] = "Q";
    /** 与 R 键的键控代码值(82)关联的常数。*/
    KeyCode[KeyCode["R"] = 82] = "R";
    /** 与 S 键的键控代码值(83)关联的常数。*/
    KeyCode[KeyCode["S"] = 83] = "S";
    /** 与 T 键的键控代码值(84)关联的常数。*/
    KeyCode[KeyCode["T"] = 84] = "T";
    /** 与 U 键的键控代码值(85)关联的常数。*/
    KeyCode[KeyCode["U"] = 85] = "U";
    /** 与 V 键的键控代码值(86)关联的常数。*/
    KeyCode[KeyCode["V"] = 86] = "V";
    /** 与 W 键的键控代码值(87)关联的常数。*/
    KeyCode[KeyCode["W"] = 87] = "W";
    /** 与 X 键的键控代码值(88)关联的常数。*/
    KeyCode[KeyCode["X"] = 88] = "X";
    /** 与 Y 键的键控代码值(89)关联的常数。*/
    KeyCode[KeyCode["Y"] = 89] = "Y";
    /** 与 Z 键的键控代码值(90)关联的常数。*/
    KeyCode[KeyCode["Z"] = 90] = "Z";
    /** 与数字键盘上的数字 0 的键控代码值(96)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_0"] = 96] = "NUMPAD_0";
    /** 与数字键盘上的数字 1 的键控代码值(97)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_1"] = 97] = "NUMPAD_1";
    /** 与数字键盘上的数字 2 的键控代码值(98)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_2"] = 98] = "NUMPAD_2";
    /** 与数字键盘上的数字 3 的键控代码值(99)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_3"] = 99] = "NUMPAD_3";
    /** 与数字键盘上的数字 4 的键控代码值(100)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_4"] = 100] = "NUMPAD_4";
    /** 与数字键盘上的数字 5 的键控代码值(101)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_5"] = 101] = "NUMPAD_5";
    /** 与数字键盘上的数字 6 的键控代码值(102)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_6"] = 102] = "NUMPAD_6";
    /** 与数字键盘上的数字 7 的键控代码值(103)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_7"] = 103] = "NUMPAD_7";
    /** 与数字键盘上的数字 8 的键控代码值(104)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_8"] = 104] = "NUMPAD_8";
    /** 与数字键盘上的数字 9 的键控代码值(105)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_9"] = 105] = "NUMPAD_9";
    /** 与数字键盘上的乘号(*)的键控代码值(106)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_MULTIPLY"] = 106] = "NUMPAD_MULTIPLY";
    /** 与数字键盘上的加号(+)的键控代码值(107)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_ADD"] = 107] = "NUMPAD_ADD";
    /** 与数字键盘上的 Enter 的键控代码值(108)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_ENTER"] = 108] = "NUMPAD_ENTER";
    /** 与数字键盘上的减号(-)的键控代码值(109)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_SUBTRACT"] = 109] = "NUMPAD_SUBTRACT";
    /** 与数字键盘上的小数点(.)的键控代码值(110)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_DECIMAL"] = 110] = "NUMPAD_DECIMAL";
    /** 与数字键盘上的除号(/)的键控代码值(111)关联的常数。*/
    KeyCode[KeyCode["NUMPAD_DIVIDE"] = 111] = "NUMPAD_DIVIDE";
    /** 与 F1 的键控代码值(112)关联的常数。*/
    KeyCode[KeyCode["F1"] = 112] = "F1";
    /** 与 F2 的键控代码值(113)关联的常数。*/
    KeyCode[KeyCode["F2"] = 113] = "F2";
    /** 与 F3 的键控代码值(114)关联的常数。*/
    KeyCode[KeyCode["F3"] = 114] = "F3";
    /** 与 F4 的键控代码值(115)关联的常数。*/
    KeyCode[KeyCode["F4"] = 115] = "F4";
    /** 与 F5 的键控代码值(116)关联的常数。*/
    KeyCode[KeyCode["F5"] = 116] = "F5";
    /** 与 F6 的键控代码值(117)关联的常数。*/
    KeyCode[KeyCode["F6"] = 117] = "F6";
    /** 与 F7 的键控代码值(118)关联的常数。*/
    KeyCode[KeyCode["F7"] = 118] = "F7";
    /** 与 F8 的键控代码值(119)关联的常数。*/
    KeyCode[KeyCode["F8"] = 119] = "F8";
    /** 与 F9 的键控代码值(120)关联的常数。*/
    KeyCode[KeyCode["F9"] = 120] = "F9";
    /** 与 F10 的键控代码值(121)关联的常数。*/
    KeyCode[KeyCode["F10"] = 121] = "F10";
    /** 与 F11 的键控代码值(122)关联的常数。*/
    KeyCode[KeyCode["F11"] = 122] = "F11";
    /** 与 F12 的键控代码值(123)关联的常数。*/
    KeyCode[KeyCode["F12"] = 123] = "F12";
    /** 与 F13 的键控代码值(124)关联的常数。*/
    KeyCode[KeyCode["F13"] = 124] = "F13";
    /** 与 F14 的键控代码值(125)关联的常数。*/
    KeyCode[KeyCode["F14"] = 125] = "F14";
    /** 与 F15 的键控代码值(126)关联的常数。*/
    KeyCode[KeyCode["F15"] = 126] = "F15";
    /** 与 ; 键的键控代码值(186)关联的常数。*/
    KeyCode[KeyCode["SEMICOLON"] = 186] = "SEMICOLON";
    /** 与=键的键控代码值(187)关联的常数。*/
    KeyCode[KeyCode["EQUAL"] = 187] = "EQUAL";
    /** 与 F15 的键控代码值(188)关联的常数。*/
    KeyCode[KeyCode["COMMA"] = 188] = "COMMA";
    /** 与 - 键的键控代码值(189)关联的常数。*/
    KeyCode[KeyCode["MINUS"] = 189] = "MINUS";
    /** 与 . 键的键控代码值(190)关联的常数。*/
    KeyCode[KeyCode["PERIOD"] = 190] = "PERIOD";
    /** 与 / 键的键控代码值(191)关联的常数。*/
    KeyCode[KeyCode["SLASH"] = 191] = "SLASH";
    /** 与 ` 键的键控代码值(192)关联的常数。*/
    KeyCode[KeyCode["BACKQUOTE"] = 192] = "BACKQUOTE";
    /** 与 [ 键的键控代码值(219)关联的常数。*/
    KeyCode[KeyCode["LEFTBRACKET"] = 219] = "LEFTBRACKET";
    /** 与 \ 键的键控代码值(220)关联的常数。*/
    KeyCode[KeyCode["BACKSLASH"] = 220] = "BACKSLASH";
    /** 与 ] 键的键控代码值(221)关联的常数。*/
    KeyCode[KeyCode["RIGHTBRACKET"] = 221] = "RIGHTBRACKET";
    /** 与 ' 键的键控代码值(222)关联的常数。*/
    KeyCode[KeyCode["QUOTE"] = 222] = "QUOTE";
})(KeyCode || (KeyCode = {}));
/**
* <code>Keyboard</code> 类的属性是一些常数，这些常数表示控制游戏时最常用的键。
*/
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.KeyDown = function (e) {
        var ke = new _KeyboardEvent_(EventType.KEY_DOWN, null, e.keyCode);
        EventManager.EVENT.AddEventB(EventType.KEY_DOWN, ke);
    };
    Keyboard.KeyPress = function () { };
    Keyboard.KeyUp = function (e) {
        var ke = new _KeyboardEvent_(EventType.KEY_UP, null, e.keyCode);
        EventManager.EVENT.AddEventB(EventType.KEY_UP, ke);
    };
    /** 与 0 的键控代码值(48)关联的常数。*/
    Keyboard.NUMBER_0 = 48;
    /** 与 1 的键控代码值(49)关联的常数。*/
    Keyboard.NUMBER_1 = 49;
    /** 与 2 的键控代码值(50)关联的常数。*/
    Keyboard.NUMBER_2 = 50;
    /** 与 3 的键控代码值(51)关联的常数。*/
    Keyboard.NUMBER_3 = 51;
    /** 与 4 的键控代码值(52)关联的常数。*/
    Keyboard.NUMBER_4 = 52;
    /** 与 5 的键控代码值(53)关联的常数。*/
    Keyboard.NUMBER_5 = 53;
    /** 与 6 的键控代码值(54)关联的常数。*/
    Keyboard.NUMBER_6 = 54;
    /** 与 7 的键控代码值(55)关联的常数。*/
    Keyboard.NUMBER_7 = 55;
    /** 与 8 的键控代码值(56)关联的常数。*/
    Keyboard.NUMBER_8 = 56;
    /** 与 9 的键控代码值(57)关联的常数。*/
    Keyboard.NUMBER_9 = 57;
    /** 与 A 键的键控代码值(65)关联的常数。*/
    Keyboard.A = 65;
    /** 与 B 键的键控代码值(66)关联的常数。*/
    Keyboard.B = 66;
    /** 与 C 键的键控代码值(67)关联的常数。*/
    Keyboard.C = 67;
    /** 与 D 键的键控代码值(68)关联的常数。*/
    Keyboard.D = 68;
    /** 与 E 键的键控代码值(69)关联的常数。*/
    Keyboard.E = 69;
    /** 与 F 键的键控代码值(70)关联的常数。*/
    Keyboard.F = 70;
    /** 与 G 键的键控代码值(71)关联的常数。*/
    Keyboard.G = 71;
    /** 与 H 键的键控代码值(72)关联的常数。*/
    Keyboard.H = 72;
    /** 与 I 键的键控代码值(73)关联的常数。*/
    Keyboard.I = 73;
    /** 与 J 键的键控代码值(74)关联的常数。*/
    Keyboard.J = 74;
    /** 与 K 键的键控代码值(75)关联的常数。*/
    Keyboard.K = 75;
    /** 与 L 键的键控代码值(76)关联的常数。*/
    Keyboard.L = 76;
    /** 与 M 键的键控代码值(77)关联的常数。*/
    Keyboard.M = 77;
    /** 与 N 键的键控代码值(78)关联的常数。*/
    Keyboard.N = 78;
    /** 与 O 键的键控代码值(79)关联的常数。*/
    Keyboard.O = 79;
    /** 与 P 键的键控代码值(80)关联的常数。*/
    Keyboard.P = 80;
    /** 与 Q 键的键控代码值(81)关联的常数。*/
    Keyboard.Q = 81;
    /** 与 R 键的键控代码值(82)关联的常数。*/
    Keyboard.R = 82;
    /** 与 S 键的键控代码值(83)关联的常数。*/
    Keyboard.S = 83;
    /** 与 T 键的键控代码值(84)关联的常数。*/
    Keyboard.T = 84;
    /** 与 U 键的键控代码值(85)关联的常数。*/
    Keyboard.U = 85;
    /** 与 V 键的键控代码值(86)关联的常数。*/
    Keyboard.V = 86;
    /** 与 W 键的键控代码值(87)关联的常数。*/
    Keyboard.W = 87;
    /** 与 X 键的键控代码值(88)关联的常数。*/
    Keyboard.X = 88;
    /** 与 Y 键的键控代码值(89)关联的常数。*/
    Keyboard.Y = 89;
    /** 与 Z 键的键控代码值(90)关联的常数。*/
    Keyboard.Z = 90;
    /** 与 F1 的键控代码值(112)关联的常数。*/
    Keyboard.F1 = 112;
    /** 与 F2 的键控代码值(113)关联的常数。*/
    Keyboard.F2 = 113;
    /** 与 F3 的键控代码值(114)关联的常数。*/
    Keyboard.F3 = 114;
    /** 与 F4 的键控代码值(115)关联的常数。*/
    Keyboard.F4 = 115;
    /** 与 F5 的键控代码值(116)关联的常数。*/
    Keyboard.F5 = 116;
    /** 与 F6 的键控代码值(117)关联的常数。*/
    Keyboard.F6 = 117;
    /** 与 F7 的键控代码值(118)关联的常数。*/
    Keyboard.F7 = 118;
    /** 与 F8 的键控代码值(119)关联的常数。*/
    Keyboard.F8 = 119;
    /** 与 F9 的键控代码值(120)关联的常数。*/
    Keyboard.F9 = 120;
    /** 与 F10 的键控代码值(121)关联的常数。*/
    Keyboard.F10 = 121;
    /** 与 F11 的键控代码值(122)关联的常数。*/
    Keyboard.F11 = 122;
    /** 与 F12 的键控代码值(123)关联的常数。*/
    Keyboard.F12 = 123;
    /** 与 F13 的键控代码值(124)关联的常数。*/
    Keyboard.F13 = 124;
    /** 与 F14 的键控代码值(125)关联的常数。*/
    Keyboard.F14 = 125;
    /** 与 F15 的键控代码值(126)关联的常数。*/
    Keyboard.F15 = 126;
    /** 与数字键盘的伪键控代码(21)关联的常数。*/
    Keyboard.NUMPAD = 21;
    /** 与数字键盘上的数字 0 的键控代码值(96)关联的常数。*/
    Keyboard.NUMPAD_0 = 96;
    /** 与数字键盘上的数字 1 的键控代码值(97)关联的常数。*/
    Keyboard.NUMPAD_1 = 97;
    /** 与数字键盘上的数字 2 的键控代码值(98)关联的常数。*/
    Keyboard.NUMPAD_2 = 98;
    /** 与数字键盘上的数字 3 的键控代码值(99)关联的常数。*/
    Keyboard.NUMPAD_3 = 99;
    /** 与数字键盘上的数字 4 的键控代码值(100)关联的常数。*/
    Keyboard.NUMPAD_4 = 100;
    /** 与数字键盘上的数字 5 的键控代码值(101)关联的常数。*/
    Keyboard.NUMPAD_5 = 101;
    /** 与数字键盘上的数字 6 的键控代码值(102)关联的常数。*/
    Keyboard.NUMPAD_6 = 102;
    /** 与数字键盘上的数字 7 的键控代码值(103)关联的常数。*/
    Keyboard.NUMPAD_7 = 103;
    /** 与数字键盘上的数字 8 的键控代码值(104)关联的常数。*/
    Keyboard.NUMPAD_8 = 104;
    /** 与数字键盘上的数字 9 的键控代码值(105)关联的常数。*/
    Keyboard.NUMPAD_9 = 105;
    /** 与数字键盘上的加号(+)的键控代码值(107)关联的常数。*/
    Keyboard.NUMPAD_ADD = 107;
    /** 与数字键盘上的小数点(.)的键控代码值(110)关联的常数。*/
    Keyboard.NUMPAD_DECIMAL = 110;
    /** 与数字键盘上的除号(/)的键控代码值(111)关联的常数。*/
    Keyboard.NUMPAD_DIVIDE = 111;
    /** 与数字键盘上的 Enter 的键控代码值(108)关联的常数。*/
    Keyboard.NUMPAD_ENTER = 108;
    /** 与数字键盘上的乘号(*)的键控代码值(106)关联的常数。*/
    Keyboard.NUMPAD_MULTIPLY = 106;
    /** 与数字键盘上的减号(-)的键控代码值(109)关联的常数。*/
    Keyboard.NUMPAD_SUBTRACT = 109;
    /** 与 ; 键的键控代码值(186)关联的常数。*/
    Keyboard.SEMICOLON = 186;
    /** 与=键的键控代码值(187)关联的常数。*/
    Keyboard.EQUAL = 187;
    /** 与 F15 的键控代码值(188)关联的常数。*/
    Keyboard.COMMA = 188;
    /** 与 - 键的键控代码值(189)关联的常数。*/
    Keyboard.MINUS = 189;
    /** 与 . 键的键控代码值(190)关联的常数。*/
    Keyboard.PERIOD = 190;
    /** 与 / 键的键控代码值(191)关联的常数。*/
    Keyboard.SLASH = 191;
    /** 与 ` 键的键控代码值(192)关联的常数。*/
    Keyboard.BACKQUOTE = 192;
    /** 与 [ 键的键控代码值(219)关联的常数。*/
    Keyboard.LEFTBRACKET = 219;
    /** 与 \ 键的键控代码值(220)关联的常数。*/
    Keyboard.BACKSLASH = 220;
    /** 与 ] 键的键控代码值(221)关联的常数。*/
    Keyboard.RIGHTBRACKET = 221;
    /** 与 ' 键的键控代码值(222)关联的常数。*/
    Keyboard.QUOTE = 222;
    /** 与 Alternate(Option)键的键控代码值(18)关联的常数。*/
    Keyboard.ALTERNATE = 18;
    /** 与 Backspace 的键控代码值(8)关联的常数。*/
    Keyboard.BACKSPACE = 8;
    /** 与 Caps Lock 的键控代码值(20)关联的常数。*/
    Keyboard.CAPS_LOCK = 20;
    /** 与 Mac 命令键(15)关联的常数。*/
    Keyboard.COMMAND = 15;
    /** 与 Ctrl 的键控代码值(17)关联的常数。*/
    Keyboard.CONTROL = 17;
    /** 与 Delete 的键控代码值(46)关联的常数。*/
    Keyboard.DELETE = 46;
    /** 与 Enter 的键控代码值(13)关联的常数。*/
    Keyboard.ENTER = 13;
    /** 与 Esc 的键控代码值(27)关联的常数。*/
    Keyboard.ESCAPE = 27;
    /** 与 Page Up 的键控代码值(33)关联的常数。*/
    Keyboard.PAGE_UP = 33;
    /** 与 Page Down 的键控代码值(34)关联的常数。*/
    Keyboard.PAGE_DOWN = 34;
    /** 与 End 的键控代码值(35)关联的常数。*/
    Keyboard.END = 35;
    /** 与 Home 的键控代码值(36)关联的常数。*/
    Keyboard.HOME = 36;
    /** 与向左箭头键的键控代码值(37)关联的常数。*/
    Keyboard.LEFT = 37;
    /** 与向上箭头键的键控代码值(38)关联的常数。*/
    Keyboard.UP = 38;
    /** 与向右箭头键的键控代码值(39)关联的常数。*/
    Keyboard.RIGHT = 39;
    /** 与向下箭头键的键控代码值(40)关联的常数。*/
    Keyboard.DOWN = 40;
    /** 与 Shift 的键控代码值(16)关联的常数。*/
    Keyboard.SHIFT = 16;
    /** 与空格键的键控代码值(32)关联的常数。*/
    Keyboard.SPACE = 32;
    /** 与 Tab 的键控代码值(9)关联的常数。*/
    Keyboard.TAB = 9;
    /** 与 Insert 的键控代码值(45)关联的常数。*/
    Keyboard.INSERT = 45;
    return Keyboard;
}());
var Keyboard_KaiOS = /** @class */ (function () {
    function Keyboard_KaiOS() {
    }
    Keyboard_KaiOS.KeyDown = function (e) {
        if (e.key == Keyboard_KaiOS.BACKSPACE) {
            if (confirm('是否退出?'))
                window.close();
            return;
        }
        var ke = new _KeyboardEvent_(EventType.KEY_DOWN, null, e.key);
        EventManager.EVENT.AddEventB(EventType.KEY_DOWN, ke);
    };
    Keyboard_KaiOS.KeyPress = function () { };
    Keyboard_KaiOS.KeyUp = function (e) {
        var ke = new _KeyboardEvent_(EventType.KEY_UP, null, e.key);
        EventManager.EVENT.AddEventB(EventType.KEY_UP, ke);
    };
    Keyboard_KaiOS.ARROW_UP = "ArrowUp";
    Keyboard_KaiOS.ARROW_DOWN = "ArrowDown";
    Keyboard_KaiOS.ARROW_LEFT = "ArrowLeft";
    Keyboard_KaiOS.ARROW_RIGHT = "ArrowRight";
    Keyboard_KaiOS.SOFT_LEFT = "SoftLeft";
    Keyboard_KaiOS.SOFT_RIGHT = "SoftRight";
    Keyboard_KaiOS.END_CALL = "EndCall";
    Keyboard_KaiOS.ENTER = "Enter";
    Keyboard_KaiOS.BACKSPACE = "Backspace";
    Keyboard_KaiOS.NUMBER_0 = "0";
    Keyboard_KaiOS.NUMBER_1 = "1";
    Keyboard_KaiOS.NUMBER_2 = "2";
    Keyboard_KaiOS.NUMBER_3 = "3";
    Keyboard_KaiOS.NUMBER_4 = "4";
    Keyboard_KaiOS.NUMBER_5 = "5";
    Keyboard_KaiOS.NUMBER_6 = "6";
    Keyboard_KaiOS.NUMBER_7 = "7";
    Keyboard_KaiOS.NUMBER_8 = "8";
    Keyboard_KaiOS.NUMBER_9 = "9";
    Keyboard_KaiOS.MULTIPLY = "*";
    Keyboard_KaiOS.SHARP = "#";
    return Keyboard_KaiOS;
}());
var TouchDeviceType;
(function (TouchDeviceType) {
    TouchDeviceType[TouchDeviceType["TOUCH_DEVICE_INVALID"] = -1] = "TOUCH_DEVICE_INVALID";
    TouchDeviceType[TouchDeviceType["TOUCH_DEVICE_DIRECT"] = 0] = "TOUCH_DEVICE_DIRECT";
    TouchDeviceType[TouchDeviceType["TOUCH_DEVICE_INDIRECT_ABSOLUTE"] = 1] = "TOUCH_DEVICE_INDIRECT_ABSOLUTE";
    TouchDeviceType[TouchDeviceType["TOUCH_DEVICE_INDIRECT_RELATIVE"] = 2] = "TOUCH_DEVICE_INDIRECT_RELATIVE"; /* trackpad with screen cursor-relative coordinates */
})(TouchDeviceType || (TouchDeviceType = {}));
var Finger = /** @class */ (function () {
    function Finger(id, x, y, pressure) {
        if (id === void 0) { id = null; }
        if (x === void 0) { x = null; }
        if (y === void 0) { y = null; }
        if (pressure === void 0) { pressure = null; }
        this.id = null;
        this.x = null;
        this.y = null;
        this.pressure = null;
        this.id = id;
        this.x = x;
        this.y = y;
        this.pressure = pressure;
    }
    return Finger;
}());
var FingerTouch = /** @class */ (function () {
    function FingerTouch() {
    }
    /**
     *触摸开始
     */
    FingerTouch.Start = function (e) {
        var finger = e.touches[e.touches.length];
        var te = new FingerTouchEvent(EventType.FINGER_DOWN, null, null, finger.pageX, finger.pageY, null, null, finger.force);
        EventManager.EVENT.AddEventB(EventType.FINGER_DOWN, te);
    };
    /**
     * 移动
     */
    FingerTouch.Motion = function (e) {
        var te = new FingerTouchEvent(EventType.FINGER_DOWN, null, null, null, null, null, null, null);
        EventManager.EVENT.AddEventB(EventType.FINGER_DOWN, te);
    };
    /**
     * 结束
     */
    FingerTouch.End = function (e) {
        var te = new FingerTouchEvent(EventType.FINGER_DOWN, null, null, null, null, null, null, null);
        EventManager.EVENT.AddEventB(EventType.FINGER_DOWN, te);
    };
    return FingerTouch;
}());
function GetNumTouchDevices() {
    return;
}
function GetTouchDevice(index) {
    return;
}
function GetTouchDeviceType(touch_id) {
    return;
}
function GetNumTouchFingers(touch_id) {
    return;
}
function GetTouchFinger(touch_id, index) {
    return;
}
var HAT_CENTERED = 0x00;
var HAT_UP = 0x01;
var HAT_RIGHT = 0x02;
var HAT_DOWN = 0x04;
var HAT_LEFT = 0x08;
var HAT_RIGHTUP = (HAT_RIGHT | HAT_UP);
var HAT_RIGHTDOWN = (HAT_RIGHT | HAT_DOWN);
var HAT_LEFTUP = (HAT_LEFT | HAT_UP);
var HAT_LEFTDOWN = (HAT_LEFT | HAT_DOWN);
var JoystickType;
(function (JoystickType) {
    JoystickType[JoystickType["JOYSTICK_TYPE_UNKNOWN"] = 0] = "JOYSTICK_TYPE_UNKNOWN";
    JoystickType[JoystickType["JOYSTICK_TYPE_GAMECONTROLLER"] = 1] = "JOYSTICK_TYPE_GAMECONTROLLER";
    JoystickType[JoystickType["JOYSTICK_TYPE_WHEEL"] = 2] = "JOYSTICK_TYPE_WHEEL";
    JoystickType[JoystickType["JOYSTICK_TYPE_ARCADE_STICK"] = 3] = "JOYSTICK_TYPE_ARCADE_STICK";
    JoystickType[JoystickType["JOYSTICK_TYPE_FLIGHT_STICK"] = 4] = "JOYSTICK_TYPE_FLIGHT_STICK";
    JoystickType[JoystickType["JOYSTICK_TYPE_DANCE_PAD"] = 5] = "JOYSTICK_TYPE_DANCE_PAD";
    JoystickType[JoystickType["JOYSTICK_TYPE_GUITAR"] = 6] = "JOYSTICK_TYPE_GUITAR";
    JoystickType[JoystickType["JOYSTICK_TYPE_DRUM_KIT"] = 7] = "JOYSTICK_TYPE_DRUM_KIT";
    JoystickType[JoystickType["JOYSTICK_TYPE_ARCADE_PAD"] = 8] = "JOYSTICK_TYPE_ARCADE_PAD";
    JoystickType[JoystickType["JOYSTICK_TYPE_THROTTLE"] = 9] = "JOYSTICK_TYPE_THROTTLE";
})(JoystickType || (JoystickType = {}));
var JoystickPowerLevel;
(function (JoystickPowerLevel) {
    JoystickPowerLevel[JoystickPowerLevel["JOYSTICK_POWER_UNKNOWN"] = -1] = "JOYSTICK_POWER_UNKNOWN";
    JoystickPowerLevel[JoystickPowerLevel["JOYSTICK_POWER_EMPTY"] = 0] = "JOYSTICK_POWER_EMPTY";
    JoystickPowerLevel[JoystickPowerLevel["JOYSTICK_POWER_LOW"] = 1] = "JOYSTICK_POWER_LOW";
    JoystickPowerLevel[JoystickPowerLevel["JOYSTICK_POWER_MEDIUM"] = 2] = "JOYSTICK_POWER_MEDIUM";
    JoystickPowerLevel[JoystickPowerLevel["JOYSTICK_POWER_FULL"] = 3] = "JOYSTICK_POWER_FULL";
    JoystickPowerLevel[JoystickPowerLevel["JOYSTICK_POWER_WIRED"] = 4] = "JOYSTICK_POWER_WIRED";
    JoystickPowerLevel[JoystickPowerLevel["JOYSTICK_POWER_MAX"] = 5] = "JOYSTICK_POWER_MAX";
})(JoystickPowerLevel || (JoystickPowerLevel = {}));
/// <reference path="queue.ts" />
/// <reference path="mouse.ts" />
/// <reference path="keyboard.ts" />
/// <reference path="keyboard_kaios.ts" />
/// <reference path="touch.ts" />
/// <reference path="joy_stick.ts" />
var EventType;
(function (EventType) {
    /**< Unused (do not remove) */
    EventType[EventType["FIRST_EVENT"] = 0] = "FIRST_EVENT";
    /**< User-requested quit */
    EventType[EventType["QUIT"] = 1] = "QUIT";
    /* Display events */
    EventType[EventType["DISPLAY"] = 2] = "DISPLAY";
    /* Window events */
    EventType[EventType["WINDOW_EVENT"] = 3] = "WINDOW_EVENT";
    /* Keyboard events */
    //KEYBOARD_EVENT,
    EventType[EventType["KEY_DOWN"] = 4] = "KEY_DOWN";
    EventType[EventType["KEY_UP"] = 5] = "KEY_UP";
    EventType[EventType["TEXT_EDITING"] = 6] = "TEXT_EDITING";
    EventType[EventType["TEXT_INPUT"] = 7] = "TEXT_INPUT";
    EventType[EventType["KEYMAP_CHANGED"] = 8] = "KEYMAP_CHANGED";
    /* Mouse events */
    EventType[EventType["MOUSE_MOTION"] = 9] = "MOUSE_MOTION";
    EventType[EventType["MOUSE_BUTTON_DOWN"] = 10] = "MOUSE_BUTTON_DOWN";
    EventType[EventType["MOUSE_BUTTON_UP"] = 11] = "MOUSE_BUTTON_UP";
    EventType[EventType["MOUSE_WHEEL"] = 12] = "MOUSE_WHEEL";
    /* Joystick events */
    EventType[EventType["JOY_AXIS_MOTION"] = 13] = "JOY_AXIS_MOTION";
    EventType[EventType["JOY_BALL_MOTION"] = 14] = "JOY_BALL_MOTION";
    EventType[EventType["JOY_HAT_MOTION"] = 15] = "JOY_HAT_MOTION";
    EventType[EventType["JOY_BUTTON_DOWN"] = 16] = "JOY_BUTTON_DOWN";
    EventType[EventType["JOY_BUTTON_UP"] = 17] = "JOY_BUTTON_UP";
    EventType[EventType["JOY_DEVICE_ADDED"] = 18] = "JOY_DEVICE_ADDED";
    EventType[EventType["JOY_DEVICE_REMOVED"] = 19] = "JOY_DEVICE_REMOVED";
    /* Touch events */
    EventType[EventType["FINGER_DOWN"] = 20] = "FINGER_DOWN";
    EventType[EventType["FINGER_UP"] = 21] = "FINGER_UP";
    EventType[EventType["FINGER_MOTION"] = 22] = "FINGER_MOTION";
    /* Audio hotplug events */
    EventType[EventType["AUDIO_DEVICE_ADDED"] = 23] = "AUDIO_DEVICE_ADDED";
    EventType[EventType["AUDIO_DEVICE_REMOVED"] = 24] = "AUDIO_DEVICE_REMOVED";
    /* User events */
    EventType[EventType["USER_EVENT"] = 25] = "USER_EVENT";
})(EventType || (EventType = {}));
var CommonEvent = /** @class */ (function () {
    function CommonEvent(type) {
        if (type === void 0) { type = EventType.FIRST_EVENT; }
        this.type = EventType.FIRST_EVENT;
        this.type = type;
    }
    return CommonEvent;
}());
var WindowEvent = /** @class */ (function (_super) {
    __extends(WindowEvent, _super);
    function WindowEvent(type, event, data1, data2) {
        if (type === void 0) { type = EventType.FIRST_EVENT; }
        if (event === void 0) { event = null; }
        if (data1 === void 0) { data1 = null; }
        if (data2 === void 0) { data2 = null; }
        var _this = _super.call(this, type) || this;
        _this.type = EventType.FIRST_EVENT; /**< WINDOW_EVENT */
        _this.event = null; /**< WindowEventID */
        _this.data1 = null; /**< event dependent data */
        _this.data2 = null; /**< event dependent data */
        _this.type = type;
        _this.event = event;
        _this.data1 = data1;
        _this.data2 = data2;
        return _this;
    }
    return WindowEvent;
}(CommonEvent));
var DisplayEvent = /** @class */ (function (_super) {
    __extends(DisplayEvent, _super);
    function DisplayEvent(type, display, event, data1) {
        if (type === void 0) { type = EventType.FIRST_EVENT; }
        if (display === void 0) { display = null; }
        if (event === void 0) { event = null; }
        if (data1 === void 0) { data1 = null; }
        var _this = _super.call(this, type) || this;
        _this.type = EventType.FIRST_EVENT; /**< DISPLAY_EVENT */
        _this.diplay = null; /**< The display layer index */
        _this.event = null; /**< DisplayEventID */
        _this.data1 = null;
        _this.type = type;
        _this.diplay = display;
        _this.event = event;
        _this.data1 = data1;
        return _this;
    }
    return DisplayEvent;
}(CommonEvent));
var _KeyboardEvent_ = /** @class */ (function (_super) {
    __extends(_KeyboardEvent_, _super);
    function _KeyboardEvent_(type, state, key_code) {
        if (type === void 0) { type = EventType.FIRST_EVENT; }
        if (state === void 0) { state = null; }
        if (key_code === void 0) { key_code = null; }
        var _this = _super.call(this, type) || this;
        _this.type = EventType.FIRST_EVENT; /**< KEY_DOWN or KEY_UP */
        _this.state = null; /**< PRESSED or RELEASED */
        _this.key_code = null; /**< The key that was pressed or released */
        _this.state = state;
        _this.key_code = key_code;
        return _this;
    }
    return _KeyboardEvent_;
}(CommonEvent));
var MouseMotionEvent = /** @class */ (function (_super) {
    __extends(MouseMotionEvent, _super);
    function MouseMotionEvent(type, which, state, x, y, x_rel, y_rel) {
        if (type === void 0) { type = EventType.FIRST_EVENT; }
        if (which === void 0) { which = null; }
        if (state === void 0) { state = null; }
        if (x === void 0) { x = null; }
        if (y === void 0) { y = null; }
        if (x_rel === void 0) { x_rel = null; }
        if (y_rel === void 0) { y_rel = null; }
        var _this = _super.call(this, type) || this;
        _this.type = EventType.FIRST_EVENT; /**< MOUSE_MOTION */
        _this.which = null; /**< The mouse instance id */
        _this.state = null; /**< The current button state */
        _this.x = null; /**< X coordinate, relative to window */
        _this.y = null; /**< Y coordinate, relative to window */
        _this.x_rel = null; /**< The relative motion in the X direction */
        _this.y_rel = null; /**< The relative motion in the Y direction */
        _this.type = type;
        _this.which = which;
        _this.state = state;
        _this.x = x;
        _this.y = y;
        _this.x_rel = x_rel;
        _this.y_rel = y_rel;
        return _this;
    }
    return MouseMotionEvent;
}(CommonEvent));
var MouseButtonEvent = /** @class */ (function (_super) {
    __extends(MouseButtonEvent, _super);
    function MouseButtonEvent(type, which, button, state, clicks, x, y) {
        if (type === void 0) { type = EventType.FIRST_EVENT; }
        if (which === void 0) { which = null; }
        if (button === void 0) { button = null; }
        if (state === void 0) { state = null; }
        if (clicks === void 0) { clicks = null; }
        if (x === void 0) { x = null; }
        if (y === void 0) { y = null; }
        var _this = _super.call(this, type) || this;
        _this.type = EventType.FIRST_EVENT; /**< MOUSE_BUTTON_DOWN or MOUSE_BUTTON_UP */
        _this.which = null; /**< The mouse instance id */
        _this.button = null; /**< The mouse button index */
        _this.state = null; /**< PRESSED or RELEASED */
        _this.clicks = null; /**< 1 for single-click, 2 for double-click, etc. */
        _this.x = null; /**< X coordinate, relative to window */
        _this.y = null; /**< Y coordinate, relative to window */
        _this.type = type;
        _this.which = which;
        _this.button = button;
        _this.state = state;
        _this.clicks = clicks;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    return MouseButtonEvent;
}(CommonEvent));
var _MouseWheelEvent_ = /** @class */ (function (_super) {
    __extends(_MouseWheelEvent_, _super);
    function _MouseWheelEvent_(type) {
        if (type === void 0) { type = EventType.FIRST_EVENT; }
        var _this = _super.call(this, type) || this;
        _this.type = EventType.FIRST_EVENT; /**< MOUSE_WHEEL */
        _this.which = null; /**< The mouse instance id */
        _this.x = null; /**< The amount scrolled horizontally, positive to the right and negative to the left */
        _this.y = null; /**< The amount scrolled vertically, positive away from the user and negative toward the user */
        return _this;
    }
    return _MouseWheelEvent_;
}(CommonEvent));
var JoyAxisEvent = /** @class */ (function (_super) {
    __extends(JoyAxisEvent, _super);
    function JoyAxisEvent(type, which, axis, value) {
        if (type === void 0) { type = EventType.FIRST_EVENT; }
        if (which === void 0) { which = null; }
        if (axis === void 0) { axis = null; }
        if (value === void 0) { value = null; }
        var _this = _super.call(this, type) || this;
        _this.type = EventType.FIRST_EVENT; /**< JOY_AXIS_MOTION */
        _this.which = null; /**< The joystick instance id */
        _this.axis = null; /**< The joystick axis index */
        _this.value = null; /**< The axis value (range: -32768 to 32767) */
        _this.type = type;
        _this.which = which;
        _this.axis = axis;
        _this.value = value;
        return _this;
    }
    return JoyAxisEvent;
}(CommonEvent));
var JoyBallEvent = /** @class */ (function (_super) {
    __extends(JoyBallEvent, _super);
    function JoyBallEvent(type, which, ball, x_rel, y_rel) {
        if (type === void 0) { type = EventType.FIRST_EVENT; }
        if (which === void 0) { which = null; }
        if (ball === void 0) { ball = null; }
        if (x_rel === void 0) { x_rel = null; }
        if (y_rel === void 0) { y_rel = null; }
        var _this = _super.call(this, type) || this;
        _this.type = EventType.FIRST_EVENT; /**< JOY_BALL_MOTION */
        _this.which = null; /**< The joystick instance id */
        _this.ball = null; /**< The joystick trackball index */
        _this.x_rel = null; /**< The relative motion in the X direction */
        _this.y_rel = null; /**< The relative motion in the Y direction */
        _this.type = type;
        _this.which = which;
        _this.ball = ball;
        _this.x_rel = x_rel;
        _this.y_rel = y_rel;
        return _this;
    }
    return JoyBallEvent;
}(CommonEvent));
var JoyHatEvent = /** @class */ (function (_super) {
    __extends(JoyHatEvent, _super);
    function JoyHatEvent(type, which, hat, value) {
        if (type === void 0) { type = EventType.FIRST_EVENT; }
        if (which === void 0) { which = null; }
        if (hat === void 0) { hat = null; }
        if (value === void 0) { value = null; }
        var _this = _super.call(this, type) || this;
        _this.type = EventType.FIRST_EVENT; /**< JOY_HAT_MOTION */
        _this.which = null; /**< The joystick instance id */
        _this.hat = null; /**< The joystick hat index */
        _this.value = null; /**< The hat position value.
                                                *   HAT_LEFTUP     HAT_UP          HAT_RIGHTUP
                                                *   HAT_LEFT       HAT_CENTERED    HAT_RIGHT
                                                *   HAT_LEFTDOWN   HAT_DOWN        HAT_RIGHTDOWN
                                                *
                                                *   Note that zero means the POV is centered.
                                                */
        _this.type = type;
        _this.which = which;
        _this.hat = hat;
        _this.value = value;
        return _this;
    }
    return JoyHatEvent;
}(CommonEvent));
var JoyButtonEvent = /** @class */ (function (_super) {
    __extends(JoyButtonEvent, _super);
    function JoyButtonEvent(type, which, button, state) {
        if (type === void 0) { type = EventType.FIRST_EVENT; }
        if (which === void 0) { which = null; }
        if (button === void 0) { button = null; }
        if (state === void 0) { state = null; }
        var _this = _super.call(this, type) || this;
        _this.type = EventType.FIRST_EVENT; /**< JOY_BUTTON_DOWN or JOY_BUTTON_UP */
        _this.which = null; /**< The joystick instance id */
        _this.button = null; /**< The joystick button index */
        _this.state = null; /**< PRESSED or RELEASED */
        _this.type = type;
        _this.which = which;
        _this.button = button;
        _this.state = state;
        return _this;
    }
    return JoyButtonEvent;
}(CommonEvent));
var JoyDeviceEvent = /** @class */ (function (_super) {
    __extends(JoyDeviceEvent, _super);
    function JoyDeviceEvent(type, which) {
        if (type === void 0) { type = EventType.FIRST_EVENT; }
        if (which === void 0) { which = null; }
        var _this = _super.call(this, type) || this;
        _this.type = EventType.FIRST_EVENT;
        _this.which = null; /**< The joystick device index for the ADDED event, instance id for the REMOVED event */
        _this.type = type;
        _this.which = which;
        return _this;
    }
    return JoyDeviceEvent;
}(CommonEvent));
//class ControllerAxisEvent
//{
//    type:number;        /**< CONTROLLER_AXIS_MOTION */
//    axis:number;        /**< The controller axis (GameControllerAxis) */
//    value:number;       /**< The axis value (range: -32768 to 32767) */
//}
var FingerTouchEvent = /** @class */ (function (_super) {
    __extends(FingerTouchEvent, _super);
    function FingerTouchEvent(type, touch_id, finger_id, x, y, dx, dy, pressure) {
        if (type === void 0) { type = EventType.FIRST_EVENT; }
        if (touch_id === void 0) { touch_id = null; }
        if (finger_id === void 0) { finger_id = null; }
        if (x === void 0) { x = null; }
        if (y === void 0) { y = null; }
        if (dx === void 0) { dx = null; }
        if (dy === void 0) { dy = null; }
        if (pressure === void 0) { pressure = null; }
        var _this = _super.call(this, type) || this;
        _this.type = EventType.FIRST_EVENT; /**< FINGER_MOTION or FINGER_DOWN or FINGER_UP */
        _this.touch_id = null; /**< The touch device id */
        _this.finger_id = null;
        _this.x = null; /**< Normalized in the range 0...1 */
        _this.y = null; /**< Normalized in the range 0...1 */
        _this.dx = null; /**< Normalized in the range -1...1 */
        _this.dy = null; /**< Normalized in the range -1...1 */
        _this.pressure = null; /**< Normalized in the range 0...1 */
        _this.type = type;
        _this.touch_id = touch_id;
        _this.finger_id = finger_id;
        _this.x = x;
        _this.y = y;
        _this.dx = dx;
        _this.dy = dy;
        _this.pressure = pressure;
        return _this;
    }
    return FingerTouchEvent;
}(CommonEvent));
var User_Event = /** @class */ (function (_super) {
    __extends(User_Event, _super);
    function User_Event(type, code, data1, data2) {
        if (type === void 0) { type = EventType.FIRST_EVENT; }
        if (code === void 0) { code = null; }
        if (data1 === void 0) { data1 = null; }
        if (data2 === void 0) { data2 = null; }
        var _this = _super.call(this, type) || this;
        _this.type = EventType.FIRST_EVENT;
        _this.code = null;
        _this.data1 = null;
        _this.data2 = null;
        _this.type = type;
        _this.code = code;
        _this.data1 = data1;
        _this.data2 = data2;
        return _this;
    }
    return User_Event;
}(CommonEvent));
var EventManagerMOD;
(function (EventManagerMOD) {
    EventManagerMOD[EventManagerMOD["ALL"] = 0] = "ALL";
    EventManagerMOD[EventManagerMOD["MOUSE"] = 1] = "MOUSE";
    EventManagerMOD[EventManagerMOD["KEYBOARD"] = 2] = "KEYBOARD";
    EventManagerMOD[EventManagerMOD["KEYBOARD_KAIOS"] = 3] = "KEYBOARD_KAIOS";
    EventManagerMOD[EventManagerMOD["TOUCH"] = 4] = "TOUCH";
    EventManagerMOD[EventManagerMOD["JOY_STICK"] = 5] = "JOY_STICK";
})(EventManagerMOD || (EventManagerMOD = {}));
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.type = EventType.FIRST_EVENT; //EventType
        this.common_event = new CommonEvent(); //
        this.window_event = new WindowEvent(); //
        this.display_event = new DisplayEvent(); //
        this.keyboard_event = new _KeyboardEvent_(); //
        this.mouse_motion_event = new MouseMotionEvent(); //
        this.mouse_button_event = new MouseButtonEvent(); //
        this.mouse_wheel_event = new _MouseWheelEvent_(); //
        this.joy_axis_event = new JoyAxisEvent(); //
        this.joy_ball_event = new JoyBallEvent(); //
        this.joy_hat_event = new JoyHatEvent(); //
        this.joy_button_event = new JoyButtonEvent(); //
        this.joy_device_event = new JoyDeviceEvent(); //
        this.finger_touch_event = new FingerTouchEvent(); //
        this.user_event = new User_Event(); //用户事件
        this.queue = new Queue();
        this.queue_event = new Queue();
    }
    EventManager.prototype.Enable = function () {
        var MOD = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            MOD[_i] = arguments[_i];
        }
        MOD.forEach(function (mod) {
            switch (mod) {
                case EventManagerMOD.ALL:
                    break;
                case EventManagerMOD.MOUSE:
                    addEventListener("mousemove", Mouse.Motion);
                    addEventListener("mousedown", Mouse.ButtonDwon);
                    addEventListener("mouseup", Mouse.ButtonUp);
                    addEventListener("mousewheel", Mouse.Wheel);
                    break;
                case EventManagerMOD.KEYBOARD:
                    addEventListener("keydown", Keyboard.KeyDown);
                    addEventListener("keyup", Keyboard.KeyUp);
                    addEventListener("keypress", Keyboard.KeyPress);
                    break;
                case EventManagerMOD.KEYBOARD_KAIOS:
                    addEventListener("keydown", Keyboard_KaiOS.KeyDown);
                    addEventListener("keyup", Keyboard_KaiOS.KeyUp);
                    addEventListener("keypress", Keyboard_KaiOS.KeyPress);
                    break;
                case EventManagerMOD.TOUCH:
                    addEventListener("touchstart", FingerTouch.Start);
                    addEventListener("touchmove", FingerTouch.Motion);
                    addEventListener("touchend", FingerTouch.End);
                    break;
                case EventManagerMOD.JOY_STICK:
                    break;
            }
        });
    };
    /**
     * 需创建EventManager对象
     *
     * @param event 要送入事件队列的事件
     */
    EventManager.prototype.AddEventA = function (event) {
        this.queue.push(event.type);
        switch (event.type) {
            case EventType.WINDOW_EVENT:
                this.queue_event.push(event.window_event);
                break;
            case EventType.DISPLAY:
                this.queue_event.push(event.display_event);
                break;
            case EventType.KEY_DOWN || EventType.KEY_UP || EventType.KEYMAP_CHANGED:
                this.queue_event.push(event.keyboard_event);
                break;
            case EventType.MOUSE_MOTION:
                this.queue_event.push(event.mouse_motion_event);
                break;
            case EventType.MOUSE_BUTTON_DOWN || EventType.MOUSE_BUTTON_UP:
                this.queue_event.push(event.mouse_button_event);
                break;
            case EventType.MOUSE_WHEEL:
                this.queue_event.push(event.mouse_wheel_event);
                break;
            case EventType.FINGER_MOTION || EventType.FINGER_DOWN || EventType.FINGER_UP:
                this.queue_event.push(event.finger_touch_event);
                break;
            case EventType.USER_EVENT:
                this.queue_event.push(event.user_event);
                break;
            default:
                this.queue_event.push(event.common_event);
                break;
        }
    };
    /**
     * 送事件入事件队列
     * 不需创建EventManager对象
     *
     * @param type 事件类型
     * @param event 事件类型对应的事件
     */
    EventManager.prototype.AddEventB = function (type, event) {
        var e = new EventManager();
        e.type = type;
        switch (e.type) {
            case EventType.WINDOW_EVENT:
                e.window_event = event;
                break;
            case EventType.DISPLAY:
                e.display_event = event;
                break;
            case EventType.KEY_DOWN || EventType.KEY_UP || EventType.KEYMAP_CHANGED:
                e.keyboard_event = event;
                break;
            case EventType.MOUSE_MOTION:
                e.mouse_motion_event = event;
                break;
            case EventType.MOUSE_BUTTON_DOWN || EventType.MOUSE_BUTTON_UP:
                e.mouse_button_event = event;
                break;
            case EventType.MOUSE_WHEEL:
                e.mouse_wheel_event = event;
                break;
            case EventType.FINGER_MOTION || EventType.FINGER_DOWN || EventType.FINGER_UP:
                e.finger_touch_event = event;
                break;
            case EventType.USER_EVENT:
                e.user_event = event;
                break;
            default:
                e.common_event = event;
                break;
        }
        this.AddEventA(e);
    };
    /**
     * 送入用户事件，要把user_event设置好
     *
     * @param event 要送入事件队列的用户事件
     */
    EventManager.prototype.PushEvent = function (event) {
        this.queue.push(EventType.USER_EVENT);
        this.queue_event.push(event.user_event);
    };
    EventManager.prototype.ClearEvent = function () {
        switch (this.type) {
            case EventType.WINDOW_EVENT:
                this.window_event = new WindowEvent();
                break;
            case EventType.DISPLAY:
                this.display_event = new DisplayEvent();
                break;
            case EventType.KEY_DOWN || EventType.KEY_UP || EventType.KEYMAP_CHANGED:
                this.keyboard_event = new _KeyboardEvent_();
                break;
            case EventType.MOUSE_MOTION:
                this.mouse_motion_event = new MouseMotionEvent();
                break;
            case EventType.MOUSE_BUTTON_DOWN || EventType.MOUSE_BUTTON_UP:
                this.mouse_button_event = new MouseButtonEvent();
                break;
            case EventType.MOUSE_WHEEL:
                this.mouse_wheel_event = new _MouseWheelEvent_();
                break;
            case EventType.FINGER_MOTION || EventType.FINGER_DOWN || EventType.FINGER_UP:
                this.finger_touch_event = new FingerTouchEvent();
                break;
            case EventType.USER_EVENT:
                this.user_event = new User_Event();
                break;
            default:
                this.common_event = new CommonEvent();
                break;
        }
        /*
        switch (EventManager.EVENT.type)
        {
        case EventType.WINDOW_EVENT:
            EventManager.EVENT.window_event = new WindowEvent();
            break;

        case EventType.DISPLAY:
            EventManager.EVENT.display_event = new DisplayEvent();
            break;

        case EventType.KEYBOARD_EVENT || EventType.KEY_DOWN || EventType.KEY_UP || EventType.KEYMAP_CHANGED:
            EventManager.EVENT.keyboard_event = new _KeyboardEvent_();
            break

        case EventType.MOUSE_MOTION:
            EventManager.EVENT.mouse_motion_event = new MouseMotionEvent();
            break;

        case EventType.MOUSE_BUTTON_DOWN || EventType.MOUSE_BUTTON_UP:
            EventManager.EVENT.mouse_button_event = new MouseButtonEvent();
            break;

        case EventType.MOUSE_WHEEL:
            EventManager.EVENT.mouse_wheel_event = new _MouseWheelEvent_();
            break;

        case EventType.FINGER_MOTION || EventType.FINGER_DOWN || EventType.FINGER_UP:
            EventManager.EVENT.finger_touch_event = new FingerTouchEvent();
            break;

        case EventType.USER_EVENT:
            EventManager.EVENT.user_event = new User_Event();
            break;

        default:
            EventManager.EVENT.common_event = new CommonEvent();
            break;
        }
        */
    };
    /**
     * 等待事件，若有事件则返回真
     */
    EventManager.prototype.WaitEvent = function () {
        var type = EventManager.EVENT.queue.pop();
        if (type != undefined) {
            this.ClearEvent();
            this.type = type;
            switch (type) {
                case EventType.WINDOW_EVENT:
                    this.window_event = EventManager.EVENT.queue_event.pop();
                    break;
                case EventType.DISPLAY:
                    this.display_event = EventManager.EVENT.queue_event.pop();
                    break;
                case EventType.KEY_DOWN || EventType.KEY_UP || EventType.KEYMAP_CHANGED:
                    this.keyboard_event = EventManager.EVENT.queue_event.pop();
                    break;
                case EventType.MOUSE_MOTION:
                    this.mouse_motion_event = EventManager.EVENT.queue_event.pop();
                    break;
                case EventType.MOUSE_BUTTON_DOWN || EventType.MOUSE_BUTTON_UP:
                    this.mouse_button_event = EventManager.EVENT.queue_event.pop();
                    break;
                case EventType.MOUSE_WHEEL:
                    this.mouse_wheel_event = EventManager.EVENT.queue_event.pop();
                    break;
                case EventType.FINGER_MOTION || EventType.FINGER_DOWN || EventType.FINGER_UP:
                    this.finger_touch_event = EventManager.EVENT.queue_event.pop();
                    break;
                case EventType.USER_EVENT:
                    this.user_event = EventManager.EVENT.queue_event.pop();
                    break;
                default:
                    this.common_event = EventManager.EVENT.queue_event.pop();
                    break;
            }
            return true;
        }
        /*
        const type = this.queue.pop();
        if (type != undefined)
        {
            this.ClearEvent();
            this.type = type;
            switch (type)
            {
                case EventType.WINDOW_EVENT:
                    this.window_event = this.queue_event.pop() as WindowEvent;
                    break;

                case EventType.DISPLAY:
                    this.display_event = this.queue_event.pop() as DisplayEvent;
                    break;

                case EventType.KEY_DOWN || EventType.KEY_UP || EventType.KEYMAP_CHANGED:
                    this.keyboard_event = this.queue_event.pop() as _KeyboardEvent_;
                    break

                case EventType.MOUSE_MOTION:
                    this.mouse_motion_event = this.queue_event.pop() as MouseMotionEvent;
                    break;

                case EventType.MOUSE_BUTTON_DOWN || EventType.MOUSE_BUTTON_UP:
                    this.mouse_button_event = this.queue_event.pop() as MouseButtonEvent;
                    break;

                case EventType.MOUSE_WHEEL:
                    this.mouse_wheel_event = this.queue_event.pop() as _MouseWheelEvent_;
                    break;

                case EventType.FINGER_MOTION || EventType.FINGER_DOWN || EventType.FINGER_UP:
                    this.finger_touch_event = this.queue_event.pop() as FingerTouchEvent;
                    break;

                case EventType.USER_EVENT:
                    this.user_event = this.queue_event.pop() as User_Event;
                    break;

                default:
                    this.common_event = this.queue_event.pop();
                    break;
            }

            return true;
        }
        */
        return false;
    };
    /*所有事件都会到这*/
    EventManager.EVENT = new EventManager(); //
    return EventManager;
}());
/// <reference path="scene.ts" />
var flown;
(function (flown) {
    var Layer = /** @class */ (function () {
        /**
         *
         * 网页可见区域宽： document.body.clientWidth
         * 网页可见区域高： document.body.clientHeight
         * 网页可见区域宽： document.body.offsetWidth (包括边线的宽)
         * 网页可见区域高： document.body.offsetHeight (包括边线的高)
         * 网页正文全文宽： document.body.scrollWidth
         * 网页正文全文高： document.body.scrollHeight
         * 网页被卷去的高： document.body.scrollTop
         * 网页被卷去的左： document.body.scrollLeft
         * 网页正文部分上： window.screenTop
         * 网页正文部分左： window.screenLeft
         * 屏幕分辨率的高： window.screen.height
         * 屏幕分辨率的宽： window.screen.width
         * 屏幕可用工作区高度： window.screen.availHeight
         * 屏幕可用工作区宽度： window.screen.availWidth
         *
         *
         * @param scene 图层所在场景，默认null
         * @param layer_id 图层id
         * @param width 图层宽
         * @param height 图层高
         */
        function Layer(scene, layer_id, width, height) {
            if (scene === void 0) { scene = null; }
            if (layer_id === void 0) { layer_id = "layer"; }
            if (width === void 0) { width = document.body.offsetWidth.toString(); }
            if (height === void 0) { height = document.body.offsetHeight.toString(); }
            if (width == document.body.offsetWidth.toString() && document.body.offsetWidth == 0)
                width = document.body.clientWidth.toString();
            if (height == document.body.offsetHeight.toString() && document.body.offsetHeight == 0)
                height = document.body.clientHeight.toString();
            this.canvas = document.createElement("canvas");
            this.canvas.setAttribute("id", layer_id);
            this.canvas.setAttribute("width", width);
            this.canvas.setAttribute("height", height);
            this.canvas.setAttribute("style", "position: absolute");
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            if (scene) {
                this.canvas.setAttribute("id", "layer" + scene.GetLayerNumber().toString());
                scene.AddLayer(this);
            }
            /*
            if(this.canvas.requestFullscreen)
                this.canvas.requestFullscreen();
            else if(this.canvas.webkitRequestFullScreen)
                this.canvas.webkitRequestFullScreen();
            else if(this.canvas.mozRequestFullScreen)
                this.canvas.mozRequestFullScreen();
            */
        }
        /**
         *
         * @param id 设置图层的id
         */
        Layer.prototype.SetLayerId = function (id) { this.canvas.setAttribute("id", id); };
        /**
         *
         *
         * @param width 要设置的width（宽度）
         */
        Layer.prototype.SetWidth = function (width) {
            this.canvas.setAttribute("width", width);
            this.width = this.canvas.width;
        };
        /**
         *
         *
         * @param height 要设置的height（高度）
         */
        Layer.prototype.SetHeight = function (height) {
            this.canvas.setAttribute("height", height);
            this.height = this.canvas.height;
        };
        /**
         *
         * 获取图层宽度
         *
        */
        Layer.prototype.GetWidth = function () { return this.width; };
        /**
         *
         * 获取图层高度
         *
        */
        Layer.prototype.GetHeight = function () { return this.height; };
        /**
         * 获取图层的画布
         */
        Layer.prototype.GetCanvas = function () { return this.canvas; };
        return Layer;
    }());
    flown.Layer = Layer;
})(flown || (flown = {}));
/// <reference path="layer.ts" />
var flown;
(function (flown) {
    var Scene = /** @class */ (function () {
        function Scene(scene_id) {
            if (scene_id === void 0) { scene_id = "scene"; }
            this.layers = [];
            this.div = document.createElement("div");
            this.div.setAttribute("id", scene_id);
            //this.div.setAttribute("style","clear:both");
            //document.body.insertBefore(this.div,document.body.lastChild);
            document.body.appendChild(this.div);
        }
        /**
         * 获取场景div
         */
        Scene.prototype.GetDiv = function () { return this.div; };
        /**
         * 获取场景图层中的画布
         *
         * @param index 索引，要获取的图层画布索引
         */
        Scene.prototype.GetCanvas = function (index) {
            if (index === void 0) { index = 0; }
            return this.layers[index].GetCanvas();
        };
        /**
         * 获取图层数量
         */
        Scene.prototype.GetLayerNumber = function () { return this.layers.length; };
        /**
         * 获取图层
         *
         * @param index 图层索引
         */
        Scene.prototype.GetLayer = function (index) {
            if (index === void 0) { index = 0; }
            return this.layers[index];
        };
        /**
         * 获取所有图层
         */
        Scene.prototype.GetLayers = function () { return this.layers; };
        /**
         * 给场景添加图层
         *
         * @param layer 要添加的图层
         */
        Scene.prototype.AddLayer = function (layer) { this.layers.push(layer); this.div.appendChild(layer.GetCanvas()); };
        return Scene;
    }());
    flown.Scene = Scene;
})(flown || (flown = {}));
var GL;
(function (GL) {
    var Scene = /** @class */ (function () {
        function Scene(scene_id, width, height) {
            if (scene_id === void 0) { scene_id = "scene"; }
            if (width === void 0) { width = window.innerWidth; }
            if (height === void 0) { height = window.innerHeight; }
            this.div = document.createElement("div");
            this.div.setAttribute("id", scene_id);
            //document.body.insertBefore(this.div,document.body.lastChild);
            document.body.appendChild(this.div);
            this.canvas = document.createElement("canvas");
            this.canvas.setAttribute("id", "glcanvas");
            this.canvas.setAttribute("width", width.toString());
            this.canvas.setAttribute("height", height.toString());
            this.canvas.setAttribute("style", "position: absolute");
            this.div.appendChild(this.canvas);
        }
        /**
         * 获取场景div
         */
        Scene.prototype.GetDiv = function () { return this.div; };
        /**
         * 获取场景图层中的画布
         *
         * @param index 索引，要获取的图层画布索引
         */
        Scene.prototype.GetCanvas = function () { return this.canvas; };
        return Scene;
    }());
    GL.Scene = Scene;
})(GL || (GL = {}));
var Three;
(function (Three) {
    var Scene = /** @class */ (function () {
        function Scene() {
        }
        return Scene;
    }());
    Three.Scene = Scene;
})(Three || (Three = {}));
var flown;
(function (flown) {
    var Path = /** @class */ (function () {
        function Path(parameters) {
            this.start_x = 0;
            this.start_y = 0;
        }
        /**
         * 设置路径开始坐标
         *
         * @param x 路径起点横坐标
         * @param y 路径起点纵坐标
         */
        Path.prototype.SetStartPoint = function (x, y) { this.start_x = x; this.start_y = y; };
        /**
         * 给路径添加点
         *
         * @param x 要添加的点的横坐标
         * @param y 要添加的点的纵坐标
         */
        Path.prototype.AddPoint = function (x, y) { this.x.push(x); this.y.push(y); };
        /**
         * 在起点后插入一点
         *
         * @param x
         * @param y
         */
        Path.prototype.UnshiftPoint = function (x, y) { this.x.unshift(x); this.y.unshift(y); };
        /**
         * 给路径插入点
         *
         * @param x 要插入的点的横坐标
         * @param y 要插入的点的纵坐标
         * @param index 要插入的索引
         */
        Path.prototype.InsertPoint = function (x, y, index) {
            var points_x;
            var points_y;
            for (var i = index; i < this.x.length - index; i++) {
                points_x.push(this.x[i]);
                points_y.push(this.y[i]);
            }
            this.x[index] = x;
            this.y[index] = y;
            for (var i = index + 1; i < this.x.length - index; i++) {
                this.x[i] = points_x[i - (index + 1)];
                this.y[i] = points_y[i - (index + 1)];
            }
            this.x.push(points_x.pop());
            this.y.push(points_y.pop());
        };
        /**
         * 获取路径起点
         */
        Path.prototype.GetStartPoint = function () { var point = [this.start_x, this.start_y]; return point; };
        /**
         * 获取路径中的点，不包含起点
         *
         * @param index 索引
         */
        Path.prototype.GetPoint = function (index) { var point = [this.x[index], this.y[index]]; return point; };
        /**
         * 获取路径中点的数量
         */
        Path.prototype.GetSize = function () { return this.x.length + 1; };
        /**
         * 删除路径中的一个点
         *
         * @param index 要删除的点索引
         */
        Path.prototype.DeletePoint = function (index) { this.x.splice(index, 1); this.y.splice(index, 1); };
        return Path;
    }());
    flown.Path = Path;
})(flown || (flown = {}));
/// <reference path="scene.ts" />
/// <reference path="path.ts" />
var flown;
(function (flown) {
    var Renderer = /** @class */ (function () {
        /**
         *
         * @param scene 渲染器所渲染的场景，默认null
         */
        function Renderer(scene) {
            if (scene === void 0) { scene = null; }
            this.context = [];
            if (scene)
                this.SetScene(scene);
        }
        /**
         * 获取上下文
         *
         * @param index 索引，默认0
         */
        Renderer.prototype.GetContext = function (index) {
            if (index === void 0) { index = 0; }
            return this.context[index];
        };
        /**
         * 获取所有上下文
         */
        Renderer.prototype.GetContests = function () { return this.context; };
        /**
         * 设置字体
         *
         * @param font 字体
         * @param index 字体适用图层
         */
        Renderer.prototype.SetFont = function (font, index) {
            if (index === void 0) { index = 0; }
            this.context[index].font = font;
        };
        /**
         * 设置场景
         *
         * @param scene 渲染器所渲染的场景
         */
        Renderer.prototype.SetScene = function (scene) {
            for (var i = 0; i < scene.GetLayerNumber(); i++) {
                this.context.push(scene.GetCanvas(i).getContext("2d"));
                this.context[i].font = "15px Arial";
                //this.context[i].fillStyle = "";
            }
        };
        /**
         * 清空某一图层
         *
         * @param index 图层索引,默认0
         */
        Renderer.prototype.Clear = function (index) {
            if (index === void 0) { index = 0; }
            this.context[index].clearRect(0, 0, window.innerWidth, window.innerHeight);
        };
        /**
         * 清空所有图层
         */
        Renderer.prototype.ClearAll = function () {
            for (var i = 0; i < this.context.length; i++)
                this.context[i].clearRect(0, 0, window.innerWidth, window.innerHeight);
        };
        /**
         * 删除某一图层上的部分内容
         *
         * @param x 要删除部分的横坐标
         * @param y 要删除部分的纵坐标
         * @param width 要删除部分的宽
         * @param height 要删除部分的高
         * @param index 要删除部分内容的图层索引，默认0
         */
        Renderer.prototype.ClearRect = function (x, y, width, height, index) {
            if (index === void 0) { index = 0; }
            this.context[index].clearRect(x, y, width, height);
        };
        /**
         * 删除某所有图层上的部分内容
         *
         * @param x 要删除部分的横坐标
         * @param y 要删除部分的纵坐标
         * @param width 要删除部分的宽
         * @param height 要删除部分的高
         */
        Renderer.prototype.ClearAllRect = function (x, y, width, height) {
            for (var i = 0; i < this.context.length; i++)
                this.context[i].clearRect(x, y, width, height);
        };
        /**
         * 用某一颜色覆盖图层
         *
         * @param color 要覆盖的颜色
         * @param index 图层索引，默认0
         */
        Renderer.prototype.ClearColor = function (color, index) {
            if (color === void 0) { color = "#FFFFFF"; }
            if (index === void 0) { index = 0; }
            var last_style = this.context[index].fillStyle;
            this.context[index].fillStyle = color;
            this.context[index].fillRect(0, 0, window.innerWidth, window.innerHeight);
            this.context[index].fillStyle = last_style;
        };
        /**
         * 用某一颜色覆盖所有图层
         *
         * @param color 要覆盖的颜色
         */
        Renderer.prototype.ClearAllColor = function (color) {
            if (color === void 0) { color = "#FFFFFF"; }
            for (var i = 0; i < this.context.length; i++)
                this.ClearColor(color, i);
        };
        /**
         * 画实心矩形
         *
         * @param x 横坐标
         * @param y 纵坐标
         * @param width 宽
         * @param height 高
         * @param index 图层索引，默认0
         */
        Renderer.prototype.DrawFillRect = function (x, y, width, height, index) {
            if (index === void 0) { index = 0; }
            this.context[index].fillRect(x, y, width, height);
        };
        /**
         * 画空心矩形
         *
         * @param x 横坐标
         * @param y 纵坐标
         * @param width 宽
         * @param height 高
         * @param index 图层索引，默认0
         */
        Renderer.prototype.DrawStrokeRect = function (x, y, width, height, index) {
            if (index === void 0) { index = 0; }
            this.context[index].strokeRect(x, y, width, height);
        };
        /**
         * 画实心圆
         *
         * @param x 圆的中心的 x 坐标
         * @param y 圆的中心的 y 坐标
         * @param r 圆的半径
         * @param start_angle 起始角，以弧度计（弧的圆形的三点钟位置是 0 度）
         * @param end_angle 结束角，以弧度计
         * @param anticlockwise 可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
         * @param index 图层索引，默认0
         */
        Renderer.prototype.DrawFillCircle = function (x, y, r, start_angle, end_angle, anticlockwise, index) {
            if (anticlockwise === void 0) { anticlockwise = false; }
            if (index === void 0) { index = 0; }
            this.context[index].arc(x, y, r, start_angle, end_angle);
            this.context[index].fill();
        };
        /**
         * 画空心圆
         *
         * @param x 圆的中心的 x 坐标
         * @param y 圆的中心的 y 坐标
         * @param r 圆的半径
         * @param start_angle 起始角，以弧度计（弧的圆形的三点钟位置是 0 度）
         * @param end_angle 结束角，以弧度计
         * @param anticlockwise 可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
         * @param index 图层索引，默认0
         */
        Renderer.prototype.DrawSrtokeCircle = function (x, y, r, start_angle, end_angle, anticlockwise, index) {
            if (anticlockwise === void 0) { anticlockwise = false; }
            if (index === void 0) { index = 0; }
            this.context[index].arc(x, y, r, start_angle, end_angle);
            this.context[index].stroke();
        };
        /**
         * 画实心路径
         *
         * @param path 路径
         * @param index 图层索引，默认0
         */
        Renderer.prototype.DrawFillPath = function (path, index) {
            if (index === void 0) { index = 0; }
            this.DrawPath(path, "fill", index);
        };
        /**
         * 画空心路径
         *
         * @param path 路径
         * @param index 图层索引，默认0
         */
        Renderer.prototype.DrawStrokePath = function (path, index) {
            if (index === void 0) { index = 0; }
            this.DrawPath(path, "stroke", index);
        };
        /**
         * 画路径
         *
         * @param path 路径
         * @param style 样式，实心或空心
         * @param index 图层索引，默认0
         */
        Renderer.prototype.DrawPath = function (path, style, index) {
            if (index === void 0) { index = 0; }
            var start_point = path.GetStartPoint();
            this.context[index].moveTo(start_point[0], start_point[1]);
            for (var i = 0; i < path.GetSize() - 1; i++) {
                this.context[index].lineTo(path.GetPoint(i)[0], path.GetPoint(i)[1]);
            }
            if (style == "fill" || style == "Fill" || style == "FILL")
                this.context[index].fill();
            else if (style == "stroke" || style == "Stroke" || style == "STROKE")
                this.context[index].stroke();
        };
        /**
         * 画实心文本
         *
         * @param text 要画的文本
         * @param x 横坐标
         * @param y 纵坐标
         * @param index 图层索引，默认0
         */
        Renderer.prototype.DrawFillText = function (text, x, y, index) {
            if (index === void 0) { index = 0; }
            this.context[index].fillText(text, x, y);
        };
        /**
         * 画空心文本
         *
         * @param text 要画的文本
         * @param x 横坐标
         * @param y 纵坐标
         * @param index 图层索引，默认0
         */
        Renderer.prototype.DrawStrokeText = function (text, x, y, index) {
            if (index === void 0) { index = 0; }
            this.context[index].strokeText(text, x, y);
        };
        /**
         * 画图片,不支持设置宽高
         *
         * @param image 要画的图片
         * @param x 横坐标
         * @param y 纵坐标
         * @param index 图层索引，默认0
         */
        Renderer.prototype.DrawImageA = function (image, x, y, index) {
            if (index === void 0) { index = 0; }
            this.context[index].drawImage(image, x, y);
        };
        /**
         * 画图片，可设置宽高
         *
         * @param image 要画的图片
         * @param x 横坐标
         * @param y 纵坐标
         * @param width 要画的宽
         * @param height 要画的高
         * @param index 图层索引，默认0
         */
        Renderer.prototype.DrawImageB = function (image, x, y, width, height, index) {
            if (index === void 0) { index = 0; }
            this.context[index].drawImage(image, x, y, width, height);
        };
        /**
         * 画图片，可设置宽高，可画裁剪后的图片
         *
         * @param image 要画的图片
         * @param sx 开始剪切的 x 坐标位置
         * @param sy 开始剪切的 y 坐标位置
         * @param swidth 被剪切图像的宽度
         * @param sheight 被剪切图像的高度
         * @param dx 横坐标
         * @param dy 纵坐标
         * @param dw 要画的宽
         * @param dh 要画的高
         * @param index 图层索引，默认0
         */
        Renderer.prototype.DrawImageC = function (image, sx, sy, swidth, sheight, dx, dy, dw, dh, index) {
            if (index === void 0) { index = 0; }
            this.context[index].drawImage(image, sx, sy, swidth, sheight, dx, dy, dw, dh);
        };
        return Renderer;
    }());
    flown.Renderer = Renderer;
})(flown || (flown = {}));
var GL;
(function (GL) {
    GL.COLOR_BUFFER_BIT = WebGLRenderingContext.COLOR_BUFFER_BIT;
    GL.DEPTH_BITS = WebGLRenderingContext.DEPTH_BITS;
    GL.DEPTH_TEST = WebGLRenderingContext.DEPTH_TEST;
    // Vertex shader program
    var vertex_shader_source = "\n    attribute vec4 aVertexPosition;\n\n    uniform mat4 uModelViewMatrix;\n    uniform mat4 uProjectionMatrix;\n\n    void main()\n    {\n        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n    }";
    var fragment_shader_source = "void main(){gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);}";
    var Renderer = /** @class */ (function () {
        function Renderer(scene) {
            if (scene === void 0) { scene = null; }
            if (scene)
                this.SetScene(scene);
        }
        /**
         * 获取上下文
         */
        Renderer.prototype.GetContext = function () { return this.gl_context; };
        /**
         * 设置场景
         *
         * @param scene 渲染器所渲染的场景
         */
        Renderer.prototype.SetScene = function (scene) {
            this.gl_context = scene.GetCanvas().getContext("webgl2");
            if (this.gl_context == undefined || this.gl_context == null)
                this.gl_context = scene.GetCanvas().getContext("webgl");
            if (this.gl_context == undefined || this.gl_context == null)
                throw new Error("Unable to initialize WebGL!");
            this.gl_context.viewport(0, 0, scene.GetCanvas().width, scene.GetCanvas().height);
            this.shader = new Shader(this.gl_context, vertex_shader_source, fragment_shader_source);
            //this.shader.Use();
            this.gl_context.useProgram(this.shader.GetProgram());
            /*
            for (let i = 0; i < scene.GetLayerNumber(); i++)
            {
                this.gl_context.push(scene.GetCanvas(i).getContext("webgl2"));
                if(this.gl_context[i] == undefined || this.gl_context[i] == null)
                    this.gl_context.push(scene.GetCanvas(i).getContext("webgl"));
                if(this.gl_context[i] == undefined || this.gl_context[i] == null)
                    throw new Error("Unable to initialize WebGL!");
            }
            */
        };
        Renderer.prototype.InitVertexBuffer = function (vertices, size) {
            var buffer = this.gl_context.createBuffer();
            this.gl_context.bindBuffer(this.gl_context.ARRAY_BUFFER, buffer); // 绑定缓冲区对象到目标
            this.BufferDataB(this.gl_context.ARRAY_BUFFER, vertices, this.gl_context.STATIC_DRAW); // 将数据写入到缓冲区对象
            var aVertexPosition = this.gl_context.getAttribLocation(this.shader.GetProgram(), "aVertexPosition");
            if (aVertexPosition < 0)
                console.log('获取attribute变量失败！');
            this.gl_context.vertexAttribPointer(aVertexPosition, size, this.gl_context.FLOAT, false, 0, 0); // 将缓冲区对象分配给attribute变量
            this.gl_context.enableVertexAttribArray(aVertexPosition); // 开启attribute变量
            this.gl_context.bindBuffer(this.gl_context.ARRAY_BUFFER, undefined);
            this.gl_context.disableVertexAttribArray(aVertexPosition);
            return buffer;
        };
        /**
         * 画矩形
         *
         * @param x 横坐标
         * @param y 纵坐标
         * @param width 宽
         * @param height 高
         */
        Renderer.prototype.DrawFillRect = function (x, y, width, height) {
            var vertices = new Float32Array([x, y, 1, x + width, y, 1, x + width, y + height, 1, x, y + height, 1]);
            var buffer = this.InitVertexBuffer(vertices, 2);
            this.gl_context.bindBuffer(this.gl_context.ARRAY_BUFFER, buffer);
            this.gl_context.vertexAttribPointer(0, 2, this.gl_context.FLOAT, false, 0, 0);
            this.gl_context.enableVertexAttribArray(0);
            this.DrawArrays(this.gl_context.TRIANGLE_STRIP, 0, 4);
        };
        /**
         * 清空缓冲区
         *
         * @param mask 一个用于指定需要清除的缓冲区的 GLbitfield 。可接受复合值,可能的值有：
         * gl.COLOR_BUFFER_BIT   //颜色缓冲区
         * gl.DEPTH_BUFFER_BIT   //深度缓冲区
         * gl.STENCIL_BUFFER_BIT  //模板缓冲区
         */
        Renderer.prototype.Clear = function (mask) { this.gl_context.clear(mask); };
        /**
         *
         * @param red 指定清除缓冲时的红色值。默认值：0。
         * @param green 指定清除缓冲时的绿色值。默认值：0。
         * @param blue 指定清除缓冲时的蓝色值。默认值：0。
         * @param alpha 指定清除缓冲时的不透明度。默认值：0。
         */
        Renderer.prototype.ClearColor = function (red, green, blue, alpha) {
            if (red === void 0) { red = 0; }
            if (green === void 0) { green = 0; }
            if (blue === void 0) { blue = 0; }
            if (alpha === void 0) { alpha = 0; }
            this.gl_context.clearColor(red, green, blue, alpha);
        };
        /**
         *
         * @param depth 深度值的设定，是当清除深度缓冲区的时候使用。默认值为1。
         */
        Renderer.prototype.ClearDepth = function (depth) {
            if (depth === void 0) { depth = 1; }
            this.gl_context.clearDepth(depth);
        };
        /**
         *
         * @param cap 让WebGL开启某种特性，可能的值：
         * gl.BLEND 	激活片元的颜色融合计算.
         * gl.CULL_FACE 	激活多边形正反面剔除.
         * gl.DEPTH_TEST 	激活深度比较，并且更新深度缓冲区。
         * gl.DITHER 	激活在写入颜色缓冲区之前，抖动颜色成分。
         * gl.POLYGON_OFFSET_FILL 	激活添加多边形片段的深度值偏移。
         * gl.SAMPLE_ALPHA_TO_COVERAGE 	激活通过alpha值决定的临时覆盖值计算。（抗锯齿）
         * gl.SAMPLE_COVERAGE 	激活使用临时覆盖值，位和运算片段的覆盖值。
         * gl.SCISSOR_TEST 	激活剪裁测试，即丢弃在剪裁矩形范围外的片段。
         * gl.STENCIL_TEST 	激活模板测试并且更新模板缓冲区。
         */
        Renderer.prototype.Enable = function (cap) { this.gl_context.enable(cap); };
        /**
         *
         * @param cap
         */
        Renderer.prototype.Disable = function (cap) { this.gl_context.disable(cap); };
        /**
         *
         */
        Renderer.prototype.Finish = function () { this.gl_context.finish(); };
        /**
         *
         * @param target 指定Buffer绑定点(目标).可取
         * gl.ARRAY_BUFFER:包含顶点属性的Buffer,如顶点坐标,纹理坐标数据或顶点颜色数据。
         * gl.ELEMENT_ARRAY_BUFFER: 用于元素索引的Buffer。
         *
         * @param size 设定Buffer对象的数据存储区大小。
         * @param usage 指定数据存储区的使用方法。
         * gl.STATIC_DRAW:缓冲区的内容可能经常使用,而不会经常更改.内容被写入缓冲区,但不被读取。
         * gl.DYNAMIC_DRAW:缓冲区的内容可能经常被使用,并且经常更改.内容被写入缓冲区,但不被读取。
         * gl.STREAM_DRAW:缓冲区的内容可能不会经常使用.内容被写入缓冲区,但不被读取。
         */
        Renderer.prototype.BufferDataA = function (target, size, usage) { this.gl_context.bufferData(target, size, usage); };
        /**
         *
         * @param target 指定Buffer绑定点(目标).可取
         * gl.ARRAY_BUFFER:包含顶点属性的Buffer,如顶点坐标,纹理坐标数据或顶点颜色数据。
         * gl.ELEMENT_ARRAY_BUFFER: 用于元素索引的Buffer。
         *
         * @param data 一个ArrayBuffer，SharedArrayBuffer 或者 ArrayBufferView 类型的数组对象，将被复制到Buffer的数据存储区。
         * 如果为null，数据存储区仍会被创建，但是不会进行初始化和定义。
         *
         * @param usage 指定数据存储区的使用方法。
         * gl.STATIC_DRAW:缓冲区的内容可能经常使用,而不会经常更改.内容被写入缓冲区,但不被读取。
         * gl.DYNAMIC_DRAW:缓冲区的内容可能经常被使用,并且经常更改.内容被写入缓冲区,但不被读取。
         * gl.STREAM_DRAW:缓冲区的内容可能不会经常使用.内容被写入缓冲区,但不被读取。
         */
        Renderer.prototype.BufferDataB = function (target, data, usage) {
            if (data === void 0) { data = null; }
            this.gl_context.bufferData(target, data, usage);
        };
        /**
         *
         * @param mode 指定绘制图元的方式,可能值如下:
         * gl.POINTS: 绘制一系列点。
         * gl.LINE_STRIP: 绘制一个线条。即，绘制一系列线段，上一点连接下一点。
         * gl.LINE_LOOP: 绘制一个线圈。即，绘制一系列线段，上一点连接下一点，并且最后一点与第一个点相连。
         * gl.LINES: 绘制一系列单独线段。每两个点作为端点，线段之间不连接。
         * gl.TRIANGLE_STRIP：绘制一个三角带。
         * gl.TRIANGLE_FAN：绘制一个三角扇。
         * gl.TRIANGLES: 绘制一系列三角形。每三个点作为顶点。
         *
         * @param first 指定从哪个点开始绘制。
         * @param count 指定绘制需要使用到多少个点。
         */
        Renderer.prototype.DrawArrays = function (mode, first, count) { this.gl_context.drawArrays(mode, first, count); };
        /**
         *
         * @param mode 指定绘制图元的方式,可能值如下:
         * gl.POINTS: 绘制一系列点。
         * gl.LINE_STRIP: 绘制一个线条。即，绘制一系列线段，上一点连接下一点。
         * gl.LINE_LOOP: 绘制一个线圈。即，绘制一系列线段，上一点连接下一点，并且最后一点与第一个点相连。
         * gl.LINES: 绘制一系列单独线段。每两个点作为端点，线段之间不连接。
         * gl.TRIANGLE_STRIP：绘制一个三角带。
         * gl.TRIANGLE_FAN：绘制一个三角扇。
         * gl.TRIANGLES: 绘制一系列三角形。每三个点作为顶点。
         *
         * @param count 指定要渲染的元素数量.
         * @param type 指定元素数组缓冲区中的值的类型。可能的值是:
         * gl.UNSIGNED_BYTE
         * gl.UNSIGNED_SHORT
         *
         * @param offset 指定元素数组缓冲区中的偏移量。必须是给定类型大小的有效倍数.
         */
        Renderer.prototype.DrawElements = function (mode, count, type, offset) { this.gl_context.drawElements(mode, count, type, offset); };
        return Renderer;
    }());
    GL.Renderer = Renderer;
    var Shader = /** @class */ (function () {
        function Shader(gl_context, vertex_shader_source, fragment_shader_source) {
            this.gl_context = gl_context;
            this.program = this.InitShaderProgram(vertex_shader_source, fragment_shader_source);
        }
        /**
         *
         * @param type 着色器类型
         * @param source 代码
         */
        Shader.prototype.LoadShader = function (type, source) {
            var shader = this.gl_context.createShader(type); //创建一个新的着色器
            this.gl_context.shaderSource(shader, source); //将源代码发送到着色器   Send the source to the shader object
            this.gl_context.compileShader(shader); //一旦着色器获取到源代码就进行编译   Compile the shader program
            // See if it compiled successfully
            if (!this.gl_context.getShaderParameter(shader, this.gl_context.COMPILE_STATUS)) {
                alert('An error occurred compiling the shaders: ' + this.gl_context.getShaderInfoLog(shader));
                this.gl_context.deleteShader(shader);
                return null;
            }
            return shader;
        };
        /**
         * 初始化着色器程序，让WebGL知道如何绘制我们的数据
         *
         * @param vertex_shader_source 顶点着色器代码
         * @param fragment_shader_source 片段着色器代码
         */
        Shader.prototype.InitShaderProgram = function (vertex_shader_source, fragment_shader_source) {
            var vertex_shader = this.LoadShader(this.gl_context.VERTEX_SHADER, vertex_shader_source);
            var fragment_shader = this.LoadShader(this.gl_context.FRAGMENT_SHADER, fragment_shader_source);
            // 创建着色器程序
            var shader_program = this.gl_context.createProgram();
            this.gl_context.attachShader(shader_program, vertex_shader);
            this.gl_context.attachShader(shader_program, fragment_shader);
            this.gl_context.linkProgram(shader_program);
            // 创建失败， alert
            if (!this.gl_context.getProgramParameter(shader_program, this.gl_context.LINK_STATUS)) {
                alert('Unable to initialize the shader program: ' + this.gl_context.getProgramInfoLog(shader_program));
                return null;
            }
            return shader_program;
        };
        Shader.prototype.GetProgram = function () {
            return this.program;
        };
        /**
         * 使用Program
         */
        Shader.prototype.Use = function () {
            this.gl_context.useProgram(this.program);
        };
        return Shader;
    }());
})(GL || (GL = {}));
var flown;
(function (flown) {
    var Rect = /** @class */ (function () {
        function Rect(x, y, w, h) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (w === void 0) { w = 0; }
            if (h === void 0) { h = 0; }
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }
        return Rect;
    }());
    flown.Rect = Rect;
})(flown || (flown = {}));
/// <reference path="renderer.ts" />
/// <reference path="rect.ts" />
var flown;
(function (flown) {
    var Sprite = /** @class */ (function () {
        function Sprite(sprite_path, width, height) {
            if (sprite_path === void 0) { sprite_path = ""; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            this.rect = new Array();
            var that = this;
            this.image = new Image();
            this.image.src = sprite_path;
            this.image.onload = function () {
                if (width == 0 && height == 0) {
                    that.width = this.width;
                    that.height = this.height;
                }
                else {
                    that.width = width;
                    that.height = height;
                }
                that.rect.push(new flown.Rect(0, 0, this.width, this.height));
            };
            //this.rect.push(new Rect(0,0,this.width,this.height));
        }
        /**
         *
         * @param path 图片路径
         */
        Sprite.prototype.SetImage = function (path, width, height) {
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            var that = this;
            this.image.src = path;
            this.image.onload = function () {
                if (width == 0 && height == 0) {
                    that.SetWidth(this.width);
                    that.SetHeight(this.height);
                }
                else {
                    that.SetWidth(width);
                    that.SetHeight(height);
                }
            };
        };
        /**
         *
         * @param w 要设置的宽
         */
        Sprite.prototype.SetWidth = function (w) {
            this.width = w;
            if (this.rect.length == 1)
                this.rect[0].w = this.width;
        };
        /**
         *
         * @param h 要设置的高
         */
        Sprite.prototype.SetHeight = function (h) {
            this.height = h;
            if (this.rect.length == 1)
                this.rect[0].h = this.height;
        };
        /**
         * 获取精灵图片，宽高
         */
        Sprite.prototype.GetImage = function () { return this.image; };
        Sprite.prototype.GetWidth = function () { return this.width; };
        Sprite.prototype.GetHeight = function () { return this.height; };
        /**
         * 分割精灵图片
         *
         * @param start_x 水平偏移
         * @param start_y 垂直偏移
         * @param w 宽
         * @param h 高
         * @param horizontal 行数
         * @param vertical 列数
         */
        Sprite.prototype.InitRect = function (start_x, start_y, w, h, horizontal, vertical) {
            this.rect = [];
            this.width = w;
            this.height = h;
            for (var i = 0; i < vertical; i++) {
                for (var j = 0; j < horizontal; j++) {
                    this.rect.push(new flown.Rect(start_x + w * j, start_y + h * i, w, h));
                }
            }
        };
        /**
         * 渲染精灵
         *
         * @param renderer 渲染器
         * @param x 横坐标
         * @param y 纵坐标
         * @param w 宽，默认精灵宽
         * @param h 高，默认精灵高
         * @param index rect索引，默认0
         */
        Sprite.prototype.Render = function (renderer, x, y, w, h, index) {
            if (w === void 0) { w = this.width; }
            if (h === void 0) { h = this.height; }
            if (index === void 0) { index = 0; }
            renderer.DrawImageC(this.image, this.rect[index].x, this.rect[index].y, this.rect[index].w, this.rect[index].h, x, y, w, h);
            /*
            if (this.rect != null)
            {
                renderer.DrawImageC(this.image,this.rect[index].x,this.rect[index].y,
                this.rect[index].w,this.rect[index].h,x,y,w,h);
            }
            else
                renderer.DrawImageB(this.image,x,y,this.width,this.height,0);
            */
        };
        return Sprite;
    }());
    flown.Sprite = Sprite;
})(flown || (flown = {}));
/// <reference path="../graphics/sprite.ts" />
var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character(name, img_path) {
        var _this = _super.call(this, img_path) || this;
        _this.speed = 10;
        _this.x = 0;
        _this.y = 0;
        _this.name = name;
        return _this;
    }
    Character.prototype.Render = function (renderer) {
        _super.prototype.Render.call(this, renderer, this.x, this.y, this.width, this.height);
        renderer.DrawFillText(this.name, this.x, this.y);
    };
    return Character;
}(flown.Sprite));
var BulletDirection;
(function (BulletDirection) {
    BulletDirection[BulletDirection["UP"] = 0] = "UP";
    BulletDirection[BulletDirection["DOWN"] = 1] = "DOWN";
    BulletDirection[BulletDirection["LEFT"] = 2] = "LEFT";
    BulletDirection[BulletDirection["RIGHT"] = 3] = "RIGHT";
})(BulletDirection || (BulletDirection = {}));
var Bullet = /** @class */ (function () {
    function Bullet(x, y, width, height, speed) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (speed === void 0) { speed = 10; }
        this.dx = 0;
        this.dy = 0;
        this.speed = 10;
        this.direction = BulletDirection.UP; //< BulletDirection.*
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }
    Bullet.prototype.SetX = function (x) { this.x = x; };
    Bullet.prototype.SetY = function (y) { this.y = y; };
    Bullet.prototype.GetX = function () { return this.x; };
    Bullet.prototype.GetY = function () { return this.y; };
    Bullet.prototype.SetWidth = function (width) { this.width = width; };
    Bullet.prototype.SetHeight = function (height) { this.height = height; };
    Bullet.prototype.GetWidth = function () { return this.width; };
    Bullet.prototype.GetHeight = function () { return this.height; };
    Bullet.prototype.IsCollision = function (left, right, top, bottom) {
        /*java swidthing 使用
        if(this.x <= right && this.x >= left &&
            ((this.y >= top && this.y <= bottom) ||
            (this.y + this.height >= top && this.y + this.height <= bottom)))
            return true;
        
        if(this.x + this.width >= left && this.x + this.width <= right &&
            ((this.y >= top && this.y <= bottom) ||
            (this.y + this.height >= top && this.y + this.height <= bottom)))
            return true;
        */
        /*libgdx 使用*/
        if (this.x < right && this.x > left &&
            ((this.y < top && this.y > bottom) ||
                (this.y + this.height < top && this.y + this.height > bottom)))
            return true;
        if (this.x + this.width > left && this.x + this.width < right &&
            ((this.y < top && this.y > bottom) ||
                (this.y + this.height < top && this.y + this.height > bottom)))
            return true;
        return false;
    };
    Bullet.prototype.GetSpeed = function () { return this.speed; };
    /**
     *
     * @param direction BulletDirection.*
     */
    Bullet.prototype.SetDirection = function (direction) { this.direction = direction; };
    Bullet.prototype.GetDirection = function () { return this.direction; };
    Bullet.prototype.updata = function () {
        /*
        switch(this.direction)
        {
        case BulletDirection.UP:
            this.y += this.speed;
            break;
        case BulletDirection.DOWN:
            this.y -= this.speed;
            break;
        case BulletDirection.LEFT:
            this.x -= this.speed;
            break;
        case BulletDirection.RIGHT:
            this.x += this.speed;
            break;
        }
        */
        this.x += this.dx;
        this.y += this.dy;
        this.dx = 0;
        this.dy = 0;
    };
    return Bullet;
}());
var PlaneType;
(function (PlaneType) {
    PlaneType[PlaneType["TYPE_NONE"] = 0] = "TYPE_NONE";
    PlaneType[PlaneType["TYPE_PLAYER"] = 1] = "TYPE_PLAYER";
    PlaneType[PlaneType["TYPE_ENEMY"] = 2] = "TYPE_ENEMY";
})(PlaneType || (PlaneType = {}));
var PlaneState;
(function (PlaneState) {
    PlaneState[PlaneState["MOVE"] = 0] = "MOVE";
    PlaneState[PlaneState["DEAD"] = 1] = "DEAD";
    PlaneState[PlaneState["VISIBLE"] = 2] = "VISIBLE";
})(PlaneState || (PlaneState = {}));
var Plane = /** @class */ (function () {
    function Plane(x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        this.type = PlaneType.TYPE_NONE;
        this.dx = 0;
        this.dy = 0;
        this.speed = 5;
        this.move = false; //< 移动
        this.dead = false; //< 死亡
        this.visible = true; //< 可视
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    /**
     *
     * @param state_type Plane.State.*
     * @param state true or false
     */
    Plane.prototype.SetState = function (state_type, state) {
        switch (state_type) {
            case PlaneState.MOVE:
                this.move = state;
                break;
            case PlaneState.DEAD:
                this.dead = state;
                break;
            case PlaneState.VISIBLE:
                this.visible = state;
                break;
        }
    };
    /**
     *
     * @param state_type Plane.State.*
     * @return
     */
    Plane.prototype.GetState = function (state_type) {
        switch (state_type) {
            case PlaneState.MOVE:
                return this.move;
            case PlaneState.DEAD:
                return this.dead;
            case PlaneState.VISIBLE:
                return this.visible;
        }
        return false;
    };
    Plane.prototype.SetX = function (x) { this.x = x; };
    Plane.prototype.SetY = function (y) { this.y = y; };
    Plane.prototype.GetX = function () { return this.x; };
    Plane.prototype.GetY = function () { return this.y; };
    Plane.prototype.SetWidth = function (w) { this.width = w; };
    Plane.prototype.SetHeight = function (h) { this.height = h; };
    Plane.prototype.GetWidth = function () { return this.width; };
    Plane.prototype.GetHeight = function () { return this.height; };
    Plane.prototype.SetSpeed = function (speed) { this.speed = speed; };
    Plane.prototype.GetSpeed = function () { return this.speed; };
    Plane.prototype.IsCollision = function (left, right, top, bottom) {
        /*java swing 使用
        if(this.x <= right && this.x >= left &&
            ((this.y >= top && this.y <= bottom) ||
            (this.y + this.height >= top && this.y + this.height <= bottom)))
            return true;
        
        if(this.x + this.width >= left && this.x + this.width <= right &&
            ((this.y >= top && this.y <= bottom) ||
            (this.y + this.height >= top && this.y + this.height <= bottom)))
            return true;
        */
        /*libgdx 使用*/
        if (this.x <= right && this.x >= left &&
            ((this.y <= top && this.y >= bottom) ||
                (this.y + this.height <= top && this.y + this.height >= bottom)))
            return true;
        if (this.x + this.width >= left && this.x + this.width <= right &&
            ((this.y <= top && this.y >= bottom) ||
                (this.y + this.height <= top && this.y + this.height >= bottom)))
            return true;
        return false;
    };
    Plane.prototype.updata = function () {
        if (this.dx != 0 || this.dy != 0)
            this.move = true;
        else
            this.move = false;
        this.x += this.dx;
        this.y += this.dy;
        this.dx = 0;
        this.dy = 0;
    };
    return Plane;
}());
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(x, y, w, h) {
        var _this = _super.call(this, x, y, w, h) || this;
        _this.type = PlaneType.TYPE_ENEMY;
        return _this;
    }
    return Enemy;
}(Plane));
/// <reference path="../event/event_manager.ts" />
/// <reference path="../graphics/scene.ts" />
/// <reference path="../graphics/layer.ts" />
/// <reference path="../graphics/renderer.ts" />
/// <reference path="character.ts" />
/// <reference path="plane.ts" />
var Game = /** @class */ (function () {
    function Game() {
        this.img = [];
        this.plane_bullet = [];
        this.enemy = [];
        this.enemy_bullet = [];
        this.point = 0;
        this.game_pause = false; //< 暂停
        this.game_over = false;
        this.FPS = 30;
        this.interval = 1000 / this.FPS;
        this.time_start = Date.now();
        this.scene = new flown.Scene("scene");
        this.scene.AddLayer(new flown.Layer(null, "layer1"));
        this.renderer = new flown.Renderer(this.scene);
        this.event = new EventManager();
        this.event.Enable(EventManagerMOD.KEYBOARD, EventManagerMOD.KEYBOARD_KAIOS);
        this.player = new Character("player", "./img/avatar/man/stand_or_walk/right1.png");
        /*
        if (window.screen.height == 320)
            this.scene.GetLayer().SetHeight("280");
        */
        this.width = this.scene.GetLayer().GetWidth();
        this.height = this.scene.GetLayer().GetHeight();
    }
    Game.prototype.Start = function () {
        //this.player = new Character("player","./img/avatar/man/stand_or_walk/right1.png");
        this.plane = new Plane(0, 0, this.width / 10, this.height / 10);
        this.plane.SetSpeed(this.height / 30);
        this.img.push(new Image());
        this.img.push(new Image());
        this.img.push(new Image());
        this.img[0].src = "img/bullet/bullet1.png";
        this.img[1].src = "img/plane/player.png";
        this.img[2].src = "img/plane/enemy1.png";
        this.DataInit();
        this.MainLoop();
    };
    Game.prototype.DataInit = function () {
        this.plane.SetX(this.width / 2 - this.plane.GetWidth() / 2);
        this.plane.SetY(this.height / 10 * 9);
        this.plane.SetState(PlaneState.DEAD, false);
        this.plane_bullet = [];
        this.enemy = [];
        this.enemy_bullet = [];
        this.game_over = false;
        this.point = 0;
    };
    Game.prototype.Fail = function () {
    };
    Game.prototype.Render = function (fps) {
        if (this.event.WaitEvent()) {
            switch (this.event.type) {
                case EventType.MOUSE_MOTION:
                    //console.log(this.event.mouse_motion_event.x);
                    //console.log(this.event.mouse_motion_event.y);
                    break;
                case EventType.KEY_DOWN:
                    switch (this.event.keyboard_event.key_code) {
                        case Keyboard.W:
                        case Keyboard_KaiOS.ARROW_UP:
                            //this.player.y -= this.player.speed;
                            this.plane.dy -= this.plane.GetSpeed();
                            break;
                        case Keyboard.S:
                        case Keyboard_KaiOS.ARROW_DOWN:
                            //this.player.y += this.player.speed;
                            this.plane.dy += this.plane.GetSpeed();
                            break;
                        case Keyboard.A:
                        case Keyboard_KaiOS.ARROW_LEFT:
                            //this.player.x -= this.player.speed;
                            this.plane.dx -= this.plane.GetSpeed();
                            break;
                        case Keyboard.D:
                        case Keyboard_KaiOS.ARROW_RIGHT:
                            //this.player.x += this.player.speed;
                            this.plane.dx += this.plane.GetSpeed();
                            break;
                        case Keyboard_KaiOS.NUMBER_5:
                        case Keyboard_KaiOS.ENTER:
                            if (!this.plane.GetState(PlaneState.DEAD))
                                this.plane_bullet.push(new Bullet(this.plane.GetX() + this.plane.GetWidth() / 2 - this.width / 32, this.plane.GetY(), this.width / 16, this.height / 6, this.height / 30));
                            else
                                this.DataInit();
                            break;
                        default:
                            //console.log("KeyDown");
                            //console.log("KeyCode:" + this.event.keyboard_event.key_code);
                            break;
                    }
                    break;
                default:
                    break;
            }
        }
        if (this.game_over || this.game_pause)
            return;
        this.renderer.Clear();
        this.renderer.DrawFillText("FPS:" + fps, 100, 100);
        //this.player.Render(this.renderer);
        //render
        var that = this;
        this.plane.updata();
        this.enemy.forEach(function (e, index) {
            that.renderer.DrawImageB(that.img[2], e.GetX(), e.GetY(), e.GetWidth(), e.GetHeight());
            e.dy += e.GetSpeed();
            e.updata();
            var collision = false;
            that.plane_bullet.forEach(function (pb, index) {
                collision =
                    pb.IsCollision(e.GetX(), e.GetX() + e.GetWidth(), e.GetY() + e.GetHeight(), e.GetY());
                if (collision) {
                    e.SetState(PlaneState.DEAD, true);
                    that.plane_bullet.splice(index, 1);
                    that.point++;
                }
            });
            collision = that.plane.IsCollision(e.GetX(), e.GetX() + e.GetWidth(), e.GetY() + e.GetHeight(), e.GetY());
            if (collision)
                that.plane.SetState(PlaneState.DEAD, true);
            if (e.GetY() > that.height)
                e.SetState(PlaneState.DEAD, true);
            if (e.GetState(PlaneState.DEAD))
                that.enemy.splice(index, 1);
        });
        this.plane_bullet.forEach(function (pb, index) {
            that.renderer.DrawImageB(that.img[0], pb.GetX(), pb.GetY(), pb.GetWidth(), pb.GetHeight());
            if (pb != null) {
                pb.dy -= pb.GetSpeed();
                pb.updata();
            }
            /**子弹销毁*/
            if (pb != null && pb.GetY() > this.height) {
                that.plane_bullet.splice(index, 1);
            }
        });
        this.renderer.DrawImageB(this.img[1], this.plane.GetX(), this.plane.GetY(), this.plane.GetWidth(), this.plane.GetHeight());
        this.renderer.DrawFillText("分数:" + this.point, 10, this.height - 10);
        this.renderer.DrawFillText("Points:" + this.point, 10, 20);
        //游戏逻辑相关
        /**敌机刷新*/
        if (this.enemy.length < 3 && this.width != 0) {
            var x = Math.random() * this.width;
            var y = 0;
            var ne = new Enemy(x, y, this.width / 10, this.height / 10);
            ne.SetSpeed(this.height / 60);
            this.enemy.push(ne);
        }
        if (this.plane.GetState(PlaneState.DEAD)) {
            this.game_over = true;
            this.Fail();
        }
        if (this.game_over && !this.game_pause) {
            this.renderer.DrawFillText("GAME OVER", this.width / 2 - 5 * 9, this.height / 2 + 20);
            this.renderer.DrawFillText("请按Enter以重新开始游戏", this.width / 2 - 7 * 12, this.height / 2);
        }
        else if (!this.game_over && this.game_pause) {
            this.renderer.DrawFillText("游戏暂停中", this.width / 2 - 7 * 5, this.height / 2 + 20);
            this.renderer.DrawFillText("请按Enter键以继续游戏", this.width / 2 - 7 * 8 - 5 * 3, this.height / 2);
        }
    };
    Game.prototype.MainLoop = function () {
        requestAnimationFrame(this.MainLoop.bind(this));
        var now = Date.now();
        var delta = now - this.time_start;
        var fps = 1000 / delta;
        if (fps > this.FPS)
            fps = this.FPS;
        if (delta > this.interval) {
            this.time_start = now - (delta % this.interval);
            this.Render(fps);
        }
    };
    return Game;
}());
/// <reference path="./game/game.ts" />
var game = new Game();
window.onload = function () {
    game.Start();
};
/*
let scene = new Scene("scene1");
let layer = new Layer(scene);
let renderer = new Renderer();
let sprite:Sprite = new Sprite("./sprite.png");



renderer.SetScene(scene);

renderer.DrawFillText("Hello",100,100);
renderer.DrawFillText("World!!!",200,100);

sprite.Render(renderer,100,200);


let r = new GL.Renderer(scene);

**/
