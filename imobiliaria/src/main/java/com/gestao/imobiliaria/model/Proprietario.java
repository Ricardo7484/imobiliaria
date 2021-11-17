package com.gestao.imobiliaria.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Document(collection = "Proprietario")
public class Proprietario {
    
    @Id
    private String id;
    //private int id;
    private String nome;
	private String sobrenome;
	private String telefone;
	private String dataCadastro;
	private String email;

    public Proprietario() {
    }

    public Proprietario(String nome, String sobrenome, String telefone, String dataCadastro, String email) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.telefone = telefone;
        this.dataCadastro = dataCadastro;
        this.email = email;
    }

    
}
