
let updateTime = () => {
    const date = new Date()
    const hours = date.getHours().toString().padStart(2,'0')
    const meridian = (hours >= 12) ? "PM" : "AM";
    const minutes = date.getMinutes().toString().padStart(2,'0')
    const seconds = date.getSeconds().toString().padStart(2,'0')
    document.getElementById("main").textContent = `${hours}:${minutes}:${seconds} ${meridian}`
}

setInterval(updateTime, 1000)
updateTime()
