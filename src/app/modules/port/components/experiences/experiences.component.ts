import { Component, signal } from '@angular/core';
import { iexperiences } from '../../interface/iexperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<iexperiences[]>([
    {
      summary: {
        strong: "Front-end",
        p: " "
      },
      text: 'Front-end refere-se à parte de um sistema ou aplicativo que os usuários interagem diretamente. É a interface visível e interativa que permite aos usuários interagir com o software. No desenvolvimento web, o front-end envolve a criação e design de elementos visuais, como páginas, botões, formulários e outros componentes, utilizando tecnologias como HTML, CSS e JavaScript. Os desenvolvedores front-end são responsáveis por garantir uma experiência do usuário atraente, responsiva e intuitiva, facilitando a navegação e interação com a aplicação ou site. O front-end trabalha em conjunto com o back-end, que gerencia a lógica de negócios, manipula dados e realiza operações do lado do servidor.'

    },
    {
      summary: {
        strong: "Back-end",
        p: " "
      },
      text: 'O back-end refere-se à parte de um sistema de software que lida com a lógica de negócios, processamento de dados e interações com o banco de dados. Em um aplicativo web, por exemplo, o back-end é responsável por processar solicitações do usuário, gerenciar dados, autenticação e autorização, bem como realizar operações complexas que não são visíveis ao usuário final. Ele é muitas vezes construído usando linguagens de programação como Python, Ruby, Java, PHP, entre outras, e é fundamental para garantir o funcionamento eficiente e seguro de um aplicativo ou site. O back-end trabalha em conjunto com o front-end (parte visível ao usuário) para criar uma experiência completa e funcional.'

    },
    
  ])
}
