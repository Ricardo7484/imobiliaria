package com.gestao.imobiliaria.repository;

import com.gestao.imobiliaria.model.Imovel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ImovelRepository extends MongoRepository<Imovel, String>{
//public interface ImovelRepository extends MongoRepository<Imovel, Integer>{

}
