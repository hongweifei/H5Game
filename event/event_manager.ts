

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
    state:number;   /**< The current button state */
    x:number;       /**< X coordinate, relative to window */
    y:number;       /**< Y coordinate, relative to window */
    x_rel:number;   /**< The relative motion in the X direction */
    y_rel:number;   /**< The relative motion in the Y direction */
}

class MouseButtonEvent
{
    type:number;    /**< MOUSE_BUTTON_DOWN or MOUSE_BUTTON_UP */
    button:number;  /**< The mouse button index */
    state:number;   /**< PRESSED or RELEASED */
    clicks:number;  /**< 1 for single-click, 2 for double-click, etc. */
    x:number;       /**< X coordinate, relative to window */
    y:number;       /**< Y coordinate, relative to window */
}

class _MouseWheelEvent_
{
    type:number;    /**< MOUSE_WHEEL */
    x:number;       /**< The amount scrolled horizontally, positive to the right and negative to the left */
    y:number;       /**< The amount scrolled vertically, positive away from the user and negative toward the user */
}

class JoyAxisEvent
{
    type:number;        /**< JOY_AXIS_MOTION */
}

class JoyBallEvent
{
    type:number;        /**< JOY_BALL_MOTION */
}

class JoyHatEvent
{
    type:number;        /**< JOY_HAT_MOTION */
}

class EventType
{
    /**< Unused (do not remove) */
    static FIRSTEVENT = 0;

    /**< User-requested quit */
    static QUIT = 1;

    /* Display events */
    static DISPLAY = 2;             /**< Display state change */

    /* Window events */
    static WINDOW_EVENT = 3;        /**< Window state change */

    /* Keyboard events */
    static KEYBOARD_EVENT = 4;
    static KEY_DOWN = 5;            /**< Key pressed */
    static KEY_UP = 6;              /**< Key released */
    static TEXT_EDITING = 7;        /**< Keyboard text editing (composition) */
    static TEXT_INPUT = 8;          /**< Keyboard text input */
    static KEYMAP_CHANGED = 9;      /**< Keymap changed due to a system event such as aninput language or keyboard layout change.*/

    /* Mouse events */
    static MOUSE_MOTION = 10;           /**< Mouse moved */
    static MOUSE_BUTTON_DOWN = 11;      /**< Mouse button pressed */
    static MOUSE_BUTTON_UP = 12;        /**< Mouse button released */
    static MOUSE_WHEEL = 13;            /**< Mouse wheel motion */

    /* Joystick events */
    static JOY_AXIS_MOTION = 14;        /**< Joystick axis motion */
    static JOY_BALL_MOTION = 15;        /**< Joystick trackball motion */
    static JOY_HAT_MOTION = 16;         /**< Joystick hat position change */
    static JOY_BUTTON_DOWN = 17;        /**< Joystick button pressed */
    static JOY_BUTTON_UP = 18;          /**< Joystick button released */
    static JOY_DEVICE_ADDED = 19;       /**< A new joystick has been inserted into the system */
    static JOY_DEVICE_REMOVED = 20;     /**< An opened joystick has been removed */

    /* Audio hotplug events */
    static AUDIO_DEVICE_ADDED = 21;     /**< A new audio device is available */
    static AUDIO_DEVICE_REMOVED = 22;   /**< An audio device has been removed. */

    /* Touch events */
    static FINGER_DOWN = 23;
    static FINGER_UP = 24;
    static FINGER_MOTION = 25;

    /* User events */
    static USER_EVENT = 26;
}


