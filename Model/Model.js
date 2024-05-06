const model = {
  app: {
    currentPage: null,
    lastPage: null,
    user: 'Pierre Baguette',
    error: null,
    chosenProduct: null,
    categories: [
      'Påsmurt og Salater',
      'Kaker',
      'Varm drikke',
      'Kald drikke & Mineralvann',
    ],
    filters: [
      {
        name: 'Gluten',
        imgSrc: 'images/wheat.png',
        filledImgSrc: 'images/wheat_filled.png',
      },
      {
        name: 'Skalldyr',
        imgSrc: 'images/shrimp.png',
        filledImgSrc: 'images/shrimp_filled.png',
      },
      {
        name: 'Egg',
        imgSrc: 'images/egg.png',
        filledImgSrc: 'images/egg_filled.png',
      },
      {
        name: 'Dairy',
        imgSrc: 'images/dairy.png',
        filledImgSrc: 'images/dairy_filled.png',
      },
      {
        name: 'Vegan',
        imgSrc: 'images/vegan.png',
        filledImgSrc: 'images/vegan_filled.png',
      },
      {
        name: 'Nuts',
        imgSrc: 'images/nut.png',
        filledImgSrc: 'images/nut_filled.png',
      },
    ],
  },

  input: {
    chosenToppings: [
    ],
    totalProductAmount: 1,

    currentOrder: null,
    menu: {
      isRegistering: false,
      isLogin: false,
      register: {
        username: null,
        name: null,
        password: null,
      },
      login: {
        username: null,
        password: null,
      },
    },
    start: {
      category: 0,
      isEditingFilter: false,
      filter: [],
    },
    basket: [

    ],
    checkout: {
      takeout: false,
      date: null,
      time: null,
      name: null,
      number: null,
    },
    makeOrder: {
      dateInput: null,
      timeInput: null,
      nameInput: null,
      numberInput: null, // 8-(
      priceInput: null,
      products: [],
    },
    addProductInputs: {
      name: null,
      price: null,
      image: null,
      productType: null,
    },
  },

  data: {
    productTypes: ['Lunsj deal', 'bakverk', 'kaffe'],

    //Filter icon placement:
    // Gluten[0]
    // Shrimp[1]
    // Egg[2]
    // Dairy[3]
    // Vegan[4]
    // Nuts[5]

    toppings: [
      {
        id: 0,
        name: 'Skinke',
        price: 12,
        productType: 1,
        filters: [],
      },
      {
        id: 1,
        name: 'Roastbeef',
        price: 12,
        productType: 1,
        filters: [],
      },

      {
        id: 2,
        name: 'Bacon',
        price: 12,
        productType: 1,
        filters: [],
      },
  
      {
        id: 3,
        name: 'Spekeskinke',
        price: 12,
        productType: 1,
        filters: [],
      },
      {
        id: 4,
        name: 'Kylling',
        price: 12,
        productType: 1,
        filters: [],
      },
      {
        id: 5,
        name: 'Røkelaks',
        price: 12,
        productType: 1,
        filters: [],
      },
      {
        id: 6,
        name: 'Hånpillede reker ',
        price: 12,
        productType: 1,
        filters: [1],
      },
      {
        id: 7,
        name: 'Hvitost',
        price: 12,
        productType: 1,
        filters: [3],
      },
      {
        id: 8,
        name: 'Brie',
        price: 12,
        productType: 1,
        filters: [3],
      },

      {
        id: 9,
        name: 'Brunost',
        price: 12,
        productType: 1,
        filters: [3],
        toppingCount: null,
      },
      {
        id: 10,
        name: 'Ruccola',
        price: 12,
        productType: 1,
        filters: [4],
        toppingCount: null,
      },
      {
        id: 11,
        name: 'Aioli',
        price: 12,
        productType: 1,
        filters: [3],
        toppingCount: null,
      },
      {
        id: 12,
        name: 'Majones',
        price: 12,
        productType: 1,
        filters: [3],
        toppingCount: null,
      },

      {
        id: 13,
        name: 'Americano',
        price: 12,
        productType: 2,
        filters: [],
        toppingCount: null,
      },
      {
        id: 14,
        name: 'Traktekaffe',
        price: 12,
        productType: 2,
        filters: [],
        toppingCount: null,
      },
      {
        id: 15,
        name: 'Espresso',
        price: 12,
        productType: 2,
        filters: [],
        toppingCount: null,
      },
      {
        id: 16,
        name: 'Flat white',
        price: 12,
        productType: 2,
        filters: [3],
        toppingCount: null,
      },
      {
        id: 17,
        name: 'Caffe latte',
        price: 12,
        productType: 2,
        filters: [3],
        toppingCount: null,
      },
      {
        id: 18,
        name: 'Caffe mocca',
        price: 12,
        productType: 2,
        filters: [3],
        toppingCount: null,
      },
    ],
    items: [
      {
        id: 0,
        name: 'Baguette',
        price: 36,
        image: 'images/baguette.png',
        category: 0,
        productType: 1,
        options: ['Fin baguette', 'Grov baguette'],
        nonGlutenPossible: true,
      },
      {
        id: 1,
        name: 'Ciabatta',
        price: 36,
        image: 'images/ciabatta.png',
        category: 0,
        productType: 1,
        options: [],
        nonGlutenPossible: true,
      },
      {
        id: 2,
        name: 'Foccaccia',
        price: 36,
        image: 'images/focaccia_myk.png',
        category: 0,
        productType: 1,
        options: ['Myk', 'Crispy'],
        nonGlutenPossible: true,
      },
      {
        id: 3,
        name: 'Horn',
        price: 45,
        image: 'images/horn.png',
        category: 0,
        productType: 1,
        options: ['Helt horn', 'Halvt horn'],
        nonGlutenPossible: true,
      },
      {
        id: 4,
        name: 'Croissant',
        price: 45,
        image: 'images/croissant.png',
        category: 0,
        productType: 1,
        options: [],
        nonGlutenPossible: false,
      },
      {
        id: 5,
        name: 'Salat',
        price: 45,
        image: 'images/salat.png',
        category: 0,
        productType: 1,
        options: ['Med brød', 'Uten brød'],
        nonGlutenPossible: true,
      },
      {
        id: 6,
        name: 'Ostebriks',
        price: 45,
        image: 'images/ostebriks.png',
        category: 0,
        productType: 1,
        options: [],
        nonGlutenPossible: true,
      },
      {
        id: 7,
        name: 'Kaffe',
        price: 35,
        image: 'images/kaffekopp.png',
        category: 2,
        productType: 2,
        options: ['Liten', 'Stor'],
      },
    ],
    highlightedItems: [4],
    orders: [
      {
        orderId: 0,
        date: '20-04-2024',
        time: '13:37',
        name: 'Marius Aalto',
        number: '69696969', // 8-)
        price: 420,
        products: [
          {
            itemId: 0,
            count: 4,
            selectedTopping: [],
            comment: '',
          },
          {
            itemId: 5,
            count: 4,
            selectedTopping: [],
            comment: '',
          },
          {
            itemId: 3,
            count: 4,
            selectedTopping: [],
            comment: '',
          },
        ],
      },
    ],
    users: [
      {
        username: '45852605',
        password: 'baguette',
        admin: true,
        name: 'Pierre Baguette',
      },
      {
        username: '99845408',
        password: 'baguette',
        admin: false,
        name: 'Bruce Wayne',
      },
    ],
  },
}
