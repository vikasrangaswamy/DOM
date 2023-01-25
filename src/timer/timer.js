let time=60
const zero = 0
let counter=0
const creatTimer=()=>{

    const root = document.getElementById('root')
    const timerContainer = document.createElement("div")
    const timerHeading = document.createElement("h1")
    const timerValue = document.createElement('p')
    const startButton = document.createElement("button")
    const setButton = document.createElement("button")
    const resetButton = document.createElement("button")
    const stopButton=document.createElement("button")

    root.appendChild(timerContainer)
    timerContainer.appendChild(timerHeading)
    timerContainer.appendChild(timerValue)
    timerContainer.appendChild(startButton)
    // timerContainer.appendChild(setButton)
    timerContainer.appendChild(resetButton)
    timerContainer.appendChild(stopButton)

    timerHeading.innerHTML="Timer"
    timerValue.innerHTML=`${time} seconds`

    const updateTimer=()=>{
        timerValue.innerHTML=`${time} seconds`
        time=time-1

        if (time < 0){
            time=zero
        }
    }
    //Start button 
    startButton.innerHTML="start"
    startButton.addEventListener("click" , function(){
        counter = setInterval(updateTimer,1000)
    }
    )

    // stop button 
    stopButton.innerHTML="stop"
    stopButton.addEventListener('click', ()=>{
        clearInterval(counter)
    })



    //set button 
    // setButton.innerHTML="set"
    // setButton.addEventListener("click" , ()=>{
    //     time=prompt("enter time in seconds")
    // })

    //reset button
    resetButton.innerHTML="reset"
    resetButton.addEventListener("click" , ()=>{
        clearInterval(counter)
        timerValue.innerHTML=`${60} seconds`
    })


}

creatTimer()