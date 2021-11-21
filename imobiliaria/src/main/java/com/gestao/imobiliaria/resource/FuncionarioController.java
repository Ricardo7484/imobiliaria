package com.gestao.imobiliaria.resource;

import java.util.List;
import java.util.Optional;

import com.gestao.imobiliaria.model.Funcionario;
import com.gestao.imobiliaria.repository.FuncionarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FuncionarioController {
    
    @Autowired
    private FuncionarioRepository repository;

    @PostMapping("/inseriFuncionario")
    public String inseriFuncionario(@RequestBody Funcionario funcionario){
        repository.save(funcionario);
        return "Funcionário adicionado com Id " + funcionario.getId();
    }

    @GetMapping("/buscaFuncionarios")
    public List<Funcionario> buscaFuncionarios(){
        System.out.println(repository.findAll());
        return repository.findAll();
    }

    @GetMapping("/buscaFuncionario/{id}")
    public Optional<Funcionario> buscaFuncionario(@PathVariable String id){
        return repository.findById(id);
    }

    @PutMapping("/atualizaFuncionario/{id}")
    public String atualizaFuncionario(@PathVariable String id, @RequestBody Funcionario funcionario){
        repository.save(funcionario);
        return "Funcionario com Id " + funcionario.getId() + " atualizado";
    }

    @DeleteMapping("/deletaFuncionario/{id}")
    public String deletaFuncionario(@PathVariable String id){
        repository.deleteById(id);
        return "Funcionario com Id " + id + "foi deletado";
    }
}
