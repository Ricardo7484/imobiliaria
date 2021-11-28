var moduloContato = angular.module('moduloContato', []);

moduloContato.controller("contatoController", function ($scope, $http) {

    //$scope.data = (Date().substr(0, 25));
    //document.getElementById("demo").innerHTML = (Date().substr(0, 25));
    //$scope.abc = "10-02-2021";
    //document.getElementById("abc").innerHTML.value = "AAA";

    $scope.buscaContato = function () {
        //alert("Select");
        $http.get('http://localhost:8080/buscaContato/'+$scope.contato.id).then(function(response){
        //$http.get('http://localhost:8080/buscaContato/').then(function(response){
        $scope.contatos = response.data;
    })};

    $scope.buscaContatos = function () {
        //alert("Select");
        $http.get('http://localhost:8080/buscaContatos/').then(function(response){
        $scope.contatos = response.data;
    })};

    $scope.gravarContato = function () {
        //alert("Create");
        $http.post('http://localhost:8080/inseriContato/', {
            "nome": $scope.contato.nome, 
            "email": $scope.contato.email, 
            "telefone": $scope.contato.telefone, 
            "data": $scope.contato.data, 
            "solicitacao": $scope.contato.solicitacao, 
            "nomeCorretor": $scope.contato.nomeCorretor, 
            "resolucao": $scope.contato.resolucao
        }).then(function(response){});
        window.location.reload();  //Limpa a tela
    };

    $scope.excluirContato = function () {
        //alert("Delete");
        $http.delete('http://localhost:8080/deletaContato/'+$scope.contato.id).then(function(response){})
        window.location.reload();  //Limpa a tela
    };

    $scope.selecionaContato = function (contatoSelecionado) {
        $scope.contato = contatoSelecionado;
    };

    $scope.atualizarContato = function () {
        //alert("Update");
        $http.post('http://localhost:8080/inseriContato/', {
            "id":$scope.contato.id, 
            "nome": $scope.contato.nome, 
            "email": $scope.contato.email, 
            "telefone": $scope.contato.telefone, 
            "data": $scope.contato.data, 
            "solicitacao": $scope.contato.solicitacao, 
            "nomeCorretor": $scope.contato.nomeCorretor, 
            "resolucao": $scope.contato.resolucao
        }).then(function(response){});
        window.location.reload();  //Limpa a tela
    };
    
});