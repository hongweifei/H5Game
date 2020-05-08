

class Game
{
    scene:Scene;
    renderer:Renderer;
    event:EventManaget;
    img = new Image()
    x = 0;
    y = 0;

    constructor()
    {
        this.scene = new Scene("scened");
        this.scene.AddLayer(new Layer(null,"layer1"));
        this.renderer = new Renderer(this.scene);
        this.event = new EventManager();
    }

    Start()
    {
        this.img.src = "./asset/image/avatar/男剑士/待机、走路/右侧1.png";
        this.MainLoop();
    }

    private MainLoop()
    {
        this.renderer.Clear();
        this.renderer.DrawImageA(this.img,this.x,this.y);

        //console.log("mainloop");
        if (this.event.WaitEvent())
        {
            switch (this.event.type)
            {
                case EventType.MOUSE_MOTION:
                    console.log(this.event.mouse_motion_event.x);
                    console.log(this.event.mouse_motion_event.y);
                    break;
                
                case EventType.KEY_DOWN:
                    if (this.event.keyboard_event.key_code == Keyboard.W)
                        this.y -= 10;
                    if (this.event.keyboard_event.key_code == Keyboard.S)
                        this.y += 10;
                    if (this.event.keyboard_event.key_code == Keyboard.A)
                        this.x -= 10;
                    if (this.event.keyboard_event.key_code == Keyboard.D)
                        this.x += 10;
                    break;
                
                default:
                    break;
            }
        }

        requestAnimationFrame(this.MainLoop.bind(this));
    }
}
