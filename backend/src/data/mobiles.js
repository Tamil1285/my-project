const productsData = [
  {
    id: 1,
    name: "Galaxy S21",
    brand: "Samsung",
    price: 50500,
    discount: 4020,
    rating: 4.5,
    quantity: 1,
    description: "The Samsung Galaxy S21 offers a major boost in battery life and durability, along with an excellent Super Retina XDR display that significantly enhances the user experience.",
    images: [
      "https://sathya.in/media/91281/catalog/graphite01-6.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSMRTq5n_TdB-G6XnhAPWBaIY1vXPCL1OBw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSJI7cf0ToZjlEvbeoo_1HTTIFSUS3wvB5w&s",
      "https://m.media-amazon.com/images/I/31qI+c9IKOL._UF350,350_QL80_.jpg"
    ],
    specifications: {
      Display: "6.2-inch Dynamic AMOLED 2X, 120Hz",
      Processor: "Exynos 2100 / Snapdragon 888",
      RAM: "8GB",
      Storage: "128GB / 256GB",
      Camera: "Triple 12MP + 64MP + 12MP (Rear), 10MP (Front)",
      Battery: "4000mAh with 25W fast charging",
      
      OS: "Android 11, One UI 3.1"
    }
  },
  { 
    id: 2,
    name: "iPhone 13",
    brand: "Apple",
    price: 50000,
    discount: 3300,
    quantity: 1,
    rating: 4.0,
    description: "The iPhone 13 delivers exceptional performance with the A15 Bionic chip, a gorgeous 6.1-inch Super Retina XDR OLED display, and outstanding dual-camera system. Enjoy smooth visuals with its 120Hz display and capture stunning photos with the advanced camera setup. With 5G connectivity and lasting battery life, it's perfect for multitasking and entertainment. Choose between 128GB, 256GB, and 512GB storage options to suit your needs.",
    images: [
      "https://media.croma.com/image/upload/v1708676410/Croma%20Assets/Communication/Mobiles/Images/249841_0_oldsz6.png",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-1",
      "https://cdn.mos.cms.futurecdn.net/iphone-13-2.jpg",
      "https://m-cdn.phonearena.com/images/articles/iphone-13-3.jpg"
    ],
    specifications: {
      Display: "6.1-inch Super Retina XDR OLED",
      Processor: "Apple A15 Bionic",
      RAM: "4GB",
      Storage: "128GB / 256GB / 512GB",
      Camera: "Dual 12MP + 12MP (Rear), 12MP (Front)",
      Battery: "3240mAh with 20W fast charging",
      OS: "iOS 15"
    }
  },
  {
    id: 3,
    name: "OnePlus 9",
    brand: "OnePlus",
    price: 44999,
    discount: 5000,
    quantity: 1,
    rating: 3.7,
    description: "The OnePlus 9 offers a great combination of power, performance, and design, featuring a 6.55-inch Fluid AMOLED display with 120Hz refresh rate. Powered by the Snapdragon 888 processor, it delivers seamless multitasking and gaming performance. The camera system, co-developed with Hasselblad, captures beautiful photos. It also supports 65W fast charging for a quick battery top-up, making it an excellent choice for users who want performance without compromise.",
    images: [
      "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
      "https://cdn.oneplus.com/images/oneplus-9-1.jpg",
      "https://cdn.oneplus.com/images/oneplus-9-2.jpg",
      "https://cdn.oneplus.com/images/oneplus-9-3.jpg"
    ],
    specifications: {
      Display: "6.55-inch Fluid AMOLED, 120Hz",
      Processor: "Snapdragon 888",
      RAM: "8GB / 12GB",
      Storage: "128GB / 256GB",
      Camera: "Triple 48MP + 50MP + 2MP (Rear), 16MP (Front)",
      Battery: "4500mAh with 65W fast charging",
      OS: "Android 11, OxygenOS"
    }
  },
  {
    id: 4,
    name: "Pixel 6",
    brand: "Google",
    price: 59999,
    discount: 4000,
    quantity: 1,
    rating: 4.6,
    description: "The Google Pixel 6 introduces the brand-new Google Tensor processor for impressive AI-powered performance, while the 6.4-inch AMOLED display with 90Hz refresh rate offers smooth visuals. With a dual-camera system consisting of a 50MP main sensor, the Pixel 6 excels at capturing rich, detailed photos in any lighting. Its 30W fast charging, 4614mAh battery, and Android 12 OS ensure a smooth, long-lasting experience.",
    images: [
      "https://m.media-amazon.com/images/I/61bLefD79-L._SX679_.jpg",
      "https://cdn.google.com/pixel-6-1.jpg",
      "https://cdn.google.com/pixel-6-2.jpg",
      "https://cdn.google.com/pixel-6-3.jpg"
    ],
    specifications: {
      Display: "6.4-inch AMOLED, 90Hz",
      Processor: "Google Tensor",
      RAM: "8GB",
      Storage: "128GB / 256GB",
      Camera: "Dual 50MP + 12MP (Rear), 8MP (Front)",
      Battery: "4614mAh with 30W fast charging",
      OS: "Android 12"
    }
  },
  {
    id: 5,
    name: "Redmi Note 7",
    brand: "Xiaomi",
    price: 13999,
    discount: 1500,
    quantity: 1,
    rating: 4.4,
    quantity: 1,
    description: "The Redmi Note 7 Pro delivers excellent performance with its Qualcomm Snapdragon 675 processor, a powerful 48MP + 5MP dual rear camera, and a large 6.3-inch display. Its 4000mAh battery ensures long-lasting power, and it supports fast charging. A great option for those looking for a mid-range phone with premium features.",
    images: [
      "https://m.media-amazon.com/images/I/417TaOxW9IL.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzvBwmjoCPOeCmzYEOLOjUuPbZoYklQ1Q6Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_B0Ue1TxMOgU2Y9K6tOfB0kxtgL3by6oFcw&s"
    ],
    specifications: {
      Display: "6.3-inch Full HD+ IPS LCD, 19.5:9 aspect ratio",
      Processor: "Qualcomm Snapdragon 675",
      RAM: "4GB / 6GB",
      Storage: "64GB / 128GB",
      Camera: "48MP + 5MP (Rear), 13MP (Front)",
      Battery: "4000mAh with 18W fast charging",
      OS: "MIUI 10 based on Android 9.0 (Pie)"
    }
  },
  {
    id: 6,
    name: "iPhone 12",
    brand: "Apple",
    price: 48000,
    discount: 3500,
    quantity: 1,
    rating: 4.3,
    description: "The iPhone 12 offers superb performance with the A14 Bionic chip and a stunning Super Retina XDR OLED display. It also features a 12MP dual-camera system that takes high-quality photos in all conditions. With support for 5G connectivity and MagSafe accessories, the iPhone 12 is perfect for anyone seeking cutting-edge features in a sleek, compact design.",
    images: [
      "https://images-cdn.ubuy.co.in/66292c9d2df83775d679582f-pre-owned-apple-iphone-12-carrier.jpg",
      "https://cdn.mos.cms.futurecdn.net/iphone-12-2.jpg",
      "https://cdn.mos.cms.futurecdn.net/iphone-12-3.jpg"
    ],
    specifications: {
      Display: "6.1-inch Super Retina XDR OLED",
      Processor: "Apple A14 Bionic",
      RAM: "4GB",
      Storage: "64GB / 128GB / 256GB",
      Camera: "Dual 12MP + 12MP (Rear), 12MP (Front)",
      Battery: "2815mAh with 18W fast charging",
      OS: "iOS 14"
    }
  },
  {
    id: 7,
    name: "Mi 11X",
    brand: "Xiaomi",
    price: 31999,
    discount: 3000,
    quantity: 1,
    rating: 4.2,
    description: "The Mi 11X offers excellent value for money with a 6.67-inch AMOLED display, Snapdragon 870 processor, and a 48MP triple-camera setup. With a 4520mAh battery and 33W fast charging, this phone will keep you going all day long while delivering top-notch performance for both everyday tasks and gaming.",
    images: [
      "https://i02.appmifile.com/11_operator_in/23/04/2021/a3fa26aeb0a0e8ae38f38fb311d644e8.png",
      "https://cdn.mos.cms.futurecdn.net/mi-11x-1.jpg"
    ],
    specifications: {
      Display: "6.67-inch AMOLED, 120Hz",
      Processor: "Snapdragon 870",
      RAM: "6GB / 8GB",
      Storage: "128GB",
      Camera: "Triple 48MP + 8MP + 5MP (Rear), 20MP (Front)",
      Battery: "4520mAh with 33W fast charging",
      OS: "MIUI 12.5, Android 11"
    }
  },
  {
    id: 8,
    name: "Realme GT 5G",
    brand: "Realme",
    price: 34999,
    discount: 4000,
    quantity: 1,
    rating: 4.4,
    description: "The Realme GT 5G brings you top-tier performance with its Snapdragon 870 chipset, 120Hz AMOLED display, and 64MP triple-camera system. With 65W fast charging, the 4500mAh battery charges quickly and efficiently, giving you more time to enjoy the features that come with Realme UI 2.0 and Android 11.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFLZm_9H_u5kN_U7xwfTPnDpHkUhHMj0-VQ&s",
      "https://onsitego.com/blog/wp-content/uploads/2021/08/Realme-GT-Master-Edition-Specifications.jpg"
    ],
    specifications: {
      Display: "6.43-inch Super AMOLED, 120Hz",
      Processor: "Snapdragon 870",
      RAM: "8GB / 12GB",
      Storage: "128GB / 256GB",
      Camera: "Triple 64MP + 8MP + 2MP (Rear), 16MP (Front)",
      Battery: "4500mAh with 65W fast charging",
      OS: "Realme UI 2.0, Android 11"
    }
  },
  {
    id: 9,
    name: "ROG Phone 5",
    brand: "Asus",
    price: 74999,
    discount: 5000,
    quantity: 1,
    rating: 4.7,
    description: "The ROG Phone 5 is designed for gamers, boasting a 6.78-inch AMOLED display with a 144Hz refresh rate, a Snapdragon 888 processor, and up to 16GB of RAM. It features a triple-camera setup with a 64MP main sensor and a 24MP front camera for stunning photography. The 6000mAh battery with 65W fast charging ensures you'll never run out of power during intense gaming sessions.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5C8c2EeQudlnbVCQ5hDDt_mTVxdjTExtSJQ&s",
      "https://cdn.mos.cms.futurecdn.net/rog-phone-5-1.jpg"
    ],
    specifications: {
      Display: "6.78-inch AMOLED, 144Hz",
      Processor: "Snapdragon 888",
      RAM: "8GB / 12GB / 16GB",
      Storage: "128GB / 256GB",
      Camera: "Triple 64MP + 13MP + 5MP (Rear), 24MP (Front)",
      Battery: "6000mAh with 65W fast charging",
      OS: "Android 11, ROG UI"
    }
  },
  {
    id: 10,
    name: "Vivo X70 Pro",
    brand: "Vivo",
    price: 69999,
    discount: 4000,
    quantity: 1,
    rating: 4.5,
    description: "The Vivo X70 Pro brings professional photography to your smartphone with a quad-camera setup featuring a 50MP main sensor. Powered by the MediaTek Dimensity 1200 chipset, it offers smooth performance. With a 120Hz AMOLED display and 44W fast charging for its 4450mAh battery, it combines power, performance, and style.",
    images: [
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/206483669996d83cf63e320bde0502ba.png",
      "https://cdn.mos.cms.futurecdn.net/vivo-x70-pro-1.jpg"
    ],
    specifications: {
      Display: "6.56-inch AMOLED, 120Hz",
      Processor: "MediaTek Dimensity 1200",
      RAM: "8GB / 12GB",
      Storage: "128GB / 256GB",
      Camera: "Quad 50MP + 12MP + 12MP + 8MP (Rear), 32MP (Front)",
      Battery: "4450mAh with 44W fast charging",
      OS: "Funtouch OS 12, Android 11"
    }
  },
  {
    id: 11,
    name: "Reno 6 Pro",
    brand: "Oppo",
    price: 39999,
    discount: 3000,
    quantity: 1,
    rating: 4.2,
    description: "The Oppo Reno 6 Pro offers strong performance with the Dimensity 1200 AI chipset and a 6.55-inch AMOLED display. The camera system delivers impressive results, with a 64MP main sensor and a 32MP front camera. With 65W fast charging and a 4500mAh battery, it ensures you stay powered up throughout the day.",
    images: [
      "https://dakauf.eu/wp-content/uploads/2023/05/Oppo-Reno6-Pro-blue.jpg",
      "https://cdn.mos.cms.futurecdn.net/reno-6-pro-1.jpg"
    ],
    specifications: {
      Display: "6.55-inch AMOLED, 90Hz",
      Processor: "Dimensity 1200 AI",
      RAM: "8GB / 12GB",
      Storage: "128GB / 256GB",
      Camera: "Quad 64MP + 8MP + 2MP + 2MP (Rear), 32MP (Front)",
      Battery: "4500mAh with 65W fast charging",
      OS: "ColorOS 11.3, Android 11"
    }
  },
  {
    id: 12,
    name: "Edge 20 Pro",
    brand: "Motorola",
    price: 45999,
    discount: 5000,
    quantity: 1,
    rating: 4.3,
    description: "The Motorola Edge 20 Pro offers great value with a 6.7-inch OLED display, Snapdragon 870 chipset, and impressive 108MP rear camera. Whether you're taking photos or watching videos, the 144Hz refresh rate ensures smooth and sharp visuals. Its 4500mAh battery, coupled with 30W fast charging, ensures you stay connected.",
    images: [
      "https://motorolain.vtexassets.com/arquivos/ids/157010/motorola-edge-20-pro-pdp-render-10-Optic-white-45gvowul.png?v=637835339585200000",
      "https://cdn.mos.cms.futurecdn.net/edge-20-pro-1.jpg"
    ],
    specifications: {
      Display: "6.7-inch OLED, 144Hz",
      Processor: "Snapdragon 870",
      RAM: "8GB",
      Storage: "128GB",
      Camera: "Triple 108MP + 16MP + 8MP (Rear), 32MP (Front)",
      Battery: "4500mAh with 30W fast charging",
      OS: "Android 11"
    }
  }
];

module.exports = productsData;

