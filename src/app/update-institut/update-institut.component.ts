import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Institut } from '../model/institut.model';

@Component({
  selector: 'app-update-institut',
  templateUrl: './update-institut.component.html',
  styleUrl: './update-institut.component.css'
})
export class UpdateInstitutComponent implements OnInit{
  @Input()  institut! : Institut;
  @Input() ajout!:any;

  @Output() categorieUpdated = new EventEmitter<Institut>();
  
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateInstitut ",this.institut);

  }


saveInstitut(){
  this.categorieUpdated.emit(this.institut);
  }
}
