

class Game
{
    scene:Scene;
    renderer:Renderer;
    x = 0;

    constructor()
    {
        this.scene = new Scene("scened");
        this.scene.AddLayer(new Layer(null,"layer1"));
        this.renderer = new Renderer(this.scene);
    }

    Start()
    {
        this.MainLoop();
    }

    private MainLoop()
    {
        const e:EventManager = new EventManager();
        e.type = EventType.DISPLAY;
        e.display_event.type = EventType.DISPLAY;
        EventManager.AddEventA(e);
        
        this.renderer.Clear();
        this.renderer.DrawFillRect(this.x,10,10,10);
        this.x++;

        console.log("mainloop");

        requestAnimationFrame(this.MainLoop.bind(this));
    }
}
