
const app=()=>{
    const root=document.getElementById('root')
    const appContainer=document.createElement("div")
    appContainer.classList.add("appContainer")
    root.appendChild(appContainer)
    counterButton=document.createElement("button")
    timerButton=document.createElement("button")
    appContainer.appendChild(counterButton)
    appContainer.appendChild(timerButton)
    counterButton.innerText="Counter"
    timerButton.innerText="Timer"
}

app()