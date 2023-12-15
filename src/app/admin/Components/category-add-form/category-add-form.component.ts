import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../../Services/admin.service';
import { Category } from '../../Models/category.model';

@Component({
  selector: 'app-category-add-form',
  templateUrl: './category-add-form.component.html',
  styleUrls: ['./category-add-form.component.css']
})
export class CategoryAddFormComponent implements OnInit {

  currentCategory: Category = {
    categoryId: '',
    categoryName: '',
    CategoryLogo: [],
    ImageName: '',
    Sequence: null,
    uploadedFileUrl: '',
    CategoryCode: null
  }

  constructor(public dialogRef: MatDialogRef<CategoryAddFormComponent>,
    public adminService: AdminService) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }

  addCategory() {
    this.adminService.addCategory().subscribe();
  }
}
