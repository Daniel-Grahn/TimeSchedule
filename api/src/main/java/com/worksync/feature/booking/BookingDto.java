package com.worksync.feature.booking;

import com.worksync.feature.employee.Employee;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class BookingDto {
    private Long id;
    private ActivityType activity;
    private String workplace;
    private int percentage;
    private StatusType status;
    private LocalDate startDate;
    private LocalDate endDate;
    private Long employeeId;

    public BookingDto(Booking booking) {
        this.id = booking.getId();
        this.activity = booking.getActivity();
        this.workplace = booking.getWorkplace();
        this.percentage = booking.getPercentage();
        this.status = booking.getStatus();
        this.startDate = booking.getStartDate();
        this.endDate = booking.getEndDate();
        this.employeeId = booking.getEmployee().getId();
    }

    public Booking toEntity(Booking booking, Employee employee) {
        booking.setId(id);
        booking.setActivity(activity);
        booking.setWorkplace(workplace);
        booking.setPercentage(percentage);
        booking.setStatus(status);
        booking.setStartDate(startDate);
        booking.setEndDate(endDate);
        booking.setEmployee(employee);
        return booking;
    }

}
