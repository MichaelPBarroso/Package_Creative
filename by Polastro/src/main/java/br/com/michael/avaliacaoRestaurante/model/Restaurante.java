package br.com.michael.avaliacaoRestaurante.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity(name="T_RESTAURANTE")
public class Restaurante {

	@Id
	@GeneratedValue
	private long id;

	@Column(name="NM_RESTAURANTE")
	private String nome;
	
	@Column(name="DS_ENDERECO")
	private String endereco;

	@OneToMany(mappedBy="restaurante", cascade=CascadeType.ALL)
	private List<Avaliacao> avaliacoes;
	
	public Restaurante() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Restaurante(long id, String nome, String endereco, List<Avaliacao> avaliacoes) {
		super();
		this.id = id;
		this.nome = nome;
		this.endereco = endereco;
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

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public List<Avaliacao> getAvaliacoes() {
		return avaliacoes;
	}

	public void setAvaliacoes(List<Avaliacao> avaliacoes) {
		this.avaliacoes = avaliacoes;
	}

	@Override
	public String toString() {
		return "Restaurante [id=" + id + ", nome=" + nome + ", endereco=" + endereco + "]";
	}
	
}