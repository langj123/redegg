<?php
// Add options page for site

if( function_exists('acf_add_options_page') ) {
    
	// Add parent.
    acf_add_options_page(array(
        'page_title'  => __('Red Egg Site Settings'),
        'menu_title'  => __('Red Egg Settings'),
        'redirect'    => false,
     ));

}