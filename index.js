function debounce(fn, delay, immediate = false, callBackFunction) {
    let timer = null
    let isInvoce = false
    const _debounce = function (...args) {
        return new Promise((resolve, reject) => {
            if (timer) clearTimeout(timer)
            if (immediate && !isInvoce) {
                const result = fn.apply(this, args)
                if (callBackFunction) callBackFunction(result)
                resolve(result)
                isInvoce = true
            } else {
                timer = setTimeout(() => {
                    const result = fn.apply(this, args)
                    if (callBackFunction) callBackFunction(result)
                    resolve(result)
                    timer = null
                    isInvoce = false
                }, delay);
            }
        })

    }

    _debounce.cancel = function () {
        if (timer) clearTimeout(timer)
        timer = null
        isInvoce = false
    }

    return _debounce
}