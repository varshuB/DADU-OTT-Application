import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CategoryAddFormComponent } from '../category-add-form/category-add-form.component';
import { AdminService } from '../../Services/admin.service';
import { Category } from '../../Models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  allCategory!: Category[];
  constructor(public dialog: MatDialog,
    private adminService: AdminService) { }

  ngOnInIt() {
    this.getAllCategory();
  }
  openDialog() {
    const dialogRef = this.dialog.open(CategoryAddFormComponent, {
      width: '1000px',
    });
  }

  getAllCategory() {
    this.adminService.getAllCategory().subscribe(
      (data: Category[]) => {
        this.allCategory = data;
      }
    );
  }
}
