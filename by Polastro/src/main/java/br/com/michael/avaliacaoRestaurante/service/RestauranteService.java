package br.com.michael.avaliacaoRestaurante.service;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.michael.avaliacaoRestaurante.model.Restaurante;
import br.com.michael.avaliacaoRestaurante.repository.RestauranteRepository;

@RestController
@RequestMapping(value="/api/restaurante")
public class RestauranteService extends AbstractCrudService<Restaurante, RestauranteRepository> {

}
