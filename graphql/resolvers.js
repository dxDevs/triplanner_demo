const destination = [
    {
        name: "Osaka",
        country: "Japan"
    },
    {
        name: "Sapporo",
        country: "Japan"
    }
]


const resolvers = {
    Query: {
        Destinations:() => destination
    }
};

export default resolvers;