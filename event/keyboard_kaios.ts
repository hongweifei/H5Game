




class Keyboard_KaiOS
{
	static ArrowUp = "ArrowUp";
	static ArrowDown = "ArrowDown";
	static ArrowLeft = "ArrowLeft";
	static ArrowRight = "ArrowRight";
	static SoftLeft = "SoftLeft";
	static SoftRight = "SoftRight";
	static EndCall = "EndCall";
	static ENTER = "Enter";
	static BACKSPACE = "Backspace";
    static NUMBER_0 = "0";
    static NUMBER_1 = "1";
    static NUMBER_2 = "2";
    static NUMBER_3 = "3";
    static NUMBER_4 = "4";
    static NUMBER_5 = "5";
    static NUMBER_6 = "6";
    static NUMBER_7 = "7";
    static NUMBER_8 = "8";
    static NUMBER_9 = "9";
    static MULTIPLY = "*";
    static SHARP = "#";


	static KeyDown(this:Window,ev:KeyboardEvent)
    {
        const e = new _KeyboardEvent_(EventType.KEY_DOWN,null,ev.key);
        EventManager.Event.AddEventB(EventType.KEY_DOWN,e);
    }

    static KeyPress(){}

    static KeyUp(this:Window,ev:KeyboardEvent)
    {
        const e = new _KeyboardEvent_(EventType.KEY_UP,null,ev.key);
        EventManager.Event.AddEventB(EventType.KEY_UP,e);
    }
}


