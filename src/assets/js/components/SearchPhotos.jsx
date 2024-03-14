import axios from 'axios';

const searchPhotos = async (data) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID eNDjWE2IUQJy5aLEe7x4L9c1-DyYq-X87HAoy-DEox8',
        },
        params: {
            query: data,
        },
    })

    return response.data.results;

};

export default searchPhotos;