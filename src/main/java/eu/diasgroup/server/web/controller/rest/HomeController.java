package eu.diasgroup.server.web.controller.rest;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import eu.diasgroup.server.core.domain.system.Response;

/**
 * The Home controller serves the Initial loading operation (load Home) and every *.html file request from the server
 */
@RestController
public class HomeController {

	/** The application version. */
	@Value("${application.version}")
	protected String applicationVersion;

	/**
	 * Show RSD home page.
	 *
	 * @param request the request
	 *
	 * @return a {@link ModelAndView} to the index page
	 */
	@GetMapping("/home")
	public Response<String> showHomePage(final HttpServletRequest request) {

		//final ModelAndView modelAndView = new ModelAndView("home");

		/* Basic configuration from profile info */
		//modelAndView.addObject("applicationVersion", applicationVersion);

		//log.info("EXITING showHomePage [model={}, view={}].", modelAndView.getModel(), modelAndView.getView());

		return new Response<>(applicationVersion);
	}

	/**
	 * Show HTML pages.
	 *
	 * @param request the request
	 * @param response the response
	 *
	 * @return the core and view
	 */
	//@GetMapping("**/*.html")
	//@ResponseBody
	/*public ModelAndView showHtmlPage(final HttpServletRequest request, final HttpServletResponse response) {

		log.info("ENTERED showHtmlPage [Context Path={}, Request URI={}].", request.getContextPath(), request.getRequestURI());
		final String template = request.getRequestURI().replaceAll(".html", "").replaceAll(request.getContextPath(), "");
		log.info("EXITING showHtmlPage, loading [template={}].", template);

		return new ModelAndView(template);
	}*/

}
