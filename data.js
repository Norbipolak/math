const secs = 12345

let seconds = secs

const hours = Math.floor(seconds / (60 *60))
seconds = seconds % (60 * 60)

const minutes = Math.floor(seconds / 60)
seconds = seconds % 60

console.log(hours, 'óra', minutes, 'perc', seconds, 'másodperc')

