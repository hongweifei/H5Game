var Layer = /** @class */ (function () {
    /**
     *
     * @param scene 图层所在场景，默认null
     * @param width 图层宽
     * @param height 图层高
     */
    function Layer(scene, width, height) {
        if (scene === void 0) { scene = null; }
        if (width === void 0) { width = window.innerWidth; }
        if (height === void 0) { height = window.innerHeight; }
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("id", "layer");
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
        /**
         * 清空缓冲区
         *
         * @param mask 缓冲区类型，可用GL.COLOR_BUFFER_BIT,GL.DEPTH_BITS等
         * @param index 图层索引，默认0
         */
        Renderer.prototype.Clear = function (mask) {
            this.gl_context.clear(mask);
        };
        Renderer.prototype.ClearColor = function (red, green, blue, alpha) {
            this.gl_context.clearColor(red, green, blue, alpha);
        };
        Renderer.prototype.Finish = function () {
            this.gl_context.finish();
        };
        return Renderer;
    }());
    GL.Renderer = Renderer;
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
        this.scene = new GL.Scene("scened", 800, 600);
        this.renderer = new GL.Renderer(this.scene);
    }
    Game.prototype.Start = function () {
        this.MainLoop();
    };
    Game.prototype.MainLoop = function () {
        this.renderer.ClearColor(0, 0, 0, 1);
        this.renderer.Clear(this.renderer.GetContext().COLOR_BUFFER_BIT);
        console.log("mainloop");
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
