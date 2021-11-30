<%@ page language="Java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!--<!doctype html>-->
<html lang="en" ng-app="moduloFuncionario">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.88.1">
    <title>Login</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/sign-in/">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <meta name="google-signin-client_id" content="795162278731-05dmbq28f4p83va8to8aat5g40o7709c.apps.googleusercontent.com">

    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/form-validation.css" rel="stylesheet">
    <script src="../js/angular.js"></script>
    <script src="../js/angular.min.js"></script>
    <script src="../controller/controllerFuncionario.js"></script>

    <style>
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }
    </style>

    <!-- Custom styles for this template -->
    <link href="../css/signin.css" rel="stylesheet">
</head>
<!--<body class="text-center">-->

<body class="bg-white text-center" ng-controller="cadFuncionarioController">

<header class="p-3 bg-dark text-white fixed-top">
    <div class="container-fluid">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
            </a>
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="principal.html" class="nav-link px-2 text-white">Imobiliária</a></li>
                <li><a href="imoveisGerais.html" class="nav-link px-2 text-white">Comprar</a></li>
                <li><a href="imoveisGerais.html" class="nav-link px-2 text-white">Alugar</a></li>
                <li><a href="albumgeral.html" class="nav-link px-2 text-white">Ofertas</a></li>
                <li><a href="contato.html" class="nav-link px-2 text-white">Contato</a></li>
                <li><a href="cadFuncionario.html" class="nav-link px-2 text-white">Cad. Funcionário</a></li>
                <li><a href="cadProprietario.html" class="nav-link px-2 text-white">Cad. Proprietário</a></li>
                <li><a href="cadImovel.html" class="nav-link px-2 text-white">Cad. Imóvel</a></li>
            </ul>
            <div class="text-end">
                <a class="btn btn-warning" href="login.html" role="button">Login</a>
            </div>
        </div>
    </div>
</header>

<main class="form-signin">
    <form>
        <img class="mb-4" src="../imagens/imobiliaria.png" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">Informe seus dados</h1>
        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Senha</label>
        </div>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
        <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"> Lembrar dados
            </label>
        </div>
        <!--<a class="w-100 btn btn-lg btn-primary" href="cadFuncionario.html" role="button">Entrar</a>-->

        <div class="col-sm-3">
            <button type="submit" ng-click="excluirFuncionario(id)" class="w-100 btn btn-primary">Entrar</button>
        </div>
    </form>
    
    <!--<p>Estados (json): {{funcionarios| json }}</p>-->

    <p id = 'msg' ></p>

    <script>
        function onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            
            var userID = profile.getId(); // Do not send to your backend! Use an ID token instead.
            var userName = profile.getName();
            var userImageURL = profile.getImageUrl();
            var userEmail = profile.getEmail(); // This is null if the 'email' scope is not present.
            var userToken = googleUser.getAuthResponse().id_token;

            document.getElementById('msg').innerHTML = userEmail;

            if(userName !== ''){
                var dados = {
                    userID:userID, 
                    userName:userName,
                    userImageURL:userImageURL,
                    userEmail:userEmail
                };
                var objeto = {"emailBanco": "ricardo.200720017@unilasalle.edu.br"};
                    //console.log(objeto.atributo1);
                if(userEmail == objeto.emailBanco){
                    var msg = "Usuário autorizado!";
                    document.getElementById('msg').innerHTML = msg;    
                }
            } else{
                var msg = "Usuário não encontrado!";
                document.getElementById('msg').innerHTML = msg;
            }

            //console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            //console.log('Name: ' + profile.getName());
            //console.log('Image URL: ' + profile.getImageUrl());
            //console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        }
    </script>
</main>

</body>
</html>
