import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ThemeService} from "../../../services/theme/theme.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
  animations: [
    trigger('fadeTransitionSun', [
      state('initial', style({ transform: 'translateX(0)', opacity: 1 })),
      state('final', style({ transform: 'translateX(150%)', opacity: 0 })),
      transition('initial => final', [
        animate('500ms ease-in', style({ transform: 'translateX(150%)', opacity: 0 })),
      ]),
      transition('final => initial', [
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
    trigger('fadeTransitionMoon', [
      state('initial', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('final', style({ transform: 'translateX(20%)', opacity: 1 })),
      transition('initial => final', [
        animate('500ms ease-in', style({ transform: 'translateX(20%)', opacity: 1 })),
      ]),
      transition('final => initial', [
        animate('500ms ease-out', style({ transform: 'translateX(-100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class ThemeButtonComponent implements OnInit {
  currentState = 'initial';


  constructor(
    public themeService: ThemeService,
  ) { }

  ngOnInit(): void {
    if (this.themeService.isDarkTheme)
      this.toggleTransition()
  }


  changeLightDark(){
    this.toggleTransition()

    setTimeout(() => {
      this.themeService.changeTheme()
    }, 250);
  }

  toggleTransition() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
