

class Scene
{
    protected div:HTMLDivElement;
    protected layers:Layer[] = [];

    constructor(scene_id:string = "scene")
    {
        this.div = document.createElement("div");
        this.div.setAttribute("id",scene_id);
        //document.body.insertBefore(this.div,document.body.lastChild);
        document.body.appendChild(this.div);
    }

    /**
     * 获取场景div
     */
    GetDiv() : HTMLDivElement {return this.div;}

    /**
     * 获取场景图层中的画笔
     * 
     * @param index 索引，要获取的图层画布索引
     */
    GetCanvas(index:number) : HTMLCanvasElement {return this.layers[index].GetCanvas()}

    /**
     * 获取图层数量
     */
    GetLayerNumber() : number {return this.layers.length;}

    /**
     * 获取图层
     * 
     * @param index 图层索引
     */
    GetLayer(index:number) : Layer {return this.layers[index];}

    /**
     * 获取所有图层
     */
    GetLayers() : Layer[] {return this.layers;}

    /**
     * 给场景添加图层
     * 
     * @param layer 要添加的图层
     */
    AddLayer(layer:Layer)
    {this.layers.push(layer);this.div.appendChild(layer.GetCanvas())}
}
