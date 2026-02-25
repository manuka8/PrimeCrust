export const pizzas = [
  {
    id: 1,
    name: "Sri Lankan Spicy Chicken",
    description: "Tender chicken breast, green chilies, onions, and spicy Sri Lankan curry spices.",
    price: 2450,
    category: "Chicken",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    isTrending: true,
    spiceLevel: "High"
  },
  {
    id: 2,
    name: "Seafood Delight",
    description: "Fresh prawns, cuttlefish, and fish chunks with a buttery garlic sauce.",
    price: 3200,
    category: "Seafood",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    isTrending: true,
    spiceLevel: "Medium"
  },
  {
    id: 3,
    name: "Classic Margherita",
    description: "Premium mozzarella cheese, fresh tomatoes, and basil on our signature crust.",
    price: 1850,
    category: "Vegetarian",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fHww?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    isTrending: false,
    spiceLevel: "Low"
  },
  {
    id: 4,
    name: "Cheese Kebap Special",
    description: "Beef kebap pieces, melted cheese, and a drizzle of white sauce.",
    price: 2750,
    category: "Meat",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    isTrending: true,
    spiceLevel: "Medium"
  },
  {
    id: 5,
    name: "Pol Sambol Pizza",
    description: "A unique Sri Lankan twist with toasted coconut sambol and spicy onions.",
    price: 1950,
    category: "Spicy Sri Lankan",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    isTrending: false,
    spiceLevel: "High"
  },
  {
    id: 6,
    name: "Garden Fresh Veggie",
    description: "Bell peppers, mushrooms, onions, black olives, and sweet corn.",
    price: 2100,
    category: "Vegetarian",
    image: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    isTrending: false,
    spiceLevel: "Low"
  }
];

export const categories = [
  "All",
  "Chicken",
  "Seafood",
  "Vegetarian",
  "Meat",
  "Spicy Sri Lankan",
  "Family Packs"
];

export const familyPacks = [
  {
    id: 101,
    name: "Classic Family Feast",
    description: "2 Large Pizzas of your choice, 1 Large Garlic Bread, and a 2L Coke.",
    price: 4950,
    category: "Family Packs",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    isTrending: true,
    discount: "Save LKR 1200",
    items: ["2 Large Pizzas", "Garlic Bread", "2L Coke"]
  },
  {
    id: 102,
    name: "Sri Lankan Party Pack",
    description: "3 Medium Pizzas (Spicy Chicken, Pol Sambol, Cheese), 10pcs Spicy Wings, and 2 x 1.5L Ginger Beer.",
    price: 6800,
    category: "Family Packs",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    isTrending: true,
    discount: "Save LKR 1800",
    items: ["3 Medium Pizzas", "10pcs Wings", "3L Drinks"]
  },
  {
    id: 103,
    name: "Mega Seafood Combo",
    description: "2 Large Seafood Delight Pizzas, Prawn Tempura (8pcs), and a 2L Coke.",
    price: 7500,
    category: "Family Packs",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
    rating: 5.0,
    isTrending: false,
    discount: "Premium Deal",
    items: ["2 Large Seafood Pizzas", "Prawn Tempura", "2L Coke"]
  }
];
