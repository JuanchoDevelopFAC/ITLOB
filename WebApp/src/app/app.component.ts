import { Component, OnInit } from '@angular/core';
import { Empleado, Response } from './models/empleadoModel';
import { EmpleadoService } from './services/empleado.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title: string = 'buscar empleado';
  public displayedColumns: string[] = ['name', 'typeContract', 'roleId', 'roleName', 'roleDescription', 'hourlySalary', 'monthlySalary', 'annuallySalary'];
  public dataSource: Array<Empleado> = [];
  public filterValue: string = '';
  public urlApi: string = 'http://localhost:3900/api/empleados/';
  public empleados: Array<Empleado>;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
  }

  public getEmployees(name: string): void {
    var url = this.filterValue !== '' ? this.urlApi.concat(name) : this.urlApi;

    this.empleadoService.getEmpleados(url).subscribe((data: Response) => {
      data.empleados.map((empleado: Empleado) => {
        empleado.contractTypeName === 'HourlySalaryEmployee' ?
          empleado.annuallySalary = 120 * empleado.hourlySalary * 12 :
          empleado.annuallySalary = empleado.monthlySalary * 12;
      })
      this.dataSource = data.empleados;
    });
  }
}
