

enum KeyCode
{
    /** 与 Backspace 的键控代码值(8)关联的常数。*/
    BACKSPACE = 8,
    /** 与 Tab 的键控代码值(9)关联的常数。*/
    TAB,
    /** 与 Enter 的键控代码值(13)关联的常数。*/
    ENTER = 13,
    /** 与 Mac 命令键(15)关联的常数。*/
    COMMAND = 15,
    /** 与 Shift 的键控代码值(16)关联的常数。*/
    SHIFT,
    /** 与 Ctrl 的键控代码值(17)关联的常数。*/
    CONTROL,
    /** 与 Alternate(Option)键的键控代码值(18)关联的常数。*/
    ALTERNATE,
    /** 与 Caps Lock 的键控代码值(20)关联的常数。*/
    CAPS_LOCK = 20,
    /** 与数字键盘的伪键控代码(21)关联的常数。*/
    NUMPAD,
    /** 与 Esc 的键控代码值(27)关联的常数。*/
    ESCAPE = 27,
    /** 与空格键的键控代码值(32)关联的常数。*/
    SPACE = 32,
    /** 与 Page Up 的键控代码值(33)关联的常数。*/
    PAGE_UP,
    /** 与 Page Down 的键控代码值(34)关联的常数。*/
    PAGE_DOWN,
    /** 与 End 的键控代码值(35)关联的常数。*/
    END,
    /** 与 Home 的键控代码值(36)关联的常数。*/
    HOME,
    /** 与向左箭头键的键控代码值(37)关联的常数。*/
    LEFT,
    /** 与向上箭头键的键控代码值(38)关联的常数。*/
    UP,
    /** 与向右箭头键的键控代码值(39)关联的常数。*/
    RIGHT,
    /** 与向下箭头键的键控代码值(40)关联的常数。*/
    DOWN,
    /** 与 Insert 的键控代码值(45)关联的常数。*/
    INSERT,
    /** 与 Delete 的键控代码值(46)关联的常数。*/
    DELETE,
    /** 与 0 的键控代码值(48)关联的常数。*/
    NUMBER_0 = 48,
    /** 与 1 的键控代码值(49)关联的常数。*/
    NUMBER_1,
    /** 与 2 的键控代码值(50)关联的常数。*/
    NUMBER_2,
    /** 与 3 的键控代码值(51)关联的常数。*/
    NUMBER_3,
    /** 与 4 的键控代码值(52)关联的常数。*/
    NUMBER_4,
    /** 与 5 的键控代码值(53)关联的常数。*/
    NUMBER_5,
    /** 与 6 的键控代码值(54)关联的常数。*/
    NUMBER_6,
    /** 与 7 的键控代码值(55)关联的常数。*/
    NUMBER_7,
    /** 与 8 的键控代码值(56)关联的常数。*/
    NUMBER_8,
    /** 与 9 的键控代码值(57)关联的常数。*/
    NUMBER_9,
    /** 与 A 键的键控代码值(65)关联的常数。*/
    A = 65,
    /** 与 B 键的键控代码值(66)关联的常数。*/
    B,
    /** 与 C 键的键控代码值(67)关联的常数。*/
    C,
    /** 与 D 键的键控代码值(68)关联的常数。*/
    D,
    /** 与 E 键的键控代码值(69)关联的常数。*/
    E,
    /** 与 F 键的键控代码值(70)关联的常数。*/
    F,
    /** 与 G 键的键控代码值(71)关联的常数。*/
    G,
    /** 与 H 键的键控代码值(72)关联的常数。*/
    H,
    /** 与 I 键的键控代码值(73)关联的常数。*/
    I,
    /** 与 J 键的键控代码值(74)关联的常数。*/
    J,
    /** 与 K 键的键控代码值(75)关联的常数。*/
    K,
    /** 与 L 键的键控代码值(76)关联的常数。*/
    L,
    /** 与 M 键的键控代码值(77)关联的常数。*/
    M,
    /** 与 N 键的键控代码值(78)关联的常数。*/
    N,
    /** 与 O 键的键控代码值(79)关联的常数。*/
    O,
    /** 与 P 键的键控代码值(80)关联的常数。*/
    P,
    /** 与 Q 键的键控代码值(81)关联的常数。*/
    Q,
    /** 与 R 键的键控代码值(82)关联的常数。*/
    R,
    /** 与 S 键的键控代码值(83)关联的常数。*/
    S,
    /** 与 T 键的键控代码值(84)关联的常数。*/
    T,
    /** 与 U 键的键控代码值(85)关联的常数。*/
    U,
    /** 与 V 键的键控代码值(86)关联的常数。*/
    V,
    /** 与 W 键的键控代码值(87)关联的常数。*/
    W,
    /** 与 X 键的键控代码值(88)关联的常数。*/
    X,
    /** 与 Y 键的键控代码值(89)关联的常数。*/
    Y,
    /** 与 Z 键的键控代码值(90)关联的常数。*/
    Z,
    /** 与数字键盘上的数字 0 的键控代码值(96)关联的常数。*/
    NUMPAD_0 = 96,
    /** 与数字键盘上的数字 1 的键控代码值(97)关联的常数。*/
    NUMPAD_1,
    /** 与数字键盘上的数字 2 的键控代码值(98)关联的常数。*/
    NUMPAD_2,
    /** 与数字键盘上的数字 3 的键控代码值(99)关联的常数。*/
    NUMPAD_3,
    /** 与数字键盘上的数字 4 的键控代码值(100)关联的常数。*/
    NUMPAD_4,
    /** 与数字键盘上的数字 5 的键控代码值(101)关联的常数。*/
    NUMPAD_5,
    /** 与数字键盘上的数字 6 的键控代码值(102)关联的常数。*/
    NUMPAD_6,
    /** 与数字键盘上的数字 7 的键控代码值(103)关联的常数。*/
    NUMPAD_7,
    /** 与数字键盘上的数字 8 的键控代码值(104)关联的常数。*/
    NUMPAD_8,
    /** 与数字键盘上的数字 9 的键控代码值(105)关联的常数。*/
    NUMPAD_9,
    /** 与数字键盘上的乘号(*)的键控代码值(106)关联的常数。*/
    NUMPAD_MULTIPLY,
    /** 与数字键盘上的加号(+)的键控代码值(107)关联的常数。*/
    NUMPAD_ADD,
    /** 与数字键盘上的 Enter 的键控代码值(108)关联的常数。*/
    NUMPAD_ENTER,
    /** 与数字键盘上的减号(-)的键控代码值(109)关联的常数。*/
    NUMPAD_SUBTRACT,
    /** 与数字键盘上的小数点(.)的键控代码值(110)关联的常数。*/
    NUMPAD_DECIMAL,
    /** 与数字键盘上的除号(/)的键控代码值(111)关联的常数。*/
    NUMPAD_DIVIDE,
    /** 与 F1 的键控代码值(112)关联的常数。*/
    F1,
    /** 与 F2 的键控代码值(113)关联的常数。*/
    F2,
    /** 与 F3 的键控代码值(114)关联的常数。*/
    F3,
    /** 与 F4 的键控代码值(115)关联的常数。*/
    F4,
    /** 与 F5 的键控代码值(116)关联的常数。*/
    F5,
    /** 与 F6 的键控代码值(117)关联的常数。*/
    F6,
    /** 与 F7 的键控代码值(118)关联的常数。*/
    F7,
    /** 与 F8 的键控代码值(119)关联的常数。*/
    F8,
    /** 与 F9 的键控代码值(120)关联的常数。*/
    F9,
    /** 与 F10 的键控代码值(121)关联的常数。*/
    F10,
    /** 与 F11 的键控代码值(122)关联的常数。*/
    F11,
    /** 与 F12 的键控代码值(123)关联的常数。*/
    F12,
    /** 与 F13 的键控代码值(124)关联的常数。*/
    F13,
    /** 与 F14 的键控代码值(125)关联的常数。*/
    F14,
    /** 与 F15 的键控代码值(126)关联的常数。*/
    F15,
    /** 与 ; 键的键控代码值(186)关联的常数。*/
    SEMICOLON = 186,
    /** 与=键的键控代码值(187)关联的常数。*/
    EQUAL,
    /** 与 F15 的键控代码值(188)关联的常数。*/
    COMMA,
    /** 与 - 键的键控代码值(189)关联的常数。*/
    MINUS,
    /** 与 . 键的键控代码值(190)关联的常数。*/
    PERIOD,
    /** 与 / 键的键控代码值(191)关联的常数。*/
    SLASH,
    /** 与 ` 键的键控代码值(192)关联的常数。*/
    BACKQUOTE,
    /** 与 [ 键的键控代码值(219)关联的常数。*/
    LEFTBRACKET = 219,
    /** 与 \ 键的键控代码值(220)关联的常数。*/
    BACKSLASH,
    /** 与 ] 键的键控代码值(221)关联的常数。*/
    RIGHTBRACKET,
    /** 与 ' 键的键控代码值(222)关联的常数。*/
    QUOTE,
}


/**
* <code>Keyboard</code> 类的属性是一些常数，这些常数表示控制游戏时最常用的键。
*/
class Keyboard
{
    /** 与 0 的键控代码值(48)关联的常数。*/
    static NUMBER_0: number = 48;
    /** 与 1 的键控代码值(49)关联的常数。*/
    static NUMBER_1: number = 49;
    /** 与 2 的键控代码值(50)关联的常数。*/
    static NUMBER_2: number = 50;
    /** 与 3 的键控代码值(51)关联的常数。*/
    static NUMBER_3: number = 51;
    /** 与 4 的键控代码值(52)关联的常数。*/
    static NUMBER_4: number = 52;
    /** 与 5 的键控代码值(53)关联的常数。*/
    static NUMBER_5: number = 53;
    /** 与 6 的键控代码值(54)关联的常数。*/
    static NUMBER_6: number = 54;
    /** 与 7 的键控代码值(55)关联的常数。*/
    static NUMBER_7: number = 55;
    /** 与 8 的键控代码值(56)关联的常数。*/
    static NUMBER_8: number = 56;
    /** 与 9 的键控代码值(57)关联的常数。*/
    static NUMBER_9: number = 57;
    /** 与 A 键的键控代码值(65)关联的常数。*/
    static A: number = 65;
    /** 与 B 键的键控代码值(66)关联的常数。*/
    static B: number = 66;
    /** 与 C 键的键控代码值(67)关联的常数。*/
    static C: number = 67;
    /** 与 D 键的键控代码值(68)关联的常数。*/
    static D: number = 68;
    /** 与 E 键的键控代码值(69)关联的常数。*/
    static E: number = 69;
    /** 与 F 键的键控代码值(70)关联的常数。*/
    static F: number = 70;
    /** 与 G 键的键控代码值(71)关联的常数。*/
    static G: number = 71;
    /** 与 H 键的键控代码值(72)关联的常数。*/
    static H: number = 72;
    /** 与 I 键的键控代码值(73)关联的常数。*/
    static I: number = 73;
    /** 与 J 键的键控代码值(74)关联的常数。*/
    static J: number = 74;
    /** 与 K 键的键控代码值(75)关联的常数。*/
    static K: number = 75;
    /** 与 L 键的键控代码值(76)关联的常数。*/
    static L: number = 76;
    /** 与 M 键的键控代码值(77)关联的常数。*/
    static M: number = 77;
    /** 与 N 键的键控代码值(78)关联的常数。*/
    static N: number = 78;
    /** 与 O 键的键控代码值(79)关联的常数。*/
    static O: number = 79;
    /** 与 P 键的键控代码值(80)关联的常数。*/
    static P: number = 80;
    /** 与 Q 键的键控代码值(81)关联的常数。*/
    static Q: number = 81;
    /** 与 R 键的键控代码值(82)关联的常数。*/
    static R: number = 82;
    /** 与 S 键的键控代码值(83)关联的常数。*/
    static S: number = 83;
    /** 与 T 键的键控代码值(84)关联的常数。*/
    static T: number = 84;
    /** 与 U 键的键控代码值(85)关联的常数。*/
    static U: number = 85;
    /** 与 V 键的键控代码值(86)关联的常数。*/
    static V: number = 86;
    /** 与 W 键的键控代码值(87)关联的常数。*/
    static W: number = 87;
    /** 与 X 键的键控代码值(88)关联的常数。*/
    static X: number = 88;
    /** 与 Y 键的键控代码值(89)关联的常数。*/
    static Y: number = 89;
    /** 与 Z 键的键控代码值(90)关联的常数。*/
    static Z: number = 90;
    /** 与 F1 的键控代码值(112)关联的常数。*/
    static F1: number = 112;
    /** 与 F2 的键控代码值(113)关联的常数。*/
    static F2: number = 113;
    /** 与 F3 的键控代码值(114)关联的常数。*/
    static F3: number = 114;
    /** 与 F4 的键控代码值(115)关联的常数。*/
    static F4: number = 115;
    /** 与 F5 的键控代码值(116)关联的常数。*/
    static F5: number = 116;
    /** 与 F6 的键控代码值(117)关联的常数。*/
    static F6: number = 117;
    /** 与 F7 的键控代码值(118)关联的常数。*/
    static F7: number = 118;
    /** 与 F8 的键控代码值(119)关联的常数。*/
    static F8: number = 119;
    /** 与 F9 的键控代码值(120)关联的常数。*/
    static F9: number = 120;
    /** 与 F10 的键控代码值(121)关联的常数。*/
    static F10: number = 121;
    /** 与 F11 的键控代码值(122)关联的常数。*/
    static F11: number = 122;
    /** 与 F12 的键控代码值(123)关联的常数。*/
    static F12: number = 123;
    /** 与 F13 的键控代码值(124)关联的常数。*/
    static F13: number = 124;
    /** 与 F14 的键控代码值(125)关联的常数。*/
    static F14: number = 125;
    /** 与 F15 的键控代码值(126)关联的常数。*/
    static F15: number = 126;
    /** 与数字键盘的伪键控代码(21)关联的常数。*/
    static NUMPAD: number = 21;
    /** 与数字键盘上的数字 0 的键控代码值(96)关联的常数。*/
    static NUMPAD_0: number = 96;
    /** 与数字键盘上的数字 1 的键控代码值(97)关联的常数。*/
    static NUMPAD_1: number = 97;
    /** 与数字键盘上的数字 2 的键控代码值(98)关联的常数。*/
    static NUMPAD_2: number = 98;
    /** 与数字键盘上的数字 3 的键控代码值(99)关联的常数。*/
    static NUMPAD_3: number = 99;
    /** 与数字键盘上的数字 4 的键控代码值(100)关联的常数。*/
    static NUMPAD_4: number = 100;
    /** 与数字键盘上的数字 5 的键控代码值(101)关联的常数。*/
    static NUMPAD_5: number = 101;
    /** 与数字键盘上的数字 6 的键控代码值(102)关联的常数。*/
    static NUMPAD_6: number = 102;
    /** 与数字键盘上的数字 7 的键控代码值(103)关联的常数。*/
    static NUMPAD_7: number = 103;
    /** 与数字键盘上的数字 8 的键控代码值(104)关联的常数。*/
    static NUMPAD_8: number = 104;
    /** 与数字键盘上的数字 9 的键控代码值(105)关联的常数。*/
    static NUMPAD_9: number = 105;
    /** 与数字键盘上的加号(+)的键控代码值(107)关联的常数。*/
    static NUMPAD_ADD: number = 107;
    /** 与数字键盘上的小数点(.)的键控代码值(110)关联的常数。*/
    static NUMPAD_DECIMAL: number = 110;
    /** 与数字键盘上的除号(/)的键控代码值(111)关联的常数。*/
    static NUMPAD_DIVIDE: number = 111;
    /** 与数字键盘上的 Enter 的键控代码值(108)关联的常数。*/
    static NUMPAD_ENTER: number = 108;
    /** 与数字键盘上的乘号(*)的键控代码值(106)关联的常数。*/
    static NUMPAD_MULTIPLY: number = 106;
    /** 与数字键盘上的减号(-)的键控代码值(109)关联的常数。*/
    static NUMPAD_SUBTRACT: number = 109;
    /** 与 ; 键的键控代码值(186)关联的常数。*/
    static SEMICOLON: number = 186;
    /** 与=键的键控代码值(187)关联的常数。*/
    static EQUAL: number = 187;
    /** 与 F15 的键控代码值(188)关联的常数。*/
    static COMMA: number = 188;
    /** 与 - 键的键控代码值(189)关联的常数。*/
    static MINUS: number = 189;
    /** 与 . 键的键控代码值(190)关联的常数。*/
    static PERIOD: number = 190;
    /** 与 / 键的键控代码值(191)关联的常数。*/
    static SLASH: number = 191;
    /** 与 ` 键的键控代码值(192)关联的常数。*/
    static BACKQUOTE: number = 192;
    /** 与 [ 键的键控代码值(219)关联的常数。*/
    static LEFTBRACKET: number = 219;
    /** 与 \ 键的键控代码值(220)关联的常数。*/
    static BACKSLASH: number = 220;
    /** 与 ] 键的键控代码值(221)关联的常数。*/
    static RIGHTBRACKET: number = 221;
    /** 与 ' 键的键控代码值(222)关联的常数。*/
    static QUOTE: number = 222;
    /** 与 Alternate(Option)键的键控代码值(18)关联的常数。*/
    static ALTERNATE: number = 18;
    /** 与 Backspace 的键控代码值(8)关联的常数。*/
    static BACKSPACE: number = 8;
    /** 与 Caps Lock 的键控代码值(20)关联的常数。*/
    static CAPS_LOCK: number = 20;
    /** 与 Mac 命令键(15)关联的常数。*/
    static COMMAND: number = 15;
    /** 与 Ctrl 的键控代码值(17)关联的常数。*/
    static CONTROL: number = 17;
    /** 与 Delete 的键控代码值(46)关联的常数。*/
    static DELETE: number = 46;
    /** 与 Enter 的键控代码值(13)关联的常数。*/
    static ENTER: number = 13;
    /** 与 Esc 的键控代码值(27)关联的常数。*/
    static ESCAPE: number = 27;
    /** 与 Page Up 的键控代码值(33)关联的常数。*/
    static PAGE_UP: number = 33;
    /** 与 Page Down 的键控代码值(34)关联的常数。*/
    static PAGE_DOWN: number = 34;
    /** 与 End 的键控代码值(35)关联的常数。*/
    static END: number = 35;
    /** 与 Home 的键控代码值(36)关联的常数。*/
    static HOME: number = 36;
    /** 与向左箭头键的键控代码值(37)关联的常数。*/
    static LEFT: number = 37;
    /** 与向上箭头键的键控代码值(38)关联的常数。*/
    static UP: number = 38;
    /** 与向右箭头键的键控代码值(39)关联的常数。*/
    static RIGHT: number = 39;
    /** 与向下箭头键的键控代码值(40)关联的常数。*/
    static DOWN: number = 40;
    /** 与 Shift 的键控代码值(16)关联的常数。*/
    static SHIFT: number = 16;
    /** 与空格键的键控代码值(32)关联的常数。*/
    static SPACE: number = 32;
    /** 与 Tab 的键控代码值(9)关联的常数。*/
    static TAB: number = 9;
    /** 与 Insert 的键控代码值(45)关联的常数。*/
    static INSERT: number = 45;

    static KeyDown(this:Window,e:KeyboardEvent)
    {
        const ke = new _KeyboardEvent_(EventType.KEY_DOWN,null,e.keyCode);
        EventManager.EVENT.AddEventB(EventType.KEY_DOWN,ke);
    }

    static KeyPress(){}

    static KeyUp(this:Window,e:KeyboardEvent)
    {
        const ke = new _KeyboardEvent_(EventType.KEY_UP,null,e.keyCode);
        EventManager.EVENT.AddEventB(EventType.KEY_UP,ke);
    }
}
