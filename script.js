const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')

function setDate() {
	const now = new Date()
	const seconds = now.getSeconds()
	const secDegrees = (seconds / 60) * 360 + 90
	secondHand.style.transform = `rotate(${secDegrees}deg)`

	const minutes = now.getMinutes()
	const minDegrees = (minutes / 60) * 360 + 90
	minuteHand.style.transform = `rotate(${minDegrees}deg)`

	const hours = now.getHours()
	const hoursDegrees = (hours / 12) * 360 + 90
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`

}
setInterval(setDate, 1000)
