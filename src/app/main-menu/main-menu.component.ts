import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {



  items = ['First', 'Second', 'Third'];

  @ViewChildren('childDiv') divs!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const firstDiv = this.divs.toArray()[0];
    if (firstDiv) {
      const el = firstDiv.nativeElement as HTMLElement;
      el.style.flexGrow = '2';
      el.style.border = '1px solid';
    }
    const secondDiv = this.divs.toArray()[1];
    if (secondDiv) {
      const el = secondDiv.nativeElement as HTMLElement;
      el.style.flexGrow = '4';
      el.style.border = '1px solid';
    }
    const thirdDiv = this.divs.toArray()[2];
    if (thirdDiv) {
      const el = thirdDiv.nativeElement as HTMLElement;
      el.style.flexGrow = '0';
      el.style.border = '1px solid';
    }
  }

  inspect:boolean = false
  getinspect() {
    debugger
    const firstDiv = this.divs.toArray()[0];
    if (firstDiv) {
      const el = firstDiv.nativeElement as HTMLElement;
      el.style.flexGrow = '2';
      el.style.border = '1px solid';
    }
    const secondDiv = this.divs.toArray()[1];
    if (secondDiv) {
      const el = secondDiv.nativeElement as HTMLElement;
      el.style.flexGrow = '2';
      el.style.border = '1px solid';
    }
    const thirdDiv = this.divs.toArray()[2];
    if (thirdDiv) {
      const el = thirdDiv.nativeElement as HTMLElement;
      el.style.flexGrow = '2';
      el.style.border = '1px solid';
    }
    this.inspect = true
  }

  backtodetail(){
    const firstDiv = this.divs.toArray()[0];
    if (firstDiv) {
      const el = firstDiv.nativeElement as HTMLElement;
      el.style.flexGrow = '2';
      el.style.border = '1px solid';
    }
    const secondDiv = this.divs.toArray()[1];
    if (secondDiv) {
      const el = secondDiv.nativeElement as HTMLElement;
      el.style.flexGrow = '4';
      el.style.border = '1px solid';
    }
    const thirdDiv = this.divs.toArray()[2];
    if (thirdDiv) {
      const el = thirdDiv.nativeElement as HTMLElement;
      el.style.flexGrow = '0';
      el.style.border = '1px solid';
    }
    this.inspect = false
  }

}
