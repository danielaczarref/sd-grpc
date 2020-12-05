const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = '../DAO/Estadia.proto';

var protoDescriptor = grpc.loadPackageDefinition(packageDefinition).estalagem;

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
});

var protoDescriptor = grpc.loadPackageDefinition(packageDefinition).estalagem;

const client = new protoDescriptor.EstalagemService('localhost:50051', grpc.credentials.createInsecure());

const comandos = [
    {id: 1, comando: "Listar Todas Estalagens", exemplo: "1"},
    {id: 2, comando: "Listar Estalagens Disponíveis", exemplo: "2;2020-12-02T03:24:00;2020-12-05T03:24:00"},
    {id: 3, comando: "Cadastrar Estalagem", exemplo: "3;André Cardoso;Um belo quarto;80RS"},
    {id: 4, comando: "Reservar Estalagem", exemplo: "4;uuid;Locador;2020-12-02T03:24:00;2020-12-05T03:24:00"},
    {id: 5, comando: "Alugar Estalagem", exemplo: " 5;uuid;Locador;2020-12-02T03:24:00;2020-12-05T03:24:00"}

];

comandos.forEach((item) => {
    client.ExibirComandos(item);
});
