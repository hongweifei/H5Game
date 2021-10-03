


/// <reference path="scene.ts" />


namespace flown
{

    export class Layer
    {
        protected canvas:HTMLCanvasElement;
        protected width:number
        protected height:number

        /**
         * 
         * 网页可见区域宽： document.body.clientWidth
         * 网页可见区域高： document.body.clientHeight
         * 网页可见区域宽： document.body.offsetWidth (包括边线的宽)
         * 网页可见区域高： document.body.offsetHeight (包括边线的高)
         * 网页正文全文宽： document.body.scrollWidth
         * 网页正文全文高： document.body.scrollHeight
         * 网页被卷去的高： document.body.scrollTop
         * 网页被卷去的左： document.body.scrollLeft
         * 网页正文部分上： window.screenTop
         * 网页正文部分左： window.screenLeft
         * 屏幕分辨率的高： window.screen.height
         * 屏幕分辨率的宽： window.screen.width
         * 屏幕可用工作区高度： window.screen.availHeight
         * 屏幕可用工作区宽度： window.screen.availWidth
         * 
         * 
         * @param scene 图层所在场景，默认null
         * @param layer_id 图层id
         * @param width 图层宽
         * @param height 图层高
         */
        constructor(scene:Scene = null,layer_id:string = "layer",width:string = document.body.offsetWidth.toString(),
            height:string = document.body.offsetHeight.toString())
        {
            if (width == document.body.offsetWidth.toString() && document.body.offsetWidth == 0)
                width = document.body.clientWidth.toString();
            if (height == document.body.offsetHeight.toString() && document.body.offsetHeight == 0)
                height = document.body.clientHeight.toString();
            

            this.canvas = document.createElement("canvas");
            this.canvas.setAttribute("id",layer_id);
            this.canvas.setAttribute("width",width);
            this.canvas.setAttribute("height",height);
            this.canvas.setAttribute("style","position: absolute")
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            if (scene)
            {
                this.canvas.setAttribute("id","layer" + scene.GetLayerNumber().toString());
                scene.AddLayer(this);
            }

            
            /*
            if(this.canvas.requestFullscreen)
                this.canvas.requestFullscreen();
            else if(this.canvas.webkitRequestFullScreen)
                this.canvas.webkitRequestFullScreen();
            else if(this.canvas.mozRequestFullScreen)
                this.canvas.mozRequestFullScreen();
            */
            
        }

        /**
         * 
         * @param id 设置图层的id
         */
        SetLayerId(id:string){this.canvas.setAttribute("id",id);}


        /**
         * 
         * 
         * @param width 要设置的width（宽度）
         */
        SetWidth(width:string)
        {
            this.canvas.setAttribute("width",width);
            this.width = this.canvas.width;
        }


        /**
         * 
         * 
         * @param height 要设置的height（高度）
         */
        SetHeight(height:string)
        {
            this.canvas.setAttribute("height",height);
            this.height = this.canvas.height;
        }


        /**
         * 
         * 获取图层宽度
         * 
        */
        GetWidth():number { return this.width; }


        /**
         * 
         * 获取图层高度
         * 
        */
        GetHeight():number { return this.height; }

        /**
         * 获取图层的画布
         */
        GetCanvas():HTMLCanvasElement{return this.canvas}
    }



}





