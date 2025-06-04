import { Component } from '@angular/core';
import { BannerComponent } from "./componentes/banner/banner.component";
import { FormNovaTransacaoComponent } from './componentes/form-nova-transacao/form-nova-transacao.component';
import { Transacao } from './componentes/modelos/transacao';

@Component({
  selector: 'app-root',
  imports: [BannerComponent,FormNovaTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  processarTransacao(transacao: Transacao){
    console.log(transacao);
  }
}
