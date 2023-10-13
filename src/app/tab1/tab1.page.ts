import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Adicione esta linha
import { GlobalService } from '../services/global.service';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab1Page {
  constructor(public globalService: GlobalService) {} // Modifique de private para public

  selecionarOpcao(opcao: string): void {
    switch (opcao) {
      case 'prioridade':
        console.log('Selecionou: Prioridade');
        this.globalService.selecionarOpcao = 'Prioridade';
        this.globalService.criarObjetoComContador('prioridade');
        break;
      case 'exames':
        console.log('Selecionou: Exames');
        this.globalService.selecionarOpcao = 'Exames';
        this.globalService.criarObjetoComContador('exames');
        break;
      case 'geral':
        console.log('Selecionou: Geral');
        this.globalService.selecionarOpcao = 'Geral';
        this.globalService.criarObjetoComContador('geral');
        break;
    }
  }
}
