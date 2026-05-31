package com.worksync.feature.employee;

import java.util.List;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService service) {
        this.employeeService = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        return ResponseEntity.ok(employeeService.getAllEmployees());
    }

    @PostMapping()
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(employeeService.createEmployee(dto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDto> getEmployee(@PathVariable Long id) {
        return ResponseEntity.ok(employeeService.getEmployee(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDto> editEmployee(@PathVariable Long id, @Valid @RequestBody EmployeeDto dto) {
        return ResponseEntity.ok(employeeService.editEmployee(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }
}
