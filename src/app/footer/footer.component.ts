import { Component, Input } from '@angular/core';
import { uppkaram } from '../uppkaram';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input()  footerInfo!: uppkaram;
}
