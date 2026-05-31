export interface Employee {
    id: string,
    name: string,
    professions: string[],
    bookings: Booking[]
}

export interface Booking {
    id: string,
    activity: string,
    percentage: string,
    status: string
    from: string,
    to: string
}