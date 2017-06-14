<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE HTML>
<html>
<head>
	<title>DIAS-GROUP</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

	<link href="/css/angular-group.css" rel="stylesheet">
	<link rel="stylesheet" href="assets/style.css"/>
	<script src="/js/angular-group.js" type="text/javascript"></script>
	<script>
		$(document).ready(function() {
			$("#owl-example").owlCarousel();
			$('.listing-detail span').tooltip('hide');
			$('.carousel').carousel({
				interval: 3000
			});
			$('.carousel').carousel('cycle');
		});
	</script>



	<!-- Owl stylesheet -->
	<link rel="stylesheet" href="../../dias/assets/owl-carousel/owl.carousel.css">
	<link rel="stylesheet" href="assets/owl-carousel/owl.theme.css">
	<script src="assets/owl-carousel/owl.carousel.js"></script>
	<!-- Owl stylesheet -->


	<link rel="stylesheet" type="text/css" href="/js/bower/angular-toastr/dist/angular-toastr.min.css">
	<script type="text/javascript" src="/js/bower/angular-toastr/dist/angular-toastr.tpls.min.js"></script>

	<script type="text/javascript" src="/js/bower/lodash/dist/lodash.min.js"></script>

	<script src="/js/app.js"></script>

	<!-- Common building blocks like configuration, interceptors etc. -->
	<script src="/js/blocks/config/error/Error.config.js"></script>
	<script src="/js/blocks/config/message/Message.config.js"></script>

	<script src="/js/blocks/filters/format.filter.js"></script>

	<script src="/js/blocks/directives/bindEnter.js"></script>

	<script src="/js/blocks/locale/Locale.service.js"></script>
	<script src="/js/blocks/locale/Locale.filter.js"></script>

	<!-- Common components like alerting and form validation-->
	<script src="/js/components/alert/Alert.config.js"></script>
	<script src="/js/components/alert/Alert.service.js"></script>

	<!-- Common services like authentication and user management -->
	<script src="/js/services/logger/Logger.constant.js"></script>
	<script src="/js/services/logger/Logger.service.js"></script>

	<script src="/js/services/rest/DiasHttp.service.js"></script>
	<script src="/js/services/rest/ResponseHandling.service.js"></script>

	<script src="/js/services/var/Url.service.js"></script>
	<script src="/js/services/var/Util.service.js"></script>

	<script src="/js/home/Home.controller.js"></script>

	<!-- LOCALIZATION -->
	<script type="text/javascript" src="/js/lang/localeTextMap_en-us.js"></script>

	<style type="text/css">
		[ng\:cloak], [ng-cloak], .ng-cloak {
			display: none !important;
		}
	</style>



</head>

<body ng-app="dias" ng-class="{'block-click' : loading}" ng-cloak>

	<!-- Header Starts -->
	<div class="navbar-wrapper">

		<div class="navbar-inverse" role="navigation">
			<div class="container">
				<div class="navbar-header">


					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>

				</div>


				<!-- Nav Starts -->
				<div class="navbar-collapse  collapse">
					<ul class="nav navbar-nav navbar-right">
						<li class="active"><a href="index.html">Home</a></li>
						<li><a href="about.html">{{'common.about' | i18n}}</a></li>
						<li><a href="real-estate.html">Real Estate</a></li>
						<li><a href="contact.html">{{'common.contact' | i18n}}</a></li>
					</ul>
				</div>
				<!-- #Nav Ends -->

			</div>
		</div>

	</div>
	<!-- #Header Starts -->





	<div class="container">

		<!-- Header Starts -->
		<div class="header">
			<a href="index.html"><img src="images/dias-logo.png" alt="Realestate"></a>

		</div>
		<!-- #Header Starts -->
	</div>


	<!-- banner -->
	<div class="inside-banner">
		<div class="container">
			<span class="pull-right">${applicationVersion}</span>
			<h2>DIAS-ΓΙΑΤΙ ΕΜΕΙΣ ΜΠΟΡΟΥΜΕ</h2>
		</div>
	</div>
	<!-- banner -->


	<div class="container">
		<div class="spacer">
			<div class="row">
				<div class="col-lg-8  col-lg-offset-2">
					<img src="images/about.jpg" class="img-responsive thumbnail"  alt="realestate">
					<p>Στα κεντρικά γραφεία της DiasGroup στη Χαλκίδα, σε ένα ευχάριστο και τεχνολογικά άρτια εξοπλισμένο γραφείο, μπορούμε να δώσουμε λύσεις και νέες ιδέες σε οποιαδήποτε Ασφαλιστική, Χρηματοοικονομική, Χρηματοδοτική και Κατασκευαστική ανάγκη σας. Επίσης μπορούμε να βρούμε μέσα από το Πανελλαδικό δίκτυο μας το σπίτι, το γραφείο ή το οικόπεδο που θα μας ζητήσετε.</p>
					<p>Η DiasGroup πρόεδρος της οποίας είναι η κα Μητσιάκου Μαρία, έχει σαν σκοπό της να κάνει τα όνειρα σας πραγματικότητα, με το μικρότερο δυνατό οικονομικό κόστος, χωρίς ταλαιπωρία, γρήγορα και με την εγγύηση των είκοσι χρόνων μας στο χώρο των Ασφαλίσεων, των Τραπεζικών Προϊόντων, του Real Estate και της δόμησης κατοικιών.</p>
					<p>Η ΔΙΑΜΕΣΟΛΑΒΗΤΙΚΗ DiasGroup δραστηριοποιείται και στο Internet έχοντας ένα δίκτυο συνεργατών σε όλη την Ελλάδα ώστε να μπορεί να αντεπεξέλθει στις ανάγκες και τις ταχύτητες της νέας εποχής.</p>
					<p>Έχοντας την εμπειρία και τη τεχνογνωσία είναι σημαντικό να γνωρίζετε ότι στην εταιρεία μας θα βρείτε καινούριες ιδέες και θα κάνετε τα πλάνα σας πραγματικότητα στο συντομότερο χρονικό διάστημα.</p>
					<p>Δεν χρειάζεται πλέον να προσπαθείτε με αμφίβολα αποτελέσματα να βρείτε ποιο είναι το κατάλληλο Δάνειο σε σχέση με τις ανάγκες σας.</p>
					<p>Δεν υπάρχει λόγος να πηγαίνετε στα τυφλά για να βρείτε να ενοικιάσετε ή να αγοράσετε σπίτι, γραφείο, κατάστημα, οικόπεδο. Εμείς είμαστε δίπλα σας.</p>
					<p>Δεν είστε πλέον χαμένοι στο θέμα της Ασφάλισης σας ανάμεσα σε όλες τις Ασφαλιστικές εταιρίες εμείς βλέπουμε τις ανάγκες σας και σας προτείνουμε να επιλέξετε ό,τι σας συμφέρει ώστε να νιώθετε ασφάλεια. Αυτή είναι η δουλειά μας.</p>
					<p>Και όταν έρθει η στιγμή να οικοδομήσετε, εμείς έχουμε και πάλι να σας προτείνουμε τους οικονομικότερους αλλά και πλέον σύγχρονους τρόπους να υλοποιήσετε τις ιδέες σας δείχνοντας σας σε video φωτογραφίες δείγματα της δουλειάς μας, ανάλογων κτιρίων σε όλη την Ευρώπη.</p>
					<p>Η DiasGroup Διαμεσολαβητική θα μειώσει το κόστος των αναγκών σας, θα επιταχύνει το χρόνο που χρειάζονται τα πλάνα σας και θα σας δώσει ιδέες και λύσεις.</p>
					<p>Στη DiasGroup τέλος, οι επιδοτήσεις είναι άλλο ένα μεγάλο κεφάλαιο της επιτυχίας μας, αφού φροντίζουμε αν το επιθυμεί ο πελάτης μας, να βρούμε την κατάλληλη επιδότηση, όταν αυτό είναι εφικτό, έτσι ώστε να επιδοτηθεί, για να μην χρειαστεί να πληρώσει όλο το κεφάλαιο μόνος του και να υλοποιήσει τα προσωπικά και επαγγελματικά του σχέδια.
				</div>
			</div>
		</div>
	</div>

	<div class="footer">

		<div class="container">



			<div class="row">
				<div class="col-lg-3 col-sm-3">
					<h4>Πληροφορίες</h4>
					<ul class="row">
						<li class="col-lg-12 col-sm-12 col-xs-3"><a href="about.html">{{'common.about' | i18n}}</a></li>
						<li class="col-lg-12 col-sm-12 col-xs-3"><a href="agents.php">Agents</a></li>
						<li class="col-lg-12 col-sm-12 col-xs-3"><a href="contact.php">{{'common.contact' | i18n}}</a></li>
					</ul>
				</div>

				<div class="col-lg-3 col-sm-3">
					<h4>Newsletter</h4>
					<p>Get notified about the latest properties in our marketplace.</p>
					<form class="form-inline" role="form">
						<input type="text" placeholder="Enter Your email address" class="form-control">
						<button class="btn btn-success" type="button">Notify Me!</button></form>
				</div>

				<div class="col-lg-3 col-sm-3">
					<h4>Follow us</h4>
					<a href="#"><img src="images/facebook.png" alt="facebook"></a>
					<a href="#"><img src="images/twitter.png" alt="twitter"></a>
					<a href="#"><img src="images/linkedin.png" alt="linkedin"></a>
					<a href="#"><img src="images/instagram.png" alt="instagram"></a>
				</div>

				<div class="col-lg-3 col-sm-3">
					<h4>{{'common.contact' | i18n}}</h4>
					<p><b>Dias-Group</b><br>
						<span class="glyphicon glyphicon-map-marker"></span> {{'common.address' | i18n}}<br>
						<span class="glyphicon glyphicon-envelope"></span> {{'common.email' | i18n}}<br>
						<span class="glyphicon glyphicon-earphone"></span> {{'common.phone' | i18n}}</p>
				</div>
			</div>
			<p class="copyright">Copyright 2017. All rights reserved.	</p>


		</div>
	</div>


</body>
</html>



