const addItembutton = document.querySelector('#add-item')
const table = document.querySelector('.table')
var deleteItems = document.querySelectorAll('.delete-cell')
var checkItems = document.querySelectorAll('.check-cell')
function addItem(e){
    e.preventDefault()
    var row = table.insertRow(1);
    var checkCell = row.insertCell(0);
    var itemCell = row.insertCell(1);
    var deleteCell = row.insertCell(2);  
    checkCell.innerHTML = '<a href="" class="btn btn-md check-btn"><i data-feather="check-circle"></i></a>' 
    checkCell.classList.add('check-cell')
    itemCell.innerHTML = "<div contenteditable>Edit Item</div>"
    deleteCell.innerHTML = '<a href="" class="btn btn-md delete-btn"><i data-feather="x-circle"></i></a>'
    deleteCell.classList.add('delete-cell')
    checkCell.addEventListener('click', checkItem)
    deleteCell.addEventListener('click', deleteItem)
    feather.replace()
}

function deleteItem(e){
    e.preventDefault()
    var row = e.currentTarget.parentNode;
    row.parentNode.removeChild(row)
}

function checkItem(e){
    e.preventDefault()
    var row = e.currentTarget.parentNode;
    row.classList.add("completed")
}

addItembutton.addEventListener('click', addItem)
checkItems.forEach(item => item.addEventListener('click', checkItem))
deleteItems.forEach(item => item.addEventListener('click', deleteItem))
