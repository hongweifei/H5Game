

/// <reference path="../event/event_manager.ts" />
/// <reference path="../graphics/scene.ts" />
/// <reference path="../graphics/layer.ts" />
/// <reference path="../graphics/renderer.ts" />
/// <reference path="character.ts" />
/// <reference path="plane.ts" />

class Game
{
    scene:flown.Scene;
    renderer:flown.Renderer;
    event:EventManager;
    player:Character;

    width:number;
    height:number;

    img = [];
    plane:Plane;
    plane_bullet:Array<Bullet> = [];
    enemy:Array<Enemy> = [];
    enemy_bullet:Array<Bullet> = [];
    protected point:number = 0;
    private game_pause:boolean = false;//< 暂停
    private game_over:boolean = false;


    protected FPS:number = 30;
    protected interval:number = 1000 / this.FPS;
    protected time_start:number = Date.now();

    constructor()
    {
        this.scene = new flown.Scene("scene");
        this.scene.AddLayer(new flown.Layer(null,"layer1"));
        this.renderer = new flown.Renderer(this.scene);
        this.event = new EventManager();
        this.event.Enable(EventManagerMOD.KEYBOARD,EventManagerMOD.KEYBOARD_KAIOS);
        this.player = new Character("player","./img/avatar/man/stand_or_walk/right1.png");

        if (window.screen.height == 320)
            this.scene.GetLayer().SetHeight("280");

        this.width = this.scene.GetLayer().GetWidth();
        this.height = this.scene.GetLayer().GetHeight();
    }

    Start()
    {
        //this.player = new Character("player","./img/avatar/man/stand_or_walk/right1.png");

        this.plane = new Plane(0,0,this.width / 10,this.height / 10);
        this.img.push(new Image());this.img.push(new Image());this.img.push(new Image());
        this.img[0].src = "img/bullet/bullet1.png";
        this.img[1].src = "img/plane/player.png";
        this.img[2].src = "img/plane/enemy1.png";

        this.DataInit();

        this.MainLoop();
    }


    DataInit()
    {
        this.plane.SetX(this.width / 2 - this.plane.GetWidth() / 2);
        this.plane.SetY(this.height / 10 * 9);
        this.plane.SetState(PlaneState.DEAD, false);
        this.plane_bullet = [];
        
        this.enemy = [];
        this.enemy_bullet = [];
        
        this.game_over = false;
        this.point = 0;
    }


    Fail()
    {

    }



    Render(fps:number)
    {
        
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
                        case Keyboard_KaiOS.ARROW_UP:
                            //this.player.y -= this.player.speed;
                            this.plane.dy -= this.plane.GetSpeed();
                            break;
                        case Keyboard.S:
                        case Keyboard_KaiOS.ARROW_DOWN:
                            //this.player.y += this.player.speed;
                            this.plane.dy += this.plane.GetSpeed();
                            break;
                        case Keyboard.A:
                        case Keyboard_KaiOS.ARROW_LEFT:
                            //this.player.x -= this.player.speed;
                            this.plane.dx -= this.plane.GetSpeed();
                            break;
                        case Keyboard.D:
                        case Keyboard_KaiOS.ARROW_RIGHT:
                            //this.player.x += this.player.speed;
                            this.plane.dx += this.plane.GetSpeed();
                            break;

                        case Keyboard_KaiOS.NUMBER_5:
                        case Keyboard_KaiOS.ENTER:
                            if(!this.plane.GetState(PlaneState.DEAD))
                                this.plane_bullet.push(
                                        new Bullet(
                                        this.plane.GetX() + this.plane.GetWidth() / 2 - this.width / 32,
                                        this.plane.GetY(),
                                        this.width / 16,
                                        this.height / 6,
                                        this.height / 30)
                                    );
                            else
                                this.DataInit();
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


        if(this.game_over || this.game_pause)
            return;

        this.renderer.Clear();
        this.renderer.DrawFillText("FPS:" + fps,100,100);
        //this.player.Render(this.renderer);


        //render
        var that = this;
        this.plane.updata();
        this.enemy.forEach(function(e,index){
            that.renderer.DrawImageB(that.img[2],e.GetX(), e.GetY(), e.GetWidth(), e.GetHeight());

            e.dy += e.GetSpeed();
            e.updata();
            
            let collision:boolean = false;
            

            that.plane_bullet.forEach(function(pb,index){
                collision = 
                        pb.IsCollision(e.GetX(),
                        e.GetX() + e.GetWidth(),
                        e.GetY() + e.GetHeight(),
                        e.GetY());
                
                if(collision)
                {
                    e.SetState(PlaneState.DEAD, true);
                    that.plane_bullet.splice(index,1);
                    this.point++;
                }
            });
            
            
            collision = that.plane.IsCollision(e.GetX(), 
                    e.GetX() + e.GetWidth(), 
                    e.GetY() + e.GetHeight(), 
                    e.GetY());
            
            if(collision)
                that.plane.SetState(PlaneState.DEAD, true);
            
            if(e.GetY() > that.height)
                e.SetState(PlaneState.DEAD, true);

            if (e.GetState(PlaneState.DEAD))
                that.enemy.splice(index,1);

        })

        this.plane_bullet.forEach(function(pb,index){
            that.renderer.DrawImageB(that.img[0],
                    pb.GetX(),
                    pb.GetY(),
                    pb.GetWidth(),
                    pb.GetHeight());

            if(pb != null)
            {
                pb.dy -= pb.GetSpeed();
                pb.updata();
            }
            
            
            /**子弹销毁*/
            if(pb != null && pb.GetY() > this.height)
            {
                that.plane_bullet.splice(index,1);
            }
        })
        
        this.renderer.DrawImageB(this.img[1],this.plane.GetX(), this.plane.GetY(), this.plane.GetWidth(), this.plane.GetHeight());
        
        this.renderer.DrawFillText("分数:" + this.point, 10, this.height - 10);
        this.renderer.DrawFillText("Points:" + this.point, 10, 20);



        //游戏逻辑相关

        /**敌机刷新*/
        if(this.enemy.length < 3 && this.width != 0)
        {
            let x = Math.random() * this.width;
            let y = 0;
            
            this.enemy.push(new Enemy(x,y,this.width / 10,this.height / 10));
        }
        
        
        if(this.plane.GetState(PlaneState.DEAD))
        {
            this.game_over = true;
            this.Fail();
        }


        if(this.game_over && !this.game_pause)
        {
            this.renderer.DrawFillText("GAME OVER",
                    this.width / 2 - 5 * 9,
                    this.height / 2 + 20);
            
            this.renderer.DrawFillText("请按Enter以重新开始游戏",
                    this.width / 2 - 7 * 12,
                    this.height / 2);
        }
        else if(!this.game_over && this.game_pause)
        {
            this.renderer.DrawFillText("游戏暂停中",
                    this.width / 2 - 7 * 5,
                    this.height / 2 + 20);
            
            this.renderer.DrawFillText("请按Enter键以继续游戏",
                    this.width / 2 - 7 * 8 - 5 * 3,
                    this.height / 2);
        }


    }


    MainLoop()
    {
        requestAnimationFrame(this.MainLoop.bind(this));

        let now = Date.now();
        let delta = now - this.time_start;

        let fps = 1000 / delta;
        if (fps > this.FPS)
            fps = this.FPS;

        if (delta > this.interval)
        {
            this.time_start = now - (delta % this.interval);
            this.Render(fps);
        }
    }

}













