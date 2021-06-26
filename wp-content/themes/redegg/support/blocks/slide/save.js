const { InnerBlocks, useBlockProps, RichText } = wp.blockEditor;

const SaveSlide = ( { attributes } ) => {

	const { id, title, appURL, appID, imgSet } = attributes;

	const blockProps = useBlockProps.save({
		className: "slide"
	});

	return (
		<div { ...blockProps}>
			<div className="slide-cont" id={id}>
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
						{ title != '' && (
							<RichText.Content
								tagName="h2"
								className="slide-title"							
								value={ title }
							/>
						)}						
					</div>
				</div>
			</div>
		</div>
	);
}

export default SaveSlide;