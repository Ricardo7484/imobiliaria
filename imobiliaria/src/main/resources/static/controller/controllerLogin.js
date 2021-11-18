var moduloProprietario = angular.module('moduloProprietario', []);

moduloProprietario.controller("cadProprietarioController", function ($scope) {
    $scope.proprietarios = [
        {nome: 'Ricardo1', sobrenome: 'Teixeira1', email: 'ricardo1@hotmail.com', telefone: '991919191', dataCadProprietario: '15/10/2021'},
        {nome: 'Ricardo2', sobrenome: 'Teixeira2', email: 'ricardo2@hotmail.com', telefone: '992929292', dataCadProprietario: '15/10/2021'},
        {nome: 'Ricardo3', sobrenome: 'Teixeira3', email: 'ricardo3@hotmail.com', telefone: '993939393', dataCadProprietario: '15/10/2021'},
        {nome: 'Ricardo4', sobrenome: 'Teixeira4', email: 'ricardo4@hotmail.com', telefone: '994949494', dataCadProprietario: '15/10/2021'},
    ];

    $scope.selecionaProprietario = function (proprietarioSelecionado) {
        $scope.proprietario = proprietarioSelecionado;
    };

    $scope.limparProprietario = function () {
        $scope.proprietario = {};
    };

    $scope.gravarProprietario = function () {
        $scope.proprietarios.push($scope.proprietario);
        $scope.limparProprietario();
    };

    $scope.excluirProprietario = function () {
        $scope.proprietarios.splice($scope.proprietarios.indexOf($scope.proprietario), 1);
        $scope.limparProprietario();
    };
});