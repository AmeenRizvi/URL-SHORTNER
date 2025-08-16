
import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/short_url.service.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrl = async (req, res, next) => {
    try{
        // console.log(req.body);
        const data = req.body;
        let shortUrl;
        if(!data.url) return res.status(400).json("Url is required");
        
        if(req.user) {
            shortUrl = await createShortUrlWithUser(data.url, req.user._id, data.slug);
        }
        else{
            shortUrl = await createShortUrlWithoutUser(data.url);
        }
        // console.log(process.env.APP_URL + shortUrl);    
        res.status(200).json({shortUrl:  process.env.APP_URL + shortUrl});

    } catch(err){
        next(err);
    }
}



export const redirectFromShortUrl = async (req, res, next) =>{
    try{
        const {id} = req.params;
        const url = await getShortUrl(id);

        if(url){
            res.redirect(url.full_url);
        }else{
            res.status(404).send("Not found");
        }
    } catch(error){
        next(error);
    }
}

export const createCustomShortUrl = async (req, res, next) => {
    try {
        const { url, slug } = req.body;
        if (!url || !slug) {
            return res.status(400).json("Url and custom short URL are required");
        }

        // Check if the custom short URL already exists
        const existingUrl = await getShortUrl(customShortUrl);
        if (existingUrl) {
            return res.status(409).json("Custom short URL already exists");
        }

        // Create the custom short URL
        const shortUrl = await createShortUrlWithoutUser(url, customShortUrl);

        res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl });
    } catch (err) {
        next(err);
    }
}