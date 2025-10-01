// Images are raw URLs; they will be wrapped safely in components

// Moved image URLs here from utils/img.js so you can edit in one place
const images = [
    "https://dishedbykate.com/wp-content/uploads/2022/07/Bao-buns.jpg",
    "https://redhousespice.com/wp-content/uploads/2022/05/mapo-tofu-with-spices-on-the-side-scaled.jpg",
    "https://tyberrymuch.com/wp-content/uploads/2023/06/coffee-milk-bubble-tea-recipe-540x720.jpg",
    "https://cicili.tv/wp-content/uploads/2022/07/Chili-Crisp-1-scaled-1707x1707.jpeg",
    "https://www.siftandsimmer.com/wp-content/uploads/2024/04/IMG_1830-4.jpg",
    "https://www.seriouseats.com/thmb/apRK5APNxMNytY3tLYMUbgOxuRw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__10__20170522-black-sesame-ice-cream-vicky-wasik-18-585b60aac6bb4e47b7546fc4c1c958a8.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JAKHItHmls_5t0wBA5fxh-V3xi2HWdLxSw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4S50Y9PWzv4LKsX8kTW08YMEIv3BZOhA0EQ&s",
    "https://stilleessence.com/cdn/shop/articles/1.png?v=1704369999",
    "https://assets.bonappetit.com/photos/62018faab2827628f3c8e1bc/master/w_1600%2Cc_limit/BA0322hotpot04_2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3ikp6h4_x5-IaQ6egr4S1LFbSvPXy_o_2A&s",
    "https://redhousespice.com/wp-content/uploads/2022/01/sliced-peking-duck-with-pancakes-scaled.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGyJoQQ5PxBMRa5GiT1qRYjniwOM_6CAlPA&s",
    "https://m.media-amazon.com/images/I/71vBoVGyu+L._UF894,1000_QL80_.jpg",
    "https://cdn.shopify.com/s/files/1/0002/9317/5359/files/cup-of-healthy-dandelion-tea-herbal-medicine-retro-royalty-free-image-539117696-1538487191_600x600.jpg?v=1614929926",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVDlmpA6Wi2SnQUhQsn03tyl6HrIGl3MBdg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbrv2m0iY5uYTvP-Gkqh1jbnUJLfiYNjuLA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFoMsbhg-OEq4vyns12QQi-nNuiFu9yZVICg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6edSa-7fXZoV1O2KsNIlFZ0EH0rnQB-a1Iw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZefB99w6k7aXX-aY4XbC0DmRSn45HNwT4w&s",
    "https://kikkomanusa.com/homecooks/wp-content/uploads/2023/05/10041390002806_A1NB.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_DLjhY9EcvISqB64NY4mPJAmgxWAk7LJ2A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTbFoz8U5IKKDd2KBg2uOcOnJRm1-Zdm9NQ&s",
    "https://www.foodandwine.com/thmb/pYz-Ef6P46Tho4MJotrw-Aqok6U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taro-bubble-tea-XL-RECIPE0316-6a4d5b49afcd41ab8ea6b5ef5805858a.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXE42SSSDTBHOCXZx7Baq6mlt45PGnTvflug&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfRdtw3t1IibTDExFMn4ds1_WstS02Fuv7Q&s",
]

// type: 'food' | 'sauces' | 'drinks' | 'icecream'
// category: 'spicy' | 'sweet' | 'unusual'

const seed = [
	{ id: '1', name: { en: 'Bao Buns', ru: 'Бао булочки' }, type: 'food', category: 'sweet', price: 6.5, image: images[0], ingredients: { en: ['Flour','Yeast','Sugar'], ru: ['Мука','Дрожжи','Сахар'] } },
	{ id: '2', name: { en: 'Mapo Tofu', ru: 'Мапо Тофу' }, type: 'food', category: 'spicy', price: 9.9, image: images[1], ingredients: { en: ['Tofu','Doubanjiang','Sichuan Pepper'], ru: ['Тофу','Доубаньцзян','Сычуаньский перец'] } },
	{ id: '3', name: { en: 'Bubble Tea', ru: 'Бабл-ти' }, type: 'drinks', category: 'sweet', price: 4.5, image: images[2], ingredients: { en: ['Tea','Milk','Tapioca'], ru: ['Чай','Молоко','Тапиока'] } },
	{ id: '4', name: { en: 'Chili Oil', ru: 'Чили масло' }, type: 'sauces', category: 'spicy', price: 3.9, image: images[3], ingredients: { en: ['Chili','Oil','Garlic'], ru: ['Чили','Масло','Чеснок'] } },
	{ id: '5', name: { en: 'Lychee Soda', ru: 'Личи сода' }, type: 'drinks', category: 'unusual', price: 3.2, image: images[4], ingredients: { en: ['Lychee','Soda','Mint'], ru: ['Личи','Содовая','Мята'] } },
	{ id: '6', name: { en: 'Sesame Ice Cream', ru: 'Кунжутное мороженное' }, type: 'icecream', category: 'unusual', price: 5.0, image: images[5], ingredients: { en: ['Black Sesame','Milk','Cream'], ru: ['Чёрный кунжут','Молоко','Сливки'] } },
	{ id: '7', name: { en: 'Dumplings', ru: 'Пельмени' }, type: 'food', category: 'unusual', price: 8.2, image: images[6], ingredients: { en: ['Pork','Cabbage','Ginger'], ru: ['Свинина','Капуста','Имбирь'] } },
	{ id: '8', name: { en: 'Sweet and Sour Sauce', ru: 'Кисло-сладкий соус' }, type: 'sauces', category: 'sweet', price: 2.9, image: images[7], ingredients: { en: ['Sugar','Vinegar','Ketchup'], ru: ['Сахар','Уксус','Кетчуп'] } },
	{ id: '9', name: { en: 'Jasmine Tea', ru: 'Жасминовый чай' }, type: 'drinks', category: 'sweet', price: 2.0, image: images[8], ingredients: { en: ['Jasmine','Tea Leaves'], ru: ['Жасмин','Чайные листья'] } },
	{ id: '10', name: { en: 'Mala Hotpot', ru: 'Мала хот-пот' }, type: 'food', category: 'spicy', price: 18.0, image: images[9], ingredients: { en: ['Chili','Broth','Beef'], ru: ['Чили','Бульон','Говядина'] } },
	{ id: '11', name: { en: 'Wonton Soup', ru: 'Суп Вонтон' }, type: 'food', category: 'unusual', price: 7.5, image: images[10], ingredients: { en: ['Wonton','Broth','Scallion'], ru: ['Вонтон','Бульон','Зелёный лук'] } },
	{ id: '12', name: { en: 'Peking Duck', ru: 'Утка по-пекински' }, type: 'food', category: 'sweet', price: 22.0, image: images[11], ingredients: { en: ['Duck','Hoisin','Cucumber'], ru: ['Утка','Хойсин','Огурец'] } },
	{ id: '13', name: { en: 'Hoisin Sauce', ru: 'Соус хойсин' }, type: 'sauces', category: 'sweet', price: 3.4, image: images[12], ingredients: { en: ['Soy','Sugar','Spices'], ru: ['Соя','Сахар','Специи'] } },
	{ id: '14', name: { en: 'Sichuan Pepper Oil', ru: 'Масло с сыч. перцем' }, type: 'sauces', category: 'spicy', price: 4.6, image: images[13], ingredients: { en: ['Pepper','Oil'], ru: ['Перец','Масло'] } },
	{ id: '15', name: { en: 'Chrysanthemum Tea', ru: 'Чай хризантема' }, type: 'drinks', category: 'unusual', price: 2.5, image: images[14], ingredients: { en: ['Flowers','Sugar'], ru: ['Цветки','Сахар'] } },
	{ id: '16', name: { en: 'Plum Juice', ru: 'Сливовый сок' }, type: 'drinks', category: 'sweet', price: 2.8, image: images[15], ingredients: { en: ['Plum','Water','Sugar'], ru: ['Слива','Вода','Сахар'] } },
	{ id: '17', name: { en: 'Red Bean Ice Cream', ru: 'Фасолевое мороженное' }, type: 'icecream', category: 'unusual', price: 4.8, image: images[16], ingredients: { en: ['Red Bean','Milk'], ru: ['Красная фасоль','Молоко'] } },
	{ id: '18', name: { en: 'Matcha Ice Cream', ru: 'Матча мороженное' }, type: 'icecream', category: 'sweet', price: 5.2, image: images[17], ingredients: { en: ['Matcha','Milk','Cream'], ru: ['Матча','Молоко','Сливки'] } },

	// Additional items
	{ id: '19', name: { en: 'Kung Pao Chicken', ru: 'Кунг пао' }, type: 'food', category: 'spicy', price: 12.0, image: images[18], ingredients: { en: ['Chicken','Peanuts','Chili'], ru: ['Курица','Арахис','Чили'] } },
	{ id: '20', name: { en: 'Mooncake', ru: 'Лунный пряник' }, type: 'food', category: 'sweet', price: 3.5, image: images[19], ingredients: { en: ['Lotus','Yolk','Sugar'], ru: ['Лотос','Желток','Сахар'] } },
	{ id: '21', name: { en: 'Soy Sauce', ru: 'Соевый соус' }, type: 'sauces', category: 'unusual', price: 2.2, image: images[20], ingredients: { en: ['Soy','Wheat','Salt'], ru: ['Соя','Пшеница','Соль'] } },
	{ id: '22', name: { en: 'Chili Crisp', ru: 'Чили криспи' }, type: 'sauces', category: 'spicy', price: 4.2, image: images[21], ingredients: { en: ['Chili','Oil','Crunch'], ru: ['Чили','Масло','Хруст'] } },
	{ id: '23', name: { en: 'Soy Milk', ru: 'Соевое молоко' }, type: 'drinks', category: 'unusual', price: 2.4, image: images[22], ingredients: { en: ['Soy','Water'], ru: ['Сая','Вода'] } },
	{ id: '24', name: { en: 'Taro Bubble Tea', ru: 'Таро бабл-ти' }, type: 'drinks', category: 'sweet', price: 4.9, image: images[23], ingredients: { en: ['Taro','Milk','Tapioca'], ru: ['Таро','Молоко','Тапиока'] } },
	{ id: '25', name: { en: 'Mango Ice Cream', ru: 'Манговое мороженное' }, type: 'icecream', category: 'sweet', price: 4.9, image: images[24], ingredients: { en: ['Mango','Milk','Cream'], ru: ['Манго','Молоко','Сливки'] } },
	{ id: '26', name: { en: 'Dragon Fruit Sorbet', ru: 'Сорбет питахайя' }, type: 'icecream', category: 'unusual', price: 5.1, image: images[25], ingredients: { en: ['Dragon Fruit','Sugar'], ru: ['Питахайя','Сахар'] } },
]

export default seed
