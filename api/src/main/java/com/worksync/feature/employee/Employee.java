package com.worksync.feature.employee;

import com.worksync.feature.booking.Booking;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String phoneNumber;

    @ElementCollection(targetClass = ProfessionType.class)
    @Enumerated(EnumType.STRING)
    private List<ProfessionType> professions;

    @OneToMany(mappedBy = "employee")
    private List<Booking> bookingsList;

}
