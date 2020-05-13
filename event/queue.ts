

class Queue<T>
{
	private prev:Queue<T>;
	private next:Queue<T>;

	private data:T;

	constructor()
	{
		this.prev = this;
		this.next = this;
	}

	push(item:T)
	{
		let q:Queue<T> = new Queue<T>();
		q.data = item;

		q.prev = this.prev;
		q.next = this;

		this.prev.next = q;
		this.prev = q;
	}

	pop() : T
	{
		let q:Queue<T> = new Queue<T>();
		q = this.next;
		
		this.next.next.prev = this;
		this.next = this.next.next;

		return q.data;
	}
}


class QueueB<T>
{
	private next:QueueB<T>;
	private count:number;

	private data:T;

	constructor()
	{
		this.next = this;
		this.count = 0;
	}

	push(item:T)
	{
		let q:QueueB<T> = new QueueB<T>();
		q.data = item;
		q.next = this;

		if(this.count == 0)
			this.next = q;
		else
		{
			let last_one:QueueB<T> = this;
			for(let i = 0;i < this.count;i++)
			{
				last_one = last_one.next;
			}
			last_one.next = q;
		}
	}

	pop() : T
	{
		let q:QueueB<T> = new QueueB<T>();
		q = this.next;
		
		this.next = this.next.next;

		return q.data;
	}
}


class ArrayQueue<T>
{
	private data: Array<T> = new Array<T>();
	push = (item: T) => this.data.push(item);
	pop = (): T | undefined => this.data.shift();
}





