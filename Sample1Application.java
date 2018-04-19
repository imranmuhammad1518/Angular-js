package com.example.demo;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Sample1Application {

	public static void main(String[] args) {
		SpringApplication.run(Sample1Application.class, args);
	}
	
	@RequestMapping(value="/training/arithmetic/sumtwo/number1/{num1}/number2/{num2}", method= RequestMethod.GET, produces="application/json")
	public ResponseEntity<Object> sumOfTwoNumbers(@PathVariable Integer num1, 
												@PathVariable Integer num2,
												HttpServletRequest httpRequest,
												HttpServletResponse httpResponse,
												@RequestHeader Map<String, String> headers){
		if(!headers.containsKey("sid")){
			return new ResponseEntity<>("Invalid request", HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(num1+num2, HttpStatus.OK);
	}
}
