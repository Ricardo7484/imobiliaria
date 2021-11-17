package com.gestao.imobiliaria.repository;

import com.gestao.imobiliaria.model.Proprietario;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProprietarioRepository extends MongoRepository<Proprietario, String>{
//public interface ProprietarioRepository extends MongoRepository<Proprietario, Integer>{
    
}
