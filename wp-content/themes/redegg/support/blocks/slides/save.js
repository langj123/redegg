const { InnerBlocks, useBlockProps, RichText } = wp.blockEditor;

const SaveSlides = ( { attributes } ) => {

	const { settings } = attributes;

	const blockProps = useBlockProps.save({
		className: "slides"
	});

	return (
		<div { ...blockProps}>
			<div className="block-wrapper">
				<div className="slides-wrap"
					data-autoplay={ settings.autoplay }
					data-loop={ settings.loop }
					data-arrows={ settings.arrows }
					data-dots={ settings.dots }
				>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}

export default SaveSlides;