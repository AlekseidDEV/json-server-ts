export const debounce = (func: () => void, ms: number) => {
    let timeOut: NodeJS.Timeout

    return function(){
        clearTimeout(timeOut)
        timeOut = setTimeout(func, ms)
    }
}
