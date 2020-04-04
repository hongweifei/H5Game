


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
    export const COLOR_BUFFER_BIT = WebGLRenderingContext.COLOR_BUFFER_BIT;
    export const DEPTH_BITS = WebGLRenderingContext.DEPTH_BITS;

    // Vertex shader program

    const vertex_shader_source = `
    attribute vec4 aVertexPosition;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    void main()
    {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }`;

    const fragment_shader_source = `void main(){gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);}`;


    export class Renderer
    {
        protected gl_context : WebGLRenderingContext;
        protected shader : Shader;

        constructor(scene:GL.Scene = null)
        {
            if(scene)
                this.SetScene(scene)
        }

        /**
         * 获取上下文
         */
        GetContext() : WebGLRenderingContext {return this.gl_context;}

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

            this.shader = new Shader(this.gl_context,vertex_shader_source,fragment_shader_source);
            this.shader.Use();

            this.gl_context.viewport(0,0,scene.GetCanvas().width,scene.GetCanvas().height);

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

        /**
         * 
         * @param red 红
         * @param green 绿
         * @param blue 蓝
         * @param alpha 透明
         */
        ClearColor(red: number, green: number, blue: number, alpha: number) : void
        {
            this.gl_context.clearColor(red,green,blue,alpha);
        }

        Finish()
        {
            this.gl_context.finish();
        }

        
        /**
         * 
         * @param vertices 
         * @param index 
         */
        /*
        private GetVerticesBuffer(vertices:number[],index:number = 0)
        {
            const buffer = this.gl_context.createBuffer();

            this.gl_context.bindBuffer(this.gl_context.ARRAY_BUFFER,buffer);
            this.gl_context.vertexAttribPointer(index,vertices.length/3,this.gl_context.FLOAT,false,0,0);
            this.gl_context.enableVertexAttribArray(index);
            this.gl_context.bufferData(this.gl_context.ARRAY_BUFFER,new Float32Array(vertices),this.gl_context.STATIC_DRAW);

            //this.gl_context.drawArrays(this.gl_context.ARRAY_BUFFER,0,vertices.length/3);

            this.gl_context.bindBuffer(this.gl_context.ARRAY_BUFFER,undefined);
            this.gl_context.disableVertexAttribArray(index);

            return buffer;
        }
        */
       
        /**
         * 
         * @param vertices 
         * @param index 
         */
        /*
        DrawVertices(vertices:number[],index:number = 0)
        {
            const buffer = this.GetVerticesBuffer(vertices,index);
            this.gl_context.bindBuffer(this.gl_context.ARRAY_BUFFER, buffer);
            this.gl_context.vertexAttribPointer(index, vertices.length/3, this.gl_context.FLOAT, false, 0, 0);
            this.gl_context.enableVertexAttribArray(0);
        }
        */
    }

    class Shader
    {
        private gl_context;
        private name:string
        private program:WebGLProgram;

        constructor(gl_context:WebGLRenderingContext,vertex_shader_source:string, fragment_shader_source:string)
        {
            this.gl_context = gl_context;
            this.program = this.InitShaderProgram(vertex_shader_source,fragment_shader_source);
        }

        /**
         * 
         * @param type 着色器类型
         * @param source 代码
         */
        LoadShader(type:number,source:string) : WebGLShader
        {
            const shader = this.gl_context.createShader(type);//创建一个新的着色器

            this.gl_context.shaderSource(shader, source);//将源代码发送到着色器   Send the source to the shader object
            this.gl_context.compileShader(shader);//一旦着色器获取到源代码就进行编译   Compile the shader program

            // See if it compiled successfully
            if (!this.gl_context.getShaderParameter(shader, this.gl_context.COMPILE_STATUS))
            {
                alert('An error occurred compiling the shaders: ' + this.gl_context.getShaderInfoLog(shader));
                this.gl_context.deleteShader(shader);
                return null;
            }

            return shader;
        }

        /**
         * 初始化着色器程序，让WebGL知道如何绘制我们的数据
         * 
         * @param vertex_shader_source 顶点着色器代码
         * @param fragment_shader_source 片段着色器代码
         */
        InitShaderProgram(vertex_shader_source:string, fragment_shader_source:string) : WebGLProgram
        {
            const vertex_shader = this.LoadShader(this.gl_context.VERTEX_SHADER, vertex_shader_source);
            const fragment_shader = this.LoadShader(this.gl_context.FRAGMENT_SHADER, fragment_shader_source);
        
            // 创建着色器程序
        
            const shader_program = this.gl_context.createProgram();
            this.gl_context.attachShader(shader_program, vertex_shader);
            this.gl_context.attachShader(shader_program, fragment_shader);
            this.gl_context.linkProgram(shader_program);
        
            // 创建失败， alert
            if (!this.gl_context.getProgramParameter(shader_program, this.gl_context.LINK_STATUS))
            {
                alert('Unable to initialize the shader program: ' + this.gl_context.getProgramInfoLog(shader_program));
                return null;
            }
        
            return shader_program;
        }

        /**
         * 使用Program
         */
        Use() : void
        {
            this.gl_context.useProgram(this.program);
        }
    }
}
