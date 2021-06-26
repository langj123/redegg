import classNames from "classNames";
const { RichText, InnerBlocks, MediaUpload, InspectorControls, useBlockProps, URLInputButton } = wp.blockEditor;
const { createBlock } = wp.blocks;
const { Fragment, Component, useState } = wp.element;
const { Button, ToggleControl, PanelBody } = wp.components;
const { useDispatch, useSelect, replaceInnerBlocks } = wp.data;
const { __ } = wp.i18n;

const EditSlide = ( { attributes, setAttributes, isSelected } ) => {

	const { id, title, appURL, appID, imgSet } = attributes;


	const onChangeTitle = ( value ) => {
		setAttributes( { title: value } );
	};
	
    const onSelectImage = (media) => {
        let ID = wp.data.select('core/block-editor').getSelectedBlock().clientId;

        console.log(media);
    	let mediaSrc;
        let srcSet;
        if (media.subtype == 'svg+xml') {
        	mediaSrc = media.url;
        } else {
           mediaSrc = media.sizes['slide-image'].url;
           srcSet = media.sizes['slide-image-small'].url + ' 960w';
           srcSet += ', ' + media.sizes['slide-image-xs'].url + ' 480w';
           srcSet += ', ' + mediaSrc + ' 1920w';
        }

        setAttributes({
            appURL : mediaSrc,
            appID : media.id,
            id: 'slide-' + ID,
            imgSet: srcSet
        });
    }

    const blockProps = useBlockProps({
    	className: "slide"
    });

    let butText = appURL != '' ? 'Change' : 'Upload';

	return (
		<Fragment>
			<div {...blockProps}>
                <div className="slide-cont" id={id}>
                    
				    <div className="media-controls">
				    	<MediaUpload
                        	onSelect={ onSelectImage }
                        	value={ appID }
                        	render={ ( { open } ) => (
                        	    <div className="image-controls">
                        	        <Button
                                        isSecondary
                        	            onClick={ open }
                        	        >
                        	            { butText } Slide Image
                        	        </Button>
                        	    </div>
                        	) }
                        />
				    </div>
				    <div className="slide-wrap">
				    	<div className="img-wrap">
                        	{ appURL != '' && (
                        		<img
                        			src={ appURL }
                                    srcset={ imgSet }
                                    sizes="
                                        (min-width: 768px) 100vw,
                                        100vw
                                    "
                        			className="app-media"
                        		/>
                        	)}
				    	</div>
				    	<div className="text-wrap">
				    		<RichText
				    			tagName="h2"
				    			className="slide-title"
				    			placeholder={ __(
				    				'Slide Title...',
				    				'redegg-custom'
				    			) }
				    			value={ title }
				    			onChange={ onChangeTitle }
				    		/>
				    	</div>
				    </div>
                </div>
			</div>
		</Fragment>
	);
}

export default EditSlide;