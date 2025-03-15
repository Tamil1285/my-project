const laptopsData = [
    {
      id: 1,
      name: "MacBook Air M1",
      brand: "Apple",
      price: 99999,
      discount: 5000,
      rating: 4.8,
      quantity: 1,
      description: "Apple MacBook Air with M1 chip delivers incredible performance and battery life, featuring a 13.3-inch Retina display, 8GB RAM, and 256GB SSD storage.",
      images: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-m1.jpg",
        "https://cdn.apple.com/macbook-air-m1-side.jpg"
      ],
      specifications: {
        Display: "13.3-inch Retina Display",
        Processor: "Apple M1 Chip",
        RAM: "8GB",
        Storage: "256GB / 512GB SSD",
        Battery: "Up to 18 hours",
        OS: "macOS Big Sur"
      }
    },
    {
      id: 2,
      name: "Dell XPS 13",
      brand: "Dell",
      price: 119999,
      discount: 7000,
      rating: 4.7,
      quantity: 1,
      description: "Dell XPS 13 features a stunning 13.4-inch InfinityEdge display, Intel Core i7 processor, 16GB RAM, and 512GB SSD for high-end performance.",
      images: [
        "https://cdn.dell.com/xps-13-front.jpg",
        "https://cdn.dell.com/xps-13-side.jpg"
      ],
      specifications: {
        Display: "13.4-inch FHD+ InfinityEdge",
        Processor: "Intel Core i7-1185G7",
        RAM: "16GB",
        Storage: "512GB SSD",
        Battery: "Up to 14 hours",
        OS: "Windows 11"
      }
    },
    {
      id: 3,
      name: "HP Spectre x360",
      brand: "HP",
      price: 129999,
      discount: 8000,
      rating: 4.6,
      quantity: 1,
      description: "HP Spectre x360 is a 2-in-1 convertible laptop with a 14-inch OLED touchscreen, Intel Core i7 processor, 16GB RAM, and 1TB SSD storage.",
      images: [
        "https://cdn.hp.com/spectre-x360-front.jpg",
        "https://cdn.hp.com/spectre-x360-back.jpg"
      ],
      specifications: {
        Display: "14-inch 4K OLED Touchscreen",
        Processor: "Intel Core i7-1165G7",
        RAM: "16GB",
        Storage: "1TB SSD",
        Battery: "Up to 12 hours",
        OS: "Windows 11"
      }
    }
  ];
  
  module.exports = laptopsData;
  