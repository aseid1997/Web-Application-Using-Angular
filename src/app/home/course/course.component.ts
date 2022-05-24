import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from 'src/app/services/course.service';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  displayedColumns: string[] = [
    'courseName',
    'courseCode',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private courseApi: CourseService,
    private courseDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllCourse();
  }

  getAllCourse() {
    this.courseApi.getCourse().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res);
      },
      error: (err) => {
        alert('Oops! Error while fetching a Course data!');
      },
    });
  }

  editCourse(row:any) {
    this.courseDialog.open(CourseDialogComponent, {
      width: '50%',
      data: row
    });
  }

  deleteCourse(id: number) {
    this.courseApi.deleteCourse(id).subscribe({
      next: (res) => {
        alert('Course deleted succesfully.');
      },
      error: (err) => {
        alert('Delete unsuccesfull');
      },
    });
    this.getAllCourse();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
