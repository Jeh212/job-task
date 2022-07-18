
import axios from 'axios';




export const importArticles = async () => {


    const { data } = await axios.get('https://www.theguardian.com/world/europe-news/rss')



    return data;
}