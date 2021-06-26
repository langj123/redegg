<?php
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