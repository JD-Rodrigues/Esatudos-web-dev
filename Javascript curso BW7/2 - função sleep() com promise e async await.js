

async function sleep(time) {
    function timeout(ms) {
        return new Promise(resolve=>setTimeout(resolve, ms))
    }
    await timeout(time)
}


async function counter() {
    console.log(3)
    await sleep(1000)
    console.log(2)
    await sleep(1000)
    console.log(1)
}

counter()