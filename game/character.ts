

/// <reference path="../graphics/sprite.ts" />

class Character extends Flown.Sprite
{
	protected name:string;
	public speed:number = 10;
	public x = 0;
	public y = 0;

	constructor(name:string,img_path:string)
	{
		super(img_path);
		this.name = name;
	}

	Render(renderer:Flown.Renderer)
	{
		super.Render(renderer,this.x,this.y,this.width,this.height);
		renderer.DrawFillText(this.name,this.x,this.y);
	}
}





