package br.com.michael.avaliacaoRestaurante.service;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.michael.avaliacaoRestaurante.model.Pessoa;
import br.com.michael.avaliacaoRestaurante.repository.PessoaRepository;

@RestController
@RequestMapping(value="/api/pessoa")
public class PessoaService extends AbstractCrudService<Pessoa, PessoaRepository> {

}
