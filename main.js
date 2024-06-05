var submitText = document.getElementById('bookMarkText');
var submitUrl = document.getElementById('bookMarkUrl');
//var addBtn = document.getElementById('btnSubmit');
//var visit= document.getElementById('btnVisit');

var pList =[];
if(localStorage.getItem('submitIn') === null){
    pList =[]
}else{
    pList = JSON.parse( localStorage.getItem('submitIn') );
    // displaySubmitIn() 
}


function submitBtn() {
    var submit = {
        name : submitText.value,
        URL : submitUrl.value,
    }
    pList.push(submit);
    displaySubmitIn() 
    localStorage.setItem('submitIn' , JSON.stringify(pList))
    console.log(pList);
}

function displaySubmitIn() {
    var cartona = '';
    for (var i = 0 ; i < pList.length; i++) {
        cartona += `
        <tr>
        <td>${i + 1}</td>
        <td>${pList[i].name}</td>              
        <td>
            <button onclick="visitbook('${pList[i].URL}');" class="btn visit" >
                <i class="fa-solid fa-eye fa-sm"></i>
                Visit
            </button>
        </td>
        <td>
            <button onclick="deleteBook();" class="btn delete pe-2">
                <i class="fa-solid fa-trash-can fa-sm"></i>
                Delete
            </button>
        </td>
    </tr>
        `
    }

    document.getElementById('tBody').innerHTML = cartona;
}


function deleteBook() {
    console.log('hi');

    var index = 0;
    pList.splice( index , 1);
    displaySubmitIn() 
    localStorage.setItem('submitIn' , JSON.stringify(pList))
}

function visitbook(URL) {
    window.open(URL)
}
