import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClassService } from 'src/app/services/class.service';
import { ClassDialogComponent } from '../class-dialog/class-dialog.component';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  displayedColumns: string[] = [
    'classNumber',
    'section',

    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private classApi: ClassService,
    private classDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllClass();
  }

  getAllClass() {
    this.classApi.getClass().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res);
      },
      error: (err) => {
        alert('Oops! Error while fetching a class data!');
      },
    });
  }

  editClass(row:any) {
    this.classDialog.open(ClassDialogComponent, {
      width: '50%',
      data: row
    });
  }

  deleteClass(id: number) {
    this.classApi.deleteClass(id).subscribe({
      next: (res) => {
        alert('class deleted succesfully.');
      },
      error: (err) => {
        alert('Delete unsuccesfull');
      },
    });
    this.getAllClass();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
