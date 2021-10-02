




class Keyboard_KaiOS
{
	static ARROW_UP = "ArrowUp";
	static ARROW_DOWN = "ArrowDown";
	static ARROW_LEFT = "ArrowLeft";
	static ARROW_RIGHT = "ArrowRight";
	static SOFT_LEFT = "SoftLeft";
	static SOFT_RIGHT = "SoftRight";
	static END_CALL = "EndCall";
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


	static KeyDown(this:Window,e:KeyboardEvent)
    {
        if (e.key == Keyboard_KaiOS.BACKSPACE)
        {
            if (confirm('是否退出?'))
                window.close();
            return;
        }

        const ke = new _KeyboardEvent_(EventType.KEY_DOWN,null,e.key);
        EventManager.EVENT.AddEventB(EventType.KEY_DOWN,ke);
    }

    static KeyPress(){}

    static KeyUp(this:Window,e:KeyboardEvent)
    {
        const ke = new _KeyboardEvent_(EventType.KEY_UP,null,e.key);
        EventManager.EVENT.AddEventB(EventType.KEY_UP,ke);
    }
}


