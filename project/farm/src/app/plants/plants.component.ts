import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlantsService } from '../plantshared/plants.service';
import {Plants  } from '../plantshared/plants.model';


declare var M: any;
@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css'],
  providers: [PlantsService]
})
export class PlantsComponent implements OnInit {

  constructor(private plantsService: PlantsService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshPlantsList();
  }

  
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.plantsService.selectedPlants = {
      _id: "",
      name: "",
      discription: "",
      quantity: null,
      use: ""
    }
  }


  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.plantsService.postPlants(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPlantsList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.plantsService.putPlants(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPlantsList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshPlantsList() {
    this.plantsService.getPlantsList().subscribe((res) => {
      this.plantsService.plants = res as Plants[];
    });
  }

  onEdit(pln: Plants) {
    this.plantsService.selectedPlants = pln;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.plantsService.deletePlants(_id).subscribe((res) => {
        this.refreshPlantsList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }


}
