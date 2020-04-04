



let scene = new Scene("scene1");
let layer = new Layer();
let renderer = new Renderer();
let sprite:Sprite = new Sprite("./sprite.png");

scene.AddLayer(layer);
scene.AddLayer(new Layer());

renderer.SetScene(scene);

renderer.DrawFillText("Hello",100,100);
renderer.DrawFillText("World!!!",200,100,1);

sprite.Render(renderer,100,200);

window.onload = function () {
    let game = new Game();
}

