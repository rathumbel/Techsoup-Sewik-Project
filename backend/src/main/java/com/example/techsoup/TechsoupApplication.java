package com.example.techsoup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

@SpringBootApplication
public class TechsoupApplication
{
	public static void main(String[] args) throws SQLException
	{
		SpringApplication.run(TechsoupApplication.class, args);
	}
}