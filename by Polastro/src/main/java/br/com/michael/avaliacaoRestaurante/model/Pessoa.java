package br.com.michael.avaliacaoRestaurante.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity(name="T_PESSOA")
public class Pessoa {

	@Id
	@GeneratedValue
	private long id;
	
	@Column(name="NM_PESSOA")
	private String nome;
	
	@Column(name="TX_SENHA")
	private String senha;

	@OneToMany(mappedBy="pessoa", cascade=CascadeType.ALL)
	private List<Avaliacao> avaliacoes;
	
	public Pessoa() {
		super();
	}

	public Pessoa(long id, String nome, String senha, List<Avaliacao> avaliacoes) {
		super();
		this.id = id;
		this.nome = nome;
		this.senha = senha;
		this.avaliacoes = avaliacoes;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public List<Avaliacao> getAvaliacoes() {
		return avaliacoes;
	}

	public void setAvaliacoes(List<Avaliacao> avaliacoes) {
		this.avaliacoes = avaliacoes;
	}

	@Override
	public String toString() {
		return "Pessoa [id=" + id + ", nome=" + nome + ", senha=" + senha + "]";
	}
	
}
