// 30. First thing you do is define a function that runs every 1 second
setInterval(setClock, 1000)

// 35 get the different hands of the clock inside a variable
const hourHand = document.getElementById("hourHand")
const minuteHand = document.getElementById("minuteHand")
const secondHand = document.getElementById("secondHand")

// const hourHand = document.querySelector('[data-hour-hand]')
// const minuteHand = document.querySelector('[data-minute-hand]')
// const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    // 31. Get the current date
    const currentDate = new Date();
    // 32 . Get the seconds ratio by getting the current seconds and dividing it by 60
    const secondsRatio = currentDate.getSeconds()/60
    //  33. Get the minutes ratio by getting the current minutes and dividing it by 60
    const minutesRatio = (secondsRatio+currentDate.getMinutes())/60
    //  34. Get the hours ratio by getting the current minutes and dividing it by 60
    const hoursRatio = (minutesRatio+currentDate.getHours())/12

    // 37. Call the rotate function every pulse
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

// 36 declare a function that sets the css property of elements in css. 

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}

// 37. call  the set clock function once when the page loads. 
setClock()