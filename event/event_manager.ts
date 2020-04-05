

class EventManager
{
    /*所有事件都会到这*/
    static Event:EventManager;

    type:number;                    //EventType
    common_event:CommonEvent;
    window_event:WindowEvent;
    display_event:DisplayEvent;
    keyboard_event:_KeyboardEvent_;
    mouse_motion_event:MouseMotionEvent;
    mouse_button_event:MouseButtonEvent;
    mouse_wheel_event:_MouseWheelEvent_;
    joy_axis_event:JoyAxisEvent;
    joy_ball_event:JoyBallEvent;
    joy_hat_event:JoyHatEvent;
    joy_button_event:JoyButtonEvent;
    joy_device_event:JoyDeviceEvent;
    finger_touch_event:FingerTouchEvent;
}

class CommonEvent
{
    type:number;
}

class WindowEvent
{
    type:number;        /**< WINDOW_EVENT */ 
    event:number;       /**< WindowEventID */
    data1:string;       /**< event dependent data */
    data2:string;       /**< event dependent data */
}

class DisplayEvent
{
    type:number;        /**< DISPLAY_EVENT */
    diplay:number;      /**< The display layer index */
    event:number;       /**< DisplayEventID */
    data1:string;       
}

class _KeyboardEvent_
{
    type:number;        /**< KEY_DOWN or KEY_UP */
    state:number;       /**< PRESSED or RELEASED */
    key_code:number;    /**< The key that was pressed or released */
}

class MouseMotionEvent
{
    type:number;    /**< MOUSE_MOTION */
    which:number;   /**< The mouse instance id */
    state:number;   /**< The current button state */
    x:number;       /**< X coordinate, relative to window */
    y:number;       /**< Y coordinate, relative to window */
    x_rel:number;   /**< The relative motion in the X direction */
    y_rel:number;   /**< The relative motion in the Y direction */
}

class MouseButtonEvent
{
    type:number;    /**< MOUSE_BUTTON_DOWN or MOUSE_BUTTON_UP */
    which:number;   /**< The mouse instance id */
    button:number;  /**< The mouse button index */
    state:number;   /**< PRESSED or RELEASED */
    clicks:number;  /**< 1 for single-click, 2 for double-click, etc. */
    x:number;       /**< X coordinate, relative to window */
    y:number;       /**< Y coordinate, relative to window */
}

class _MouseWheelEvent_
{
    type:number;    /**< MOUSE_WHEEL */
    which:number;   /**< The mouse instance id */
    x:number;       /**< The amount scrolled horizontally, positive to the right and negative to the left */
    y:number;       /**< The amount scrolled vertically, positive away from the user and negative toward the user */
}

class JoyAxisEvent
{
    type:number;        /**< JOY_AXIS_MOTION */
    which:JoystickID;   /**< The joystick instance id */
    axis:number;        /**< The joystick axis index */
    value:number;       /**< The axis value (range: -32768 to 32767) */
}

class JoyBallEvent
{
    type:number;        /**< JOY_BALL_MOTION */
    which:JoystickID;   /**< The joystick instance id */
    ball:number;        /**< The joystick trackball index */
    x_rel:number;       /**< The relative motion in the X direction */
    y_rel:number;       /**< The relative motion in the Y direction */
}

class JoyHatEvent
{
    type:number;        /**< JOY_HAT_MOTION */
    which:JoystickID;   /**< The joystick instance id */
    hat:number;         /**< The joystick hat index */
    value:number;       /**< The hat position value.
                         *   HAT_LEFTUP     HAT_UP          HAT_RIGHTUP
                         *   HAT_LEFT       HAT_CENTERED    HAT_RIGHT
                         *   HAT_LEFTDOWN   HAT_DOWN        HAT_RIGHTDOWN
                         *
                         *   Note that zero means the POV is centered.
                         */
}

class JoyButtonEvent
{
    type:number;        /**< JOY_BUTTON_DOWN or JOY_BUTTON_UP */
    which:JoystickID;   /**< The joystick instance id */
    button:number;      /**< The joystick button index */
    state:number;       /**< PRESSED or RELEASED */
}

class JoyDeviceEvent
{
    type:number;
    which:number;       /**< The joystick device index for the ADDED event, instance id for the REMOVED event */
}


//class ControllerAxisEvent
//{
//    type:number;        /**< CONTROLLER_AXIS_MOTION */
//    axis:number;        /**< The controller axis (GameControllerAxis) */
//    value:number;       /**< The axis value (range: -32768 to 32767) */
//}

class FingerTouchEvent
{
    type:number;            /**< FINGER_MOTION or FINGER_DOWN or FINGER_UP */
    touch_id:TouchID;       /**< The touch device id */
    finger_id:FingerID;
    x:number;               /**< Normalized in the range 0...1 */
    y:number;               /**< Normalized in the range 0...1 */
    dx:number;              /**< Normalized in the range -1...1 */
    dy:number;              /**< Normalized in the range -1...1 */
    pressure:number;        /**< Normalized in the range 0...1 */
}

enum EventType
{
    /**< Unused (do not remove) */
    FIRSTEVENT = 0,

    /**< User-requested quit */
    QUIT = 0x100,

    /* Display events */
    DISPLAY = 0x150,            /**< Display state change */

    /* Window events */
    WINDOW_EVENT = 0x200,       /**< Window state change */

    /* Keyboard events */
    //KEYBOARD_EVENT,
    KEY_DOWN = 0x300,           /**< Key pressed */
    KEY_UP,                     /**< Key released */
    TEXT_EDITING,               /**< Keyboard text editing (composition) */
    TEXT_INPUT,                 /**< Keyboard text input */
    KEYMAP_CHANGED,             /**< Keymap changed due to a system event such as aninput language or keyboard layout change.*/

    /* Mouse events */
    MOUSE_MOTION = 0x400,       /**< Mouse moved */
    MOUSE_BUTTON_DOWN,          /**< Mouse button pressed */
    MOUSE_BUTTON_UP,            /**< Mouse button released */
    MOUSE_WHEEL,                /**< Mouse wheel motion */

    /* Joystick events */
    JOY_AXIS_MOTION = 0x600,    /**< Joystick axis motion */
    JOY_BALL_MOTION,            /**< Joystick trackball motion */
    JOY_HAT_MOTION,             /**< Joystick hat position change */
    JOY_BUTTON_DOWN,            /**< Joystick button pressed */
    JOY_BUTTON_UP,              /**< Joystick button released */
    JOY_DEVICE_ADDED,           /**< A new joystick has been inserted into the system */
    JOY_DEVICE_REMOVED,         /**< An opened joystick has been removed */

    /* Touch events */
    FINGER_DOWN = 0x700,
    FINGER_UP,
    FINGER_MOTION,

    /* Audio hotplug events */
    AUDIO_DEVICE_ADDED = 0x1000,    /**< A new audio device is available */
    AUDIO_DEVICE_REMOVED,           /**< An audio device has been removed. */

    /* User events */
    USER_EVENT = 0x8000
}



