//单链表实现
var Node = function(value)
{
    this.value = value
    this.next = null
}
var MyLinkedList = function()
{
    this.size = 0
    this.init_self = function(node)//初始化
    {
        this.size = 1
        this.head = node
    }

    //在一个节点后添加一个新的节点
    this.add_behind = function(node)
    {
        this.size += 1
        this.head.next = node;
    }

    //在指定的索引插入行节点
    this.add_at = function(index,value)
    {
        var temp = this.head;
        for (i = 0; i < index - 1; i++) 
        {
            temp = temp.next;
        }
        var insertNode = new Node(value);
        insertNode.next = temp.next;
        temp.next = insertNode;
        this.size += 1;
    }

    //获得指定节点的值
    this.get = function(index)
    {
        var temp = this.head
        for(i =0 ; i < index ; i++)
        {
            temp = temp.next
        }
        return temp.value
    }

    //在末尾加入新节点
    this.push = function(node)
    {
        var currentNode = this.find_last()
        currentNode.next = node
        this.size += 1
    }
    
    //获取链表的最后一个节点
    this.find_last = function()
    {
        var currentNode = this.head
        while(currentNode.next)
        {
            currentNode = currentNode.next
        }
        return currentNode
    }

    //删除链表中的一个节点
    this.remove_at = function(index)
    {
        var temp = this.head;
        for(i = 0; i < index - 1; i++) 
        {
            temp = temp.next;
            //console.log("遍历中->",temp)
        }
        var deleteNode = temp.next; //3的下一个是第四个的下一个 (此处可能存在内存泄漏，第4个对象没有被释放)
        temp.next = deleteNode.next; //4
        this.size -=1;
    }

    //遍历链表并打印出来
    this.print_list = function()
    {
        var list = ""
        var currentNode = this.head
        while(currentNode)
        {
            list += currentNode.value
            currentNode = currentNode.next
            if(currentNode)
            {
                list += '->'
            }
        }
        console.log(list)
    }

    //清空链表
    this.clear = function()
    {
        this.head.next = null
        this.size = 0
    }
}

function push()
{
    linked_list.init_self(new Node(0))
    linked_list.push(new Node(1))
    linked_list.push(new Node(2))
    linked_list.push(new Node(3))
    linked_list.push(new Node(4))
    linked_list.push(new Node(5))
}
//测试用例
var linked_list = new MyLinkedList()

//从头遍历打印链表
push()
linked_list.print_list()
console.log("当前链表大小:",linked_list.size)
linked_list.clear()
console.log("")

//删除链表指定元素
push()
linked_list.remove_at(2)
linked_list.print_list()
linked_list.clear()
console.log("")

//查找链表最后一个元素
push()
var last = linked_list.find_last()
console.log("链表最后一个节点",last)
linked_list.print_list()
console.log("当前链表大小:",linked_list.size)
console.log("")

//获取链表指定索引的元素
push()
var result = linked_list.get(3)
console.log("第3个元素为",result)
linked_list.print_list()
console.log("当前链表大小:",linked_list.size)
console.log("")

//在指定的位置插入元素
push()
linked_list.add_at(4,"hello")
linked_list.print_list()
console.log("当前链表大小:",linked_list.size)