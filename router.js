import express from 'express'
const router = express.Router()
import instagramScraper from './scraper.js'

router.post('/', async (req, res, next) => {
    let { username } = req.body
    username = username.replace(/ +/g, '')
    const data = await instagramScraper(username)
    console.log(data)
    if (data === 'lol') {
        return res.json({
            msg: 'oops'
        })
    }
    return res.json({
        data
    })
})

export default router