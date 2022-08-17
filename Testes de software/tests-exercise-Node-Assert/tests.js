function callTest(title,testFunction) {
    try {
        testFunction()
        console.log(`${title} passou! :)`)
    } catch (error) {
        console.log(`${title} não passou... :(`) 
    }
}

module.exports = {callTest}