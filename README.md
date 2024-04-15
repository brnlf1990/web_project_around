# Tripleten Around The U.S.

Projeto criado para pessoas que viajam dentro dos Estados Unidos da America, para compartilhar os melhores lugares a serem explorados no país.
Aqui você pode postar uma foto, colocar o nome do local e outras pessoas podem curtir seu post.
O projeto está sendo montado aos poucos, mas você pode editar seu nome e sobre você.

Para esse projeto foram utilizados linguagens de programação HTML, CSS e JavaScript.
Com HTML foi formado o esqueleto, desde o titulo até o popup de edição de nomes. Foi utilizado o método BEM para organização da estrutura do HTML.
No CSS foram estilizados todos os campos de acordo com tamanho em que o site fica, ou seja, um layout responsivo para smartphones. Dentro do CSS, foi modificado as classes do fundo escuro e classe de popup aberto, para deixar os dois escondidos e aparecer com função escrita no JavaScript. Foi adicionado uma animação para a caixa de edição vir de cima e voltar para la após o fechamento. Isso foi adicionado deixando a caixa de edição no top e escondida, após ativação do botão ela irá aparecer de cima com com a parametros de transition e opacity.

O popup foi programado com JavaScript para acionar o botão de editar e abrir o popup de edição. Foi utilizado uma função Toogle para abrir com botão de editar e fechar ao clicar no fundo escuro, no icone de fechar(com desenho do X) no botão salvar ao salvar. Após isso foi criado o handler para adicionar a função de edição ao botão salvar. Depois foi adicionado um listener para o formulario e para os elementos fade, botao de salvar, botão de fechar. Para não atualizar campos em branco, foi utilizado um if que compara o valor de dentro dos dois inputs. Caso os dois inputs tiverem mais de 0 caracteres o handler será executado, se não irá aparecer uma mensagem de alerta para preencher os campos em branco.

Tive problemas com botão de salvar, pois, não estava sendo salvo os novos inputs. Isso aconteceu por conflito de variaveis com mesmo nome em funções diferentes. Para resolver isso foi utilizado um if e os valores dos campos de entrada serão atualizados apenas quando a janela popup for aberta, garantindo que os valores inseridos pelo usuário sejam refletidos nos campos de entrada.

Edit:
Código restruturado com Orientação a Objetos.

As classes Form e Card foram transformadas em Classes para maior aproveitamento do código e organização do mesmo.

Tive problemas com os inputs, aparentemente, JavaScript não lê um objeto com
essa sintaxe `.${input.id}-error` quando insiro como parâmetro, precisei colocar explicitamente dentro da classe para o código iterar sobre todos os inputs.
Obrigado.

https://brnlf1990.github.io/web_project_around/
