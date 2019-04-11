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

  loader: any;
  /**
  * The method which retrieves the books of an editorial
  */
  getUsuarioDetail(): void {
    this.usuarioService.getUsuarioDetail(this.usuarioDetail.username)
      .subscribe(o => {
        this.usuarioDetail = o
      });
  }

  onLoad(params) {
    this.username = params['username'];
    console.log(" en detail " + this.username);
    this.usuarioDetail = new UsuarioDetail();
    this.getUsuarioDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }


}
