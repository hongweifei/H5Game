

class Game
{
    scene:GL.Scene;
    renderer:GL.Renderer;

    constructor()
    {
        this.scene = new GL.Scene("scened");
        this.renderer = new GL.Renderer(this.scene);
    }

    Start()
    {
        this.MainLoop();
    }

    private MainLoop()
    {
        this.renderer.Clear(GL.COLOR_BUFFER_BIT);
        this.renderer.ClearColor(1,0,0,0);
        this.renderer.Finish();
        console.log("mainloop");
    }
}
