package com.gestao.imobiliaria.resource;

import java.util.List;
import java.util.Optional;

import com.gestao.imobiliaria.model.Contato;
import com.gestao.imobiliaria.repository.ContatoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContatoController {
    
    @Autowired
    private ContatoRepository repository;

    @PostMapping("/inseriContato")
    public String inseriContato(@RequestBody Contato contato){
        repository.save(contato);
        System.out.println(repository.save(contato));
        return "Contato adicionado com Id " + contato.getId();
    }

    @GetMapping("/buscaContatos/")
    public List<Contato> buscaContatos(){
        System.out.println(repository.findAll());
        return repository.findAll();
    }

    @GetMapping("/buscaContato/{id}")
    public Optional<Contato> buscaContato(@PathVariable String id) {
        System.out.println(repository.findById(id));
        return repository.findById(id);
    }

    @PutMapping("/atualizaContato/{id}")
    public String atualizaContato(@PathVariable String id, @RequestBody Contato contato){
        repository.save(contato);
        return "Contato com Id " + contato.getId() + " atualizado";
    }

    @DeleteMapping("/deletaContato/{id}")
    public String deletaContato(@PathVariable String id){
        repository.deleteById(id);
        return "Contato com Id " + id + "foi deletado";
    }
}

