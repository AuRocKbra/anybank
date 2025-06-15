import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./componentes/banner/banner.component";
import { FormNovaTransacaoComponent } from './componentes/form-nova-transacao/form-nova-transacao.component';
import { TipoTransacao, Transacao } from './componentes/modelos/transacao';
import { CommonModule } from '@angular/common';
import { ExtratoComponent } from './componentes/extrato/extrato.component';


@Component({
  selector: 'app-root',
  imports: [BannerComponent,FormNovaTransacaoComponent,CommonModule,ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);
  exibirmensagem:string='escondido';

  saldo = computed(()=>{
    return this.transacoes().reduce((acumulador,transacaoAtual) =>{
      switch (transacaoAtual.tipo){
        case TipoTransacao.DEPOSITO:
          return acumulador + transacaoAtual.valor;
        
        case TipoTransacao.SAQUE:
          console.log(`valor =>${transacaoAtual.valor}; acc => ${acumulador}`);
          return acumulador - transacaoAtual.valor;

        default:
          throw new Error('Tipo de transação não identificado');  
      }
    },0);
  });

  processarTransacao(transacao: Transacao){
    if(transacao.tipo == TipoTransacao.SAQUE && transacao.valor > this.saldo()){
        return alert("Saldo insuficiente");
    }
    this.transacoes.update((listaAtual)=>[transacao, ...listaAtual]);
  }
}
