

class Game
{
    scene:GL.Scene;
    renderer:GL.Renderer;

    constructor()
    {
        this.scene = new GL.Scene("scened",800,600);
        this.renderer = new GL.Renderer(this.scene);
    }

    Start()
    {
        this.renderer.ClearColor(0,0,0,1);
        this.MainLoop();
    }

    private MainLoop()
    {
        this.renderer.Clear(GL.COLOR_BUFFER_BIT);

        console.log("mainloop");

        requestAnimationFrame(this.MainLoop.bind(this));
    }
}
