import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./componentes/banner/banner.component";
import { FormNovaTransacaoComponent } from './componentes/form-nova-transacao/form-nova-transacao.component';
import { TipoTransacao, Transacao } from './componentes/modelos/transacao';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [BannerComponent,FormNovaTransacaoComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);
  exibirmensagem:string='escondido';
  mensagemErro!:string;

  saldo = computed(()=>{
    return this.transacoes().reduce((acumulador,transacaoAtual) =>{
      switch (transacaoAtual.tipo){
        case TipoTransacao.DEPOSITO:
          return acumulador + transacaoAtual.valor;
        
        case TipoTransacao.SAQUE:
          if(transacaoAtual.valor > acumulador){
            this.mensagemErro = 'Não é permitido realizar um saque maior que seu saldo';
            this.exibirmensagem = 'visivel';
            setTimeout(()=>{
              this.exibirmensagem = 'escondido';
            },5000);
            return acumulador;
          }
          return acumulador - transacaoAtual.valor;

        default:
          throw new Error('Tipo de transação não identificado');  
      }
    },0);
  });

  processarTransacao(transacao: Transacao){
    this.transacoes.update((listaAtual)=>[transacao, ...listaAtual]);
    console.log(this.transacoes());
  }
}
