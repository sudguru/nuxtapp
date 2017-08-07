<template>
		<div class="container">
			<footer id="footer">
				<div class="footer-top">
					<div class="row">
						<div class="col-sm-12">
							<div class="row">
								<div class="col-md-6">
									<h3>We are dedicated to our customers</h3>
								</div>

								<div class="col-md-6">
									<div class="footer-top-subscribe">
										<h4>Be the First to Know<br><span>Sign up for newsletter today.</span></h4>

										<form id="newsletterForm" action="#" method="POST">
											<div class="input-group">
												<input class="form-control" placeholder="Email Address" name="newsletterEmail" id="newsletterEmail" type="text">
												<span class="input-group-btn">
													<button class="btn btn-default" type="submit">Go!</button>
												</span>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="footer-middle">
					<div class="row">
						<div class="col-md-3">
							<h4>Who We Are</h4>
							<div class="footer-about">
								<a href="index.html" class="logo">
									<img alt="Nepal Bank" class="img-responsive" src="/img/logo.png">
								</a>
								<p>The First Bank in Nepal</p>
								<a href="/post/introduction">Learn More About Us</a>
							</div>
						</div>
						<div class="col-md-3">
							<h4>Main Features</h4>
							<ul class="features">
								<li>
									<i class="fa fa-check text-color-primary"></i>
									<a href="#">Feature One</a>
								</li>
								<li>
									<i class="fa fa-check text-color-primary"></i>
									<a href="#">Feature Two</a>
								</li>
								<li>
									<i class="fa fa-check text-color-primary"></i>
									<a href="#">Feature Three</a>
								</li>
								<li>
									<i class="fa fa-check text-color-primary"></i>
									<a href="#">Feature Four</a>
								</li>
								<li>
									<i class="fa fa-check text-color-primary"></i>
									<a href="#">Feature Five</a>
								</li>
							</ul>
						</div>
						<div class="col-md-3">
							<h4>Useful links</h4>
							<ul class="links">
								<li>
									<i class="fa fa-caret-right text-color-primary"></i>
									<a href="">About Us</a>
								</li>
								<li>
									<i class="fa fa-caret-right text-color-primary"></i>
									<a href="">Contact Us</a>
								</li>
								<li>
									<i class="fa fa-caret-right text-color-primary"></i>
									<a href="">Useful Link One</a>
								</li>
								<li>
									<i class="fa fa-caret-right text-color-primary"></i>
									<a href="#">Another Useful Link</a>
								</li>
								<li>
									<i class="fa fa-caret-right text-color-primary"></i>
									<a href="#">More Useful Link</a>
								</li>
							</ul>
						</div>
						<div class="col-md-3">
							<div class="contact-details">
								<h4>Contact Information</h4>
								<ul class="contact">
									<li><p><i class="fa fa-map-marker"></i> <strong>Address:</strong><br> </p></li>
									<li><p><i class="fa fa-phone"></i> <strong>Phone:</strong><br> </p></li>
									<li><p><i class="fa fa-envelope-o"></i> <strong>Email:</strong><br> <a :href="$store.state.email"></a></p></li>
									<li><p><i class="fa fa-clock-o"></i> <strong>Working Days/Hours:</strong><br></p></li>
								</ul>
							</div>
						</div>

					</div>
				</div>
				<div class="footer-copyright clearfix">
					<ul class="social-icons">
						<li class="social-icons-facebook"><a :href="this.$store.state.facebook" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a></li>
						<li class="social-icons-twitter"><a :href="this.$store.state.twitter" target="_blank" title="Twitter"><i class="fa fa-twitter"></i></a></li>
						<li class="social-icons-linkedin"><a :href="$store.state.linkedin" target="_blank" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
					</ul>
					<p class="copyright-text">© Copyright 2017. All Rights Reserved.</p>
				</div>
			</footer>
		</div>
</template>
<script>
	export default {
		name: 'footer'
	}
</script>
<style></style>