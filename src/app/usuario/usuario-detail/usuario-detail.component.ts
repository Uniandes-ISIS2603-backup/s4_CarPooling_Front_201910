import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd,Params} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {UsuarioService} from '../usuario.service';
import {Usuario} from '../usuario';
import {UsuarioDetail} from '../usuario-detail';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  constructor(
        private usuarioService: UsuarioService,
        private route: ActivatedRoute,
        private router: Router,
  ) { }

 /**
  * The user whose details are shown
  */
  usuarioDetail: UsuarioDetail;

  username: string;

  /**
  * The method which retrieves the books of an editorial
  */
  getUsuarioDetail(): void {
    this.usuarioService.getUsuarioDetail(this.username)
      .subscribe(o => {
        this.usuarioDetail = o
      });
  }


  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.usuarioDetail = new UsuarioDetail();
    this.getUsuarioDetail();
  }



}
