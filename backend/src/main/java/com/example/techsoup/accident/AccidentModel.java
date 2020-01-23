package com.example.techsoup.accident;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
class AccidentModel
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long ID;
	private String type;
	private Date date;
	private String state;
	private String coordinates;
	private String city;
	private String street;
	private String detailedType;
	private boolean pedestrians;
	private boolean bicycles;
	private boolean cars;
	private boolean bigCars;
	private boolean motocycles;
	private boolean trams;
}