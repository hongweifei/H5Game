

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
    id:FingerID;
    x:number;
    y:number;
    pressure:number;
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