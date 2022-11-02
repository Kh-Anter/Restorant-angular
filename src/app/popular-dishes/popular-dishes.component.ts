import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-popular-dishes',
  templateUrl: './popular-dishes.component.html',
  styleUrls: ['./popular-dishes.component.css']
})
export class PopularDishesComponent implements OnInit {
  @Input() data:any={}
  @Output() item=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.item .emit(this.data)
    }
}
