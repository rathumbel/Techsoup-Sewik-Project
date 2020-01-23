package com.example.techsoup.accident;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
class AccidentService
{
	private final AccidentRepository accidentRepository;

	public AccidentService(AccidentRepository accidentRepository)
	{
		this.accidentRepository = accidentRepository;
	}

	public List<AccidentModel> findAll() {
		return accidentRepository.findAll();
	}

	public Optional<AccidentModel> findById(Long id) {
		return accidentRepository.findById(id);
	}

	public AccidentModel save(AccidentModel stock) {
		return accidentRepository.save(stock);
	}

	public void deleteById(Long id) {
		accidentRepository.deleteById(id);
	}
}
