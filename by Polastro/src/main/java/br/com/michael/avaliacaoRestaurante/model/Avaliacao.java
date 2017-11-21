package br.com.michael.avaliacaoRestaurante.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity(name="T_AVALIACAO")
public class Avaliacao {

	@Id
	@GeneratedValue
	private long id;
	
	@Column(name="DT_AVALIACAO")
	@Temporal(TemporalType.DATE)
	private Date dataAvaliacao;
	
	@Column(name="VL_NOTA")
	private int nota;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="CD_PESSOA")
	private Pessoa pessoa;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="CD_RESTAURANTE")
	private Restaurante restaurante;

	public Avaliacao() {
		super();
	}

	public Avaliacao(long id, Date dataAvaliacao, int nota, Pessoa pessoa, Restaurante restaurante) {
		super();
		this.id = id;
		this.dataAvaliacao = dataAvaliacao;
		this.nota = nota;
		this.pessoa = pessoa;
		this.restaurante = restaurante;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Date getDataAvaliacao() {
		return dataAvaliacao;
	}

	public void setDataAvaliacao(Date dataAvaliacao) {
		this.dataAvaliacao = dataAvaliacao;
	}

	public int getNota() {
		return nota;
	}

	public void setNota(int nota) {
		this.nota = nota;
	}

	public Pessoa getPessoa() {
		return pessoa;
	}

	public void setPessoa(Pessoa pessoa) {
		this.pessoa = pessoa;
	}

	public Restaurante getRestaurante() {
		return restaurante;
	}

	public void setRestaurante(Restaurante restaurante) {
		this.restaurante = restaurante;
	}

	@Override
	public String toString() {
		return "Avaliacao [id=" + id + ", dataAvaliacao=" + dataAvaliacao + ", nota=" + nota + ", pessoa=" + pessoa
				+ ", restaurante=" + restaurante + "]";
	}
}
