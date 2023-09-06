import MaroccoLogo from '../img/marocco-direction.jpeg'
import MaroccoLogo2 from '../img/marocco-direction-2.jpeg'
import MaroccoLogo3 from '../img/marocco-direction-3.jpg'
import MaroccoLogo4 from '../img/marocco-direction-4.jpg'
import MaroccoLogo5 from '../img/marocco-direction-5.jpg'
import CyprusLogo from '../img/cyprus-direction.jpeg'
import CyprusLogo2 from '../img/cyprus-direction-2.jpg'
import CyprusLogo3 from '../img/cyprus-direction-3.jpg'
import CyprusLogo4 from '../img/cyprus-direction-4.jpg'
import CyprusLogo5 from '../img/cyprus-direction-5.jpg'
import ZanzibarLogo from '../img/zanzibar-direction.jpeg'
import ZanzibarLogo2 from '../img/zanzibar-direction-2.jpg'
import ZanzibarLogo3 from '../img/zanzibar-direction-3.jpg'
import ZanzibarLogo4 from '../img/zanzibar-direction-4.jpg'
import ZanzibarLogo5 from '../img/zanzibar-direction-5.jpg'
import GreeceLogo from '../img/greece-direction.jpeg'
import GreeceLogo2 from '../img/greece-direction-2.jpg'
import GreeceLogo3 from '../img/greece-direction-3.jpg'
import GreeceLogo4 from '../img/greece-direction-4.jpg'
import GreeceLogo5 from '../img/greece-direction-5.jpg'
import TurkiyeLogo from '../img/turkiye-direction.jpeg'
import TurkiyeLogo2 from '../img/turkiye-direction-2.jpg'
import TurkiyeLogo3 from '../img/turkiye-direction-3.jpg'
import TurkiyeLogo4 from '../img/turkiye-direction-4.jpg'
import TurkiyeLogo5 from '../img/turkiye-direction-5.jpg'
import SpainLogo from '../img/spain-direction.jpeg'
import SpainLogo2 from '../img/spain-direction-2.jpg'
import SpainLogo3 from '../img/spain-direction-3.jpg'
import SpainLogo4 from '../img/spain-direction-4.jpg'
import SpainLogo5 from '../img/spain-direction-5.jpg'
import ThailandLogo from '../img/thailand-direction.jpeg'
import ThailandLogo2 from '../img/thailand-direction-2.jpg'
import ThailandLogo3 from '../img/thailand-direction-3.jpg'
import ThailandLogo4 from '../img/thailand-direction-4.jpg'
import ThailandLogo5 from '../img/thailand-direction-5.jpg'
import DominicanLogo from '../img/dominican-direction.jpeg'
import DominicanLogo2 from '../img/dominican-republic-direction-2.jpg'
import DominicanLogo3 from '../img/dominican-republic-direction-3.jpg'
import DominicanLogo4 from '../img/dominican-republic-direction-4.jpg'
import DominicanLogo5 from '../img/dominican-republic-direction-5.jpg'
type DirectionInfoType = {
    id: number
    position: [number, number],
    country: string,
    capital: string
    info: string,
    img: string,
    imgArray: string[]
    attractions: string[]
}
export const directionInfo: DirectionInfoType[] = [
    {
        id: 1,
        position: [28.877147,-9.697155],
        country: 'Marocco',
        capital: 'Rabat',
        info: "Morocco enchants with its proximity to the ocean, impressive mountain ranges, and deserts. It's an ideal solution for a vacation for those who love sun and exoticism! What should you know about Morocco and why choosing this place for a vacation will be a perfect shot?",
        img: MaroccoLogo,
        imgArray:[MaroccoLogo,MaroccoLogo2,MaroccoLogo3,MaroccoLogo4,MaroccoLogo5],
        attractions: [
        "Jamaa el Fna Square in Marrakech, known for its vibrant street performances and markets",
        "The historic city of Fes with its medieval architecture and ancient medina",
        "The Sahara Desert, offering camel treks and stunning desert landscapes",
        "The Atlas Mountains, a paradise for hikers and nature enthusiasts",
        "Chefchaouen, the 'Blue City,' famous for its blue-painted buildings",
        "The coastal town of Essaouira with its beautiful beaches and historic medina",
        "Ait Benhaddou, a UNESCO World Heritage site with well-preserved kasbahs",
        "The Todra Gorge, a dramatic canyon popular for rock climbing",
        "The Hassan II Mosque in Casablanca, one of the largest mosques in the world",
        "The rich Moroccan cuisine, including tagines, couscous, and mint tea",
]
    
    },
    {
        id: 2,
        position: [-6.135730,39.362122],
        country: 'Zanzibar',
        capital: 'Stonetown',
        info: "Escape to Zanzibar, a tropical paradise where turquoise waters meet white sands. Dive into the Indian Ocean's wonders, wander through Stone Town's historic alleys, and indulge in Swahili flavors. Zanzibar's blend of culture and natural beauty is a dream come true for beach lovers and adventurers alike.",
        img: ZanzibarLogo,
        imgArray: [ZanzibarLogo,ZanzibarLogo2,ZanzibarLogo3,ZanzibarLogo4,ZanzibarLogo5],
        attractions : [
        "White-sand beaches such as Nungwi Beach and Paje Beach",
        "Stone Town, a historic town with charming streets and landmarks",
        "Coral reefs around the island, perfect for snorkeling and diving",
        "Prison Island, where you can see giant land tortoises",
        "Dolphin tours in the Indian Ocean waters",
        "Jozani Forest, home to the rare red colobus monkeys",
        "Local cuisine featuring seafood dishes",
        "Traditional markets for souvenirs and crafts",
        "Spice farms to learn about spice cultivation",
        "Kidichi Persian Baths waterfall known for its carved pools",
]
    },
    {
        id: 3,
        position: [35.126411,33.429859],
        country: 'Cyprus',
        capital: 'Nicosia',
        info: "Discover Cyprus, a Mediterranean gem that blends stunning beaches with rich history. Explore ancient ruins in Paphos, relax on the golden shores of Limassol, and savor delicious Cypriot cuisine. With a mix of modern comforts and old-world charm, Cyprus offers a captivating escape.",
        img: CyprusLogo,
        imgArray:[CyprusLogo,CyprusLogo2,CyprusLogo3,CyprusLogo4,CyprusLogo5],
        attractions: [
        "Nissi Beach with its crystal-clear waters and beach parties",
        "Ancient city of Salamis with ruins and a theater",
        "Troodos Mountains with picturesque villages and monasteries",
        "Paphos town with historical sites including the House of Dionysus Mosaics",
        "Larnaca Harbor with a promenade and the famous salt lake",
        "Akamas Peninsula with stunning landscapes and off-road trails",
        "Limanaki Beach in Ayia Napa for water sports enthusiasts",
        "Lefkara village, known for its lace and craftsmanship",
        "Mount Olympus, the highest peak in Cyprus for hikers and tourists",
            "Cypriot cuisine featuring mezze, souvlaki, and halloumi."
        ]
    },
    {
        id: 4,
        position: [39.074207,21.824312],
        country: 'Greece',
        capital: 'Athens',
        info: "Embark on a journey to Greece, where ancient myths and stunning landscapes converge. Explore the Acropolis in Athens, relax on the idyllic beaches of Santorini, and savor Mediterranean cuisine. Greece's beauty and history make it a timeless destination.",
        img: GreeceLogo,
        imgArray: [GreeceLogo,GreeceLogo2,GreeceLogo3,GreeceLogo4,GreeceLogo5],
        attractions: [
        "The Acropolis of Athens, a symbol of ancient Greece",
        "Santorini Island with white-washed houses and sunsets",
        "Olympia, the site of the first Olympic Games",
        "Rhodes Castle in the medieval town of Rhodes",
        "Athens city with Syntagma Square and the National Museum",
        "Ancient Delphi with the Oracle of Apollo",
        "Mykonos Island, known for nightlife and beaches",
        "Meteora Monasteries on rocky cliffs",
        "Corfu with beautiful architecture and beaches",
            "Greek cuisine with tzatziki, moussaka, and souvlaki."
        ]
    },
    {
        id: 5,
        position: [42.534931,42.534931],
        country: 'Turkiye',
        capital: 'Ankara',
        info: "Experience Turkey's enchanting blend of East and West. Explore the vibrant bazaars of Istanbul, marvel at the ancient ruins of Ephesus, and unwind on the sun-soaked beaches of Antalya. With a rich history and diverse landscapes, Turkey offers a captivating journey.",
        img: TurkiyeLogo,
        imgArray: [TurkiyeLogo, TurkiyeLogo2, TurkiyeLogo3, TurkiyeLogo4,TurkiyeLogo5],
        attractions: [
        "Hagia Sophia in Istanbul, a masterpiece of Byzantine architecture",
        "Cappadocia's unique landscape with hot air balloon rides",
        "The ancient city of Ephesus and its well-preserved ruins",
        "Pamukkale's terraces and thermal pools",
        "The Blue Mosque (Sultan Ahmed Mosque) in Istanbul",
        "Antalya's beautiful beaches and historic sites",
        "Mount Ararat for trekking and mountaineering",
        "The fairy chimneys of Göreme National Park",
        "The Turkish Riviera with its stunning Mediterranean coastline",
            "Turkish cuisine with kebabs, baklava, and Turkish delight."
        ]
    },
    {
        id: 6,
        position: [14.885732,100.534776],
        country: 'Thailand',
        capital: 'Bangkok',
        info: "Discover the allure of Thailand, a land of golden temples, lush jungles, and pristine beaches. Immerse yourself in the bustling markets of Bangkok, unwind on the serene islands of Phuket, and savor the vibrant street food. Thailand's rich culture and natural beauty promise an unforgettable journey.",
        img: ThailandLogo,
        imgArray: [ThailandLogo,ThailandLogo2,ThailandLogo3,ThailandLogo4,ThailandLogo5],
        attractions: [
        "Wat Pho in Bangkok with its giant reclining Buddha",
        "Phang Nga Bay's limestone karsts and James Bond Island",
        "The ancient city of Ayutthaya, a UNESCO World Heritage site",
        "Chiang Mai's temples and night bazaars",
        "The Phi Phi Islands for crystal-clear waters and snorkeling",
        "Elephant sanctuaries for ethical elephant encounters",
        "The vibrant street markets of Bangkok",
        "Railay Beach for rock climbing and stunning beaches",
        "The cultural festivals and traditions of Thai people",
            "Thai cuisine with Pad Thai, green curry, and mango sticky rice."
        ]
    },
    {
        id: 7,
        position: [18.780217,-70.343153],
        country: 'Dominican Republic',
        capital: 'Santo Domingo',
        info: "Escape to the Dominican Republic, a Caribbean paradise where white sands meet turquoise waters. Explore the historic streets of Santo Domingo, lounge on the palm-fringed beaches of Punta Cana, and savor the flavors of local cuisine. With its tropical charm and vibrant culture, the Dominican Republic offers a dreamy getaway.",
        img: DominicanLogo,
        imgArray: [DominicanLogo,DominicanLogo2,DominicanLogo3,DominicanLogo4,DominicanLogo5],
        attractions: [
        "Punta Cana's pristine beaches and resorts",
        "The historic Zona Colonial in Santo Domingo",
        "The beauty of Samaná Peninsula and El Limón waterfall",
        "Hiking and exploring Los Haitises National Park",
        "The stunning beaches of Puerto Plata",
        "Whale watching in Samaná Bay",
        "The vibrant nightlife of Cabarete",
        "Visiting the indigenous Taino caves in Barahona",
        "Experiencing the local music and dance, like merengue and bachata",
            "Dominican cuisine with mofongo, tostones, and fresh seafood."
        ]
    },
    {
        id: 8,
        position: [40.219781,-2.567744],
        country: 'Spain',
        capital: 'Madrit',
        info: "Experience the enchantment of Spain, a country where vibrant culture and diverse landscapes create a captivating tapestry. Wander through the historic streets of Barcelona, soak in the flamenco rhythms of Seville, and bask in the Mediterranean sun on the Costa del Sol. Spain's rich history, artistic heritage, and warm hospitality make it a timeless destination.",
        img: SpainLogo,
        imgArray: [SpainLogo,SpainLogo2,SpainLogo3,SpainLogo4,SpainLogo5],
        attractions: [
        "Sagrada Família in Barcelona, Gaudí's masterpiece",
        "The Alhambra in Granada, a stunning Moorish palace",
        "Park Güell in Barcelona with its colorful mosaics",
        "Prado Museum in Madrid, showcasing Spanish art",
        "Ibiza for its world-famous nightlife and beaches",
        "Seville's Alcázar and its beautiful gardens",
        "La Rambla in Barcelona for shopping and dining",
        "The historic city of Toledo with its medieval architecture",
        "Costa del Sol's sunny beaches and resorts",
            "Spanish cuisine with paella, tapas, and churros."
        ]
    }
]