package com.gestao.imobiliaria.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Document(collection = "Contato")
public class Contato {
    
    @Id
    private String id;
    
    private String nome;
    private String email;
    private String telefone;
    private String data;
    private String solicitacao;
    private String nomeCorretor;
    private String resolucao;

    public Contato() {
    }

    public Contato(String nome, String email, String telefone, String data, String solicitacao, String nomeCorretor,
            String resolucao) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.data = data;
        this.solicitacao = solicitacao;
        this.nomeCorretor = nomeCorretor;
        this.resolucao = resolucao;
    }
    
}
