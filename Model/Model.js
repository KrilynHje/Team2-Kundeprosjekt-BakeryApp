const model = {
    app: {
        user: null,
        isOwner: false,
        categories: [
            "Påsmurt og Salater",
            "Kaker",
            "Varm drikke",
            "Kald drikke & Mineralvann",
        ],
        filters: [
            "Gluten",
            "Skalldyr",
            "Nøtter",
            "Vegansk",
        ],
    },

    input: {
        start: {
            category: 0,
            filter: [
                0,
                2,
            ],
        },
        checkout: {
            takeout: false,
            date: "06-04-2024",
            time: "12:00",
            name: "Navn Navnesen",
            number: "12121212",
        },
        makeOrder: {
            dateInput: null,
            timeInput: null,
            nameInput: null,
            numberInput: null, // 8-(
            priceInput: null,
            products:
                [

                ]
        },
        addProductInputs: {
            name: null,
            price: null,
            image: null,
            productType: null
        }
    },

    data: {
        productTypes: [
            "Lunsj deal",
            "bakverk",
        ],
        toppings: [
            {
                id: 0,
                name: "Egg og skinke",
                price: 12,
                productType: 'bakverk'
            }
        ],
        items: [
            {
                id: 0,
                name: "Baguette",
                price: 66,
                image: "Images/baguette.png",
                productType: 'bakverk'
            },
            {
                id: 1,
                name: "Ciabatta",
                price: 68,
                image: "Images/ciabatta.png",
            },
            {
                id: 2,
                name: "Baguette 2: Baguette harder",
                price: 66,
                image: "Images/baguette.png",
            },
            {
                id: 3,
                name: "Croissant",
                price: 66,
                image: "Images/Croissant.png",
            },
            {
                id: 4,
                name: "Kaffe og Croissant",
                price: 75,
                image: "Images/KaffeCroissant.png",
            },
        ],
        highlightedItems: [
            4
        ],
        basket: [
            {
                id: 0,
                count: 4,
                selectedTopping: 1,
                comment: "",
            },
        ],
        orders: [
            {
                date: "20-04-2024",
                time: "13:37",
                name: "Marius Aalto",
                number: "69696969", // 8-)
                price: 420,
                products:
                    [
                        { productId: 0, toppingId: 0 },
                        { productId: 3, toppingId: null },
                    ]
            },
        ]
    },
}






