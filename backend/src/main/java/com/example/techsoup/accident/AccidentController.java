package com.example.techsoup.accident;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/accident")
class AccidentController
{
	Logger log = LoggerFactory.getLogger(getClass());

	private final AccidentService accidentService;

	public AccidentController(AccidentService accidentService) {
		this.accidentService = accidentService;
	}

	@GetMapping(consumes = "application/json", produces = "application/json")
	public ResponseEntity<List<AccidentModel>> findAll() {
		return new ResponseEntity<>(accidentService.findAll(), HttpStatus.OK);
	}

	@PostMapping(consumes = "application/json", produces = "application/json")
	public ResponseEntity<AccidentModel> create(@Valid @RequestBody AccidentModel accident) {
		return new ResponseEntity<>(accidentService.save(accident), HttpStatus.CREATED);
	}

	@DeleteMapping(path = "/{id}", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		if (!accidentService.findById(id).isPresent()) {
			log.error("Id " + id + " is not existed");
			ResponseEntity.badRequest().build();
		}

		accidentService.deleteById(id);

		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}
}
