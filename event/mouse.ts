

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

    static Motion(this:Window,e:MouseEvent)
    {
        const me = new MouseMotionEvent(EventType.MOUSE_MOTION,e.which,null,e.pageX,e.pageY,EventManager.Event.mouse_motion_event.x,EventManager.Event.mouse_motion_event.y);
        EventManager.Event.AddEventB(EventType.MOUSE_MOTION,me);
    }

    static ButtonDwon(this:Window,e:MouseEvent)
    {
        const me = new MouseButtonEvent(EventType.MOUSE_BUTTON_DOWN,e.which,e.button,null,1,e.pageX,e.pageY);
        EventManager.Event.AddEventB(EventType.MOUSE_BUTTON_DOWN,me);
    }

    static ButtonUp(this:Window,e:MouseEvent)
    {
        const me = new MouseButtonEvent(EventType.MOUSE_BUTTON_UP,e.which,e.button,null,1,e.pageX,e.pageY);
        EventManager.Event.AddEventB(EventType.MOUSE_BUTTON_UP,me);
    }

    static Wheel(this:Window,e:MouseEvent)
    {
        const me = new _MouseWheelEvent_(EventType.MOUSE_WHEEL);
        EventManager.Event.AddEventB(EventType.MOUSE_WHEEL,me);
    }
}
