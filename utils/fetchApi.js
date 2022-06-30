import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'cf9d0c2f4bmsh1efad3e84f60773p12bdfbjsnf3b8a58aeb7b',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data
}
