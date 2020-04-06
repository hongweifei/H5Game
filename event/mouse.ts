

/**
 * 0代表 按下 左键 ，1 代表按下 滚轮 ，2 代表按下 右键
 */
enum MouseButton
{
    LEFT_BUTTON = 0,
    RIGHT_BUTTON = 2,
}

class Mouse
{
    static Motion(this:Window,ev:MouseEvent)
    {
        const e = new MouseMotionEvent(EventType.MOUSE_MOTION,ev.which,null,ev.pageX,ev.pageY,EventManager.Event.mouse_motion_event.x,EventManager.Event.mouse_motion_event.y);
        EventManager.AddEventB(EventType.MOUSE_MOTION,e);
    }

    static ButtonDwon(this:Window,ev:MouseEvent)
    {
        const e = new MouseButtonEvent(EventType.MOUSE_BUTTON_DOWN,ev.which,ev.button,null,1,ev.pageX,ev.pageY);
        EventManager.AddEventB(EventType.MOUSE_BUTTON_DOWN,e);
    }

    static ButtonUp(this:Window,ev:MouseEvent)
    {
        const e = new MouseButtonEvent(EventType.MOUSE_BUTTON_UP,ev.which,ev.button,null,1,ev.pageX,ev.pageY);
        EventManager.AddEventB(EventType.MOUSE_BUTTON_UP,e);
    }

    static Wheel(this:Window,ev:MouseEvent)
    {
        const e = new _MouseWheelEvent_(EventType.MOUSE_WHEEL);
        EventManager.AddEventB(EventType.MOUSE_WHEEL,e);
    }
}
