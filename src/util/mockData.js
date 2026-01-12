const resList =[
    { info: { id: "1", name: "KFC", cloudinaryImageId: "https://images.unsplash.com/photo-1513104890138-7c749659a591", cuisines: ["Burgers", "Fast Food"], avgRating: 4.1, costForTwo: "₹400", sla: { deliveryTime: 25 } } },
    { info: { id: "2", name: "Pizza Hut", cloudinaryImageId: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3", cuisines: ["Pizzas"], avgRating: 4.2, costForTwo: "₹350", sla: { deliveryTime: 30 } } },
    { info: { id: "3", name: "McDonald's", cloudinaryImageId: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", cuisines: ["Burgers", "Beverages"], avgRating: 4.3, costForTwo: "₹400", sla: { deliveryTime: 20 } } },
    { info: { id: "4", name: "Burger King", cloudinaryImageId: "https://images.unsplash.com/photo-1571091718767-18b5b1457add", cuisines: ["Burgers", "American"], avgRating: 4.0, costForTwo: "₹350", sla: { deliveryTime: 25 } } },
    { info: { id: "5", name: "Subway", cloudinaryImageId: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845", cuisines: ["Salads", "Snacks"], avgRating: 4.2, costForTwo: "₹500", sla: { deliveryTime: 15 } } },
    { info: { id: "6", name: "Starbucks", cloudinaryImageId: "https://images.unsplash.com/photo-1544787210-2211d7c309c7", cuisines: ["Beverages", "Cafe"], avgRating: 4.4, costForTwo: "₹700", sla: { deliveryTime: 20 } } },
    { info: { id: "7", name: "Domino's Pizza", cloudinaryImageId: "https://images.unsplash.com/photo-1513104890138-7c749659a591", cuisines: ["Pizzas", "Italian"], avgRating: 4.3, costForTwo: "₹400", sla: { deliveryTime: 25 } } },
    { info: { id: "8", name: "Leon's Burgers", cloudinaryImageId: "https://images.unsplash.com/photo-1550547660-d9450f859349", cuisines: ["Burgers", "American"], avgRating: 4.4, costForTwo: "₹300", sla: { deliveryTime: 22 } } },
    { info: { id: "9", name: "Biryani Kitchen", cloudinaryImageId: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8", cuisines: ["Biryani", "North Indian"], avgRating: 4.5, costForTwo: "₹450", sla: { deliveryTime: 35 } } },
    { info: { id: "10", name: "The Belgian Waffle", cloudinaryImageId: "https://images.unsplash.com/photo-1562329265-95a6d7a83440", cuisines: ["Waffle", "Desserts"], avgRating: 4.6, costForTwo: "₹200", sla: { deliveryTime: 18 } } },
    { info: { id: "11", name: "Baskin Robbins", cloudinaryImageId: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a", cuisines: ["Ice Cream", "Desserts"], avgRating: 4.4, costForTwo: "₹250", sla: { deliveryTime: 15 } } },
    { info: { id: "12", name: "Chinese Wok", cloudinaryImageId: "https://images.unsplash.com/photo-1525755662778-989d0524087e", cuisines: ["Chinese", "Asian"], avgRating: 4.0, costForTwo: "₹300", sla: { deliveryTime: 28 } } },
    { info: { id: "13", name: "Kwality Walls", cloudinaryImageId: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f", cuisines: ["Ice Cream", "Desserts"], avgRating: 4.7, costForTwo: "₹200", sla: { deliveryTime: 12 } } },
    { info: { id: "14", name: "Chai Point", cloudinaryImageId: "https://images.unsplash.com/photo-1544787210-2211d7c309c7", cuisines: ["Beverages", "Snacks"], avgRating: 4.2, costForTwo: "₹150", sla: { deliveryTime: 20 } } },
    { info: { id: "15", name: "Pista House", cloudinaryImageId: "https://images.unsplash.com/photo-1589302168068-964664d93dc0", cuisines: ["Biryani", "Mughlai"], avgRating: 4.3, costForTwo: "₹500", sla: { deliveryTime: 38 } } },
    { info: { id: "16", name: "Krispy Kreme", cloudinaryImageId: "https://images.unsplash.com/photo-1551024601-bec78aea704b", cuisines: ["Desserts", "Beverages"], avgRating: 4.5, costForTwo: "₹300", sla: { deliveryTime: 22 } } },
    { info: { id: "17", name: "Wow! Momo", cloudinaryImageId: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9", cuisines: ["Tibetan", "Snacks"], avgRating: 3.8, costForTwo: "₹250", sla: { deliveryTime: 25 } } },
    { info: { id: "18", name: "Amrutha House", cloudinaryImageId: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4", cuisines: ["South Indian"], avgRating: 4.4, costForTwo: "₹300", sla: { deliveryTime: 30 } } },
    { info: { id: "19", name: "The Good Bowl", cloudinaryImageId: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", cuisines: ["Pastas", "Italian"], avgRating: 4.1, costForTwo: "₹400", sla: { deliveryTime: 26 } } },
    { info: { id: "20", name: "Faasos", cloudinaryImageId: "https://images.unsplash.com/photo-1626777553732-48995aba3d6c", cuisines: ["Wraps", "Fast Food"], avgRating: 4.0, costForTwo: "₹350", sla: { deliveryTime: 24 } } }
  ];
  

export default resList