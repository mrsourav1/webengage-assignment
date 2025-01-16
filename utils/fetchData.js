import axios from "axios";

export const fetchData = async () => {
    try {
        const urls = [
            'https://jsonplaceholder.typicode.com/users',
            'https://jsonplaceholder.typicode.com/posts',
            'https://jsonplaceholder.typicode.com/comments'
        ]

        const [ userRes,postRes,commentRes ] = await Promise.all(urls.map((url)=>axios.get(url)))

        return [ userRes.data,postRes.data,commentRes.data ]
    } catch (error) {
        throw new Error(`Unable to fetch data error: ${error}`)
    }
}