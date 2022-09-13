let olList = document.getElementById("first-container")
let emailId = document.getElementById("email")
let paraId = document.getElementById("error")
let delItem = document.getElementById("delItem")
let rowcount = 0

let addBox = false;

function emailValidation(){
    paraId.innerHTML = "";
    let userValue = emailId.value;
    let pattern =/^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
    if(userValue == ""){
        paraId.innerHTML = "Required";
        paraId.style.color = "Red";
    }else if (!pattern.test(userValue)){
        paraId.innerHTML = "Plase enter valid email address";
        paraId.style.color = "Red";
    }else{
        paraId.innerHTML = "";
    }

}

function validEmail(enterValue,message){
    let pattern =  /^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
    if(enterValue == ""){
        message.innerHTML = "Required";
        message.style.color = "Red";
    }else if (!pattern.test(enterValue)){
        message.innerHTML = "Plase enter valid emial address"
        message.style.color = "Red";
    }else{
        message.innerHTML = "";
        addBox = true;
    }

}

function deleteListItem(btnId){
    //console.log(btnId);
    let delList = document.getElementById(btnId);
    //console.log(delList)
    //console.log(delList.value);
    delList.value = "";
    //olList.removeChild(delList);
    
    rowcount -= 1;
    //console.log(rowcount)

}

function delTotalItem(totalId){
    
    console.log(totalId);
    if(rowcount !== 0){
        let liItem = document.getElementById(totalId);
        olList.removeChild(liItem);
        rowcount -= 1;
    }else{
        alert("minimum one emaid is required");
    }
    
}
let listId;
delItem.addEventListener('click',function(){
    delTotalItem(rowcount + "id");
  
})

function addList(){
    rowcount += 1
   // console.log(rowcount);
    if(rowcount >= 7){
        alert("max limit exceed")
        rowcount = 6;
    }
    else {
        
        let list = document.createElement('li');
        listId = rowcount + "id";
        list.id = listId ;
        list.classList.add("first-li",'m-3','p-3');
        //console.log("listID" + listId)
        
        


        let para = document.createElement('p')

        let input = document.createElement('input');
        input.type = "email";
        enterId= rowcount + "email";
        input.id = enterId;
        input.placeholder = "enter email";
        input.onblur = function () {
            validEmail(input.value, para)
        }

        let btnAdd = document.createElement("button")
        btnAdd.innerHTML = "add";
        btnAdd.classList.add("btn", 'btn-primary','m-2');
        btnAdd.addEventListener('click', function(){
            if(addBox){
                addList();
                addBox = false;
            }
        }) 
        let btnDel = document.createElement("button")
        btnDel.innerHTML = "delete";
        btnDel.classList.add('btn', 'btn-danger')
        btnDel.addEventListener('click', function () {
            deleteListItem(input.id);
        }) 
        
        
        list.append(input, btnAdd, btnDel, para)
        olList.append(list)
    }
    

}




