

class Game
{
    scene:Scene;
    renderer:Renderer;
    img = new Image()
    x = 0;
    y = 0;

    constructor()
    {
        this.scene = new Scene("scened");
        this.scene.AddLayer(new Layer(null,"layer1"));
        this.renderer = new Renderer(this.scene);
    }

    Start()
    {
        this.img.src = "./asset/avatar/男剑士/待机、走路/右侧1.png";
        this.MainLoop();
    }

    private MainLoop()
    {
        this.renderer.Clear();
        this.renderer.DrawImageA(this.img,this.x,this.y);

        //console.log("mainloop");
        if (EventManager.WaitEvent())
        {
            switch (EventManager.Event.type)
            {
                case EventType.MOUSE_MOTION:
                    console.log(EventManager.Event.mouse_motion_event.x);
                    console.log(EventManager.Event.mouse_motion_event.y);
                    break;
                
                case EventType.KEY_DOWN:
                    if (EventManager.Event.keyboard_event.key_code == Keyboard.W)
                        this.y -= 10;
                    if (EventManager.Event.keyboard_event.key_code == Keyboard.S)
                        this.y += 10;
                    if (EventManager.Event.keyboard_event.key_code == Keyboard.A)
                        this.x -= 10;
                    if (EventManager.Event.keyboard_event.key_code == Keyboard.D)
                        this.x += 10;
                    break;
                
                default:
                    break;
            }
        }

        requestAnimationFrame(this.MainLoop.bind(this));
    }
}
