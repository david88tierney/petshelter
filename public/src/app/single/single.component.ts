import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  pet: any;
  errors = {};

  constructor(private _ptservice: PetService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getPet(params['id']);
      console.log(params['id']);
      console.log(this.pet);
    });
  }
  getPet(id) {
    let observable = this._ptservice.getOne(id);
    observable.subscribe( data => {
      this.pet = data['pet'];
    });
  }

  delete(id) {
    let observable = this._ptservice.deleteOne(id);
    observable.subscribe( data => {
      this._router.navigate(['/']);
    });
  }

}
