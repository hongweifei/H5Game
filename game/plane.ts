




enum BulletDirection
{
	UP,
	DOWN,
	LEFT,
	RIGHT
}

class Bullet
{
	protected x:number;
	protected y:number;
	protected width:number;
	protected height:number;
	
	public dx:number = 0;
	public dy:number = 0;
	
	protected speed:number = 10;
	protected direction:BulletDirection = BulletDirection.UP;//< BulletDirection.*

	constructor(x:number = 0,y:number = 0,width:number = 0,height:number = 0,speed:number = 10)
	{
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = speed;
	}


	SetX(x:number) {this.x = x;}
	SetY(y:number) {this.y = y;}
	GetX() : number {return this.x;}
	GetY() : number {return this.y;}


	SetWidth(width:number) {this.width = width;}
	SetHeight(height:number) {this.height = height;}
	GetWidth() : number {return this.width;}
	GetHeight() : number {return this.height;}
	
	
	IsCollision(left:number,right:number,top:number,bottom:number) : boolean
	{
		/*java swidthing 使用
		if(this.x <= right && this.x >= left &&
			((this.y >= top && this.y <= bottom) ||
			(this.y + this.height >= top && this.y + this.height <= bottom)))
			return true;
		
		if(this.x + this.width >= left && this.x + this.width <= right &&
			((this.y >= top && this.y <= bottom) ||
			(this.y + this.height >= top && this.y + this.height <= bottom)))
			return true;
		*/
		
		/*libgdx 使用*/
		if(this.x < right && this.x > left &&
			((this.y < top && this.y > bottom) ||
			(this.y + this.height < top && this.y + this.height > bottom)))
			return true;
			
		if(this.x + this.width > left && this.x + this.width < right &&
			((this.y < top && this.y > bottom) ||
			(this.y + this.height < top && this.y + this.height > bottom)))
			return true;
		
		return false;
	}
	GetSpeed() : number {return this.speed;}
	
	/**
	 * 
	 * @param direction BulletDirection.*
	 */
	SetDirection(direction:number) {this.direction = direction;}
	GetDirection() : BulletDirection {return this.direction;}
	
	
	updata()
	{
		/*
		switch(this.direction)
		{
		case BulletDirection.UP:
			this.y += this.speed;
			break;
		case BulletDirection.DOWN:
			this.y -= this.speed;
			break;
		case BulletDirection.LEFT:
			this.x -= this.speed;
			break;
		case BulletDirection.RIGHT:
			this.x += this.speed;
			break;
		}
		*/
		
		this.x += this.dx;
		this.y += this.dy;
		this.dx = 0;
		this.dy = 0;
	}

}





enum PlaneType
{
	TYPE_NONE,
	TYPE_PLAYER,
	TYPE_ENEMY
}

enum PlaneState
{
	MOVE,
	DEAD,
	VISIBLE
}


class Plane
{
	
	protected type:PlaneType = PlaneType.TYPE_NONE;
	protected x:number;
	protected y:number;
	protected width:number;
	protected height:number;
	
	public dx:number = 0;
	public dy:number = 0;
	
	protected speed:number = 5;
	
	protected move:boolean = false;//< 移动
	protected dead:boolean = false;//< 死亡
	protected visible:boolean = true;//< 可视
	
	
	
	constructor(x:number = 0,y:number = 0,w:number = 0,h:number = 0)
	{
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
	}
	
	/**
	 * 
	 * @param state_type Plane.State.*
	 * @param state true or false
	 */
	SetState(state_type:PlaneState,state:boolean)
	{
		switch(state_type)
		{
		case PlaneState.MOVE:
			this.move = state;
			break;
		case PlaneState.DEAD:
			this.dead = state;
			break;
		case PlaneState.VISIBLE:
			this.visible = state;
			break;
		}
	}
	
	/**
	 * 
	 * @param state_type Plane.State.*
	 * @return
	 */
	GetState(state_type:PlaneState) : boolean
	{
		switch(state_type)
		{
		case PlaneState.MOVE:
			return this.move;
		case PlaneState.DEAD:
			return this.dead;
		case PlaneState.VISIBLE:
			return this.visible;
		}
		
		return false;
	}
	
	
	SetX(x:number) {this.x = x;}
	SetY(y:number) {this.y = y;}
	GetX() : number {return this.x;}
	GetY() : number {return this.y;}
	
	SetWidth(w:number) {this.width = w;}
	SetHeight(h:number) {this.height = h;}
	GetWidth() : number {return this.width;}
	GetHeight() : number {return this.height;}
	
	SetSpeed(speed:number) {this.speed = speed;}
	GetSpeed() : number {return this.speed;}
	
	
	IsCollision(left:number,right:number,top:number,bottom:number) : boolean
	{
		/*java swing 使用
		if(this.x <= right && this.x >= left &&
			((this.y >= top && this.y <= bottom) ||
			(this.y + this.height >= top && this.y + this.height <= bottom)))
			return true;
		
		if(this.x + this.width >= left && this.x + this.width <= right &&
			((this.y >= top && this.y <= bottom) ||
			(this.y + this.height >= top && this.y + this.height <= bottom)))
			return true;
		*/
		
		/*libgdx 使用*/
		if(this.x <= right && this.x >= left &&
			((this.y <= top && this.y >= bottom) ||
			(this.y + this.height <= top && this.y + this.height >= bottom)))
			return true;
			
		if(this.x + this.width >= left && this.x + this.width <= right &&
			((this.y <= top && this.y >= bottom) ||
			(this.y + this.height <= top && this.y + this.height >= bottom)))
			return true;
		
		return false;
	}
	
	
	updata()
	{
		if(this.dx != 0 || this.dy != 0)
			this.move = true;
		else
			this.move = false;
		
		
		this.x += this.dx;
		this.y += this.dy;
		this.dx = 0;
		this.dy = 0;
	}
}




class Enemy extends Plane
{
	
	
	constructor(x:number,y:number,w:number,h:number)
	{
		super(x,y,w,h);
		this.type = PlaneType.TYPE_ENEMY;
	}
	
}


