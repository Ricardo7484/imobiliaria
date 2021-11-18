var cadastroModulo = angular.module('cadastroModulo', []);

cadastroModulo.controller("cadastroController", function ($scope){
    $scope.funcionarios = [
        {codigo: '001', nome: 'Ricardo1 Teixeira', email: 'ricardo74841@hotmail.com', senha: 'senhasenha1'},
        {codigo: '002', nome: 'Ricardo2 Teixeira', email: 'ricardo74842@hotmail.com', senha: 'senhasenha2'},
        {codigo: '003', nome: 'Ricardo3 Teixeira', email: 'ricardo74843@hotmail.com', senha: 'senhasenha3'},
        {codigo: '004', nome: 'Ricardo4 Teixeira', email: 'ricardo74844@hotmail.com', senha: 'senhasenha4'}
    ];

    $scope.selecionaFuncionario = function (funcionarioSelecionado){
        $scope.funcionario = funcionarioSelecionado;
    };

    $scope.limpar = function (){
        $scope.funcionario = {};
    };

    $scope.gravar = function (){
        $scope.funcionarios.push($scope.funcionario);
        $scope.limpar();
    }

    $scope.excluir = function (){
        $scope.funcionarios.splice($scope.funcionarios.indexOf($scope.funcionario), 1);
        $scope.limpar();
    }
});
