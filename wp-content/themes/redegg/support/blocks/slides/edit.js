const { RichText, InnerBlocks, useBlockProps, InspectorControls } = wp.blockEditor;
const { Fragment } = wp.element;
const { PanelBody, ToggleControl, SelectControl } = wp.components;
const { __ } = wp.i18n;

const template = [
    ['redegg-custom/slide']
];

const EditSlides = ( { attributes, setAttributes, isSelected } ) => {

    const blockProps = useBlockProps({
    	className: "slides"
    });
   
	return (
		<Fragment>
			<div {...blockProps}>
				<div className="block-wrapper">
					<div className="slides-wrap">
						<InnerBlocks
							allowedBlocks={['redegg-custom/slide']}
							template={ template }
						/>
					</div>
				</div>						
			</div>
		</Fragment>
	);
}

export default EditSlides;