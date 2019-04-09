import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  constructor() { }
  w:Window;
  ngOnInit() {
     this.w = window.open("");
  }
  eliminar() { 
    this.w.close();
} 



}
