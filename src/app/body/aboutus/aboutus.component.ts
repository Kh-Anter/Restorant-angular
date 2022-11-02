import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
cartProducts:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }

  addtoCart(event:any){
    if ("cart" in sessionStorage){
      this.cartProducts=JSON.parse(sessionStorage.getItem("cart")!)
      let exist= this.cartProducts.find(item=>item.id==event.id)
      if(exist){
        alert("product is already in your cart ")
      }else{

        this.cartProducts.push(event)
        sessionStorage.setItem("cart",JSON.stringify
        (this.cartProducts))
      }

      }
    else{
      this.cartProducts.push(event)
      sessionStorage.setItem("cart",JSON.stringify
      (this.cartProducts))

    }

  }
  
}
