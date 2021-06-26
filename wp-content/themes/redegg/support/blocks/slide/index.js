const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import edit from './edit';
import save from './save';

registerBlockType( 'redegg-custom/slide', {
	apiVersion: 2,
	title: __( 'Slide', 'redegg-custom' ),
	icon: 'format-gallery',
	category: 'layout',
	parent: ['redegg-custom/slides'],
	attributes: {
		appID: {
			type: 'number',
		},
		appURL: {
			type: 'string',
			source: 'attribute',
			selector: '.app-media',
			attribute: 'src',
			default: ''
		},
		imgSet: {
			type: 'string',
			source: 'attribute',
			selector: '.app-media',
			attribute: 'srcset',
			default: ''
		},
		id: {
			type: 'string',
			default: ''
		},
		title : {
			type: 'string',
			source: 'text',
			selector: '.slide-title',
			default: ''
		}
	},
	edit: edit,
	save: save,
} );