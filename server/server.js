
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = require('./DAO/Estadia.proto');

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
});


var protoDescriptor = grpc.loadPackageDefinition(packageDefinition).estalagem;


const listarEstalagens = (call, callback) => {
    callback(null, {
        estalagem: service.listarEstalagens()
    });
}

function getServer() {
    var server = new grpc.Server();

    server.addService(protoDescriptor.EstalagemService.service, {
        ListarTodasEstalagens: listarEstalagens,

    });

    return server;
  }

  var routeServer = getServer();
  routeServer.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure() );
  routeServer.start();
