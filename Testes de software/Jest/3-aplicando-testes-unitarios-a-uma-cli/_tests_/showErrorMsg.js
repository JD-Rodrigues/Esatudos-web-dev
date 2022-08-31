export async function showErrorMsg(code){
    try {
        await code
    } catch (error) {
        return error.message
    }
}