export interface Empleado {
  name: string,
  contractTypeName: string,
  roleId: number,
  roleName: string,
  roleDescription: string,
  hourlySalary: number,
  monthlySalary: number,
  annuallySalary: number
}

export interface Response {
  status: string;
  empleados: Array<Empleado>;
}
