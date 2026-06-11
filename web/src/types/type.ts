export const Professions = {
    PLUMBER: 'PLUMBER',
    CARPENTER: 'CARPENTER',
    PAINTER: 'PAINTER',
    ELECTRICIAN: 'ELECTRICIAN',
    MASON: 'MASON',
} as const;
export type Professions = (typeof Professions)[keyof typeof Professions];

export interface Employee {
    id: string,
    name: string,
    phoneNumber: string,
    professions: Professions[],
    bookings: Booking[]
}

// Booking

export const ActivityType = {
    PLUMBER: 'PLUMBER',
    CARPENTER: 'CARPENTER',
    PAINTER: 'PAINTER',
    ELECTRICIAN: 'ELECTRICIAN',
    MASON: 'MASON',
    OTHER: 'OTHER',
} as const;
export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType];


export const StatusType = {
    AVAILABLE: 'AVAILABLE',
    BOOKED: 'BOOKED',
    PRELIMINARY: 'PRELIMINARY',
    ABSENT: 'ABSENT',
    FREE: 'FREE',
} as const;
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

export interface Booking {
    id: string,
    activity: ActivityType,
    percentage: string,
    status: StatusType,
    from: string,
    to: string
}

