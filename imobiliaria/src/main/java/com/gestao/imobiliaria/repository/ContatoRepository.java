package com.gestao.imobiliaria.repository;

import com.gestao.imobiliaria.model.Contato;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContatoRepository extends MongoRepository<Contato, String>{
    
}