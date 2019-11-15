import { Component, HostListener } from '@angular/core';

@Component({
selector: 'my-app',
template: `
<div class="wrapper" style="height: 1000px">
 <button class="show" #anchor>Show</button>
 <kendo-popup *ngIf="show" [anchor]="anchor">
     Popup content!
 </kendo-popup>
 </div>

`
})
export class AppComponent {
  public show: boolean = false;
  @HostListener("click", ['$event']) onClick(e){
    if(e.target.classList.contains('show') || e.target.classList.contains('k-popup')){
      this.show = true;
    }else{
      this.show = false;
    }
  }

}