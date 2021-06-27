<?php
/**
 * SVG Upload support
 **/
function redegg_svgs_disable_real_mime_check( $data, $file, $filename, $mimes ) {
   $wp_filetype = wp_check_filetype( $filename, $mimes );
   $ext = $wp_filetype['ext'];
   $type = $wp_filetype['type'];
   $proper_filename = $data['proper_filename'];
   return compact( 'ext', 'type', 'proper_filename' );
}
add_filter( 'wp_check_filetype_and_ext', 'redegg_svgs_disable_real_mime_check', 10, 4 );

function redegg_mime_types($mimes) {
 $mimes['svg'] = 'image/svg+xml';
 return $mimes;
}
add_filter('upload_mimes', 'redegg_mime_types');


add_image_size('slide-image', 1920, 1080, array('center', 'center'), false);
add_image_size('slide-image-small', 960, 540, array('center', 'center'), false);
add_image_size('slide-image-xs', 480, 270, array('center', 'center'), false);

add_filter( 'image_size_names_choose', 'redegg_custom_sizes' );
 
function redegg_custom_sizes( $sizes ) {
    return array_merge( $sizes, array(
        'slide-image' => ('Slide Image'),
        'slide-image-small' => ('Slide Image Small'),
        'slide-image-xs' => ('Slide Image Extra Small'),
    ) );
}