// import defaultExport from "./timer"
const app=()=>{
    //Creating elements
    const appContainer=document.createElement("div")
    const counterButton=document.createElement("button")
    const timerButton=document.createElement("button")
    const root=document.getElementById('root')
    //creatig class name 
    appContainer.classList.add("appContainer")
    //appending elements and text
    root.appendChild(appContainer)
    appContainer.appendChild(counterButton)
    appContainer.appendChild(timerButton)
    counterButton.innerText="Counter"
    timerButton.innerText="Timer"



    const moveToCounter = ()=>{
        window.scrollTo(0,1000)
    }
    const moveToTimer = ()=>{
        window.scrollTo(0,2000)
    }
    // Buttons functionality   

    counterButton.onclick=moveToCounter
    timerButton.onclick=moveToTimer
}

app();