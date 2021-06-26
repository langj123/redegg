const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import edit from './edit';
import save from './save';

registerBlockType( 'redegg-custom/slides', {
	apiVersion: 2,
	title: __( 'Slides', 'redegg-custom' ),
	icon: 'format-gallery',
	category: 'layout',
	edit: edit,
	save: save,
} );