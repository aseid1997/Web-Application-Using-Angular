import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'sex',
    'class',
    'section',
    'telephone',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private studentApi: StudentService,
    private studentDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentApi.getStudent().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res);
      },
      error: (err) => {
        alert('Oops! Error while fetching a student data!');
      },
    });
  }

  editStudent(row:any) {
    this.studentDialog.open(StudentDialogComponent, {
      width: '50%',
      data: row
    });
  }

  deleteStudent(id: number) {
    this.studentApi.deleteStudent(id).subscribe({
      next: (res) => {
        alert('Student deleted succesfully.');
      },
      error: (err) => {
        alert('Delete unsuccesfull');
      },
    });
    this.getAllStudent();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
