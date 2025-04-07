import { Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  small:number = 767
  medium:number = 768

  ngOnInit(): void {
    this.width = window.innerWidth;
  }

  items = ['First', 'Second', 'Third'];

  @ViewChildren('childDiv') divs!: QueryList<ElementRef>;

  ngAfterViewInit() {
    debugger
    if(this.width > this.medium){
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
    }else if(this.width < this.small){
      const firstDiv = this.divs.toArray()[0];
      if (firstDiv) {
        const el = firstDiv.nativeElement as HTMLElement;
        el.style.flexGrow = '1';
        el.style.border = '1px solid';
      }
      const secondDiv = this.divs.toArray()[1];
      if (secondDiv) {
        const el = secondDiv.nativeElement as HTMLElement;
        el.style.flexGrow = '0';
        el.style.border = '1px solid';
      }
      const thirdDiv = this.divs.toArray()[2];
      if (thirdDiv) {
        const el = thirdDiv.nativeElement as HTMLElement;
        el.style.flexGrow = '0';
        el.style.border = '1px solid';
      }
      this.contactdetail = false
    }

  }

  inspect: boolean = false
  contactdetail: boolean = true
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

  backtodetail() {
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

  @HostListener('window:resize', ['$event'])
  width: number = 0
  onWindowResize() {
    const width = window.innerWidth;
    this.width = width
    const height = window.innerHeight;
  }

}
