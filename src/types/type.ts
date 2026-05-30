export interface Person {
    name: string,
    professions: string[],
    bookings: Booking[]
}

export interface Booking {
    activity: string,
    percentage: string,
    status: string
    from: string,
    to: string
}