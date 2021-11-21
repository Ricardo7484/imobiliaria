package com.gestao.imobiliaria.resource;

import com.gestao.imobiliaria.model.Proprietario;
import com.gestao.imobiliaria.repository.ProprietarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class ProprietarioController {
    
    @Autowired
    private ProprietarioRepository repository;

    @PostMapping("/inseriProprietario")
    public String inseriProprietario(@RequestBody Proprietario proprietario){
        repository.save(proprietario);
        return "Proprietario adicionado com Id " + proprietario.getId();
    }

    @GetMapping("/buscaProprietarios")
    public List<Proprietario> buscaProprietarios(){
        System.out.println(repository.findAll());
        return repository.findAll();
    }

    @GetMapping("/buscaProprietario/{id}")
    public Optional<Proprietario> buscaProprietario(@PathVariable String id){
        return repository.findById(id);
    }

    @PutMapping("/atualizaProprietario/{id}")
    public String atualizaProprietario(@PathVariable String id, @RequestBody Proprietario proprietario){
        repository.save(proprietario);
        return "Proprietario com Id " + proprietario.getId() + " atualizado";
    }

    @DeleteMapping("/deletaProprietario/{id}")
    public String deletaProprietario(@PathVariable String id){
        repository.deleteById(id);
        return "Proprietario com Id " + id + "foi deletado";
    }
}
