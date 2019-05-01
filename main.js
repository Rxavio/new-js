var selectedRow = null

function onFormSubmit(){
    if(validate()){
    var formData=readFormData();
    if(selectedRow==null)
        insertNewRecord(formData);
        else
        updateRecord(formData);
    resetForm();
}   
}
//read data  function
function readFormData() {
    var formData = {};
    formData["no"] = document.getElementById("no").value;
    formData["dept"] = document.getElementById("dept").value;
    formData["level"] = document.getElementById("level").value;
    formData["college"] = document.getElementById("college").value;
    return formData;
}
// insert data  function

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.no;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.dept;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.level;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.college;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;

}
//reset function
function resetForm() {
    document.getElementById("no").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("level").value = "";
    document.getElementById("college").value = "";
    selectedRow = null;
}
//select function
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("no").value=selectedRow.cells[0].innerHTML;
    document.getElementById("dept").value=selectedRow.cells[1].innerHTML;
    document.getElementById("level").value=selectedRow.cells[2].innerHTML;
    document.getElementById("college").value=selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.no;
    selectedRow.cells[1].innerHTML = formData.dept;
    selectedRow.cells[2].innerHTML = formData.level;
    selectedRow.cells[3].innerHTML = formData.college;
}

function onDelete(td){
    if(confirm('are you sure to delete this record?')){
        row=td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("no").value == "") {
        isValid = false;
        document.getElementById("noValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("noValidationError").classList.contains("hide"))
            document.getElementById("noValidationError").classList.add("hide");
    }
    return isValid;
}
