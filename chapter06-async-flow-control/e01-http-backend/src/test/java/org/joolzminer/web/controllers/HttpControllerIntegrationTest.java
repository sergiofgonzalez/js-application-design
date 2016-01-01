package org.joolzminer.web.controllers;

import org.joolzminer.Application;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.boot.test.WebIntegrationTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


/* hamcrest */
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(Application.class)
@WebIntegrationTest(randomPort = true)
@DirtiesContext
public class HttpControllerIntegrationTest {

	@Value("${local.server.port}")
	private int port;
	
	@Test
	public void testGetDataTxtEndpoint() {
		ResponseEntity<String> entity = new TestRestTemplate()
											.getForEntity("http://localhost:" + this.port + "/data.txt", String.class);
		assertThat(entity.getStatusCode(), is(equalTo(HttpStatus.OK)));
	}
}
