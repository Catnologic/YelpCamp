const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
    console.log('Database connected')
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '606c4c366718ff4350a0749e',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ipsam quod commodi ducimus sequi. Doloremque veritatis, perferendis provident beatae nisi repellat vel aliquam non aut numquam voluptatem cum animi repellendus?',
            price,
            images: [
                {
                  url: 'https://res.cloudinary.com/du5gc4yqu/image/upload/v1619991257/gty_camping_kb_140711_16x9_992_dr5vya.jpg',
                  filename: 'YelpCamp/xmria0s8ivbradjwm8ah'
                },
                {
                  url: 'https://res.cloudinary.com/du5gc4yqu/image/upload/v1619991257/25b4355a-1c3a-4428-b17a-6113a990677b_image2_camp-2_phtr02.jpg',
                  filename: 'YelpCamp/pw3xrujuufnm8nqp9jqm'
                },
                {
                  url: 'https://res.cloudinary.com/du5gc4yqu/image/upload/v1619991258/200925_camping_01_fffed2.jpg',
                  filename: 'YelpCamp/i3ypghadkjqjaeojxw6l'
                },
                {
                  url: 'https://res.cloudinary.com/du5gc4yqu/image/upload/v1619991257/download_v9iw2l.jpg',
                  filename: 'YelpCamp/tsoyfk7hmkgpflhro7xs'
                }
              ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})