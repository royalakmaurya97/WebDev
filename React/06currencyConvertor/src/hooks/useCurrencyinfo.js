import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/e61d68990fa78cad0d58c4d1/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates))
    }, [currency])

    return data
}

export default useCurrencyInfo