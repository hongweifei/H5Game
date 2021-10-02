

/// <reference path="scene.ts" />
/// <reference path="path.ts" />



namespace flown
{

    export class Renderer
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
         * 清空某一图层
         * 
         * @param index 图层索引,默认0
         */
        Clear(index:number = 0)
        {
            this.context[index].clearRect(0,0,window.innerWidth,window.innerHeight);
        }

        /**
         * 清空所有图层
         */
        ClearAll()
        {
            for (let i = 0; i < this.context.length; i++)
                this.context[i].clearRect(0,0,window.innerWidth,window.innerHeight);
        }

        /**
         * 删除某一图层上的部分内容
         * 
         * @param x 要删除部分的横坐标
         * @param y 要删除部分的纵坐标
         * @param width 要删除部分的宽
         * @param height 要删除部分的高
         * @param index 要删除部分内容的图层索引，默认0
         */
        ClearRect(x:number,y:number,width:number,height:number,index:number = 0)
        {this.context[index].clearRect(x,y,width,height);}

        /**
         * 删除某所有图层上的部分内容
         * 
         * @param x 要删除部分的横坐标
         * @param y 要删除部分的纵坐标
         * @param width 要删除部分的宽
         * @param height 要删除部分的高
         */
        ClearAllRect(x:number,y:number,width:number,height:number)
        {
            for (let i = 0; i < this.context.length; i++)
                this.context[i].clearRect(x,y,width,height);
        }

        /**
         * 用某一颜色覆盖图层
         * 
         * @param color 要覆盖的颜色
         * @param index 图层索引，默认0
         */
        ClearColor(color:string = "#FFFFFF",index:number = 0)
        {
            const last_style = this.context[index].fillStyle;
            this.context[index].fillStyle = color;
            this.context[index].fillRect(0,0,window.innerWidth,window.innerHeight);
            this.context[index].fillStyle = last_style;
        }

        /**
         * 用某一颜色覆盖所有图层
         * 
         * @param color 要覆盖的颜色
         */
        ClearAllColor(color:string = "#FFFFFF")
        {
            for (let i = 0; i < this.context.length; i++)
                this.ClearColor(color,i);
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
         * 画实心圆
         * 
         * @param x 圆的中心的 x 坐标
         * @param y 圆的中心的 y 坐标
         * @param r 圆的半径
         * @param start_angle 起始角，以弧度计（弧的圆形的三点钟位置是 0 度）
         * @param end_angle 结束角，以弧度计
         * @param anticlockwise 可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
         * @param index 图层索引，默认0
         */
        DrawFillCircle(x:number,y:number,r:number,start_angle:number,end_angle:number,anticlockwise:boolean = false,index:number = 0)
        {
            this.context[index].arc(x,y,r,start_angle,end_angle);
            this.context[index].fill();
        }

        /**
         * 画空心圆
         * 
         * @param x 圆的中心的 x 坐标
         * @param y 圆的中心的 y 坐标
         * @param r 圆的半径
         * @param start_angle 起始角，以弧度计（弧的圆形的三点钟位置是 0 度）
         * @param end_angle 结束角，以弧度计
         * @param anticlockwise 可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
         * @param index 图层索引，默认0
         */
        DrawSrtokeCircle(x:number,y:number,r:number,start_angle:number,end_angle:number,anticlockwise:boolean = false,index:number = 0)
        {
            this.context[index].arc(x,y,r,start_angle,end_angle);
            this.context[index].stroke();
        }

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

}

namespace GL
{
    export const COLOR_BUFFER_BIT = WebGLRenderingContext.COLOR_BUFFER_BIT;
    export const DEPTH_BITS = WebGLRenderingContext.DEPTH_BITS;
    export const DEPTH_TEST = WebGLRenderingContext.DEPTH_TEST;

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

            this.gl_context.viewport(0,0,scene.GetCanvas().width,scene.GetCanvas().height);

            this.shader = new Shader(this.gl_context,vertex_shader_source,fragment_shader_source);
            //this.shader.Use();

            this.gl_context.useProgram(this.shader.GetProgram());

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

        InitVertexBuffer(vertices:Float32Array,size:number) : WebGLBuffer
        {
            let buffer = this.gl_context.createBuffer();

            this.gl_context.bindBuffer(this.gl_context.ARRAY_BUFFER,buffer);// 绑定缓冲区对象到目标
            this.BufferDataB(this.gl_context.ARRAY_BUFFER,vertices,this.gl_context.STATIC_DRAW);// 将数据写入到缓冲区对象

            const aVertexPosition = this.gl_context.getAttribLocation(this.shader.GetProgram(),"aVertexPosition");

            if (aVertexPosition < 0)
                console.log('获取attribute变量失败！');

            this.gl_context.vertexAttribPointer(aVertexPosition,size,this.gl_context.FLOAT,false,0,0);// 将缓冲区对象分配给attribute变量
            this.gl_context.enableVertexAttribArray(aVertexPosition);// 开启attribute变量

            this.gl_context.bindBuffer(this.gl_context.ARRAY_BUFFER,undefined);
            this.gl_context.disableVertexAttribArray(aVertexPosition);

            return buffer;
        }

        /**
         * 画矩形
         * 
         * @param x 横坐标
         * @param y 纵坐标
         * @param width 宽
         * @param height 高
         */
        DrawFillRect(x:number,y:number,width:number,height:number)
        {
            const vertices = new Float32Array([x,y,1,x+width,y,1,x+width,y+height,1,x,y+height,1]);
            let buffer = this.InitVertexBuffer(vertices,2);

            this.gl_context.bindBuffer(this.gl_context.ARRAY_BUFFER,buffer);
            this.gl_context.vertexAttribPointer(0, 2, this.gl_context.FLOAT, false, 0, 0);
            this.gl_context.enableVertexAttribArray(0)

            this.DrawArrays(this.gl_context.TRIANGLE_STRIP,0,4);
        }

        /**
         * 清空缓冲区
         * 
         * @param mask 一个用于指定需要清除的缓冲区的 GLbitfield 。可接受复合值,可能的值有：
         * gl.COLOR_BUFFER_BIT   //颜色缓冲区
         * gl.DEPTH_BUFFER_BIT   //深度缓冲区
         * gl.STENCIL_BUFFER_BIT  //模板缓冲区
         */
        Clear(mask:number|GLbitfield) : void{this.gl_context.clear(mask);}

        /**
         * 
         * @param red 指定清除缓冲时的红色值。默认值：0。
         * @param green 指定清除缓冲时的绿色值。默认值：0。
         * @param blue 指定清除缓冲时的蓝色值。默认值：0。
         * @param alpha 指定清除缓冲时的不透明度。默认值：0。
         */
        ClearColor(red: number = 0, green: number = 0, blue: number = 0, alpha: number = 0) : void
        {this.gl_context.clearColor(red,green,blue,alpha);}

        /**
         * 
         * @param depth 深度值的设定，是当清除深度缓冲区的时候使用。默认值为1。
         */
        ClearDepth(depth:number = 1){this.gl_context.clearDepth(depth);}

        /**
         * 
         * @param cap 让WebGL开启某种特性，可能的值：
         * gl.BLEND 	激活片元的颜色融合计算.
         * gl.CULL_FACE 	激活多边形正反面剔除.
         * gl.DEPTH_TEST 	激活深度比较，并且更新深度缓冲区。
         * gl.DITHER 	激活在写入颜色缓冲区之前，抖动颜色成分。
         * gl.POLYGON_OFFSET_FILL 	激活添加多边形片段的深度值偏移。
         * gl.SAMPLE_ALPHA_TO_COVERAGE 	激活通过alpha值决定的临时覆盖值计算。（抗锯齿）
         * gl.SAMPLE_COVERAGE 	激活使用临时覆盖值，位和运算片段的覆盖值。
         * gl.SCISSOR_TEST 	激活剪裁测试，即丢弃在剪裁矩形范围外的片段。
         * gl.STENCIL_TEST 	激活模板测试并且更新模板缓冲区。
         */
        Enable(cap:number){this.gl_context.enable(cap);}

        /**
         * 
         * @param cap 
         */
        Disable(cap:number){this.gl_context.disable(cap);}

        /**
         * 
         */
        Finish(){this.gl_context.finish();}

        /**
         * 
         * @param target 指定Buffer绑定点(目标).可取
         * gl.ARRAY_BUFFER:包含顶点属性的Buffer,如顶点坐标,纹理坐标数据或顶点颜色数据。
         * gl.ELEMENT_ARRAY_BUFFER: 用于元素索引的Buffer。
         * 
         * @param size 设定Buffer对象的数据存储区大小。
         * @param usage 指定数据存储区的使用方法。
         * gl.STATIC_DRAW:缓冲区的内容可能经常使用,而不会经常更改.内容被写入缓冲区,但不被读取。
         * gl.DYNAMIC_DRAW:缓冲区的内容可能经常被使用,并且经常更改.内容被写入缓冲区,但不被读取。
         * gl.STREAM_DRAW:缓冲区的内容可能不会经常使用.内容被写入缓冲区,但不被读取。
         */
        BufferDataA(target:number,size:number,usage:number)
        {this.gl_context.bufferData(target,size,usage);}

        /**
         * 
         * @param target 指定Buffer绑定点(目标).可取
         * gl.ARRAY_BUFFER:包含顶点属性的Buffer,如顶点坐标,纹理坐标数据或顶点颜色数据。
         * gl.ELEMENT_ARRAY_BUFFER: 用于元素索引的Buffer。
         * 
         * @param data 一个ArrayBuffer，SharedArrayBuffer 或者 ArrayBufferView 类型的数组对象，将被复制到Buffer的数据存储区。
         * 如果为null，数据存储区仍会被创建，但是不会进行初始化和定义。
         * 
         * @param usage 指定数据存储区的使用方法。
         * gl.STATIC_DRAW:缓冲区的内容可能经常使用,而不会经常更改.内容被写入缓冲区,但不被读取。
         * gl.DYNAMIC_DRAW:缓冲区的内容可能经常被使用,并且经常更改.内容被写入缓冲区,但不被读取。
         * gl.STREAM_DRAW:缓冲区的内容可能不会经常使用.内容被写入缓冲区,但不被读取。
         */
        BufferDataB(target:number,data:BufferSource = null,usage:number)
        {this.gl_context.bufferData(target,data,usage);}
        
        /**
         * 
         * @param mode 指定绘制图元的方式,可能值如下:
         * gl.POINTS: 绘制一系列点。
         * gl.LINE_STRIP: 绘制一个线条。即，绘制一系列线段，上一点连接下一点。
         * gl.LINE_LOOP: 绘制一个线圈。即，绘制一系列线段，上一点连接下一点，并且最后一点与第一个点相连。
         * gl.LINES: 绘制一系列单独线段。每两个点作为端点，线段之间不连接。
         * gl.TRIANGLE_STRIP：绘制一个三角带。
         * gl.TRIANGLE_FAN：绘制一个三角扇。
         * gl.TRIANGLES: 绘制一系列三角形。每三个点作为顶点。
         * 
         * @param first 指定从哪个点开始绘制。
         * @param count 指定绘制需要使用到多少个点。
         */
        DrawArrays(mode:number,first:number,count:number){this.gl_context.drawArrays(mode,first,count);}

        /**
         * 
         * @param mode 指定绘制图元的方式,可能值如下:
         * gl.POINTS: 绘制一系列点。
         * gl.LINE_STRIP: 绘制一个线条。即，绘制一系列线段，上一点连接下一点。
         * gl.LINE_LOOP: 绘制一个线圈。即，绘制一系列线段，上一点连接下一点，并且最后一点与第一个点相连。
         * gl.LINES: 绘制一系列单独线段。每两个点作为端点，线段之间不连接。
         * gl.TRIANGLE_STRIP：绘制一个三角带。
         * gl.TRIANGLE_FAN：绘制一个三角扇。
         * gl.TRIANGLES: 绘制一系列三角形。每三个点作为顶点。
         * 
         * @param count 指定要渲染的元素数量.
         * @param type 指定元素数组缓冲区中的值的类型。可能的值是: 
         * gl.UNSIGNED_BYTE
         * gl.UNSIGNED_SHORT
         * 
         * @param offset 指定元素数组缓冲区中的偏移量。必须是给定类型大小的有效倍数.
         */
        DrawElements(mode:number,count:number,type:number,offset:number){this.gl_context.drawElements(mode,count,type,offset);}
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

        GetProgram()
        {
            return this.program;
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
