

class Game
{
    scene:Scene;
    renderer:Renderer;
    event:EventManager;
    FPS:number = 30;
    interval:number = 1000 / this.FPS;
    time_start:number = Date.now();
    img = new Image();
    x = 0;
    y = 0;

    constructor()
    {
        this.scene = new Scene("scene");
        this.scene.AddLayer(new Layer(null,"layer1"));
        this.renderer = new Renderer(this.scene);
        this.event = new EventManager();
        this.event.Enable(EventManagerMOD.KEYBOARD,EventManagerMOD.KEYBOARD_KAIOS);

        if (window.screen.height == 320)
            this.scene.GetLayer().SetHeight("280");
    }

    Start()
    {
        this.img.src = "./asset/image/avatar/男剑士/待机、走路/右侧1.png";
        this.MainLoop();
    }

    Render(delta:number)
    {
        let fps = delta * this.interval;
        if (fps > this.FPS)
            fps = this.FPS;

        this.renderer.Clear();
        this.renderer.DrawFillText("FPS:" + fps,100,100);
        this.renderer.DrawImageA(this.img,this.x,this.y);
    }

    private MainLoop()
    {
        requestAnimationFrame(this.MainLoop.bind(this));

        let now = Date.now();
        let delta = now - this.time_start;
        if (delta > this.interval)
        {
            this.time_start = now - (delta % this.interval);
            this.Render(delta);
        }

        //console.log("mainloop");
        if (this.event.WaitEvent())
        {
            switch (this.event.type)
            {
                case EventType.MOUSE_MOTION:
                    //console.log(this.event.mouse_motion_event.x);
                    //console.log(this.event.mouse_motion_event.y);
                    break;
                
                case EventType.KEY_DOWN:
                    switch (this.event.keyboard_event.key_code)
                    {
                        case Keyboard.W:
                            this.y -= 10;
                            break;
                        case Keyboard.S:
                            this.y += 10;
                            break;
                        case Keyboard.A:
                            this.x -= 10;
                            break;
                        case Keyboard.D:
                            this.x += 10;
                            break;
                        case Keyboard_KaiOS.ARROW_UP:
                            this.y -= 10;
                            break;
                        case Keyboard_KaiOS.ARROW_DOWN:
                            this.y += 10;
                            break;
                        case Keyboard_KaiOS.ARROW_LEFT:
                            this.x -= 10;
                            break;
                        case Keyboard_KaiOS.ARROW_RIGHT:
                            this.x += 10;
                            break;

                        default:
                            //console.log("KeyDown");
                            //console.log("KeyCode:" + this.event.keyboard_event.key_code);
                            break;
                    }
                    break;
                
                default:
                    break;
            }
        }
        
    }
}













