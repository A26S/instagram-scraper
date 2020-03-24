import puppeteer from 'puppeteer'

const instagramScraper = async username => {
    const baseUrl = username => `https://instagram.com/${username}`
    
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    })
    const page = await browser.newPage()

    await page.goto(baseUrl(username), { waitUntil: 'domcontentloaded' })

    await page.waitForSelector('meta[property="og:image"]')
    await page.waitForSelector('.v1Nh3')
    await page.waitForSelector('meta[property="og:description"]')

    const data = await page.evaluate(() => {
        const imagesNodeList = document.querySelectorAll('.v1Nh3 > a')
        const imagesArray = Array.from(imagesNodeList)
        const imageLinks = imagesArray.map(image => image.href)

        const followerSpan = document.querySelector('meta[property="og:description"]')
        const followers = followerSpan.content.split(' - ')[0]
        
        const profilePicture = document.querySelector('meta[property="og:image"]')
        const pfpUrl = profilePicture.content
        
        return {
            imageLinks,
            followers,
            pfp: pfpUrl
        }
    })
    return data
}

export default instagramScraper