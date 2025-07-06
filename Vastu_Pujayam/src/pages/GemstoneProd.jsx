import React from 'react'
import CategoryCard from '../components/CategoryCard';
import { useParams } from 'react-router-dom';

function GemstoneProd( name, image) {
  const { categoryName } = useParams();

  // data for each category
  const allProducts = [
    {id: 1, name: 'YELLOW SAPPHIRE', image: '/Gemsstoneimages/Yellow_Sapphire.jpg'},
    {id: 2, name: 'BLUE SAPPHIRE', image: '/Gemsstoneimages/Blue_Sapphire.png'}, 
    {id: 3, name: 'RUBY', image: '/Gemsstoneimages/Ruby.jpg'},
    {id: 4, name: 'EMERALD', image: '/Gemsstoneimages/Emerald.jpg'},
    {id: 5, name: 'RED CORAL', image: '/Gemsstoneimages/Red_Coral.jpeg'},
    {id: 6, name: 'HESSONITE', image: '/Gemsstoneimages/Hessonite.png'},  
    {id: 7, name: 'PEARL', image: '/Gemsstoneimages/Pearl.jpg'},
    {id: 8, name: 'CATS EYE', image: '/Gemsstoneimages/Cats_Eye.png'},
    {id: 9, name: 'OPAL STONE', image: '/Gemsstoneimages/Opal.jpg'},
    {id: 10, name: 'AMBER', image: '/Gemsstoneimages/Amber_Stone.jpg'},
    {id: 11, name: 'AMETHYST', image: '/Gemsstoneimages/Amethyst.png'},
    {id: 12, name: 'APATITE', image: '/Gemsstoneimages/apatite-gemstone.png'},
    {id: 13, name: 'AQUAMARINE', image: '/Gemsstoneimages/Aquamarine.jpg'},
    {id: 14, name: 'AVENTURINE', image: '/Gemsstoneimages/Aventurine.png'},
    {id: 15, name: 'AZURITE', image: '/Gemsstoneimages/Azurite.png'},
    {id: 16, name: 'BI COLOR TOURMALINE', image: '/Gemsstoneimages/Bi_Color_Tourmaline.jpg'},
    {id: 17, name: 'BLOODSTONE', image: '/Gemsstoneimages/BloodStone.jpg'},
    {id: 18, name: 'BRAZILIAN EMERALD', image: '/Gemsstoneimages/Brazilian_Emerald.png'},
    {id: 19, name: 'BURMESE RUBY', image: '/Gemsstoneimages/Burmese_Ruby.jpg'},
    {id: 20, name: 'CARNELIAN', image: '/Gemsstoneimages/Carnelian.png'},
    {id: 21, name: 'CHROME TOURMALINE', image: '/Gemsstoneimages/Chrome_Tourmaline.png'},
    {id: 22, name: 'CITRINE', image: '/Gemsstoneimages/Citrine.jpg'},
    {id: 23, name: 'COLAMBIAN EMERALD', image: '/Gemsstoneimages/Colombian_Emerald.png'},
    {id: 24, name: 'FIRE OPAL', image: '/Gemsstoneimages/Fire_Opal.png'},
    {id: 25, name: 'GREEN TOURMALINE', image: '/Gemsstoneimages/Green_Tourmaline.png'},
    {id: 26, name: 'HOWLITE', image: '/Gemsstoneimages/Howlite.png'},
    {id: 27, name: 'IOLITE', image: '/Gemsstoneimages/Iolite.png'},
    {id: 28, name: 'JASPER', image: '/Gemsstoneimages/Jasper.png'},
    {id: 29, name: 'KESHI PEARL', image: '/Gemsstoneimages/Keshi_pearl.png'},
    {id: 30, name: 'LAPIS LAZULI', image: '/Gemsstoneimages/Lapis_Lazuli.jpg'},
    {id: 31, name: 'MOONSTONE', image: '/Gemsstoneimages/MoonStone.jpeg'},
    {id: 32, name: 'PANJSHIR EMERALD', image: '/Gemsstoneimages/Panjashir.png'},
    {id: 33, name: 'PERIDOT', image: '/Gemsstoneimages/Peridot.jpg'},
    {id: 34, name: 'PINK TOURMALINE', image: '/Gemsstoneimages/Pink_tourmaline.png'},
    {id: 35, name: 'PITAMBARI NEELAM', image: '/Gemsstoneimages/Pitambari_neelam.png'},
    {id: 36, name: 'RUBELLITE', image: '/Gemsstoneimages/Rubellite.jpg'},
    {id: 37, name: 'RUSSIAN EMERALD', image: '/Gemsstoneimages/Russian_Emerald.png'},
    {id: 38, name: 'SOUTH SEA PEARL', image: '/Gemsstoneimages/south-sea-pearl.png'},
    {id: 39, name: 'STAR RUBY', image: '/Gemsstoneimages/Star-ruby.jpg'},
    {id: 40, name: 'SWAT EMERALD', image: '/Gemsstoneimages/Swat_Emerald.jpg'},
    {id: 41, name: 'TIGER EYE', image: '/Gemsstoneimages/Tiger-eye-stone.jpg'},
    {id: 42, name: 'TOURMALINE', image: '/Gemsstoneimages/Tormaline.jpeg'},
    {id: 43, name: 'TURQUOISE', image: '/Gemsstoneimages/Turquoise.png'},
    {id: 44, name: 'ZAMBIAN EMERALD', image: '/Gemsstoneimages/zambian-emerald.png'},
    {id: 45, name: 'ZIRCON JARKAN', image: '/Gemsstoneimages/Zircon_jarkan.png'},
    {id: 46, name: 'AFRICAN RUBY', image: '/Gemsstoneimages/African_Ruby.png'},
    {id: 47, name: 'BANGKOK YELLOW SEPPHIRE', image: '/Gemsstoneimages/Bangkok_Yellow_Sapphire.png'},
  ]

  const filtered = allProducts.filter(p => p.category === categoryName);


  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Gemstones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((product) => (
          <CategoryCard key={product.id} name={product.name} image={product.image} />
        ))}
      </div>
    </div>
  )
}

export default GemstoneProd;