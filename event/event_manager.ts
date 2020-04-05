

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
    KEYBOARD_EVENT,
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

class EventManager
{
    /*所有事件都会到这*/
    static Event:EventManager = new EventManager(); //

    type:number = EventType.FIRST_EVENT;            //EventType
    common_event:CommonEvent = null;                //
    window_event:WindowEvent = null;                //
    display_event:DisplayEvent = null;              //
    keyboard_event:_KeyboardEvent_ = null;          //
    mouse_motion_event:MouseMotionEvent = null;     //
    mouse_button_event:MouseButtonEvent = null;     //
    mouse_wheel_event:_MouseWheelEvent_ = null;     //
    joy_axis_event:JoyAxisEvent = null;             //
    joy_ball_event:JoyBallEvent = null;             //
    joy_hat_event:JoyHatEvent = null;               //
    joy_button_event:JoyButtonEvent = null;         //
    joy_device_event:JoyDeviceEvent = null;         //
    finger_touch_event:FingerTouchEvent = null;     //
    user_event:User_Event = null;                   //用户事件

    private queue:Queue<EventType> = new Queue<EventType>();
    private queue_event:Queue<CommonEvent> = new Queue<CommonEvent>();

    /**
     * 
     * @param event 要送入事件队列的事件
     */
    static AddEvent(event:EventManager)
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

            case EventType.KEYBOARD_EVENT || EventType.KEY_DOWN || EventType.KEY_UP || EventType.KEYMAP_CHANGED:
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
     * 送入用户事件，要把user_event设置好
     * 
     * @param event 要送入事件队列的用户事件
     */
    static PushEvent(event:EventManager)
    {
        EventManager.Event.queue.push(EventType.USER_EVENT);
        EventManager.Event.queue_event.push(event.user_event);
    }

    /**
     * 等待事件，若有事件则返回真
     */
    static WaitEvent() : boolean
    {
        const type = EventManager.Event.queue.pop();
        if (type != undefined)
        {
            switch (type)
            {
                case EventType.WINDOW_EVENT:
                    EventManager.Event.window_event = EventManager.Event.queue_event.pop() as WindowEvent;
                    break;

                case EventType.DISPLAY:
                    EventManager.Event.display_event = EventManager.Event.queue_event.pop() as DisplayEvent;
                    break;

                case EventType.KEYBOARD_EVENT || EventType.KEY_DOWN || EventType.KEY_UP || EventType.KEYMAP_CHANGED:
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

class CommonEvent
{
    type:number = EventType.FIRST_EVENT;
}

class WindowEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< WINDOW_EVENT */ 
    event:number = null;                    /**< WindowEventID */
    data1:string = null;                    /**< event dependent data */
    data2:string = null;                    /**< event dependent data */
}

class DisplayEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< DISPLAY_EVENT */
    diplay:number = null;                   /**< The display layer index */
    event:number = null;                    /**< DisplayEventID */
    data1:string = null;       
}

class _KeyboardEvent_ extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< KEY_DOWN or KEY_UP */
    state:number = null;                    /**< PRESSED or RELEASED */
    key_code:number = null;                 /**< The key that was pressed or released */
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
}

class _MouseWheelEvent_ extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< MOUSE_WHEEL */
    which:number = null;                    /**< The mouse instance id */
    x:number = null;                        /**< The amount scrolled horizontally, positive to the right and negative to the left */
    y:number = null;                        /**< The amount scrolled vertically, positive away from the user and negative toward the user */
}

class JoyAxisEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< JOY_AXIS_MOTION */
    which:JoystickID = null;                /**< The joystick instance id */
    axis:number = null;                     /**< The joystick axis index */
    value:number = null;                    /**< The axis value (range: -32768 to 32767) */
}

class JoyBallEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< JOY_BALL_MOTION */
    which:JoystickID = null;                /**< The joystick instance id */
    ball:number = null;                     /**< The joystick trackball index */
    x_rel:number = null;                    /**< The relative motion in the X direction */
    y_rel:number = null;                    /**< The relative motion in the Y direction */
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
}

class JoyButtonEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;    /**< JOY_BUTTON_DOWN or JOY_BUTTON_UP */
    which:JoystickID = null;                /**< The joystick instance id */
    button:number = null;                   /**< The joystick button index */
    state:number = null;                    /**< PRESSED or RELEASED */
}

class JoyDeviceEvent extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;
    which:number = null;                    /**< The joystick device index for the ADDED event, instance id for the REMOVED event */
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
}

class User_Event extends CommonEvent
{
    type:number = EventType.FIRST_EVENT;
    code:number = null;
    data1 = null;
    data2 = null;
}



