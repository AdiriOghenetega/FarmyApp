import farmImg from "../../assets/images/farmer.png"
import storeImg from "../../assets/images/store.png"

export const storeProducts = [
  {
    id: 1,
    image: require("../../assets/images/product.jpg"),
    store: "McDonalds",
    productTitle: "Big Bitter Burger Size",
    location:"Abuja",
    price: "3,999.99",
  },

  {
    id: 2,
    image: require("../../assets/images/chickem.jpg"),
    store: "McDonalds",
    productTitle: "Chicken",
    location:"Lagos",
    price: "1599.99",
  },

  {
    id: 3,
    image: require("../../assets/images/Dough.jpg"),
    store: "McDonalds",
    productTitle: "Doughnut",
    location:"Port Harcourt",
    price: "3,999.99",
  },

  {
    id: 4,
    image: require("../../assets/images/Waffles.jpg"),
    store: "McDonalds",
    productTitle: "Chicken and Waffles",
    location:"Ogun",
    price: "3,999.99",
  },

  {
    id: 5,
    image: require("../../assets/images/product.jpg"),
    store: "McDonalds",
    productTitle: "Big Bitter Burger Size",
    location:"Delta",
    price: "3,999.99",
  },
];


export const products = [
    {
      id: 1,
      image: require("../../assets/images/chicken.jpg"),
      storeName: "McDonalds",
      storeDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales sit senectus vel turpis tincidunt nec eget maecenas. Habitant",
      distance: "45 km away",
    },

    {
      id: 2,
      image: require("../../assets/images/630steak.png"),
      storeName: "630 Steak House",
      storeDescription:
        "A modern spin on a classic American steakhouse, 630 Park delights guests with impeccable prime steaks, fresh seafood, and unparalleled hospitality.",
      distance: "12 km away",
    },

    {
      id: 3,
      image: require("../../assets/images/Tonys.png"),
      storeName: "TONY’S OF NORTH BEACH",
      storeDescription:
        "Twelve-time World Pizza Champion Chef Tony Gemignani’s passion for Italian food is the inspiration at this casual eatery.",
      distance: "5 km away",
    },

    {
      id: 4,
      image: require("../../assets/images/boathouse.jpeg"),
      storeName: "BOATHOUSE ASIAN EATERY",
      storeDescription:
        "An eclectic mix of Japanese and East Asian Cuisine that offers a large selection of fresh seafood including innovative sushi rolls. ",
      distance: "120 km away",
    },

    {
      id: 5,
      image: require("../../assets/images/city.jpeg"),
      storeName: "CITY WORKS EATERY & POUR HOUSE",
      storeDescription:
        "City Works is an eatery and pour house style restaurant, focusing on classic American food with a twist and an impressive selection of drinks in an upbeat, energetic atmosphere.",
      distance: "50 km away",
    },

    {
      id: 6,
      image: require("../../assets/images/chicken.jpg"),
      storeName: "Stripe",
      storeDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales sit senectus vel turpis tincidunt nec eget maecenas. Habitant",
      distance: "50 km away",
    },

    {
      id: 7,
      image: require("../../assets/images/chicken.jpg"),
      storeName: "Scoops",
      storeDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales sit senectus vel turpis tincidunt nec eget maecenas. Habitant",
      distance: "50 km away",
    },
  ];

  export const data=[
    {
      name:"Search Farms",
      categoryName: "farm",
      img:farmImg
    },
    {
      name:"Search Stores",
      categoryName: "store",
      img:storeImg
    },
    {
      name:"Search\n Farm Products",
      categoryName: "farm_products",
      img:farmImg
    },
    {
      name:"Search\n Store products",
      categoryName: "store_products",
      img:storeImg
    },
  ]
