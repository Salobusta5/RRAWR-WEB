import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

interface MenuItem {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
})
export class NavmenuComponent {
  @Input() menu: MenuItem[] = [];
  @Input() menuOpen = false;
  @Output() menuStatus = new EventEmitter<boolean>();
  
  toggleMenu(): void {
    // Solo emitir el evento si hay alguien escuchando
    if (this.menuStatus.observed) {
      this.menuStatus.emit(!this.menuOpen);
    }
  } }