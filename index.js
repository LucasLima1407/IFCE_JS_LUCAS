/* Para que uma API seja considerada do tipo RESTful, ela precisa está em conformidade com os seguintes critérios:

Ter uma arquitetura cliente/servidor formada por clientes, servidores e recursos, com solicitações gerenciadas por HTTP.
Estabelecer uma comunicação stateless entre cliente e servidor. Isso significa que nenhuma informação do cliente é armazenada entre solicitações GET e toda as solicitações são separadas e desconectadas.
Armazenar dados em cache para otimizar as interações entre cliente e servidor.
Ter uma interface uniforme entre os componentes para que as informações sejam transferidas em um formato padronizado. Para tanto, é necessário que:
os recursos solicitados sejam identificáveis e estejam separados das representações enviadas ao cliente;
os recursos possam ser manipulados pelo cliente por meio da representação recebida com informações suficientes para tais ações;
as mensagens autodescritivas retornadas ao cliente contenham informações suficientes para descrever como processá-las;
hipertexto e hipermídia estão disponíveis. Isso significa que após acessar um recurso, o cliente pode usar hiperlinks para encontrar as demais ações disponíveis para ele no momento.
Ter um sistema em camadas que organiza os tipos de servidores (responsáveis pela segurança, pelo carregamento de carga e assim por diante) envolvidos na recuperação das informações solicitadas em hierarquias que o cliente não pode ver.
Possibilitar código sob demanda (opcional): a capacidade de enviar um código executável do servidor para o cliente quando solicitado para ampliar a funcionalidade disponível ao cliente. */

/* .env vão as configurações do banco de dados port,host,password e etc */ 