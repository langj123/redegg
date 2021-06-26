const { RichText, InnerBlocks, useBlockProps, InspectorControls } = wp.blockEditor;
const { Fragment } = wp.element;
const { PanelBody, ToggleControl, SelectControl } = wp.components;
const { __ } = wp.i18n;

const template = [
    ['redegg-custom/slide']
];

const EditSlides = ( { attributes, setAttributes, isSelected } ) => {

	const { settings } = attributes;

    const blockProps = useBlockProps({
    	className: "slides"
    });
   
    const setAutoplay = (value) => {
    	let temp = {};
    	temp.autoplay = value;
    	temp.loop = settings.loop;
    	
    	setAttributes({
    		settings: temp
    	});
    }

     const setLoop = (value) => {
    	let temp = {};
    	temp.loop = value;
    	temp.autoplay = settings.autoplay;

    	setAttributes({
    		settings: temp
    	});
    }

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Slider Controls')}
					initialOpen={true}
				>
					<ToggleControl
						checked={ settings.autoplay }
						label="Autoplay"
						onChange={ setAutoplay }
					/>
					<ToggleControl
						checked={ settings.loop }
						label="Loop"
						onChange={ setLoop }
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="block-wrapper">
					<div className="slides-wrap" 
						data-autoplay={ settings.autoplay }
						data-loop={ settings.loop }
					>
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