import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  pet = {
    'name': '',
    'species': '',
    'description': '',
    'skillOne': '',
    'skillTwo': '',
    'skillThree': ''
  };
  errors = {};

  constructor(private _ptservice: PetService, private _router: Router) { }

  ngOnInit() {
  }

  create() {
    let observable = this._ptservice.createPet(this.pet);
    observable.subscribe( data => {
      if ( data['status'] === 'not ok') {
        this.errors = data['errors']['errors'];
      } else {
        this._router.navigate(['/']);
      }
    });
  }

}
