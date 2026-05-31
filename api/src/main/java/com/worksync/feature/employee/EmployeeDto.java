package com.worksync.feature.employee;

import java.util.List;

import com.worksync.feature.booking.Booking;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class EmployeeDto {
    private Long id;
    @NotBlank
    private String name;
    @NotNull
    private String phoneNumber;
    private List<ProfessionType> professions;
    private List<Booking> bookings;

    public EmployeeDto(Employee employee) {
        this.id = employee.getId();
        this.name = employee.getName();
        this.phoneNumber = employee.getPhoneNumber();
        this.professions = employee.getProfessions();
        this.bookings = employee.getBookingsList();
    }

    public Employee toEntity(Employee employee) {
        employee.setName(name);
        employee.setPhoneNumber(phoneNumber);
        employee.setProfessions(professions);
        employee.setBookingsList(bookings);
        return employee;
    }
}