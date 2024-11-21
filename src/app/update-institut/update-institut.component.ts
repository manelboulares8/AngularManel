import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Institut } from '../model/institut.model';

@Component({
  selector: 'app-update-institut',
  templateUrl: './update-institut.component.html',
  styleUrl: './update-institut.component.css'
})
export class UpdateInstitutComponent implements OnInit{
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateInstitut ",this.institut);

  }
  @Input()
  institut! : Institut;
  @Output()
categorieUpdated = new EventEmitter<Institut>();
saveInstitut(){
  this.categorieUpdated.emit(this.institut);
  }
  @Input()
ajout!:boolean;
}
