package com.worksync.feature.employee;

import java.util.List;

import com.worksync.exceptions.EmployeeNotFound;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<EmployeeDto> getAllEmployees() {
        return employeeRepository.findAll().stream().map(EmployeeDto::new).toList();
    }

    public EmployeeDto createEmployee(EmployeeDto dto) {
        Employee employee = dto.toEntity(new Employee());
        employeeRepository.save(employee);
        return new EmployeeDto(employee);
    }

    public EmployeeDto getEmployee(Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFound("Employee with id " + id + " not found"));
        return new EmployeeDto(employee);
    }

    public EmployeeDto editEmployee(Long id, EmployeeDto dto) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFound("Employee with id " + id + " not found"));
        dto.toEntity(employee);
        employeeRepository.save(employee);
        return new EmployeeDto(employee);
    }

    public void deleteEmployee(Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFound("Employee with id " + id + " not found"));
        employeeRepository.delete(employee);
    }
}
