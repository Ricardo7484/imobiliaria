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
    private String id;
    //private int id;
    private String rua;
    private int numero;
    private String bairro;
    private String cidade;
    private String pais;
    private String cep;
    private double preco;
    private String idProprietario;
    //private int idProprietario;
    private float porcentagemDesconto; 
    private String dataCadastro;
    private String tipoImovel;
    private String situacaoImóvel;
    private String imovelFinanciado; 
    private String imóvelNomeProprietário;
    private String aceitaTroca; 
    private String novosFotos;
    
    public Imovel() {
    }

    public Imovel(String rua, int numero, String bairro, String cidade, String pais, String cep, double preco,
            String idProprietario, float porcentagemDesconto, String dataCadastro, String tipoImovel,
            String situacaoImóvel, String imovelFinanciado, String imóvelNomeProprietário, String aceitaTroca,
            String novosFotos) {
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.pais = pais;
        this.cep = cep;
        this.preco = preco;
        this.idProprietario = idProprietario;
        this.porcentagemDesconto = porcentagemDesconto;
        this.dataCadastro = dataCadastro;
        this.tipoImovel = tipoImovel;
        this.situacaoImóvel = situacaoImóvel;
        this.imovelFinanciado = imovelFinanciado;
        this.imóvelNomeProprietário = imóvelNomeProprietário;
        this.aceitaTroca = aceitaTroca;
        this.novosFotos = novosFotos;
    }

}
