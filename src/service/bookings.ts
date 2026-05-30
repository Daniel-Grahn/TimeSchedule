import type { Person } from "../types/type";

const BASEURL = "https://yrgo-web-services.netlify.app/";

export const getBookings = async () => {
  const response = await fetch(BASEURL + "bookings");

  if (!response.ok) {
    console.error("Error: ", response.status);
    return [];
  }

  const bookings: Person[] = await response.json();

  return bookings;
};

export const getBookingsByDateSpane = async (start: string, end: string) => {
  const params = new URLSearchParams({ start, end });

  const response = await fetch(
    `${BASEURL}bookings?${params}`
  );

  if (!response.ok){
    console.error("Error: ", response.status);
    return [];
  };

  return response.json();
};