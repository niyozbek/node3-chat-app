const socket = io()

// Templates
const roomListTemplate = document.querySelector('#room-list-template').innerHTML
const $roomList = document.querySelector('#room-list')

socket.on('roomList', (rooms) => {
    console.log(rooms)
    const html = Mustache.render(roomListTemplate, {
        rooms
    })
    $roomList.innerHTML = html
})

socket.emit('getRoomList', (error) => {
    if (error) {
        return console.log(error)

    }
    console.log('Room list is coming!')
})