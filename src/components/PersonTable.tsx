import { getStatusColorMap } from "../helpers/helper";
import type { Booking, Person } from "../types/type";

interface Props {
  persons: Person[];
}

const PersonTable = ({ persons }: Props) => {
  const startDate = new Date("2026-05-25");
  const endDate = new Date("2026-05-29");

  const statusOverWeek = (bookings: Booking[]): string[] => {
    const statusList: string[] = [];

    for (
      let day = new Date(startDate);
      day <= endDate;
      day.setDate(day.getDate() + 1)
    ) {
      const currentDay = new Date(day);

      const bookingForDay = bookings.find((booking) => {
        const bookingStart = new Date(booking.from);
        const bookingEnd = new Date(booking.to);

        return currentDay >= bookingStart && currentDay <= bookingEnd;
      });

      statusList.push(bookingForDay?.status ?? "Free");
    }

    return statusList;
  };

  return (
    <>
      {persons.map((person) => (
        <div
          key={person.name}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <div>{person.name}</div>
            <div>{person.professions.toString()}</div>
          </div>

          <div style={{ display: "flex" }}>
            {statusOverWeek(person.bookings).map((status) => (
              <InformationBox status={status} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

interface InformationBoxProps {
  status: string;
}

const InformationBox = ({ status }: InformationBoxProps) => {
  const formatStatus = (status: string) => {
    return status.substring(0, 2).toUpperCase();
  };

  const backgroundColor =
    getStatusColorMap.get(status.toLowerCase()) ?? "white";

  return (
    <>
      <div style={{ borderColor: "black", backgroundColor: backgroundColor }}>
        {formatStatus(status)}
      </div>
    </>
  );
};

export default PersonTable;
