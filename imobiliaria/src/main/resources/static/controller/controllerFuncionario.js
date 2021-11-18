var moduloFuncionario = angular.module('moduloFuncionario', []);

moduloFuncionario.controller("cadFuncionarioController", function ($scope) {
    $scope.funcionarios = [
        {nome: 'Ricardo1', sobrenome: 'Teixeira1', email: 'ricardo1@hotmail.com', senha: 123456, cracha: 1122, telefone: '991919191', dataCadFuncionario: '15/10/2021'},
        {nome: 'Ricardo2', sobrenome: 'Teixeira2', email: 'ricardo2@hotmail.com', senha: 789012, cracha: 3344, telefone: '992929292', dataCadFuncionario: '15/10/2021'},
        {nome: 'Ricardo3', sobrenome: 'Teixeira3', email: 'ricardo3@hotmail.com', senha: 345678, cracha: 5566, telefone: '993939393', dataCadFuncionario: '15/10/2021'},
        {nome: 'Ricardo4', sobrenome: 'Teixeira4', email: 'ricardo4@hotmail.com', senha: 901234, cracha: 7788, telefone: '994949494', dataCadFuncionario: '15/10/2021'},
    ];

    $scope.selecionaFuncionario = function (funcionarioSelecionado) {
        $scope.funcionario = funcionarioSelecionado;
    };

    $scope.limparFunciodario = function () {
        $scope.funcionario = {};
    };

    $scope.gravarFuncionario = function () {
        $scope.funcionarios.push($scope.funcionario);
        $scope.limparFunciodario();
    };

    $scope.excluirFuncionario = function () {
        $scope.funcionarios.splice($scope.funcionarios.indexOf($scope.funcionario), 1);
        $scope.limparFunciodario();
    };
});