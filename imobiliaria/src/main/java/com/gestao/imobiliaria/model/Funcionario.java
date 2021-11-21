package com.gestao.imobiliaria.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Document(collection = "Funcionario")
public class Funcionario {
    
    @Id
    private String id;
    private String cracha;
	private String nome;
	private String sobrenome;
	private String telefone;
	private String email;
    private String status;
    private String cargo;
    private String senha;
    private String dataCadastro;
    
    public Funcionario() {
    }

    public Funcionario(String cracha, String nome, String sobrenome, String telefone, String email, String status,
            String cargo, String senha, String dataCadastro) {
        this.cracha = cracha;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.telefone = telefone;
        this.email = email;
        this.status = status;
        this.cargo = cargo;
        this.senha = senha;
        this.dataCadastro = dataCadastro;
    }

}