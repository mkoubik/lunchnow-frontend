export default {
    state: {
        places: [
            {
                name: "U Zaludu",
                "meals": [
                    {"name": "Rizek"},
                    {"name": "Svickova"},
                    {"name": "Gulas"},
                ],
            },
            {
                name: "Melina",
                "meals": [
                    {"name": "MIX Rizku"},
                    {"name": "Bizar"},
                    {"name": "Polevka"},
                ],
            },
        ]
    },

    getters: {
        places: state => state.places,
    }
};
