

<?php
/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

?>

			</div><!-- #content -->

<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-footer-nav">
			<nav id="site-navigation" class="main-navigation" role="navigation">
		
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu', 'menu_class'=> "footer-navigation" ) ); ?>
			</nav><!-- #site-navigation -->
		</div>

		<div class="site-info">
			<a href="<?php echo esc_url( 'https://redacademy.com/vancouver/' ); ?>"><?php printf( esc_html( 'Brought to you by %s' ), 'Red Academy' ); ?></a>
		</div><!-- .site-info -->
</footer><!-- #colophon -->
		
</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>
