var moduloImovel = angular.module('moduloImovel', []);

moduloImovel.controller("cadImovelController", function ($scope) {
    $scope.imoveis = [
        {
            rua: 'lalalalelelelilililololo',
            numero: '123',
            bairro: 'Estância Velha',
            cidade: 'Canoas',
            pais: 'Brasil',
            cep: '90-121590',
            preco: '350.000',
            idProprietario: '1',
            tipo: 'Venda',
            situacao: 'Livre',
            finciado: 'Não',
            alienado: 'Não',
            troca: 'Sim',
            dataCadImovel: '15/10/2021',
            descPromocao: '3',
            fotos: 'foto1'
        },
        {
            rua: 'lalala',
            numero: '123',
            bairro: 'São José',
            cidade: 'Canoas',
            pais: 'Brasil',
            cep: '90-13480',
            preco: '450.000',
            idProprietario: '2',
            tipo: 'Aluguel',
            situacao: 'Livre',
            finciado: 'Não',
            alienado: 'Não',
            troca: 'Sim',
            dataCadImovel: '16/10/2021',
            descPromocao: '5',
            fotos: 'foto1'
        },
        {
            rua: 'lalala',
            numero: '123',
            bairro: 'Estância Velha',
            cidade: 'Canoas',
            pais: 'Brasil',
            cep: '90-121590',
            preco: '350.000',
            idProprietario: '3',
            tipo: 'venda',
            situacao: 'livre',
            finciado: 'não',
            alienado: 'não',
            troca: 'sim',
            dataCadImovel: '17/10/2021',
            descPromocao: '0',
            fotos: 'foto1'
        },
        {
            rua: 'lalala',
            numero: '123',
            bairro: 'Estância Velha',
            cidade: 'Canoas',
            pais: 'Brasil',
            cep: '90-121590',
            preco: '350.000',
            idProprietario: '4',
            tipo: 'venda',
            situacao: 'livre',
            finciado: 'não',
            alienado: 'não',
            troca: 'sim',
            dataCadImovel: '18/10/2021',
            descPromocao: '3',
            fotos: 'foto1'
        },
    ];

    $scope.selecionaImovel = function (imovelSelecionado) {
        $scope.imovel = imovelSelecionado;
    };

    $scope.limparImovel = function () {
        $scope.imovel = {};
    };

    $scope.gravarImovel = function () {
        $scope.imoveis.push($scope.imovel);
        $scope.limparImovel();
    };

    $scope.excluirImovel = function () {
        $scope.imoveis.splice($scope.imoveis.indexOf($scope.imovel), 1);
        $scope.limparImovel();
    };
});