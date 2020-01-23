package com.example.techsoup.accident;

import org.springframework.data.jpa.repository.JpaRepository;

interface AccidentRepository extends JpaRepository<AccidentModel, Long>
{}