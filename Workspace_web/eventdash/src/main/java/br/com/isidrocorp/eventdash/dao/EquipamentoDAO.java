package br.com.isidrocorp.eventdash.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.isidrocorp.eventdash.model.Equipamento;

public interface EquipamentoDAO extends CrudRepository <Equipamento, Integer> {
	
// preciso criar o método que recebe datas de inicio e fim
//	public ArrayList<Alarme> findAllByDataBetween(LocalDate inicio, LocalDate fim);

}