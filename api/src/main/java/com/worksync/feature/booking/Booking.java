package com.worksync.feature.booking;

import com.worksync.feature.employee.Employee;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String activity;
    private String workplace;
    private int procentage;
    private StatusType status;
    private LocalDate startDate;
    private LocalDate endDate;

    @ManyToOne
    private Employee employee;
}
