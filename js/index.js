// const circle = {
//     radius: 1, 
//     location: {
//         x:1,
//         y:2
//     }, 
//     draw: function() {
//         console.log('draw')
//     }
// }

// Factory Function 

function createCircle(radius) {
    return {
        radius, 
        draw: function() {
            console.log('draw')
        }
    }
}

const circle = createCircle(1)
circle.draw()