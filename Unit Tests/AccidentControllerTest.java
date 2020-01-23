package com.example.dupa.accident;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.test.annotation.DirtiesContext;

import java.net.URI;
import java.net.URISyntaxException;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class AccidentControllerTest
{
	@LocalServerPort
	private int port;

	@Autowired
	private TestRestTemplate restTemplate;

	private ResponseEntity<AccidentModel> create_accident() throws URISyntaxException
	{
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<String> entity = new HttpEntity<>("{\n" +
			"    \"type\": \"type\",\n" +
			"    \"date\": \"2017-12-27\",\n" +
			"    \"state\": \"state\",\n" +
			"    \"coordinates\": \"(1,1)\",\n" +
			"    \"city\": \"city\",\n" +
			"    \"street\": \"street\",\n" +
			"    \"detailedType\": \"detailedType\",\n" +
			"    \"pedestrians\": true,\n" +
			"    \"cars\": true,\n" +
			"    \"bicycles\": true,\n" +
			"    \"bigCars\": true,\n" +
			"    \"motocycles\": true,\n" +
			"    \"trams\": true\n" +
			"}", headers);
		URI url = new URI("http://localhost:" + port + "/api/v1/accident");

		return restTemplate.exchange(url, HttpMethod.POST, entity, AccidentModel.class);
	}

	@Test
	public void test_getListEmpty() throws URISyntaxException
	{
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<String> entity = new HttpEntity<>(headers);
		URI url = new URI("http://localhost:" + port + "/api/v1/accident");

		ResponseEntity<AccidentModel[]> res = restTemplate.exchange(url, HttpMethod.GET, entity, AccidentModel[].class);

		assertThat(res.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(res.getBody()).isEmpty();
	}

	@Test
	public void test_getList() throws URISyntaxException
	{
		create_accident();

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<String> entity = new HttpEntity<>(headers);
		URI url = new URI("http://localhost:" + port + "/api/v1/accident");

		ResponseEntity<AccidentModel[]> res = restTemplate.exchange(url, HttpMethod.GET, entity, AccidentModel[].class);

		assertThat(res.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(res.getBody()).hasSize(1);
	}

	@Test
	public void test_addAccident() throws URISyntaxException
	{
		ResponseEntity<AccidentModel> res = create_accident();
		assertThat(res.getStatusCode()).isEqualTo(HttpStatus.CREATED);
		assertThat(res.getBody().getID()).isNotNull();
	}

	@Test
	public void test_deleteById() throws URISyntaxException
	{
		ResponseEntity<AccidentModel> createRes = create_accident();

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<String> entity = new HttpEntity<>(headers);
		URI url = new URI("http://localhost:" + port + "/api/v1/accident/" + createRes.getBody().getID());

		ResponseEntity<Void> res = restTemplate.exchange(url, HttpMethod.DELETE, entity, Void.class);
		assertThat(res.getStatusCode()).isEqualTo(HttpStatus.NO_CONTENT);
	}
}
