


enum EventType
{
    /**< Unused (do not remove) */
    FIRST_EVENT = 0,

    /**< User-requested quit */
    QUIT,

    /* Display events */
    DISPLAY,                    /**< Display state change */

    /* Window events */
    WINDOW_EVENT,               /**< Window state change */

    /* Keyboard events */
    //KEYBOARD_EVENT,
    KEY_DOWN,                   /**< Key pressed */
    KEY_UP,                     /**< Key released */
    TEXT_EDITING,               /**< Keyboard text editing (composition) */
    TEXT_INPUT,                 /**< Keyboard text input */
    KEYMAP_CHANGED,             /**< Keymap changed due to a system event such as aninput language or keyboard layout change.*/

    /* Mouse events */
    MOUSE_MOTION,               /**< Mouse moved */
    MOUSE_BUTTON_DOWN,          /**< Mouse button pressed */
    MOUSE_BUTTON_UP,            /**< Mouse button released */
    MOUSE_WHEEL,                /**< Mouse wheel motion */

    /* Joystick events */
    JOY_AXIS_MOTION,            /**< Joystick axis motion */
    JOY_BALL_MOTION,            /**< Joystick trackball motion */
    JOY_HAT_MOTION,             /**< Joystick hat position change */
    JOY_BUTTON_DOWN,            /**< Joystick button pressed */
    JOY_BUTTON_UP,              /**< Joystick button released */
    JOY_DEVICE_ADDED,           /**< A new joystick has been inserted into the system */
    JOY_DEVICE_REMOVED,         /**< An opened joystick has been removed */

    /* Touch events */
    FINGER_DOWN,
    FINGER_UP,
    FINGER_MOTION,

    /* Audio hotplug events */
    AUDIO_DEVICE_ADDED,             /**< A new audio device is available */
    AUDIO_DEVICE_REMOVED,           /**< An audio device has been removed. */

    /* User events */
    USER_EVENT
}

class Queue<T>
{
	private data:Array<T> = new Array<T>();
	push = (item:T) => this.data.push(item);
	pop = (): T | undefined => this.data.shift();
}

class CommonEvent
{
    type:number = EventType.FIRST_EVENT;
    constructor(type:number = EventType.FIRST_EVENT)
    {this.type = type;}
}

class WindowEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< WINDOW_EVENT */ 
    event:number = null;                    /**< WindowEventID */
    data1 = null;                           /**< event dependent data */
    data2 = null;                           /**< event dependent data */
    constructor(type:number = EventType.FIRST_EVENT,event:number = null,data1 = null,data2 = null)
    {super(type);this.type = type;this.event = event;this.data1 = data1;this.data2 = data2;}
}

class DisplayEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< DISPLAY_EVENT */
    diplay:number = null;                   /**< The display layer index */
    event:number = null;                    /**< DisplayEventID */
    data1 = null;
    constructor(type:number = EventType.FIRST_EVENT,display:number = null,event:number = null,data1 = null)
    {super(type);this.type = type;this.diplay = display;this.event = event;this.data1 = data1;}
}

class _KeyboardEvent_ extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< KEY_DOWN or KEY_UP */
    state:number = null;                    /**< PRESSED or RELEASED */
    key_code:number = null;                 /**< The key that was pressed or released */
    constructor(type:number = EventType.FIRST_EVENT,state:number = null,key_code:number = null)
    {
        super(type);
        this.state = state;
        this.key_code = key_code;
    }
}

class MouseMotionEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< MOUSE_MOTION */
    which:number = null;                    /**< The mouse instance id */
    state:number = null;                    /**< The current button state */
    x:number = null;                        /**< X coordinate, relative to window */
    y:number = null;                        /**< Y coordinate, relative to window */
    x_rel:number = null;                    /**< The relative motion in the X direction */
    y_rel:number = null;                    /**< The relative motion in the Y direction */
    constructor(type:number = EventType.FIRST_EVENT,which:number = null,state:number = null,x:number = null,y:number = null,x_rel:number = null,y_rel:number = null)
    {
        super(type);
        this.type = type;
        this.which = which;
        this.state = state;
        this.x = x;
        this.y = y;
        this.x_rel = x_rel;
        this.y_rel = y_rel;
    }
}

class MouseButtonEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< MOUSE_BUTTON_DOWN or MOUSE_BUTTON_UP */
    which:number = null;                    /**< The mouse instance id */
    button:number = null;                   /**< The mouse button index */
    state:number = null;                    /**< PRESSED or RELEASED */
    clicks:number = null;                   /**< 1 for single-click, 2 for double-click, etc. */
    x:number = null;                        /**< X coordinate, relative to window */
    y:number = null;                        /**< Y coordinate, relative to window */
    constructor(type:number = EventType.FIRST_EVENT,which:number = null,button:number = null,state:number = null,
        clicks:number = null,x:number = null,y:number = null)
    {
        super(type);
        this.type = type;
        this.which = which;
        this.button = button;
        this.state = state;
        this.clicks = clicks;
        this.x = x;
        this.y = y;
    }
}

class _MouseWheelEvent_ extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< MOUSE_WHEEL */
    which:number = null;                    /**< The mouse instance id */
    x:number = null;                        /**< The amount scrolled horizontally, positive to the right and negative to the left */
    y:number = null;                        /**< The amount scrolled vertically, positive away from the user and negative toward the user */
    constructor(type:number = EventType.FIRST_EVENT)
    {
        super(type);
    }
}

class JoyAxisEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< JOY_AXIS_MOTION */
    which:JoystickID = null;                /**< The joystick instance id */
    axis:number = null;                     /**< The joystick axis index */
    value:number = null;                    /**< The axis value (range: -32768 to 32767) */
    constructor(type:number = EventType.FIRST_EVENT,which:number = null,axis:number = null,value:number = null)
    {
        super(type);
        this.type = type;
        this.which = which;
        this.axis = axis;
        this.value = value;
    }
}

class JoyBallEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< JOY_BALL_MOTION */
    which:JoystickID = null;                /**< The joystick instance id */
    ball:number = null;                     /**< The joystick trackball index */
    x_rel:number = null;                    /**< The relative motion in the X direction */
    y_rel:number = null;                    /**< The relative motion in the Y direction */
    constructor(type:number = EventType.FIRST_EVENT,which:number = null,ball:number = null,x_rel:number = null,y_rel:number = null)
    {
        super(type);
        this.type = type;
        this.which = which;
        this.ball = ball;
        this.x_rel = x_rel;
        this.y_rel = y_rel;
    }
}

class JoyHatEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< JOY_HAT_MOTION */
    which:JoystickID = null;                /**< The joystick instance id */
    hat:number = null;                      /**< The joystick hat index */
    value:number = null;                    /**< The hat position value.
                                            *   HAT_LEFTUP     HAT_UP          HAT_RIGHTUP
                                            *   HAT_LEFT       HAT_CENTERED    HAT_RIGHT
                                            *   HAT_LEFTDOWN   HAT_DOWN        HAT_RIGHTDOWN
                                            *
                                            *   Note that zero means the POV is centered.
                                            */
    constructor(type:number = EventType.FIRST_EVENT,which:number = null,hat:number = null,value:number = null)
    {
        super(type);
        this.type = type;
        this.which = which;
        this.hat = hat;
        this.value = value;
    }
}

class JoyButtonEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< JOY_BUTTON_DOWN or JOY_BUTTON_UP */
    which:JoystickID = null;                /**< The joystick instance id */
    button:number = null;                   /**< The joystick button index */
    state:number = null;                    /**< PRESSED or RELEASED */
    constructor(type:number = EventType.FIRST_EVENT,which:number = null,button:number = null,state:number = null)
    {
        super(type);
        this.type = type;
        this.which = which;
        this.button = button;
        this.state = state;
    }
}

class JoyDeviceEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;
    which:number = null;                    /**< The joystick device index for the ADDED event, instance id for the REMOVED event */
    constructor(type:number = EventType.FIRST_EVENT,which:number = null)
    {
        super(type);
        this.type = type;
        this.which = which;
    }
}


//class ControllerAxisEvent
//{
//    type:number;        /**< CONTROLLER_AXIS_MOTION */
//    axis:number;        /**< The controller axis (GameControllerAxis) */
//    value:number;       /**< The axis value (range: -32768 to 32767) */
//}

class FingerTouchEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< FINGER_MOTION or FINGER_DOWN or FINGER_UP */
    touch_id:TouchID = null;                /**< The touch device id */
    finger_id:FingerID = null;
    x:number = null;                        /**< Normalized in the range 0...1 */
    y:number = null;                        /**< Normalized in the range 0...1 */
    dx:number = null;                       /**< Normalized in the range -1...1 */
    dy:number = null;                       /**< Normalized in the range -1...1 */
    pressure:number = null;                 /**< Normalized in the range 0...1 */
    constructor(type:number = EventType.FIRST_EVENT,touch_id:TouchID = null,finger_id:FingerID = null,
        x:number = null,y:number = null,dx:number = null,dy:number = null,pressure:number = null)
    {
        super(type);
        this.type = type;
        this.touch_id = touch_id;
        this.finger_id = finger_id;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.pressure = pressure;
    }
}

class User_Event extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;
    code:number = null;
    data1 = null;
    data2 = null;
    constructor(type:number = EventType.FIRST_EVENT,code:number = null,data1 = null,data2 = null)
    {
        super(type);
        this.type = type;
        this.code = code;
        this.data1 = data1;
        this.data2 = data2;
    }
}


class EventManager
{
    /*所有事件都会到这*/
    static Event:EventManager = new EventManager(); //

    type:EventType = EventType.FIRST_EVENT;                         //EventType
    common_event:CommonEvent = new CommonEvent();                   //
    window_event:WindowEvent = new WindowEvent();                   //
    display_event:DisplayEvent = new DisplayEvent();                //
    keyboard_event:_KeyboardEvent_ = new _KeyboardEvent_();         //
    mouse_motion_event:MouseMotionEvent = new MouseMotionEvent();   //
    mouse_button_event:MouseButtonEvent = new MouseButtonEvent();   //
    mouse_wheel_event:_MouseWheelEvent_ = new _MouseWheelEvent_();  //
    joy_axis_event:JoyAxisEvent = new JoyAxisEvent();               //
    joy_ball_event:JoyBallEvent = new JoyBallEvent();               //
    joy_hat_event:JoyHatEvent = new JoyHatEvent();                  //
    joy_button_event:JoyButtonEvent = new JoyButtonEvent();         //
    joy_device_event:JoyDeviceEvent = new JoyDeviceEvent();         //
    finger_touch_event:FingerTouchEvent = new FingerTouchEvent();   //
    user_event:User_Event = new User_Event();                       //用户事件

    private queue:Queue<EventType> = new Queue<EventType>();
    private queue_event:Queue<CommonEvent> = new Queue<CommonEvent>();

    constructor()
    {
        addEventListener("mousemove",Mouse.Motion);
        addEventListener("mousedown",Mouse.ButtonDwon);
        addEventListener("mouseup",Mouse.ButtonUp);
        addEventListener("mousewheel",Mouse.Wheel);
        addEventListener("touchstart",FingerTouch.Start);
        addEventListener("touchmove",FingerTouch.Motion);
        addEventListener("touchend",FingerTouch.End);
        addEventListener("keydown",Keyboard.KeyDown);
        addEventListener("keyup",Keyboard.KeyUp);
        addEventListener("keypress",Keyboard.KeyPress);
    }

    /**
     * 
     * @param event 要送入事件队列的事件
     */
    static AddEventA(event:EventManager)
    {
        EventManager.Event.queue.push(event.type);
        switch (event.type)
        {
            case EventType.WINDOW_EVENT:
                EventManager.Event.queue_event.push(event.window_event);
                break;

            case EventType.DISPLAY:
                EventManager.Event.queue_event.push(event.display_event);
                break;

            case EventType.KEY_DOWN || EventType.KEY_UP || EventType.KEYMAP_CHANGED:
                EventManager.Event.queue_event.push(event.keyboard_event) ;
                break

            case EventType.MOUSE_MOTION:
                EventManager.Event.queue_event.push(event.mouse_motion_event);
                break;

            case EventType.MOUSE_BUTTON_DOWN || EventType.MOUSE_BUTTON_UP:
                EventManager.Event.queue_event.push(event.mouse_button_event);
                break;

            case EventType.MOUSE_WHEEL:
                EventManager.Event.queue_event.push(event.mouse_wheel_event);
                break;

            case EventType.FINGER_MOTION || EventType.FINGER_DOWN || EventType.FINGER_UP:
                EventManager.Event.queue_event.push(event.finger_touch_event);
                break;

            case EventType.USER_EVENT:
                EventManager.Event.queue_event.push(event.user_event);
                break;

            default:
                EventManager.Event.queue_event.push(event.common_event);
                break;
        }
    }

    /**
     * 送事件入事件队列
     * 
     * @param type 事件类型
     * @param event 事件类型对应的事件
     */
    static AddEventB(type:EventType,event)
    {
        const e = new EventManager();
        e.type = type;
        switch (e.type)
        {
            case EventType.WINDOW_EVENT:
                e.window_event = event;
                break;
            
            case EventType.DISPLAY:
                e.display_event = event;
                break;
    
            case EventType.KEY_DOWN || EventType.KEY_UP || EventType.KEYMAP_CHANGED:
                e.keyboard_event = event;
                break
    
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
        EventManager.AddEventA(e);
    }

    /**
     * 送入用户事件，要把user_event设置好
     * 
     * @param event 要送入事件队列的用户事件
     */
    static PushEvent(event:EventManager)
    {
        EventManager.Event.queue.push(EventType.USER_EVENT);
        EventManager.Event.queue_event.push(event.user_event);
    }

    private ClearEvent()
    {
        switch (this.type)
        {
        case EventType.WINDOW_EVENT:
            this.window_event = new WindowEvent();
            break;

        case EventType.DISPLAY:
            this.display_event = new DisplayEvent();
            break;

        case EventType.KEY_DOWN || EventType.KEY_UP || EventType.KEYMAP_CHANGED:
            this.keyboard_event = new _KeyboardEvent_();
            break

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
        switch (EventManager.Event.type)
        {
        case EventType.WINDOW_EVENT:
            EventManager.Event.window_event = new WindowEvent();
            break;

        case EventType.DISPLAY:
            EventManager.Event.display_event = new DisplayEvent();
            break;

        case EventType.KEYBOARD_EVENT || EventType.KEY_DOWN || EventType.KEY_UP || EventType.KEYMAP_CHANGED:
            EventManager.Event.keyboard_event = new _KeyboardEvent_();
            break

        case EventType.MOUSE_MOTION:
            EventManager.Event.mouse_motion_event = new MouseMotionEvent();
            break;

        case EventType.MOUSE_BUTTON_DOWN || EventType.MOUSE_BUTTON_UP:
            EventManager.Event.mouse_button_event = new MouseButtonEvent();
            break;

        case EventType.MOUSE_WHEEL:
            EventManager.Event.mouse_wheel_event = new _MouseWheelEvent_();
            break;

        case EventType.FINGER_MOTION || EventType.FINGER_DOWN || EventType.FINGER_UP:
            EventManager.Event.finger_touch_event = new FingerTouchEvent();
            break;

        case EventType.USER_EVENT:
            EventManager.Event.user_event = new User_Event();
            break;

        default:
            EventManager.Event.common_event = new CommonEvent();
            break;
        }
        */
    }

    /**
     * 等待事件，若有事件则返回真
     */
    static WaitEvent() : boolean
    {
        const type = EventManager.Event.queue.pop();
        if (type != undefined)
        {
            EventManager.Event.ClearEvent();
            EventManager.Event.type = type;
            switch (type)
            {
                case EventType.WINDOW_EVENT:
                    EventManager.Event.window_event = EventManager.Event.queue_event.pop() as WindowEvent;
                    break;

                case EventType.DISPLAY:
                    EventManager.Event.display_event = EventManager.Event.queue_event.pop() as DisplayEvent;
                    break;

                case EventType.KEY_DOWN || EventType.KEY_UP || EventType.KEYMAP_CHANGED:
                    EventManager.Event.keyboard_event = EventManager.Event.queue_event.pop() as _KeyboardEvent_;
                    break

                case EventType.MOUSE_MOTION:
                    EventManager.Event.mouse_motion_event = EventManager.Event.queue_event.pop() as MouseMotionEvent;
                    break;

                case EventType.MOUSE_BUTTON_DOWN || EventType.MOUSE_BUTTON_UP:
                    EventManager.Event.mouse_button_event = EventManager.Event.queue_event.pop() as MouseButtonEvent;
                    break;

                case EventType.MOUSE_WHEEL:
                    EventManager.Event.mouse_wheel_event = EventManager.Event.queue_event.pop() as _MouseWheelEvent_;
                    break;

                case EventType.FINGER_MOTION || EventType.FINGER_DOWN || EventType.FINGER_UP:
                    EventManager.Event.finger_touch_event = EventManager.Event.queue_event.pop() as FingerTouchEvent;
                    break;

                case EventType.USER_EVENT:
                    EventManager.Event.user_event = EventManager.Event.queue_event.pop() as User_Event;
                    break;

                default:
                    EventManager.Event.common_event = EventManager.Event.queue_event.pop();
                    break;
            }

            return true;
        }

        return false;
    }

    
}




