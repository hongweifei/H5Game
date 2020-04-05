

class Queue<T>
{
	private data:Array<T>;
	push = (item:T) => this.data.push(item);
	pop = (): T | undefined => this.data.shift();
}
