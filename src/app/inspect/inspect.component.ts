import { Component } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.scss']
})
export class InspectComponent {

  constructor(private MainMenu:MainMenuComponent){}

  closeinspect(){
     this.MainMenu.backtodetail()
  }

}
