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
        basket: [
            {
                id: 0,
                count: 4,
                selectedTopping: 1,
                comment: "",
            },
        ],
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
                name: "ost og skinke - fin baguette",
                price: 12,
                productType: 'bakverk'
            },

            {
                id: 1,
                name: "Hånpillede reker - fin baguette",
                price: 12,
                productType: 'bakverk'
            },
            {
                id: 2,
                name: "Roastbeef og remulade - fin baguette",
                price: 12,
                productType: 'bakverk'
            },
            {
                id: 3,
                name: "Roastbeeef og remulade ",
                price: 12,
                productType: 'bakverk'
            },
            {
                id: 4,
                name: "Eggerøree og bacon - fin baguette",
                price: 12,
                productType: 'bakverk'
            },
            {
                id: 5,
                name: "Eggerøre og bacon - mellomgrov baguette",
                price: 12,
                productType: 'bakverk'
            },
            {
                id: 6,
                name: "Kylling of dressing - fin baguette",
                price: 12,
                productType: 'bakverk'
            },
            {
                id: 7,
                name: "Kylling of dressing - mellomgrov baguette",
                price: 12,
                productType: 'bakverk'
            },
            {
                id: 8,
                name: "Brie og Spekeskinke - hel briks",
                price: 12,
                productType: 'bakverk'
            },
            {
                id: 9,
                name: "Brie og Spekeskinke - halv briks",
                price: 12,
                productType: 'bakverk'
            },
            {
                id: 10,
                name: "Ost og skinke - hel briks",
                price: 12,
                productType: 'bakverk'
            },
            {
                id: 11,
                name: "Fin Baguette",
                price: 12,
                productType: 'bakverk'
            },
            {
                id: 12,
                name: "ost og skinke - halv briks",
                price: 12,
                productType: 'bakverk'
            },
            {
                id: 13,
                name: "Americano",
                price: 12,
                productType: 'kaffe'
            },
            {
                id: 13,
                name: "Traktekaffe",
                price: 12,
                productType: 'kaffe'
            },
            {
                id: 13,
                name: "Espresso",
                price: 12,
                productType: 'kaffe'
            },
            {
                id: 13,
                name: "Flat white",
                price: 12,
                productType: 'kaffe'
            },
            {
                id: 13,
                name: "Caffe latte",
                price: 12,
                productType: 'kaffe'
            },
            {
                id: 13,
                name: "Caffe mocca",
                price: 12,
                productType: 'bakverk'
            },

        ],
        items: [
            {
                id: 0,
                name: "Baguette",
                price: 66,
                image: "images/baguette.png",
                productType: 'bakverk',
                optionA: "Fin baguette",
                optionB: "Grov baguette"
            },
            {
                id: 1,
                name: "Ciabatta",
                price: 68,
                image: "images/ciabatta.png",
                optionA: null,
                optionB: null
            },
            {
                id: 2,
                name: "Foccaccia",
                price: 66,
                image: "images/focaccia myk.png",
                optionA: "Myk",
                optionB: "Krispy"
            },
            {
                id: 3,
                name: "Horn ost og skinke",
                price: 75,
                image: "images/horn.png",
                optionA: "Helt horn",
                optionB: "Halvt horn"
            },
            {
                id: 4,
                name: "Croissant med ost og skinke",
                price: 75,
                image: "images/croissant.png",
                optionA: null,
                optionB: null
            },
            {
                id: 5,
                name: "Salat",
                price: 75,
                image: "images/salat.png",
                optionA: "Uten brød",
                optionB: "Med brød"
            },
            {
                id: 6,
                name: "Ostebriks med ost og skinke",
                price: 75,
                image: "images/ostebriks.png",
                optionA: null,
                optionB: null
            },
            {
                id: 7,
                name: "Kaffe",
                price: 75,
                image: "images/kaffekopp.png",
                optionA: "Liten",
                optionB: "Stor"
            },
        ],
        highlightedItems: [
            4
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
                        { productId: 0, toppingId: 0, },
                        { productId: 3, toppingId: null },
                    ]
            },
        ]
    },
}






