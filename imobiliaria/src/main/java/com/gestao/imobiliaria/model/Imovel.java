package com.gestao.imobiliaria.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Document(collection = "Imovel")
public class Imovel {
    
    @Id
    private int id;
    private String rua;
    private int numero;
    private String bairro;
    private String cidade;
    private String pais;
    private String cep;
    private double preco;
    private int idProprietario;
    private float porcentagemDesconto; 
    private String dataCadastro;
    private String tipoImovel;
    private String situacaoImóvel;
    private String imovelFinanciado; 
    Imóvel no Nome do Proprietário 
Proprietário Aceita Troca 
Salvar fotos do imóvel 

}
