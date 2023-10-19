import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Adicione esta linha
import { GlobalService } from '../services/global.service';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { ObjetoCriado } from '../services/global.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab2Page {

  constructor(public globalService: GlobalService) {}

  organizarObjetos(): void {

    
    // Organize os objetos de acordo com suas condições
    const objetosPrioridade: ObjetoCriado[] = this.globalService.todosObjetos.filter(obj => obj.tipo === 'prioridade');
    const objetosExames: ObjetoCriado[] = this.globalService.todosObjetos.filter(obj => obj.tipo === 'exames');
    const objetosGeral: ObjetoCriado[] = this.globalService.todosObjetos.filter(obj => obj.tipo === 'geral');

    const objetosOrganizados: ObjetoCriado[] = objetosPrioridade.concat(objetosExames, objetosGeral);

    // pronto Agora, você pode usar objetosOrganizados como desejar, seja exibindo na tela ou realizando outras operações
    console.log('Objetos organizados:', objetosOrganizados);
  }
}
