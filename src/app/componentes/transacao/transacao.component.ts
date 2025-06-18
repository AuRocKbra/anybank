import { Component, input } from '@angular/core';
import { TipoTransacao, Transacao } from '../modelos/transacao';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transacao',
  imports: [
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})
export class TransacaoComponent {
transacao=input.required<Transacao>();

diferenciaSaqueDeposito(transacao:Transacao):number{
  return transacao.tipo === TipoTransacao.DEPOSITO ? transacao.valor : transacao.valor * -1;
}
}
