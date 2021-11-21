var moduloImovel = angular.module('moduloImovel', []);

moduloImovel.controller("cadImovelController", function ($scope, $http) {
    $http.get('http://localhost:8080/buscaImoveis').then(function(response){
        $scope.imoveis = response.data;
    })

    $scope.gravarImovel = function () {
        alert("Create");
        $http.post('http://localhost:8080/inseriImovel/', {
            "rua": $scope.imovel.rua,
            "numero": $scope.imovel.numero,
            "bairro": $scope.imovel.bairro,
            "cidade": $scope.imovel.cidade,
            "pais": $scope.imovel.pais,
            "cep": $scope.imovel.cep,
            "preco": $scope.imovel,preco,
            "idProprietario": $scope.imovel.idProprietario,
            "porcentagemDesconto": $scope.imovel.porcentagemDesconto,
            "dataCadastro": $scope.imovel.dataCadastro,
            "tipoImovel": $scope.imovel.tipoImovel,
            "situacaoImóvel": $scope.imovel.situacaoImóvel,
            "imovelFinanciado": $scope.imovel.imovelFinanciado,
            "imóvelNomeProprietário": $scope.imovel.imóvelNomeProprietário,
            "aceitaTroca": $scope.imovel.aceitaTroca,
            "foto01": $scope.imovel.foto01,
            "foto02": $scope.imovel.foto02,
            "foto03": $scope.imovel.foto03
        }).then(function(response){});        
        window.location.reload();  //Limpa a tela
    };

    $scope.excluirImovel = function () {
        //alert($scope.imovel.nome);  //Mostra valores vindo do HTML
        alert("Delete");
        $http.delete('http://localhost:8080/deletaImovel/'+$scope.imovel.id).then(function(response){})
        window.location.reload();  //Limpa a tela
    };
    
    $scope.selecionaImovel = function (imovelSelecionado) {
        $scope.imovel = imovelSelecionado;
    };
    
    $scope.atualizarImovel = function () {
        alert("Update");
        $http.post('http://localhost:8080/inseriImovel/', {
            "id": $scope.imovel.id,
            "rua": $scope.imovel.rua,
            "numero": $scope.imovel.numero,
            "bairro": $scope.imovel.bairro,
            "cidade": $scope.imovel.cidade,
            "pais": $scope.imovel.pais,
            "cep": $scope.imovel.cep,
            "preco": $scope.imovel,preco,
            "idProprietario": $scope.imovel.idProprietario,
            "porcentagemDesconto": $scope.imovel.porcentagemDesconto,
            "dataCadastro": $scope.imovel.dataCadastro,
            "tipoImovel": $scope.imovel.tipoImovel,
            "situacaoImóvel": $scope.imovel.situacaoImóvel,
            "imovelFinanciado": $scope.imovel.imovelFinanciado,
            "imóvelNomeProprietário": $scope.imovel.imóvelNomeProprietário,
            "aceitaTroca": $scope.imovel.aceitaTroca,
            "foto01": $scope.imovel.foto01,
            "foto02": $scope.imovel.foto02,
            "foto03": $scope.imovel.foto03
        }).then(function(response){});
        window.location.reload();  //Limpa a tela
    };
});