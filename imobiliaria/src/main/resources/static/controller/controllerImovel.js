var moduloImovel = angular.module('moduloImovel', []);

moduloImovel.controller("cadImovelController", function ($scope, $http) {

    $http.get('http://localhost:8080/buscaImoveis').then(function(response){
        $scope.imoveis = response.data;
    })

    $scope.gravarImovel = function () {
        $http.post('http://localhost:8080/inseriImovel/', {
            "rua": $scope.imovel.rua, 
            "numero": $scope.imovel.numero, 
            "bairro": $scope.imovel.bairro, 
            "cidade": $scope.imovel.cidade, 
            "estado": $scope.imovel.estado, 
            "cep": $scope.imovel.cep, 
            "preco": $scope.imovel.preco, 
            "idProprietario": $scope.imovel.idProprietario, 
            "porcentagemDesconto": $scope.imovel.porcentagemDesconto, 
            "dataCadastro": $scope.imovel.dataCadastro, 
            "tipoImovel": $scope.imovel.tipoImovel, 
            "situacaoImovel": $scope.imovel.situacaoImovel, 
            "imovelFinanciado": $scope.imovel.imovelFinanciado, 
            "imovelNomeProprietario": $scope.imovel.imovelNomeProprietario, 
            "aceitaTroca": $scope.imovel.aceitaTroca, 
            "foto01": $scope.imovel.foto01, 
            "foto02": $scope.imovel.foto02, 
            "foto03": $scope.imovel.foto03
        }).then(function(response){});
        window.location.reload();  //Limpa a tela
    };

    $scope.excluirImovel = function () {
        //alert($scope.imovel.nome);  //Mostra valores vindo do HTML
        //alert("Delete");
        $http.delete('http://localhost:8080/deletaImovel/'+$scope.imovel.id).then(function(response){})
        window.location.reload();  //Limpa a tela
    };
    
    $scope.atualizarImovel = function () {
        //alert("Update");
        $http.post('http://localhost:8080/inseriImovel/', {
            "id": $scope.imovel.id,
            "rua": $scope.imovel.rua,
            "numero": $scope.imovel.numero,
            "bairro": $scope.imovel.bairro,
            "cidade": $scope.imovel.cidade,
            "estado": $scope.imovel.estado,
            "cep": $scope.imovel.cep,
            "preco": $scope.imovel.preco,
            "idProprietario": $scope.imovel.idProprietario,
            "porcentagemDesconto": $scope.imovel.porcentagemDesconto,
            "dataCadastro": $scope.imovel.dataCadastro,
            "tipoImovel": $scope.imovel.tipoImovel,
            "situacaoImovel": $scope.imovel.situacaoImovel,
            "imovelFinanciado": $scope.imovel.imovelFinanciado,
            "imovelNomeProprietario": $scope.imovel.imovelNomeProprietario,
            "aceitaTroca": $scope.imovel.aceitaTroca,
            "foto01": $scope.imovel.foto01,
            "foto02": $scope.imovel.foto02,
            "foto03": $scope.imovel.foto03
        }).then(function(response){});
        window.location.reload();  //Limpa a tela
    };

    $scope.selecionaImovel = function (imovelSelecionado) {
        $scope.imovel = imovelSelecionado;
    };

    $scope.mostraFotos = function (imovelSelecionado) {
        //console.log(typeof(imovelSelecionado.foto01));
        //console.log(imovelSelecionado.foto01);
        document.querySelectorAll('[id="image01"]')[0].src = 'data:image01/jpeg;base64, '+imovelSelecionado.foto01;
        document.querySelectorAll('[id="image02"]')[0].src = 'data:image02/jpeg;base64, '+imovelSelecionado.foto02;
        document.querySelectorAll('[id="image03"]')[0].src = 'data:image03/jpeg;base64, '+imovelSelecionado.foto03;
    };

    //$scope.addState = function() {
    //    alert("Oi");
    //    console.log("Oi");
    //    $scope.username = 'World';
    //    $scope.sayHello = function() {
    //        $scope.greeting = 'Hello ' + $scope.username + '!';
    //    };
    //}

    //$scope.chiliSpicy = function() {
    //    $scope.spice = 'chili';
    //    alert($scope.spice);
    //    console.log($scope.spice);
    //};

    //$scope.jalapenoSpicy = function() {
        //$scope.spice = 'jalapeño';
    //    $scope.spice = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAApCAIAAAAQ4JrQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASoSURBVHhe7Zu9dqpAEMf1PgtY5PgE+ASYxsr2dlCGJl3KdGmk1C5tqjSBJ5AnyEkReBfvIKvuF7LsDlc8Z35NVhNhZvfP7MxsnB4OhwlBDMAf9pMgsCFtEUNB2hoVVbqYnlmkFXv7PqF8a0zk8XS5a4bBptw/ec34TqG4NR7y+CSsKLt7YQGkrbFQpa+NskBY2/DuhQXQnkgMhSZuCfnkESGpVH/dEOfsD04Y/+GJKk/TeLEQPgUv4zTNW5NayFBMqC+TV5qrdDiruX6r+Txdl5XQenHlRmZeg9MweTq3BzaPgbcnfv9K1pU/BRt1AqqKF1N/mSS7ohA+BS93SbL0wXsQB3uzP/Vllr4/0sor/2R5lsDu1dFacBomz91tW/PwtFV8fAn30lukAR4iUNWuS4i1OFy1USS+Udj5v7TNlDyj1ri5bW0eYi5f/JRsVFP9frPRdfLYT4zjG4I2nKMBOu0PIZq4XNy2Nw+zTtx9Xta9+vowUcyl7L4QbLISKgygzDYBe/PMbtmhrihrPlyju4D4CNyea/HdXFy813q3LXXqYJ6ztoLg4gaXchklW+ey+8KxZXiqwL3waV8q09TjEYQLvERsPE7kKYgiwV47RYDb76q6bHAyz1lb8/mcjfhb8Wrn1SeiCjB6kVuGnqoO20ewIXjw2WgEyOE9Wj2vEMSFhZt57nviirvbab/hk61gvb6oT0ANt9EqZCOOUHQHMN7WoP6UI6Oq3huirl3o+Q/Co2ghrqrK479yEhusH3v77WgeQr7F361JuQSb5rMZG0mo2X5LSJHcAZR+B8duyRowANSfwuQEUbbVqPdWyGt39N97XIurl7wZlC+C1/5SqboxpNXXPARtCXc7rjq/12lD0S0AXZX7MSlLXbtm/eXVE2okO6LsvX+0djYPQVsTbyamXEKyNZrspu6PuTVgkWlZO2RxBRGU3Tbnk+7mYWhLyIiKny8h2eofioekFthIuqf5m7RfX6YKTVzBJnvfnsvuXiCYh6ItMeVKOKPms3a/+HDX0JKjq+XktcsKnR5dq2cc3VOlkCkSn+VLkDHJmXinuI5eK84Wie1ZBoZ5ONpSlMy4nmypObrWRrWc7LHR6lo9t63rG1SnrmMUubR9LauzDBTzcLSliUE1HRrQKFITUzTSGtlGa0HftdPOjA5NOxA+23WWIYNjHpK2NE0o4NrWVaPriyYQxE/5dlWl8UI5FOrVoaryVGn1uMFX+xLG20//tTOPtuE206irVx6AZB6WtjQbnEn7QTcRdZLQrJXvq/8e0dmhEtde7nDV3Dzu2aydubgm4bN64GPWJWvAMg9NW+quaJYVhVv1xLCVYAPlNBtbc+vOvHqKCm41lYeA8tQZi0u/MRqGLjzz0LSl7IrG0cF72pdZ1KmvY+/TVRVBhKFOJ+S+UetMac66TMXlELoQzcPTlrwrdiVbPF643R9L6E0kn2zD67r7dzjs7b+gANcIovoq5X5769NE47VzE5dt6MI0j76LQQwFYtwiCAHSFjEUwp4INTsbEYQVvJwobhFDQbk8MRQUt4ihIG0RQ0HaIoaCtEUMBWmLGArSFjEUpC1iGCaTfyDR8oXSOOGCAAAAAElFTkSuQmCC';
    //    alert($scope.spice);
    //    console.log($scope.spice);
    //};

    $scope.encodeImageFileAsURL = function (){
        var filesSelected = document.getElementById("inputFileToLoad").files;
        if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64
            var newImage = document.createElement('img');
            newImage.src = srcData;
            alert(srcData);
            document.getElementById('foto01').innerHTML = '"'+srcData+'"';
            //document.getElementById("imgTest").innerHTML = newImage.outerHTML;
            }
            fileReader.readAsDataURL(fileToLoad);
            //alert(foto);
            //$scope.spice = typeof(srcData);
                        //$scope.spice = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAApCAIAAAAQ4JrQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASoSURBVHhe7Zu9dqpAEMf1PgtY5PgE+ASYxsr2dlCGJl3KdGmk1C5tqjSBJ5AnyEkReBfvIKvuF7LsDlc8Z35NVhNhZvfP7MxsnB4OhwlBDMAf9pMgsCFtEUNB2hoVVbqYnlmkFXv7PqF8a0zk8XS5a4bBptw/ec34TqG4NR7y+CSsKLt7YQGkrbFQpa+NskBY2/DuhQXQnkgMhSZuCfnkESGpVH/dEOfsD04Y/+GJKk/TeLEQPgUv4zTNW5NayFBMqC+TV5qrdDiruX6r+Txdl5XQenHlRmZeg9MweTq3BzaPgbcnfv9K1pU/BRt1AqqKF1N/mSS7ohA+BS93SbL0wXsQB3uzP/Vllr4/0sor/2R5lsDu1dFacBomz91tW/PwtFV8fAn30lukAR4iUNWuS4i1OFy1USS+Udj5v7TNlDyj1ri5bW0eYi5f/JRsVFP9frPRdfLYT4zjG4I2nKMBOu0PIZq4XNy2Nw+zTtx9Xta9+vowUcyl7L4QbLISKgygzDYBe/PMbtmhrihrPlyju4D4CNyea/HdXFy813q3LXXqYJ6ztoLg4gaXchklW+ey+8KxZXiqwL3waV8q09TjEYQLvERsPE7kKYgiwV47RYDb76q6bHAyz1lb8/mcjfhb8Wrn1SeiCjB6kVuGnqoO20ewIXjw2WgEyOE9Wj2vEMSFhZt57nviirvbab/hk61gvb6oT0ANt9EqZCOOUHQHMN7WoP6UI6Oq3huirl3o+Q/Co2ghrqrK479yEhusH3v77WgeQr7F361JuQSb5rMZG0mo2X5LSJHcAZR+B8duyRowANSfwuQEUbbVqPdWyGt39N97XIurl7wZlC+C1/5SqboxpNXXPARtCXc7rjq/12lD0S0AXZX7MSlLXbtm/eXVE2okO6LsvX+0djYPQVsTbyamXEKyNZrspu6PuTVgkWlZO2RxBRGU3Tbnk+7mYWhLyIiKny8h2eofioekFthIuqf5m7RfX6YKTVzBJnvfnsvuXiCYh6ItMeVKOKPms3a/+HDX0JKjq+XktcsKnR5dq2cc3VOlkCkSn+VLkDHJmXinuI5eK84Wie1ZBoZ5ONpSlMy4nmypObrWRrWc7LHR6lo9t63rG1SnrmMUubR9LauzDBTzcLSliUE1HRrQKFITUzTSGtlGa0HftdPOjA5NOxA+23WWIYNjHpK2NE0o4NrWVaPriyYQxE/5dlWl8UI5FOrVoaryVGn1uMFX+xLG20//tTOPtuE206irVx6AZB6WtjQbnEn7QTcRdZLQrJXvq/8e0dmhEtde7nDV3Dzu2aydubgm4bN64GPWJWvAMg9NW+quaJYVhVv1xLCVYAPlNBtbc+vOvHqKCm41lYeA8tQZi0u/MRqGLjzz0LSl7IrG0cF72pdZ1KmvY+/TVRVBhKFOJ+S+UetMac66TMXlELoQzcPTlrwrdiVbPF643R9L6E0kn2zD67r7dzjs7b+gANcIovoq5X5769NE47VzE5dt6MI0j76LQQwFYtwiCAHSFjEUwp4INTsbEYQVvJwobhFDQbk8MRQUt4ihIG0RQ0HaIoaCtEUMBWmLGArSFjEUpC1iGCaTfyDR8oXSOOGCAAAAAElFTkSuQmCC';
                        //$scope.spice = 'jalapeño';
                        //alert(srcData);
                        //alert(foto);
                        //console.log(foto);
                        //console.log($scope.spice);
                        
        }
        
    }
});