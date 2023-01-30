import { Counter } from "./counter/counter.js"
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

    //creating objects using event listeners


    let counters = []
    counterButton.addEventListener("click", () => {
      //create new Counter object and mount it
        const newCounter = new Counter()
        counters.push(newCounter)
        newCounter.mount(root)
        console.log(newCounter)
    })


}

app();