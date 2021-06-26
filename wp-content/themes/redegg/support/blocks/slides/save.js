const { InnerBlocks, useBlockProps, RichText } = wp.blockEditor;

const SaveSlides = ( { attributes } ) => {

	const blockProps = useBlockProps.save({
		className: "slides"
	});

	return (
		<div { ...blockProps}>
			<div className="block-wrapper">
				<div className="slides-wrap">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}

export default SaveSlides;