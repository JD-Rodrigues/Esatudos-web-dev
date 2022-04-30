function sleep(time) {
    const futuro = Date.now() + time
    while (Date.now()<futuro) {}
}
