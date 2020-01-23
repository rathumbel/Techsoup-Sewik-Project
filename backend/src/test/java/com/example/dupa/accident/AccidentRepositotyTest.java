package com.example.techsoup.accident;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.Date;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class AccidentRepositotyTest
{
	@Autowired
	TestEntityManager entityManager;

	@Autowired
	AccidentRepository accidentRepository;

	@Test
	public void test_findAllEmpty()
	{
		List<AccidentModel> accidents = accidentRepository.findAll();
		assertThat(accidents).isEmpty();
	}

	@Test
	public void test_findAll()
	{
		AccidentModel model = new AccidentModel();
		model.setType("TYPE");
		model.setDate(new Date());
		model.setState("state");
		model.setCoordinates("coords");
		model.setCity("City");
		model.setStreet("Street");
		model.setDetailedType("detailed type");
		model.setPedestrians(false);
		model.setCars(true);
		model.setBigCars(true);
		model.setBicycles(true);
		model.setMotocycles(true);
		model.setTrams(false);

		entityManager.persistAndFlush(model);

		List<AccidentModel> accidents = accidentRepository.findAll();
		assertThat(accidents).hasSize(1);
	}
}
