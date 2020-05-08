

type TouchID = number;
type FingerID = number;

enum TouchDeviceType
{
    TOUCH_DEVICE_INVALID = -1,
    TOUCH_DEVICE_DIRECT,                /* touch screen with window-relative coordinates */
    TOUCH_DEVICE_INDIRECT_ABSOLUTE,     /* trackpad with absolute device coordinates */
    TOUCH_DEVICE_INDIRECT_RELATIVE      /* trackpad with screen cursor-relative coordinates */
}

class Finger
{
    id:FingerID = null;
    x:number = null;
    y:number = null;
    pressure:number = null;
    constructor(id:FingerID = null,x:number = null,y:number = null,pressure:number = null)
    {
        this.id = id;
        this.x = x;
        this.y = y;
        this.pressure = pressure;
    }
}

class FingerTouch
{
    /**
     *触摸开始
     */
    static Start(this:Window,ev:TouchEvent)
    {
        const finger = ev.touches[ev.touches.length];
        const e = new FingerTouchEvent(EventType.FINGER_DOWN,null,null,finger.pageX,finger.pageY,null,null,finger.force);
        EventManager.Event.AddEventB(EventType.FINGER_DOWN,e);
    }

    /**
     * 移动
     */
    static Motion(this:Window,ev:TouchEvent)
    {
        const e = new FingerTouchEvent(EventType.FINGER_DOWN,null,null,null,null,null,null,null);
        EventManager.Event.AddEventB(EventType.FINGER_DOWN,e);
    }

    /**
     * 结束
     */
    static End(this:Window,ev:TouchEvent)
    {
        const e = new FingerTouchEvent(EventType.FINGER_DOWN,null,null,null,null,null,null,null);
        EventManager.Event.AddEventB(EventType.FINGER_DOWN,e);
    }
}

function GetNumTouchDevices() : number
{
    return
}

function GetTouchDevice(index:number) : TouchID
{
    return
}

function GetTouchDeviceType(touch_id:TouchID) : TouchDeviceType
{
    return
}

function GetNumTouchFingers(touch_id:TouchID) : number
{
    return
}

function GetTouchFinger(touch_id:TouchID, index:number) : Finger
{
    return
}
