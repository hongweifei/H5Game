


class Layer
{
    protected canvas:HTMLCanvasElement;
    protected width:Number
    protected height:Number

    /**
     * 
     * @param scene 图层所在场景，默认null
     * @param width 图层宽
     * @param height 图层高
     */
    constructor(scene:Scene = null,width:string|number = window.innerWidth,
        height:string|number = window.innerHeight)
    {
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("id","layer");
        this.canvas.setAttribute("width",width.toString());
        this.canvas.setAttribute("height",height.toString());
        this.canvas.setAttribute("style","position: absolute")
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        if (scene)
        {
            this.canvas.setAttribute("id","layer" + scene.GetLayerNumber().toString());
            scene.AddLayer(this);
        }
        
    }

    /**
     * 
     * @param id 设置图层的id
     */
    SetLayerId(id:string){this.canvas.setAttribute("id",id);}

    /**
     * 获取图层的画布
     */
    GetCanvas():HTMLCanvasElement{return this.canvas}
}

