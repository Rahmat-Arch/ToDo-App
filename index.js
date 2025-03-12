const liParent = document.getElementById('liParent')
const searchBar = document.getElementById('search')
function addTask() {
    if (searchBar.value !== ''){
        let li = document.createElement('li')
        li.innerHTML = searchBar.value
        liParent.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "X"
        span.classList = "cross"
        li.appendChild(span)
    
        searchBar.value = ""
        saveData()
    }else{
        alert("Enter some text first")
    }
}
liParent.addEventListener('click',(e)=>{
    if (e.target.tagName =="LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.classList == "cross"){
        e.target.parentElement.remove()
        saveData()
    }
})
 
function saveData(){
    localStorage.setItem("data",liParent.innerHTML)
}
function showData(){
    liParent.innerHTML = localStorage.getItem('data')
}
showData()