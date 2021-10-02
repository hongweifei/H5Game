


class Sprite
{
    protected image;
    protected width:number;
    protected height:number;

    protected rect:Rect[] = new Array();

    constructor(sprite_path:string = "",width:number = 0,height:number = 0)
    {
        var that = this;
        this.image = new Image();
        this.image.src = sprite_path;
        this.image.onload = function(){
            if (width == 0 && height == 0)
            {
                that.width = this.width;
                that.height = this.height;
            }
            else
            {
                that.width = width;
                that.height = height;
            }
            that.rect.push(new Rect(0,0,this.width,this.height));
        }
        //this.rect.push(new Rect(0,0,this.width,this.height));
    }

    /**
     * 
     * @param path 图片路径
     */
    SetImage(path:string,width:number = 0,height:number = 0)
    {
        var that = this;
        this.image.src = path;
        this.image.onload = function(){
            if (width == 0 && height == 0)
            {
                that.SetWidth(this.width);
                that.SetHeight(this.height);
            }
            else
            {
                that.SetWidth(width);
                that.SetHeight(height);
            }
        }
    }

    /**
     * 
     * @param w 要设置的宽
     */
    SetWidth(w:number)
    {
        this.width = w;

        if (this.rect.length == 1)
            this.rect[0].w = this.width;
    }

    /**
     * 
     * @param h 要设置的高
     */
    SetHeight(h:number)
    {
        this.height = h;

        if (this.rect.length == 1)
            this.rect[0].h = this.height;
    }

    /**
     * 获取精灵图片，宽高
     */
    GetImage() : HTMLImageElement {return this.image;}
    GetWidth() : number {return this.width;}
    GetHeight() : number {return this.height;}

    /**
     * 分割精灵图片
     * 
     * @param start_x 水平偏移 
     * @param start_y 垂直偏移
     * @param w 宽
     * @param h 高
     * @param horizontal 行数
     * @param vertical 列数
     */
    InitRect(start_x:number,start_y:number,w:number,h:number,
        horizontal:number,vertical:number)
    {
        this.rect = [];
        this.width = w;
        this.height = h;

        for (let i = 0; i < vertical; i++)
        {
            for (let j = 0; j < horizontal; j++)
            {
                this.rect.push(new Rect(start_x + w * j,start_y + h * i,w,h));
            }
        }
    }

    /**
     * 渲染精灵
     * 
     * @param renderer 渲染器
     * @param x 横坐标
     * @param y 纵坐标
     * @param w 宽，默认精灵宽
     * @param h 高，默认精灵高
     * @param index rect索引，默认0
     */
    Render(renderer:Renderer,x:number,y:number,
    w:number = this.width,h:number = this.height,index:number = 0)
    {
        renderer.DrawImageC(this.image,this.rect[index].x,this.rect[index].y,
        this.rect[index].w,this.rect[index].h,x,y,w,h);

        /*
        if (this.rect != null)
        {
            renderer.DrawImageC(this.image,this.rect[index].x,this.rect[index].y,
            this.rect[index].w,this.rect[index].h,x,y,w,h);
        }
        else
            renderer.DrawImageB(this.image,x,y,this.width,this.height,0);
        */
    }
}
