package br.com.michael.avaliacaoRestaurante.service;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.michael.avaliacaoRestaurante.model.Avaliacao;
import br.com.michael.avaliacaoRestaurante.repository.AvaliacaoRepository;

@RestController
@RequestMapping(value="/api/avaliacao")
public class AvaliacaoService extends AbstractCrudService<Avaliacao, AvaliacaoRepository> {

}
