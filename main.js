var Layer = /** @class */ (function () {
    /**
     *
     * @param scene 图层所在场景，默认null
     * @param layer_id 图层id
     * @param width 图层宽
     * @param height 图层高
     */
    function Layer(scene, layer_id, width, height) {
        if (scene === void 0) { scene = null; }
        if (layer_id === void 0) { layer_id = "layer"; }
        if (width === void 0) { width = window.innerWidth; }
        if (height === void 0) { height = window.innerHeight; }
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("id", layer_id);
        this.canvas.setAttribute("width", width.toString());
        this.canvas.setAttribute("height", height.toString());
        this.canvas.setAttribute("style", "position: absolute");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        if (scene) {
            this.canvas.setAttribute("id", "layer" + scene.GetLayerNumber().toString());
            scene.AddLayer(this);
        }
    }
    /**
     *
     * @param id 设置图层的id
     */
    Layer.prototype.SetLayerId = function (id) { this.canvas.setAttribute("id", id); };
    /**
     * 获取图层的画布
     */
    Layer.prototype.GetCanvas = function () { return this.canvas; };
    return Layer;
}());
var Path = /** @class */ (function () {
    function Path(parameters) {
        this.start_x = 0;
        this.start_y = 0;
    }
    /**
     * 设置路径开始坐标
     *
     * @param x 路径起点横坐标
     * @param y 路径起点纵坐标
     */
    Path.prototype.SetStartPoint = function (x, y) { this.start_x = x; this.start_y = y; };
    /**
     * 给路径添加点
     *
     * @param x 要添加的点的横坐标
     * @param y 要添加的点的纵坐标
     */
    Path.prototype.AddPoint = function (x, y) { this.x.push(x); this.y.push(y); };
    /**
     * 在起点后插入一点
     *
     * @param x
     * @param y
     */
    Path.prototype.UnshiftPoint = function (x, y) { this.x.unshift(x); this.y.unshift(y); };
    /**
     * 给路径插入点
     *
     * @param x 要插入的点的横坐标
     * @param y 要插入的点的纵坐标
     * @param index 要插入的索引
     */
    Path.prototype.InsertPoint = function (x, y, index) {
        var points_x;
        var points_y;
        for (var i = index; i < this.x.length - index; i++) {
            points_x.push(this.x[i]);
            points_y.push(this.y[i]);
        }
        this.x[index] = x;
        this.y[index] = y;
        for (var i = index + 1; i < this.x.length - index; i++) {
            this.x[i] = points_x[i - (index + 1)];
            this.y[i] = points_y[i - (index + 1)];
        }
        this.x.push(points_x.pop());
        this.y.push(points_y.pop());
    };
    /**
     * 获取路径起点
     */
    Path.prototype.GetStartPoint = function () { var point = [this.start_x, this.start_y]; return point; };
    /**
     * 获取路径中的点，不包含起点
     *
     * @param index 索引
     */
    Path.prototype.GetPoint = function (index) { var point = [this.x[index], this.y[index]]; return point; };
    /**
     * 获取路径中点的数量
     */
    Path.prototype.GetSize = function () { return this.x.length + 1; };
    /**
     * 删除路径中的一个点
     *
     * @param index 要删除的点索引
     */
    Path.prototype.DeletePoint = function (index) { this.x.splice(index, 1); this.y.splice(index, 1); };
    return Path;
}());
var Rect = /** @class */ (function () {
    function Rect(x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    return Rect;
}());
var Renderer = /** @class */ (function () {
    /**
     *
     * @param scene 渲染器所渲染的场景，默认null
     */
    function Renderer(scene) {
        if (scene === void 0) { scene = null; }
        this.context = [];
        if (scene)
            this.SetScene(scene);
    }
    /**
     * 获取上下文
     *
     * @param index 索引，默认0
     */
    Renderer.prototype.GetContext = function (index) {
        if (index === void 0) { index = 0; }
        return this.context[index];
    };
    /**
     * 获取所有上下文
     */
    Renderer.prototype.GetContests = function () { return this.context; };
    /**
     * 设置字体
     *
     * @param font 字体
     * @param index 字体适用图层
     */
    Renderer.prototype.SetFont = function (font, index) {
        if (index === void 0) { index = 0; }
        this.context[index].font = font;
    };
    /**
     * 设置场景
     *
     * @param scene 渲染器所渲染的场景
     */
    Renderer.prototype.SetScene = function (scene) {
        for (var i = 0; i < scene.GetLayerNumber(); i++) {
            this.context.push(scene.GetCanvas(i).getContext("2d"));
            this.context[i].font = "15px Arial";
            //this.context[i].fillStyle = "";
        }
    };
    /**
     * 清空某一图层
     *
     * @param index 图层索引,默认0
     */
    Renderer.prototype.Clear = function (index) {
        if (index === void 0) { index = 0; }
        this.context[index].clearRect(0, 0, window.innerWidth, window.innerHeight);
    };
    /**
     * 清空所有图层
     */
    Renderer.prototype.ClearAll = function () {
        for (var i = 0; i < this.context.length; i++)
            this.context[i].clearRect(0, 0, window.innerWidth, window.innerHeight);
    };
    /**
     * 删除某一图层上的部分内容
     *
     * @param x 要删除部分的横坐标
     * @param y 要删除部分的纵坐标
     * @param width 要删除部分的宽
     * @param height 要删除部分的高
     * @param index 要删除部分内容的图层索引，默认0
     */
    Renderer.prototype.ClearRect = function (x, y, width, height, index) {
        if (index === void 0) { index = 0; }
        this.context[index].clearRect(x, y, width, height);
    };
    /**
     * 删除某所有图层上的部分内容
     *
     * @param x 要删除部分的横坐标
     * @param y 要删除部分的纵坐标
     * @param width 要删除部分的宽
     * @param height 要删除部分的高
     */
    Renderer.prototype.ClearAllRect = function (x, y, width, height) {
        for (var i = 0; i < this.context.length; i++)
            this.context[i].clearRect(x, y, width, height);
    };
    /**
     * 用某一颜色覆盖图层
     *
     * @param color 要覆盖的颜色
     * @param index 图层索引，默认0
     */
    Renderer.prototype.ClearColor = function (color, index) {
        if (color === void 0) { color = "#FFFFFF"; }
        if (index === void 0) { index = 0; }
        var last_style = this.context[index].fillStyle;
        this.context[index].fillStyle = color;
        this.context[index].fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context[index].fillStyle = last_style;
    };
    /**
     * 用某一颜色覆盖所有图层
     *
     * @param color 要覆盖的颜色
     */
    Renderer.prototype.ClearAllColor = function (color) {
        if (color === void 0) { color = "#FFFFFF"; }
        for (var i = 0; i < this.context.length; i++)
            this.ClearColor(color, i);
    };
    /**
     * 画实心矩形
     *
     * @param x 横坐标
     * @param y 纵坐标
     * @param width 宽
     * @param height 高
     * @param index 图层索引，默认0
     */
    Renderer.prototype.DrawFillRect = function (x, y, width, height, index) {
        if (index === void 0) { index = 0; }
        this.context[index].fillRect(x, y, width, height);
    };
    /**
     * 画空心矩形
     *
     * @param x 横坐标
     * @param y 纵坐标
     * @param width 宽
     * @param height 高
     * @param index 图层索引，默认0
     */
    Renderer.prototype.DrawStrokeRect = function (x, y, width, height, index) {
        if (index === void 0) { index = 0; }
        this.context[index].strokeRect(x, y, width, height);
    };
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
    Renderer.prototype.DrawFillCircle = function (x, y, r, start_angle, end_angle, anticlockwise, index) {
        if (anticlockwise === void 0) { anticlockwise = false; }
        if (index === void 0) { index = 0; }
        this.context[index].arc(x, y, r, start_angle, end_angle);
        this.context[index].fill();
    };
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
    Renderer.prototype.DrawSrtokeCircle = function (x, y, r, start_angle, end_angle, anticlockwise, index) {
        if (anticlockwise === void 0) { anticlockwise = false; }
        if (index === void 0) { index = 0; }
        this.context[index].arc(x, y, r, start_angle, end_angle);
        this.context[index].stroke();
    };
    /**
     * 画实心路径
     *
     * @param path 路径
     * @param index 图层索引，默认0
     */
    Renderer.prototype.DrawFillPath = function (path, index) {
        if (index === void 0) { index = 0; }
        this.DrawPath(path, "fill", index);
    };
    /**
     * 画空心路径
     *
     * @param path 路径
     * @param index 图层索引，默认0
     */
    Renderer.prototype.DrawStrokePath = function (path, index) {
        if (index === void 0) { index = 0; }
        this.DrawPath(path, "stroke", index);
    };
    /**
     * 画路径
     *
     * @param path 路径
     * @param style 样式，实心或空心
     * @param index 图层索引，默认0
     */
    Renderer.prototype.DrawPath = function (path, style, index) {
        if (index === void 0) { index = 0; }
        var start_point = path.GetStartPoint();
        this.context[index].moveTo(start_point[0], start_point[1]);
        for (var i = 0; i < path.GetSize() - 1; i++) {
            this.context[index].lineTo(path.GetPoint(i)[0], path.GetPoint(i)[1]);
        }
        if (style == "fill" || style == "Fill" || style == "FILL")
            this.context[index].fill();
        else if (style == "stroke" || style == "Stroke" || style == "STROKE")
            this.context[index].stroke();
    };
    /**
     * 画实心文本
     *
     * @param text 要画的文本
     * @param x 横坐标
     * @param y 纵坐标
     * @param index 图层索引，默认0
     */
    Renderer.prototype.DrawFillText = function (text, x, y, index) {
        if (index === void 0) { index = 0; }
        this.context[index].fillText(text, x, y);
    };
    /**
     * 画空心文本
     *
     * @param text 要画的文本
     * @param x 横坐标
     * @param y 纵坐标
     * @param index 图层索引，默认0
     */
    Renderer.prototype.DrawStrokeText = function (text, x, y, index) {
        if (index === void 0) { index = 0; }
        this.context[index].strokeText(text, x, y);
    };
    /**
     * 画图片,不支持设置宽高
     *
     * @param image 要画的图片
     * @param x 横坐标
     * @param y 纵坐标
     * @param index 图层索引，默认0
     */
    Renderer.prototype.DrawImageA = function (image, x, y, index) {
        if (index === void 0) { index = 0; }
        this.context[index].drawImage(image, x, y);
    };
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
    Renderer.prototype.DrawImageB = function (image, x, y, width, height, index) {
        if (index === void 0) { index = 0; }
        this.context[index].drawImage(image, x, y, width, height);
    };
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
    Renderer.prototype.DrawImageC = function (image, sx, sy, swidth, sheight, dx, dy, dw, dh, index) {
        if (index === void 0) { index = 0; }
        this.context[index].drawImage(image, sx, sy, swidth, sheight, dx, dy, dw, dh);
    };
    return Renderer;
}());
var GL;
(function (GL) {
    GL.COLOR_BUFFER_BIT = WebGLRenderingContext.COLOR_BUFFER_BIT;
    GL.DEPTH_BITS = WebGLRenderingContext.DEPTH_BITS;
    GL.DEPTH_TEST = WebGLRenderingContext.DEPTH_TEST;
    // Vertex shader program
    var vertex_shader_source = "\n    attribute vec4 aVertexPosition;\n\n    uniform mat4 uModelViewMatrix;\n    uniform mat4 uProjectionMatrix;\n\n    void main()\n    {\n        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n    }";
    var fragment_shader_source = "void main(){gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);}";
    var Renderer = /** @class */ (function () {
        function Renderer(scene) {
            if (scene === void 0) { scene = null; }
            if (scene)
                this.SetScene(scene);
        }
        /**
         * 获取上下文
         */
        Renderer.prototype.GetContext = function () { return this.gl_context; };
        /**
         * 设置场景
         *
         * @param scene 渲染器所渲染的场景
         */
        Renderer.prototype.SetScene = function (scene) {
            this.gl_context = scene.GetCanvas().getContext("webgl2");
            if (this.gl_context == undefined || this.gl_context == null)
                this.gl_context = scene.GetCanvas().getContext("webgl");
            if (this.gl_context == undefined || this.gl_context == null)
                throw new Error("Unable to initialize WebGL!");
            this.gl_context.viewport(0, 0, scene.GetCanvas().width, scene.GetCanvas().height);
            this.shader = new Shader(this.gl_context, vertex_shader_source, fragment_shader_source);
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
        };
        Renderer.prototype.InitVertexBuffer = function (vertices, size) {
            var buffer = this.gl_context.createBuffer();
            this.gl_context.bindBuffer(this.gl_context.ARRAY_BUFFER, buffer); // 绑定缓冲区对象到目标
            this.BufferDataB(this.gl_context.ARRAY_BUFFER, vertices, this.gl_context.STATIC_DRAW); // 将数据写入到缓冲区对象
            var aVertexPosition = this.gl_context.getAttribLocation(this.shader.GetProgram(), "aVertexPosition");
            if (aVertexPosition < 0)
                console.log('获取attribute变量失败！');
            this.gl_context.vertexAttribPointer(aVertexPosition, size, this.gl_context.FLOAT, false, 0, 0); // 将缓冲区对象分配给attribute变量
            this.gl_context.enableVertexAttribArray(aVertexPosition); // 开启attribute变量
            this.gl_context.bindBuffer(this.gl_context.ARRAY_BUFFER, undefined);
            this.gl_context.disableVertexAttribArray(aVertexPosition);
            return buffer;
        };
        /**
         * 画矩形
         *
         * @param x 横坐标
         * @param y 纵坐标
         * @param width 宽
         * @param height 高
         */
        Renderer.prototype.DrawFillRect = function (x, y, width, height) {
            var vertices = new Float32Array([x, y, 1, x + width, y, 1, x + width, y + height, 1, x, y + height, 1]);
            var buffer = this.InitVertexBuffer(vertices, 2);
            this.gl_context.bindBuffer(this.gl_context.ARRAY_BUFFER, buffer);
            this.gl_context.vertexAttribPointer(0, 2, this.gl_context.FLOAT, false, 0, 0);
            this.gl_context.enableVertexAttribArray(0);
            this.DrawArrays(this.gl_context.TRIANGLE_STRIP, 0, 4);
        };
        /**
         * 清空缓冲区
         *
         * @param mask 一个用于指定需要清除的缓冲区的 GLbitfield 。可接受复合值,可能的值有：
         * gl.COLOR_BUFFER_BIT   //颜色缓冲区
         * gl.DEPTH_BUFFER_BIT   //深度缓冲区
         * gl.STENCIL_BUFFER_BIT  //模板缓冲区
         */
        Renderer.prototype.Clear = function (mask) { this.gl_context.clear(mask); };
        /**
         *
         * @param red 指定清除缓冲时的红色值。默认值：0。
         * @param green 指定清除缓冲时的绿色值。默认值：0。
         * @param blue 指定清除缓冲时的蓝色值。默认值：0。
         * @param alpha 指定清除缓冲时的不透明度。默认值：0。
         */
        Renderer.prototype.ClearColor = function (red, green, blue, alpha) {
            if (red === void 0) { red = 0; }
            if (green === void 0) { green = 0; }
            if (blue === void 0) { blue = 0; }
            if (alpha === void 0) { alpha = 0; }
            this.gl_context.clearColor(red, green, blue, alpha);
        };
        /**
         *
         * @param depth 深度值的设定，是当清除深度缓冲区的时候使用。默认值为1。
         */
        Renderer.prototype.ClearDepth = function (depth) {
            if (depth === void 0) { depth = 1; }
            this.gl_context.clearDepth(depth);
        };
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
        Renderer.prototype.Enable = function (cap) { this.gl_context.enable(cap); };
        /**
         *
         * @param cap
         */
        Renderer.prototype.Disable = function (cap) { this.gl_context.disable(cap); };
        /**
         *
         */
        Renderer.prototype.Finish = function () { this.gl_context.finish(); };
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
        Renderer.prototype.BufferDataA = function (target, size, usage) { this.gl_context.bufferData(target, size, usage); };
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
        Renderer.prototype.BufferDataB = function (target, data, usage) {
            if (data === void 0) { data = null; }
            this.gl_context.bufferData(target, data, usage);
        };
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
        Renderer.prototype.DrawArrays = function (mode, first, count) { this.gl_context.drawArrays(mode, first, count); };
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
        Renderer.prototype.DrawElements = function (mode, count, type, offset) { this.gl_context.drawElements(mode, count, type, offset); };
        return Renderer;
    }());
    GL.Renderer = Renderer;
    var Shader = /** @class */ (function () {
        function Shader(gl_context, vertex_shader_source, fragment_shader_source) {
            this.gl_context = gl_context;
            this.program = this.InitShaderProgram(vertex_shader_source, fragment_shader_source);
        }
        /**
         *
         * @param type 着色器类型
         * @param source 代码
         */
        Shader.prototype.LoadShader = function (type, source) {
            var shader = this.gl_context.createShader(type); //创建一个新的着色器
            this.gl_context.shaderSource(shader, source); //将源代码发送到着色器   Send the source to the shader object
            this.gl_context.compileShader(shader); //一旦着色器获取到源代码就进行编译   Compile the shader program
            // See if it compiled successfully
            if (!this.gl_context.getShaderParameter(shader, this.gl_context.COMPILE_STATUS)) {
                alert('An error occurred compiling the shaders: ' + this.gl_context.getShaderInfoLog(shader));
                this.gl_context.deleteShader(shader);
                return null;
            }
            return shader;
        };
        /**
         * 初始化着色器程序，让WebGL知道如何绘制我们的数据
         *
         * @param vertex_shader_source 顶点着色器代码
         * @param fragment_shader_source 片段着色器代码
         */
        Shader.prototype.InitShaderProgram = function (vertex_shader_source, fragment_shader_source) {
            var vertex_shader = this.LoadShader(this.gl_context.VERTEX_SHADER, vertex_shader_source);
            var fragment_shader = this.LoadShader(this.gl_context.FRAGMENT_SHADER, fragment_shader_source);
            // 创建着色器程序
            var shader_program = this.gl_context.createProgram();
            this.gl_context.attachShader(shader_program, vertex_shader);
            this.gl_context.attachShader(shader_program, fragment_shader);
            this.gl_context.linkProgram(shader_program);
            // 创建失败， alert
            if (!this.gl_context.getProgramParameter(shader_program, this.gl_context.LINK_STATUS)) {
                alert('Unable to initialize the shader program: ' + this.gl_context.getProgramInfoLog(shader_program));
                return null;
            }
            return shader_program;
        };
        Shader.prototype.GetProgram = function () {
            return this.program;
        };
        /**
         * 使用Program
         */
        Shader.prototype.Use = function () {
            this.gl_context.useProgram(this.program);
        };
        return Shader;
    }());
})(GL || (GL = {}));
var Scene = /** @class */ (function () {
    function Scene(scene_id) {
        if (scene_id === void 0) { scene_id = "scene"; }
        this.layers = [];
        this.div = document.createElement("div");
        this.div.setAttribute("id", scene_id);
        //document.body.insertBefore(this.div,document.body.lastChild);
        document.body.appendChild(this.div);
    }
    /**
     * 获取场景div
     */
    Scene.prototype.GetDiv = function () { return this.div; };
    /**
     * 获取场景图层中的画布
     *
     * @param index 索引，要获取的图层画布索引
     */
    Scene.prototype.GetCanvas = function (index) {
        if (index === void 0) { index = 0; }
        return this.layers[index].GetCanvas();
    };
    /**
     * 获取图层数量
     */
    Scene.prototype.GetLayerNumber = function () { return this.layers.length; };
    /**
     * 获取图层
     *
     * @param index 图层索引
     */
    Scene.prototype.GetLayer = function (index) {
        if (index === void 0) { index = 0; }
        return this.layers[index];
    };
    /**
     * 获取所有图层
     */
    Scene.prototype.GetLayers = function () { return this.layers; };
    /**
     * 给场景添加图层
     *
     * @param layer 要添加的图层
     */
    Scene.prototype.AddLayer = function (layer) { this.layers.push(layer); this.div.appendChild(layer.GetCanvas()); };
    return Scene;
}());
var GL;
(function (GL) {
    var Scene = /** @class */ (function () {
        function Scene(scene_id, width, height) {
            if (scene_id === void 0) { scene_id = "scene"; }
            if (width === void 0) { width = window.innerWidth; }
            if (height === void 0) { height = window.innerHeight; }
            this.div = document.createElement("div");
            this.div.setAttribute("id", scene_id);
            //document.body.insertBefore(this.div,document.body.lastChild);
            document.body.appendChild(this.div);
            this.canvas = document.createElement("canvas");
            this.canvas.setAttribute("id", "glcanvas");
            this.canvas.setAttribute("width", width.toString());
            this.canvas.setAttribute("height", height.toString());
            this.canvas.setAttribute("style", "position: absolute");
            this.div.appendChild(this.canvas);
        }
        /**
         * 获取场景div
         */
        Scene.prototype.GetDiv = function () { return this.div; };
        /**
         * 获取场景图层中的画布
         *
         * @param index 索引，要获取的图层画布索引
         */
        Scene.prototype.GetCanvas = function () { return this.canvas; };
        return Scene;
    }());
    GL.Scene = Scene;
})(GL || (GL = {}));
var Sprite = /** @class */ (function () {
    function Sprite(sprite_path) {
        this.image = new Image();
        this.rect = [];
        this.image.src = sprite_path;
        this.width = this.image.width;
        this.height = this.image.height;
        this.rect.push(new Rect(0, 0, this.width, this.height));
    }
    /**
     *
     * @param path 图片路径
     */
    Sprite.prototype.SetImage = function (path) { this.image.src = path; };
    /**
     *
     * @param w 要设置的宽
     */
    Sprite.prototype.SetWidth = function (w) { this.width = w; };
    /**
     *
     * @param h 要设置的高
     */
    Sprite.prototype.SetHeight = function (h) { this.height = h; };
    /**
     * 获取精灵图片，宽高
     */
    Sprite.prototype.GetImage = function () { return this.image; };
    Sprite.prototype.GetWidth = function () { return this.width; };
    Sprite.prototype.GetHeight = function () { return this.height; };
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
    Sprite.prototype.InitRect = function (start_x, start_y, w, h, horizontal, vertical) {
        this.width = w;
        this.height = h;
        for (var i = 0; i < vertical; i++) {
            for (var j = 0; j < horizontal; j++) {
                this.rect[i * horizontal + j] = new Rect(start_x + w * j, start_y + h * j, w, h);
            }
        }
    };
    /**
     * 渲染精灵
     *
     * @param renderer 渲染器
     * @param x 横坐标
     * @param y 纵坐标
     * @param w 宽，默认精灵宽
     * @param h 高，默认精灵高
     * @param index 索引，默认0
     */
    Sprite.prototype.Render = function (renderer, x, y, w, h, index) {
        if (w === void 0) { w = this.width; }
        if (h === void 0) { h = this.height; }
        if (index === void 0) { index = 0; }
        renderer.DrawImageC(this.image, this.rect[index].x, this.rect[index].y, this.rect[index].w, this.rect[index].h, x, y, w, h);
    };
    return Sprite;
}());
var Game = /** @class */ (function () {
    function Game() {
        this.x = 0;
        this.scene = new Scene("scened");
        this.scene.AddLayer(new Layer(null, "layer1"));
        this.renderer = new Renderer(this.scene);
    }
    Game.prototype.Start = function () {
        this.MainLoop();
    };
    Game.prototype.MainLoop = function () {
        this.renderer.Clear();
        this.renderer.DrawFillRect(this.x, 10, 10, 10);
        this.x++;
        console.log("mainloop");
        requestAnimationFrame(this.MainLoop.bind(this));
    };
    return Game;
}());
window.onload = function () {
    var game = new Game();
    game.Start();
};
/*
let scene = new Scene("scene1");
let layer = new Layer(scene);
let renderer = new Renderer();
let sprite:Sprite = new Sprite("./sprite.png");



renderer.SetScene(scene);

renderer.DrawFillText("Hello",100,100);
renderer.DrawFillText("World!!!",200,100);

sprite.Render(renderer,100,200);


let r = new GL.Renderer(scene);

**/