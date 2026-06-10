export interface Employee {
    id: string,
    name: string,
    professions: string[],
    bookings: Booking[]
}

// Booking

export enum ActivityType {
    PLUMBER = 'PLUMBER',
    CARPENTER = 'CARPENTER',
    PAINTER = 'PAINTER',
    ELECTRICIAN = 'ELECTRICIAN',
    MASON = 'MASON',
    OTHER = 'OTHER',
}


export enum StatusType {
    AVAILABLE = 'AVAILABLE',
    BOOKED = 'BOOKED',
    PRELIMINARY = 'PRELIMINARY',
    ABSENT = 'ABSENT',
    FREE = 'FREE',
}

export interface Booking {
    id: string,
    activity: ActivityType,
    percentage: string,
    status: StatusType,
    from: string,
    to: string
}

