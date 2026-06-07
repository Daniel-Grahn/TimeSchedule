package com.worksync.feature.booking;

import com.worksync.feature.employee.Employee;
import com.worksync.feature.employee.ProfessionType;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private ActivityType activity;

    private String workplace;
    private int percentage;

    @Enumerated(EnumType.STRING)
    private StatusType status;

    private LocalDate startDate;
    private LocalDate endDate;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;
}
