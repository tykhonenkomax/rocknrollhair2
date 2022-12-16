export type InternalData = {

    information: {
        location: string,
        workingHours: string,
        phoneNumber: string
    };
    services: {
        haircut: string,
        shortHaircut: string,
        haircutLong: string,
        haircutBeard: string,
        beard: string,
        haircutChildren: string,
        haircutFatherSon: string
    },
    price: {
        shortHaircut: string,
        childrensHaircut: string,
        classicHaircut: string,
        longHaircut: string,
        fatherAndSon: string,
        beard: string,
        haircutBeard: string
    },
    time: {
        time30: string,
        time45: string,
        time60: string,
        time90: string,
        time120: string,
    },
    links: {
        gogleLink: string,
        onlineBookingLink: string
    }
}