// global.service.ts

import { Injectable } from '@angular/core';

export interface ObjetoCriado {
  valor: string;
  tipo: string;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalService {

  public selecionarOpcao: string = '';
  public objetosCriados: ObjetoCriado[] = [];
  public todosObjetos: ObjetoCriado[] = [];
  private contadores: { [key: string]: number } = {};
  public ultimoObjetoCriado: ObjetoCriado | null = null;

  constructor() { }

  contarSenhasPorTipo(tipo: string): number {
    return this.todosObjetos.filter(obj => obj.tipo === tipo).length;
  }
  
  
  criarObjetoComContador(tipo: string): void {
    if (!this.contadores[tipo]) {
      this.contadores[tipo] = 1;
    }

    const prefixo: string = this.obterPrefixoPorTipo(tipo);
    const novoObjeto: ObjetoCriado = {
      valor: `${prefixo}${this.contadores[tipo]}`,
      tipo: tipo,
    };

    this.objetosCriados.push(novoObjeto);
    this.todosObjetos.push(novoObjeto);
    this.ultimoObjetoCriado = novoObjeto;

    this.contadores[tipo]++;

    this.mostrarTodosObjetosNoConsole();
  }

  private obterPrefixoPorTipo(tipo: string): string {
    switch (tipo) {
      case 'prioridade':
        return 'SP';
      case 'exames':
        return 'SE';
      case 'geral':
        return 'SG';
      default:
        return '';
    }
  }

  private mostrarTodosObjetosNoConsole(): void {
    console.log('Todos os objetos:', this.todosObjetos);
  }
}
