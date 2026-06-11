export const getPercentageColorMap: 
Map<string,string> = new Map()
.set("100", "")
.set("50", "")

export const getStatusColorMap: Map<string,string> = new Map()
.set("absent", "blue")
.set("availble", "yellow")
.set("booked", "red")
.set("preliminary", "green")
.set("free", "white")

export const formatEnum = (value: string): string =>
    value
        .toLowerCase()
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());