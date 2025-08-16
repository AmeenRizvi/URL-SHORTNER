import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/short_url.model.js";
import { getCustomShortUrl, getShortUrl, saveShortUrl } from "../dao/short_url.js";

export const createShortUrlWithoutUser = async (url) =>{
    try{
        const shortUrl = await generateNanoId(7);
        if(!shortUrl) throw new Error("Short Url not generated");
        await saveShortUrl(shortUrl, url);
        return shortUrl;
    }
    catch(err){
        console.log(err);
    }
}

export const createShortUrlWithUser = async (url, userId, slug=null) =>{
    
    const shortUrl = slug || generateNanoId(7);
    const exists = await getCustomShortUrl(slug);
    if(exists) {
        throw new Error("Custom short URL already exists");
    }
    await saveShortUrl(shortUrl, url, userId);
    return shortUrl;
}


