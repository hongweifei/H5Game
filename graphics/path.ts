

namespace flown
{

    export class Path
    {
        protected start_x:number = 0
        protected start_y:number = 0
        protected x:number[]
        protected y:number[]

        constructor(parameters)
        {
            
        }

        /**
         * 设置路径开始坐标
         * 
         * @param x 路径起点横坐标
         * @param y 路径起点纵坐标
         */
        SetStartPoint(x:number,y:number)
        {this.start_x = x;this.start_y = y;}

        /**
         * 给路径添加点
         * 
         * @param x 要添加的点的横坐标
         * @param y 要添加的点的纵坐标
         */
        AddPoint(x:number,y:number)
        {this.x.push(x);this.y.push(y);}

        /**
         * 在起点后插入一点
         * 
         * @param x 
         * @param y 
         */
        UnshiftPoint(x:number,y:number)
        {this.x.unshift(x);this.y.unshift(y);}

        /**
         * 给路径插入点
         * 
         * @param x 要插入的点的横坐标
         * @param y 要插入的点的纵坐标
         * @param index 要插入的索引
         */
        InsertPoint(x:number,y:number,index:number)
        {
            let points_x:number[];
            let points_y:number[];

            for (let i = index; i < this.x.length - index; i++) 
            {
                points_x.push(this.x[i]);
                points_y.push(this.y[i]);
            }

            this.x[index] = x;
            this.y[index] = y;

            for (let i = index + 1; i < this.x.length - index; i++) 
            {
                this.x[i] = points_x[i - (index + 1)];
                this.y[i] = points_y[i - (index + 1)];
            }

            this.x.push(points_x.pop());
            this.y.push(points_y.pop());
        }

        /**
         * 获取路径起点
         */
        GetStartPoint() : number[]
        {let point = [this.start_x,this.start_y];return point;}

        /**
         * 获取路径中的点，不包含起点
         * 
         * @param index 索引
         */
        GetPoint(index:number) : number[]
        {let point:number[] = [this.x[index],this.y[index]];return point;}

        /**
         * 获取路径中点的数量
         */
        GetSize() : number
        {return this.x.length + 1;}

        /**
         * 删除路径中的一个点
         * 
         * @param index 要删除的点索引
         */
        DeletePoint(index:number)
        {this.x.splice(index,1);this.y.splice(index,1);}
    }



}



