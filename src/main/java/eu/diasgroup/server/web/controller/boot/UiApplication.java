package eu.diasgroup.server.web.controller.boot;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@ComponentScan("eu.diasgroup.server.web.controller.rest")
//@EnableAutoConfiguration
public class UiApplication {

	@RequestMapping("/real-estate/get")
	public Map<String,Object> home() {
		Map<String,Object> model = new HashMap<>();
		model.put("id", "Real Estate");
		model.put("number", "5");
		return model;
	}

	public static void main(String[] args) {
		SpringApplication.run(UiApplication.class, args);
	}

}
