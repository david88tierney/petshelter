import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pets = [];
  pet = [];

  constructor(private _ptservice: PetService, private _router: Router) { }

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets() {
    let observable = this._ptservice.getPets();
    observable.subscribe (data => {
      this.pets = data['pets'];
    });
    }
}

