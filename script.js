window.addEventListener("DOMContentLoaded", (event) => {
  var myArray = [];
  var list = document.getElementById("list");
  /* Bind to the Add button here */
  var addButton = document.getElementById("Add");
  addButton.addEventListener("click", () => {
    // get content entered by the user
    var input = document.getElementById("newItem");
    var content = input.value;
    // check validation
    if (content.length < 1 || content.length > 2048) {
      alert("The length of input must be greater than 1, and no more than 2048 characters.");
    } else {
      // store into array
      myArray.push(content);
      // clear the list
      list.innerHTML = "";
      // read array, and get item from it, and append item to list
      myArray.forEach((ele) => {
        var liItem = document.createElement("li");
        /* Bind to the Delete button here */
        var deleteBtn = document.createElement("button");
        deleteBtn.id = "delete";
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener("click", ()=>{
            liItem.parentNode.removeChild(liItem);
            myArray.splice(myArray.indexOf(ele), 1); // delete from array
        });
        /* Bind to the Edit button here */
        var editBtn = document.createElement("button");
        editBtn.id = "edit";
        editBtn.innerHTML = "Edit";
        editBtn.addEventListener("click", ()=>{
            var updateText = prompt("Edit your content:", liItem.lastChild.textContent);
            if(updateText.length >= 1 && updateText.length <= 2048){
                liItem.lastChild.textContent = updateText;
                myArray[myArray.indexOf(ele)] = updateText;  // update array
            } else {
                alert("The length of input must be greater than 1, and no more than 2048 characters.");
            }
        });
        liItem.appendChild(deleteBtn);
        liItem.appendChild(editBtn);
        liItem.appendChild(document.createTextNode(ele));
        list.appendChild(liItem);
      });
    }
    // clear the input field
    input.value = "";
  });
  /* bind to the Reset button here */
  var restButton = document.getElementById("Reset");
  restButton.addEventListener("click", () => {
    // clear the array and list
    myArray = [];
    list.innerHTML = "";
  });
});
