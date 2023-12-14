
// const fetch = require('node-fetch');

const img_hosting_url = "https://api.imgbb.com/1/upload?key=35ba12d50eb6b843aa712270a3ea1bb6"

const imgUpload = (req, res)=>{

    const img = req.body
    const imageBuffer = req.file.buffer;
    const fileName = req.file.originalname;
    const contentType = req.file.mimetype;

    console.log({img});
  
    import('node-fetch')
        .then(({ default: fetch }) => {

            fetch(img_hosting_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `image=${encodeURIComponent(imageBuffer.toString('base64'))}&name=${encodeURIComponent(fileName)}&content_type=${encodeURIComponent(contentType)}`,
            })
                .then(response => response.json())
                .then(imgResponse => {
                    res.json(imgResponse);
                    console.log(imgResponse)
                })
                .catch(error => {
                    console.log(error)
                    res.status(500).json({ error: 'Failed to upload image' });
                });
        })

    
};

module.exports = {imgUpload};