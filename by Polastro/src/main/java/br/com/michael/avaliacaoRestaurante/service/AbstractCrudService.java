package br.com.michael.avaliacaoRestaurante.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

public abstract class AbstractCrudService<T, R extends CrudRepository<T, Long>> {
	
	@Autowired
	R repository;
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<T>> listarTodos(){
		final HttpHeaders header = new HttpHeaders();
		header.setContentType(MediaType.APPLICATION_JSON);
		
		return new ResponseEntity<List<T>>((List<T>) repository.findAll(), header, HttpStatus.OK);
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ResponseEntity<T> buscar(@PathVariable("id") long id){
		T entity = (T) repository.findOne(id);
		
		return new ResponseEntity<T>(entity, HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<String> cadastrar(@RequestBody T entity){
		try{
			repository.save(entity);
		}catch(Exception e){
			System.err.println(e.getMessage());
			return new ResponseEntity<String>("{\"status\":\"Ocorreu um erro ao cadastrar [ " + e.getMessage() + " ]\"}", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<String>("{\"status\":\"Cadastro realizado com sucesso!\"}", HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.PUT)
	public ResponseEntity<String> atualizar(@RequestBody T entity){
		try{
			repository.save(entity);
		}catch(Exception e){
			System.err.println(e.getMessage());
			return new ResponseEntity<String>("{\"status\":\"Ocorreu um erro ao atualizar [ " + e.getMessage() + " ]\"}", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<String>("{\"status\":\"Atualização realizada com sucesso!\"}", HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.DELETE)
	public ResponseEntity<String> deletar(long id){
		try{
			repository.delete(id);
		}catch(Exception e){
			System.err.println(e.getMessage());
			return new ResponseEntity<String>("{\"status\":\"Ocorreu um erro ao remover [ " + e.getMessage() + " ]\"}", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<String>("{\"status\":\"Pessoa removida com sucesso!\"}", HttpStatus.OK);
	}
	
}
