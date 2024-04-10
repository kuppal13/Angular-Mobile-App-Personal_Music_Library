
import { Component,OnInit,Input } from '@angular/core';

import { uppkaram } from '../uppkaram';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Input()  headerInfo!: uppkaram;
  constructor() {
    this.headerInfo = new uppkaram( 12345678, "John Doe", "jdoe", "Downtown Campus", "Assignment1");
}
 ngOnInit(): void {
     
 }
}
