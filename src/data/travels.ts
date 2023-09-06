import { tomorrowDate, nextWeekDate } from "../container/Hooks/tomorrowDate"
import turkiye1 from '../img/turkiye1.jpg'
import turkiye2 from '../img/turkiye2.jpg'
import turkiye3 from '../img/turkiye3.jpg'
import turkiye4 from '../img/turkiye4.jpg'
import turkiye5 from '../img/turkiye5.jpg'
import cyprus1 from '../img/cyprus1.jpg'
import cyprus2 from '../img/cyprus2.jpg'
import cyprus3 from '../img/cyprus3.jpg'
import dominican1 from '../img/dominican1.jpg'
import dominican2 from '../img/dominican2.jpg'
import dominican3 from '../img/dominican3.jpg'
import greece1 from '../img/greece1.jpg'
import greece2 from '../img/greece2.jpg'
import greece3 from '../img/greece3.jpg'
import greece4 from '../img/greece4.jpg'
import greece5 from '../img/greece5.jpg'
import marocco1 from '../img/marocco1.jpg'
import marocco2 from '../img/marocco2.jpg'
import marocco3 from '../img/marocco3.jpg'
import spain1 from '../img/spain1.jpg'
import spain2 from '../img/spain2.jpg'
import spain3 from '../img/spain3.jpg'
import spain4 from '../img/spain4.jpg'
import spain5 from '../img/spain5.jpg'
import thailand1 from '../img/thailand1.jpg'
import thailand2 from '../img/thailand2.jpg'
import thailand3 from '../img/thailand3.jpg'
import thailand4 from '../img/thailand4.jpg'
import thailand5 from '../img/thailand5.jpg'
import zanzibar1 from '../img/zanzibar1.jpg'
import zanzibar2 from '../img/zanzibar2.jpg'
import zanzibar3 from '../img/zanzibar3.jpg'

export const travels = [
    {
        id: 1,
        country: 'Turkiye',
        city: 'Antalya',
        airPort: 'Warszawa',
        hotel: 'Orient Express',
        price: 2500,
        stars: 4,
        date: tomorrowDate()+ '-' + nextWeekDate(),
        lastMinute: true,
        img: turkiye1
},
    {
        id: 2,
        country: 'Turkiye',
        city: 'Antalya',
        airPort: 'Warszawa',
        hotel: 'Club Boran Mare Beach',
        price: 2000,
        stars: 3,
        date: '10.07.2024 - 17.07.2024',
        lastMinute: false,
        img: turkiye2
},
    {   
        id: 3,
        country: 'Turkiye',
        city: 'Antalya',
        airPort: 'Warszawa',
        hotel: 'Marmaris Bay Resort ',
        price: 2000,
        stars: 3,
        date: '15.07.2024 - 22.07.2024',
        lastMinute: false,
        img: turkiye3
},
    {   
        id: 4,
        country: 'Turkiye',
        city: 'Bodrum',
        airPort: 'Warszawa',
        hotel: 'Aquasis Deluxe Resort & Spa',
        price: 2700,
        stars: 5,
        date: '10.07.2024 - 17.07.2024',
        lastMinute: false,
        img: turkiye4
},
    {
        id: 5,
        country: 'Turkiye',
        city: 'Bodrum',
        airPort: 'Poznań',
        hotel: 'Black pearl',
        price: 3000,
        stars: 5,
        date: '10.07.2024 - 17.07.2024',
        lastMinute: false,
        img: turkiye5
},
    {
        id: 6,
        country: 'Greece',
        city: 'Corfu',
        airPort: 'Warszawa',
        hotel: 'Maris Bellos',
        price: 2100,
        stars: 5,
        date: '05.08.2024 - 12.08.2024',
        lastMinute: false,
        img: greece1
},
    {
        id: 7,
        country: 'Greece',
        city: 'Rodos',
        airPort: 'Poznań',
        hotel: 'Meliton',
        price: 2300,
        stars: 3,
        date: '20.07.2024 - 27.07.2024',
        lastMinute: false,
        img: greece2
},
    {   
        id: 8,
        country: 'Greece',
        city: 'Rodos',
        airPort: 'Poznań',
        hotel: 'Zeus',
        price: 3000,
        stars: 4,
        date: '20.07.2024 - 27.07.2024',
        lastMinute: false,
        img: greece3
},
    {   
        id: 9,
        country: 'Greece',
        city: 'Zakynthos',
        airPort: 'Poznań',
        hotel: 'Lesante Cape Resort & Villas',
        price: 4000,
        stars: 5,
        date: '10.07.2024 - 17.07.2024',
        lastMinute: false,
        img: greece4
},
    {
        id: 10,
        country: 'Greece',
        city: 'Crete',
        airPort: 'Poznań',
        hotel: 'Nana Princess',
        price: 3700,
        stars: 5,
        date: tomorrowDate()+ '-' + nextWeekDate(),
        lastMinute: true,
        img: greece5
    }, {
        id:11,
        country: 'Thailand',
        city: 'Bangkok',
        airPort: 'Warszawa',
        hotel: 'Grand Palace Hotel',
        price: 3500,
        stars: 4,
        date: '15.06.2024 - 23.06.2024',
        lastMinute: false,
        img: thailand1
    },
    {
        id: 12,
        country: 'Thailand',
        city: 'Phuket',
        airPort: 'Kraków',
        hotel: 'Palm Beach Resort',
        price: 2800,
        stars: 3,
        date: '10.07.2024 - 17.07.2024',
        lastMinute: false,
        img: thailand2
    },
    {
        id: 13,
        country: 'Thailand',
        city: 'Chiang Mai',
        airPort: 'Gdańsk',
        hotel: 'Mountain View Lodge',
        price: 2200,
        stars: 2,
        date: '05.08.2024 - 12.08.2024',
        lastMinute: false,
        img: thailand3
    },
    {
        id: 14,
        country: 'Thailand',
        city: 'Krabi',
        airPort: 'Warszawa',
        hotel: 'Coconut Paradise Resort',
        price: 2900,
        stars: 4,
        date: tomorrowDate()+ '-' + nextWeekDate(),
        lastMinute: true,
        img: thailand4
    },
    {
        id: 15,
        county: 'Thailand',
        city: 'Koh Samui',
        airPort: 'Kraków',
        hotel: 'Beachfront Bungalows',
        price: 2600,
        stars: 3,
        date: tomorrowDate()+ '-' + nextWeekDate(),
        lastMinute: true,
        img: thailand5
    },
    {
        id: 16,
        country: 'Spain',
        city: 'Barcelona',
        airPort: 'Warszawa',
        hotel: 'Hotel Costa del Sol',
        price: 3200,
        stars: 4,
        date: tomorrowDate()+ '-' + nextWeekDate(),
        lastMinute: true,
        img: spain1
    },
    {
        id: 17,
        country: 'Spain',
        city: 'Madrid',
        airPort: 'Kraków',
        hotel: 'Plaza Central Suites',
        price: 2800,
        stars: 3,
        date: '10.07.2024 - 17.07.2024',
        lastMinute: false,
        img: spain2
    },
    {
        id: 18,
        country: 'Spain',
        city: 'Valencia',
        airPort: 'Gdańsk',
        hotel: 'Resort Beachfront Vista',
        price: 2400,
        stars: 3,
        date: '05.08.2024 - 12.08.2024',
        lastMinute: false,
        img: spain3
    },
    {
        id: 19,
        country: 'Spain',
        city: 'Malaga',
        airPort: 'Warszawa',
        hotel: 'Marbella Gardens',
        price: 3100,
        stars: 4,
        date: '20.06.2024 - 27.06.2024',
        lastMinute: false,
        img: spain4
    },
    {
        id: 20,
        country: 'Spain',
        city: 'Palma de Mallorca',
        airPort: 'Krakow',
        hotel: 'Seaside Escapes',
        price: 2700,
        stars: 3,
        date: '12.08.2024 - 19.08.2024',
        lastMinute: false,
        img: spain5
    },
    {
        id: 21,
        country: 'Dominican Republic',
        city: 'Punta Cana',
        airPort: 'Warsaw',
        hotel: 'Tropical Paradise Resort',
        price: 4500,
        stars: 5,
        date: tomorrowDate()+ '-' + nextWeekDate(),
        lastMinute: true,
        img: dominican1
    },
    {
        id: 22,
        country: 'Dominican Republic',
        city: 'Puerto Plata',
        airPort: 'Krakow',
        hotel: 'Golden Sands Hotel',
        price: 4200,
        stars: 4,
        date: '10.07.2024 - 17.07.2024',
        lastMinute: false,
        img: dominican2
    },
    {
        id: 23,
        country: 'Dominican Republic',
        city: 'La Romana',
        airPort: 'Gdansk',
        hotel: 'Caribbean Dreams Resort',
        price: 4800,
        stars: 5,
        date: '05.08.2024 - 12.08.2024',
        lastMinute: false,
        img: dominican3
    },
    {
        id: 24,
        country: 'Cyprus',
        city: 'Limassol',
        airPort: 'Warsaw',
        hotel: 'Azure Beach Resort',
        price: 2800,
        stars: 4,
        date: '18.06.2024 - 25.06.2024',
        lastMinute: false,
        img: cyprus1
    },
    {
        id: 25,
        country: 'Cyprus',
        city: 'Paphos',
        airPort: 'Krakow',
        hotel: 'Harbor View Suites',
        price: 2500,
        stars: 3,
        date: '12.07.2024 - 19.07.2024',
        lastMinute: false,
        img: cyprus2
    },
    {
        id: 26,
        country: 'Cyprus',
        city: 'Larnaca',
        airPort: 'Gdansk',
        hotel: 'Sunset Beach Hotel',
        price: 2700,
        stars: 3,
        date: tomorrowDate()+ '-' + nextWeekDate(),
        lastMinute: true,
        img: cyprus3
    },
    {
        id: 27,
        country: 'Zanzibar',
        city: 'Stone Town',
        airPort: 'Warsaw',
        hotel: 'Zanzibar Paradise Resort',
        price: 3900,
        stars: 4,
        date: '15.07.2024 - 23.07.2024',
        lastMinute: false,
        img: zanzibar1
    },
    {
        id: 28,
        country: 'Zanzibar',
        city: 'Nungwi',
        airPort: 'Krakow',
        hotel: 'Nungwi Beach Bungalows',
        price: 3300,
        stars: 3,
        date: '10.08.2024 - 17.08.2024',
        lastMinute: false,
        img: zanzibar2
    },
    {
        id: 29,
        country: 'Zanzibar',
        city: 'Paje',
        airPort: 'Gdansk',
        hotel: 'Paje Sands Resort',
        price: 4200,
        stars: 5,
        date: tomorrowDate()+ '-' + nextWeekDate(),
        lastMinute: true,
        img: zanzibar3
    },
    {
        id: 30,
        country: 'Marocco',
        city: 'Marrakech',
        airPort: 'Warsaw',
        hotel: 'Riad Oasis',
        price: 2800,
        stars: 4,
        date: '15.07.2024 - 23.07.2024',
        lastMinute: false,
        img: marocco1
    },
    {
        id: 31,
        country: 'Marocco',
        city: 'Casablanca',
        airPort: 'Krakow',
        hotel: 'Casablanca Grand Hotel',
        price: 3300,
        stars: 5,
        date: '10.08.2024 - 17.08.2024',
        lastMinute: false,
        img: marocco2
    },
    {
        id: 32,
        country: 'Marocco',
        city: 'Fez',
        airPort: 'Gdansk',
        hotel: 'Royal Palace Riad',
        price: 3000,
        stars: 5,
        date: '05.09.2024 - 12.09.2024',
        lastMinute: false,
        img: marocco3
    }

]
