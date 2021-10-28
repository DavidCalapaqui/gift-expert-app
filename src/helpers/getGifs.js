

 export const getGifs = async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=I6uBshdCz6ZzPLNEem9dWto2DP9NBBt4`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // ? porsiacaso no venga el zelda
        }
    })

    return gifs;
}