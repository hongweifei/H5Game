

class Game
{
    scene:Scene;
    renderer:Renderer;
    event:EventManager;
    player:Character;

    protected FPS:number = 30;
    protected interval:number = 1000 / this.FPS;
    protected time_start:number = Date.now();

    constructor()
    {
        this.scene = new Scene("scene");
        this.scene.AddLayer(new Layer(null,"layer1"));
        this.renderer = new Renderer(this.scene);
        this.event = new EventManager();
        this.event.Enable(EventManagerMOD.KEYBOARD,EventManagerMOD.KEYBOARD_KAIOS);
        this.player = new Character("player","./img/avatar/man/stand_or_walk/right1.png");

        if (window.screen.height == 320)
            this.scene.GetLayer().SetHeight("280");
    }

    Start()
    {
        //this.player = new Character("player","./img/avatar/man/stand_or_walk/right1.png");
        this.MainLoop();
    }

    Render(fps:number)
    {
        this.renderer.Clear();
        this.renderer.DrawFillText("FPS:" + fps,100,100);
        this.player.Render(this.renderer);

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
                            this.player.y -= this.player.speed;
                            break;
                        case Keyboard.S:
                            this.player.y += this.player.speed;
                            break;
                        case Keyboard.A:
                            this.player.x -= this.player.speed;
                            break;
                        case Keyboard.D:
                            this.player.x += this.player.speed;
                            break;
                        case Keyboard_KaiOS.ARROW_UP:
                            this.player.y -= this.player.speed;
                            break;
                        case Keyboard_KaiOS.ARROW_DOWN:
                            this.player.y += this.player.speed;
                            break;
                        case Keyboard_KaiOS.ARROW_LEFT:
                            this.player.x -= this.player.speed;
                            break;
                        case Keyboard_KaiOS.ARROW_RIGHT:
                            this.player.x += this.player.speed;
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


    MainLoop()
    {
        requestAnimationFrame(this.MainLoop.bind(this));

        let now = Date.now();
        let delta = now - this.time_start;
        if (delta > this.interval)
        {
            this.time_start = now - (delta % this.interval);
            let fps = delta * this.interval;
            if (fps > this.FPS)
                fps = this.FPS;
            this.Render(fps);
        }
    }

}













