import { apiFetch } from "./api.ts";
import type { Employee } from "../types/type.ts";

export const employeeApi = {
    getAll: () =>
        apiFetch<Employee[]>("/employee/all"),

    getById: (id: number) =>
        apiFetch<Employee>(`/employee/${id}`),

    create: (employee: Omit<Employee, "id">) =>
        apiFetch<Employee>("/employee", {
            method: "POST",
            body: JSON.stringify(employee),
        }),

    edit: (id: number, employee: Employee) =>
        apiFetch<Employee>(`/employee/${id}`, {
            method: "PUT",
            body: JSON.stringify(employee),
        }),

    delete: async (id: number) => {
        await fetch(`/employee/${id}`, {
            method: "DELETE",
        });
    },
};