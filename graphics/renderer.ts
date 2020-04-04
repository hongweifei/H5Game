


class Renderer
{
    protected context:CanvasRenderingContext2D[] = []

    /**
     * 
     * @param scene 渲染器所渲染的场景，默认null
     */
    constructor(scene:Scene = null)
    {
        if (scene)
            this.SetScene(scene)
    }

    /**
     * 获取上下文
     * 
     * @param index 索引，默认0
     */
    GetContext(index:number = 0) : CanvasRenderingContext2D {return this.context[index];}

    /**
     * 获取所有上下文
     */
    GetContests() : CanvasRenderingContext2D[] {return this.context;}

    /**
     * 设置字体
     * 
     * @param font 字体
     * @param index 字体适用图层
     */
    SetFont(font:string,index:number = 0) : void
    {this.context[index].font = font;}

    /**
     * 设置场景
     * 
     * @param scene 渲染器所渲染的场景
     */
    SetScene(scene:Scene)
    {
        for (let i = 0; i < scene.GetLayerNumber(); i++)
        {
            this.context.push(scene.GetCanvas(i).getContext("2d"));
            this.context[i].font = "15px Arial";
            //this.context[i].fillStyle = "";
        }
    }

    /**
     * 画实心矩形
     * 
     * @param x 横坐标
     * @param y 纵坐标
     * @param width 宽
     * @param height 高
     * @param index 图层索引，默认0
     */
    DrawFillRect(x:number,y:number,width:number,height:number,index:number = 0) : void
    {this.context[index].fillRect(x,y,width,height);}

    /**
     * 画空心矩形
     * 
     * @param x 横坐标
     * @param y 纵坐标
     * @param width 宽
     * @param height 高
     * @param index 图层索引，默认0
     */
    DrawStrokeRect(x:number,y:number,width:number,height:number,index:number = 0) : void
    {this.context[index].strokeRect(x,y,width,height);}

    /**
     * 画实心路径
     * 
     * @param path 路径
     * @param index 图层索引，默认0
     */
    DrawFillPath(path:Path,index:number = 0) : void
    {this.DrawPath(path,"fill",index);}

    /**
     * 画空心路径
     * 
     * @param path 路径
     * @param index 图层索引，默认0
     */
    DrawStrokePath(path:Path,index:number = 0) : void
    {this.DrawPath(path,"stroke",index);}

    /**
     * 画路径
     * 
     * @param path 路径
     * @param style 样式，实心或空心
     * @param index 图层索引，默认0
     */
    DrawPath(path:Path,style:string,index:number = 0) : void
    {
        let start_point = path.GetStartPoint();
        this.context[index].moveTo(start_point[0],start_point[1]);

        for (let i = 0; i < path.GetSize() - 1; i++)
        {
            this.context[index].lineTo(path.GetPoint(i)[0],path.GetPoint(i)[1]);
        }

        if(style == "fill" || style == "Fill" || style == "FILL")
            this.context[index].fill();
        else if(style == "stroke" || style == "Stroke" || style == "STROKE")
            this.context[index].stroke();
    }

    /**
     * 画实心文本
     * 
     * @param text 要画的文本
     * @param x 横坐标
     * @param y 纵坐标
     * @param index 图层索引，默认0
     */
    DrawFillText(text:string,x:number,y:number,index:number = 0) : void
    {this.context[index].fillText(text,x,y);}

    /**
     * 画空心文本
     * 
     * @param text 要画的文本
     * @param x 横坐标
     * @param y 纵坐标
     * @param index 图层索引，默认0
     */
    DrawStrokeText(text:string,x:number,y:number,index:number = 0) : void
    {this.context[index].strokeText(text,x,y);}

    /**
     * 画图片,不支持设置宽高
     * 
     * @param image 要画的图片
     * @param x 横坐标
     * @param y 纵坐标
     * @param index 图层索引，默认0
     */
    DrawImageA(image:CanvasImageSource,x:number,y:number,index:number = 0) : void
    {this.context[index].drawImage(image,x,y);}

    /**
     * 画图片，可设置宽高
     * 
     * @param image 要画的图片
     * @param x 横坐标
     * @param y 纵坐标
     * @param width 要画的宽
     * @param height 要画的高
     * @param index 图层索引，默认0
     */
    DrawImageB(image:CanvasImageSource,x:number,y:number,
        width:number,height:number,index:number = 0) : void
    {this.context[index].drawImage(image,x,y,width,height);}

    /**
     * 画图片，可设置宽高，可画裁剪后的图片
     * 
     * @param image 要画的图片
     * @param sx 开始剪切的 x 坐标位置
     * @param sy 开始剪切的 y 坐标位置
     * @param swidth 被剪切图像的宽度
     * @param sheight 被剪切图像的高度
     * @param dx 横坐标
     * @param dy 纵坐标
     * @param dw 要画的宽
     * @param dh 要画的高
     * @param index 图层索引，默认0
     */
    DrawImageC(image:CanvasImageSource,sx:number,sy:number,swidth:number,sheight:number,
        dx:number,dy:number,dw:number,dh:number,index:number = 0) : void
    {this.context[index].drawImage(image,sx,sy,swidth,sheight,dx,dy,dw,dh);}
    
}


namespace GL
{
    export let COLOR_BUFFER_BIT = WebGLRenderingContext.COLOR_BUFFER_BIT;
    export let DEPTH_BITS = WebGLRenderingContext.DEPTH_BITS;

    export class Renderer
    {
        protected gl_context : WebGLRenderingContext;

        constructor(scene:GL.Scene = null)
        {
            if(scene)
                this.SetScene(scene)
        }

        /**
         * 获取上下文
         */
        GetContext(index:number) : WebGLRenderingContext {return this.gl_context;}

        /**
         * 设置场景
         * 
         * @param scene 渲染器所渲染的场景
         */
        SetScene(scene:GL.Scene) : void
        {
            
            this.gl_context = scene.GetCanvas().getContext("webgl2");
            if(this.gl_context == undefined || this.gl_context == null)
                this.gl_context = scene.GetCanvas().getContext("webgl");
            if(this.gl_context == undefined || this.gl_context == null)
                throw new Error("Unable to initialize WebGL!");
            /*
            for (let i = 0; i < scene.GetLayerNumber(); i++)
            {
                this.gl_context.push(scene.GetCanvas(i).getContext("webgl2"));
                if(this.gl_context[i] == undefined || this.gl_context[i] == null)
                    this.gl_context.push(scene.GetCanvas(i).getContext("webgl"));
                if(this.gl_context[i] == undefined || this.gl_context[i] == null)
                    throw new Error("Unable to initialize WebGL!");
            }
            */
        }

        /**
         * 清空缓冲区
         * 
         * @param mask 缓冲区类型，可用GL.COLOR_BUFFER_BIT,GL.DEPTH_BITS等 
         * @param index 图层索引，默认0
         */
        Clear(mask:number|GLbitfield) : void
        {
            this.gl_context.clear(mask);
        }

        ClearColor(red: number, green: number, blue: number, alpha: number) : void
        {
            this.gl_context.clearColor(red,green,blue,alpha);
        }

        Finish()
        {
            this.gl_context.finish();
        }
    }
}
