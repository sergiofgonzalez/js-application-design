package org.joolzminer.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HttpController {

	private static final Logger LOGGER = LoggerFactory.getLogger(HttpController.class);


	@RequestMapping(value = "/data.txt", method = RequestMethod.GET, produces = MediaType.TEXT_PLAIN_VALUE)
	public String getDataText() {
		LOGGER.debug("Received request for `/data.txt`");

		StringBuilder sb = new StringBuilder();
		for (long i = 0; i < 1_000_000; i++) {
			sb.append("All work and no play makes Jack a dull boy\n");
		}

		return sb.toString();
	}
}
