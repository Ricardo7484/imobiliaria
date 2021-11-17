package com.gestao.imobiliaria.repository;

import com.gestao.imobiliaria.model.Funcionario;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FuncionarioRepository extends MongoRepository<Funcionario, String>{
//public interface FuncionarioRepository extends MongoRepository<Funcionario, Integer>{
    
}