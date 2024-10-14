//新增数据函数
function addrow() {
    var table = document.getElementById('table');
    //console.log(table);
    var length = table.rows.length
    //console.log(length);

    //插入行节点
    var newrow = table.insertRow(length);
    //console.log(newrow);
    
    //插入列节点
    var namecol=  newrow.insertCell(0);
    var phonecol = newrow.insertCell(1);
    var actioncol = newrow.insertCell(2); 
    
    //修改节点文本内容
    namecol.innerHTML = '未命名' ;
    phonecol.innerHTML = '无联系方式' ;
    actioncol.innerHTML = '<button onclick="editrow(this)">编辑</button><button onclick="deleterow(this)">删除</button>' ;
}

//删除数据函数
function deleterow(button){
    //console.log(button);
    var row = button.parentNode.parentNode;
    console.log(row);
    row.parentNode.removeChild(row);
}

//编辑数据
function editrow(button) {
    //console.log(button);
    var row = button.parentNode.parentNode;
    var name =row.cells[0];
    var phone = row.cells[1];
        
    var inputName =prompt("请输入名字:");
    var inputPhone = prompt("请输入联系方式");

    name.innerHTML = inputName;
    phone.innerHTML = inputPhone;

    
}