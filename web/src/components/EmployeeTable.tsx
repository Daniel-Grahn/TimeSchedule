import { formatEnum, getStatusColorMap } from "../helpers/helper";
import type { Booking, Employee } from "../types/type";

interface Props {
  employees: Employee[];
}

const EmployeeTable = ({ employees }: Props) => {
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
      {employees.map((employee) => (
        <div
          key={employee.id}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <div>{employee.name}</div>
            <div>{employee.professions.map((profession) => (
                formatEnum(profession)
            ))}</div>
          </div>

          <div style={{ display: "flex" }}>
            {statusOverWeek(employee.bookings).map((status) => (
              <InformationBox  status={status} />
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

export default EmployeeTable;
