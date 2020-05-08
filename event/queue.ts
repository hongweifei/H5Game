

class Queue<T>
{
	prev:Queue<T>;
	next:Queue<T>;

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

