package com.gestao.imobiliaria.resource;

import java.util.List;
import java.util.Optional;

import com.gestao.imobiliaria.model.Imovel;
import com.gestao.imobiliaria.repository.ImovelRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImovelController {
    
    @Autowired
    private ImovelRepository repository;

    @PostMapping("inseriImovel")
    public String inseriImovel(@RequestBody Imovel imovel){
        repository.save(imovel);
        return "Imovel adicionado com Id " + imovel.getId();
    }

    @GetMapping("/buscaImoveis")
    public List<Imovel> buscaImoveis(){
        System.out.println(repository.findAll());
        return repository.findAll();
    }

    @GetMapping("/buscaImovel/{id}")
    public Optional<Imovel> buscaImovel(@PathVariable String id){
        return repository.findById(id);
    }

    //@GetMapping("/buscaImovel/{id}")
    //public Optional<Imovel> buscaImovel(@PathVariable int id){
    //    return repository.findById(id);
    //}

    @PutMapping("/atualizaImovel/{id}")
    public String atualizaImovel(@PathVariable String id, @RequestBody Imovel imovel){
        repository.save(imovel);
        return "Imovel com Id " + imovel.getId() + " atualizado";
    }

    //@PutMapping("/atualizaImovel/{id}")
    //public String atualizaImovel(@PathVariable int id, @RequestBody Imovel imovel){
    //    repository.save(imovel);
    //    return "Imovel com Id " + imovel.getId() + " atualizado";
    //}

    @DeleteMapping("/deletaImovel/{id}")
    public String deletaImovel(@PathVariable String id){
        repository.deleteById(id);
        return "Imovel com Id " + id + "foi deletado";
    }

    //@DeleteMapping("/deletaImovel/{id}")
    //public String deletaImovel(@PathVariable int id){
    //    repository.deleteById(id);
    //    return "Imovel com Id " + id + "foi deletado";
    //}
}
