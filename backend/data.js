let products = [
    {
      "name": "Turmeric Powder",
      "description": "High-quality turmeric powder sourced from organic farms.",
      "category": "Spices",
      "price": 150,
      "discount": 10,
      "finalPrice": 135,
      "isAvailable": true,
      "weight": "500g",
      "images": ["https://i.ibb.co/k6dZwJr/img1.jpg", "https://i.ibb.co/vzGRT5b/img2.jpg"],
      "thumbnail": "https://i.ibb.co/k6dZwJr/img1.jpg",
      "rating": 4.5,
      "reviews": [
        {
          "userId": "63f2b1c8a8f1a2b1c8a8f1a2",
          "review": "Excellent quality turmeric!",
          "rating": 5,
          "date": "2025-01-01T00:00:00Z"
        }
      ],
      "origin": "India",
      "brand": "SpiceMaster"
    },
    {
      "name": "Cumin Seeds",
      "description": "Fresh and aromatic cumin seeds.",
      "category": "Spices",
      "price": 200,
      "discount": 5,
      "finalPrice": 190,
      "isAvailable": true,
      "weight": "250g",
      "images": ["https://i.ibb.co/vzGRT5b/img2.jpg", "https://i.ibb.co/k6dZwJr/img1.jpg"],
      "thumbnail": "https://i.ibb.co/vzGRT5b/img2.jpg",
      "rating": 4.2,
      "reviews": [
        {
          "userId": "63f2b1c8a8f1a2b1c8a8f1a3",
          "review": "Very fresh and aromatic.",
          "rating": 4,
          "date": "2025-01-02T00:00:00Z"
        }
      ],
      "origin": "India",
      "brand": "FlavorBoost"
    },
    {
      "name": "Coriander Powder",
      "description": "Finely ground coriander powder for enhanced flavor.",
      "category": "Spices",
      "price": 120,
      "discount": 15,
      "finalPrice": 102,
      "isAvailable": false,
      "weight": "300g",
      "images": ["https://i.ibb.co/vzGRT5b/img2.jpg"],
      "thumbnail": "https://i.ibb.co/k6dZwJr/img1.jpg",
      "rating": 4.0,
      "reviews": [
        {
          "userId": "63f2b1c8a8f1a2b1c8a8f1a4",
          "review": "Nice and fresh.",
          "rating": 4,
          "date": "2025-01-03T00:00:00Z"
        }
      ],
      "origin": "Sri Lanka",
      "brand": "HerbalTouch"
    },
    {
      "name": "Red Chili Powder",
      "description": "Hot and vibrant red chili powder.",
      "category": "Spices",
      "price": 180,
      "discount": 10,
      "finalPrice": 162,
      "isAvailable": true,
      "weight": "400g",
      "images": ["https://i.ibb.co/k6dZwJr/img1.jpg", "https://i.ibb.co/k6dZwJr/img1.jpg"],
      "thumbnail": "https://i.ibb.co/k6dZwJr/img1.jpg",
      "rating": 4.7,
      "reviews": [
        {
          "userId": "63f2b1c8a8f1a2b1c8a8f1a5",
          "review": "Very spicy and good quality.",
          "rating": 5,
          "date": "2025-01-04T00:00:00Z"
        }
      ],
      "origin": "India",
      "brand": "AromaFusion"
    },
    {
      "name": "Garam Masala",
      "description": "Aromatic blend of spices for curries.",
      "category": "Seasonings",
      "price": 250,
      "discount": 20,
      "finalPrice": 200,
      "isAvailable": true,
      "weight": "200g",
      "images": ["https://example.com/images/garam1.jpg"],
      "thumbnail": "https://example.com/images/garam1.jpg",
      "rating": 4.8,
      "reviews": [
        {
          "userId": "63f2b1c8a8f1a2b1c8a8f1a6",
          "review": "Excellent flavor blend!",
          "rating": 5,
          "date": "2025-01-05T00:00:00Z"
        }
      ],
      "origin": "India",
      "brand": "SpiceMaster"
    },
    {
      "name": "Black Pepper",
      "description": "Whole black peppercorns with a rich aroma.",
      "category": "Spices",
      "price": 300,
      "discount": 15,
      "finalPrice": 255,
      "isAvailable": true,
      "weight": "150g",
      "images": ["https://example.com/images/pepper1.jpg", "https://example.com/images/pepper2.jpg"],
      "thumbnail": "https://example.com/images/pepper1.jpg",
      "rating": 4.6,
      "reviews": [
        {
          "userId": "63f2b1c8a8f1a2b1c8a8f1a7",
          "review": "Very fresh and aromatic.",
          "rating": 5,
          "date": "2025-01-06T00:00:00Z"
        }
      ],
      "origin": "Vietnam",
      "brand": "FlavorBoost"
    },
    {
      "name": "Clove",
      "description": "Premium quality cloves with a strong aroma.",
      "category": "Spices",
      "price": 350,
      "discount": 10,
      "finalPrice": 315,
      "isAvailable": true,
      "weight": "100g",
      "images": ["https://example.com/images/clove1.jpg"],
      "thumbnail": "https://example.com/images/clove1.jpg",
      "rating": 4.3,
      "reviews": [
        {
          "userId": "63f2b1c8a8f1a2b1c8a8f1a8",
          "review": "Good quality and aroma.",
          "rating": 4,
          "date": "2025-01-07T00:00:00Z"
        }
      ],
      "origin": "Sri Lanka",
      "brand": "HerbalTouch"
    },
    {
      "name": "Cardamom",
      "description": "Aromatic cardamom pods for rich flavor.",
      "category": "Spices",
      "price": 400,
      "discount": 20,
      "finalPrice": 320,
      "isAvailable": false,
      "weight": "250g",
      "images": ["https://example.com/images/cardamom1.jpg"],
      "thumbnail": "https://example.com/images/cardamom1.jpg",
      "rating": 4.9,
      "reviews": [
        {
          "userId": "63f2b1c8a8f1a2b1c8a8f1a9",
          "review": "Top-notch quality.",
          "rating": 5,
          "date": "2025-01-08T00:00:00Z"
        }
      ],
      "origin": "India",
      "brand": "AromaFusion"
    },
    {
      "name": "Fenugreek Seeds",
      "description": "Nutty-flavored fenugreek seeds.",
      "category": "Spices",
      "price": 120,
      "discount": 10,
      "finalPrice": 108,
      "isAvailable": true,
      "weight": "200g",
      "images": ["https://example.com/images/fenugreek1.jpg"],
      "thumbnail": "https://example.com/images/fenugreek1.jpg",
      "rating": 4.1,
      "reviews": [
        {
          "userId": "63f2b1c8a8f1a2b1c8a8f1b0",
          "review": "Great for cooking.",
          "rating": 4,
          "date": "2025-01-09T00:00:00Z"
        }
      ],
      "origin": "India",
      "brand": "FlavorBoost"
    },
    {
      "name": "Mustard Seeds",
      "description": "Fresh mustard seeds for authentic taste.",
      "category": "Spices",
      "price": 80,
      "discount": 5,
      "finalPrice": 76,
      "isAvailable": true,
      "weight": "250g",
      "images": ["https://example.com/images/mustard1.jpg"],
      "thumbnail": "https://example.com/images/mustard1.jpg",
      "rating": 4.4,
      "reviews": [
        {
          "userId": "63f2b1c8a8f1a2b1c8a8f1b1",
          "review": "Good for pickles.",
          "rating": 4,
          "date": "2025-01-10T00:00:00Z"
        }
      ],
      "origin": "India",
      "brand": "HerbalTouch"
    }
  ]
  
  module.exports = products;