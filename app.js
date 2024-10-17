function toggleItem(element){
    element.classList.toggle("expand")
    console.log("Abrio")
};

function expandAll(){
    const items = document.querySelectorAll('#item button')
    for (const element of items){
        element.classList.add("expand")
    }
    console.log("Abrio Todo")
};

function collapseAl(){
    const items = document.querySelectorAll('#item button')
    for (const element of items){
        element.classList.remove("expand")
    }
    console.log("Cerro Todo")

};