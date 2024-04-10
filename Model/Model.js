const model = {
  app: {
    currentPage: null,
    user: null,
    isOwner: false,
    categories: [
      'Påsmurt og Salater',
      'Kaker',
      'Varm drikke',
      'Kald drikke & Mineralvann',
    ],
    filters: ['Gluten', 'Skalldyr', 'Nøtter', 'Vegansk'],
  },

  input: {
    start: {
      category: 0,
      isEditingFilter: false,
      filter: [],
    },
    basket: [
      {
        id: 0,
        count: 4,
        selectedTopping: 1,
        comment: '',
      },
    ],
    checkout: {
      takeout: false,
      date: '06-04-2024',
      time: '12:00',
      name: 'Navn Navnesen',
      number: '12121212',
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
    toppings: [
      {
        id: 0,
        name: 'Ost og skinke',
        price: 12,
        productType: 1,
      },

      {
        id: 1,
        name: 'Hånpillede reker',
        price: 12,
        productType: 1,
      },
      {
        id: 2,
        name: 'Roastbeef',
        price: 12,
        productType: 1,
      },
      {
        id: 3,
        name: 'Eggerøree og bacon',
        price: 12,
        productType: 1,
      },
      {
        id: 4,
        name: 'Kylling og dressing',
        price: 12,
        productType: 1,
      },

      {
        id: 5,
        name: 'Brie og Spekeskinke',
        price: 12,
        productType: 1,
      },

      {
        id: 6,
        name: 'Americano',
        price: 12,
        productType: 2,
      },
      {
        id: 7,
        name: 'Traktekaffe',
        price: 12,
        productType: 2,
      },
      {
        id: 8,
        name: 'Espresso',
        price: 12,
        productType: 2,
      },
      {
        id: 9,
        name: 'Flat white',
        price: 12,
        productType: 2,
      },
      {
        id: 10,
        name: 'Caffe latte',
        price: 12,
        productType: 2,
      },
      {
        id: 11,
        name: 'Caffe mocca',
        price: 12,
        productType: 2,
      },
    ],
    items: [
      {
        id: 0,
        name: 'Baguette',
        price: 66,
        image: 'images/baguette.png',
        category: 0,
        productType: 1,
        options: ['Fin baguette', 'Grov baguette'],
      },
      {
        id: 1,
        name: 'Ciabatta',
        price: 68,
        image: 'images/ciabatta.png',
        category: 0,
        productType: 1,
        options: [],
      },
      {
        id: 2,
        name: 'Foccaccia',
        price: 66,
        image: 'images/focaccia myk.png',
        category: 0,
        productType: 1,
        options: ['Myk', 'Crispy'],
      },
      {
        id: 3,
        name: 'Horn',
        price: 75,
        image: 'images/horn.png',
        category: 0,
        productType: 1,
        options: ['Helt horn', 'Halvt horn'],
      },
      {
        id: 4,
        name: 'Croissant',
        price: 75,
        image: 'images/croissant.png',
        category: 0,
        productType: 1,
        options: [],
      },
      {
        id: 5,
        name: 'Salat',
        price: 75,
        image: 'images/salat.png',
        category: 0,
        productType: 1,
        options: ['Med brød', 'Uten brød'],
      },
      {
        id: 6,
        name: 'Ostebriks',
        price: 75,
        image: 'images/ostebriks.png',
        category: 0,
        productType: 1,
        options: [],
      },
      {
        id: 7,
        name: 'Kaffe',
        price: 75,
        image: 'images/kaffekopp.png',
        category: 2,
        productType: 2,
        options: ['Liten', 'Stor'],
      },
    ],
    highlightedItems: [4],
    orders: [
      {
        date: '20-04-2024',
        time: '13:37',
        name: 'Marius Aalto',
        number: '69696969', // 8-)
        price: 420,
        products: [
          { productId: 0, toppingId: 0 },
          { productId: 3, toppingId: null },
        ],
      },
    ],
  },
}
