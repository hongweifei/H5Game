

/// <reference path="layer.ts" />


namespace Flown
{

    export class Scene
    {
        protected div:HTMLDivElement;
        protected layers:Layer[] = [];

        constructor(scene_id:string = "scene")
        {
            this.div = document.createElement("div");
            this.div.setAttribute("id",scene_id);
            //this.div.setAttribute("style","clear:both");
            //document.body.insertBefore(this.div,document.body.lastChild);
            document.body.appendChild(this.div);
        }

        /**
         * 获取场景div
         */
        GetDiv() : HTMLDivElement {return this.div;}

        /**
         * 获取场景图层中的画布
         * 
         * @param index 索引，要获取的图层画布索引
         */
        GetCanvas(index:number = 0) : HTMLCanvasElement {return this.layers[index].GetCanvas()}

        /**
         * 获取图层数量
         */
        GetLayerNumber() : number {return this.layers.length;}

        /**
         * 获取图层
         * 
         * @param index 图层索引
         */
        GetLayer(index:number = 0) : Layer {return this.layers[index];}

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

}


namespace GL
{
    export class Scene
    {
        protected div:HTMLDivElement;
        protected canvas:HTMLCanvasElement;

        constructor(scene_id:string = "scene",width:string|number = window.innerWidth,
        height:string|number = window.innerHeight)
        {
            this.div = document.createElement("div");
            this.div.setAttribute("id",scene_id);
            //document.body.insertBefore(this.div,document.body.lastChild);
            document.body.appendChild(this.div);

            this.canvas = document.createElement("canvas");
            this.canvas.setAttribute("id","glcanvas");
            this.canvas.setAttribute("width",width.toString());
            this.canvas.setAttribute("height",height.toString());
            this.canvas.setAttribute("style","position: absolute")

            this.div.appendChild(this.canvas);
        }

        /**
         * 获取场景div
         */
        GetDiv() : HTMLDivElement {return this.div;}

        /**
         * 获取场景图层中的画布
         * 
         * @param index 索引，要获取的图层画布索引
         */
        GetCanvas() : HTMLCanvasElement {return this.canvas}
    }
}




namespace Three
{

    export class Scene
    {

        constructor()
        {

        }
    }
}







