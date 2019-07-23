const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    let audreyWidth = window.scrollY / 3
    if (audreyWidth > 50) {
        audrey.style.width = `${audreyWidth}px`
    }

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
    const audreyHeight = window.scrollY / 4
    if (audreyHeight > 100) {
        audrey.style.height = `${audreyHeight}px`
    }

})
