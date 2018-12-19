import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet = {};
  errors = {};
  constructor(private _ptService: PetService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getPet(params['id']);
    });
  }

    getPet(id) {
      let observable = this._ptService.getOne(id);
      observable.subscribe( data => {
        this.pet = data['pet'];
      });
    }

    update(id) {
      let observable = this._ptService.updateOne(id, this.pet);
      observable.subscribe( data => {
        if ( data['status'] === 'not ok') {
          this.errors = data['errors']['errors'];
        } else {
          this._router.navigate(['/']);
        }
      });
    }
}


