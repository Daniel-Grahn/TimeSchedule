package com.worksync.feature.booking;

import com.worksync.exceptions.EmployeeNotFound;
import com.worksync.feature.employee.Employee;
import com.worksync.feature.employee.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.awt.print.Book;
import java.util.List;

@Service
public class BookingService {
    public final BookingRepository bookingRepository;
    private final EmployeeRepository employeeRepository;

    public BookingService(BookingRepository bookingRepository, EmployeeRepository employeeRepository) {
        this.bookingRepository = bookingRepository;
        this.employeeRepository = employeeRepository;
    }

    public List<BookingDto> getAllBookings() {
        return bookingRepository.findAll().stream().map(BookingDto::new).toList();
    }

    public BookingDto createBooking(BookingDto dto){
        Employee employee = employeeRepository.findById(dto.getEmployeeId()).orElseThrow(() -> new EmployeeNotFound("Employee not found"));
        Booking booking = dto.toEntity(new Booking(), employee);
        bookingRepository.save(booking);
        return new BookingDto(booking);
    }
}
