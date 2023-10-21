import './card.css';
import item_background from './../assets/item_background.webp'
import connection_error_background from './../assets/connection_error_background.webp'
import connection_error_text from './../assets/connection_error.webp'

// return a list of 4 images based on whether `content_img` exists 
// 4 images were needed to achieve the glitch effect in the `unclickable` 
export function populate_images(content_img) {
	if (content_img) {
		return (
			[
				null, 
				null, // [0] and [1] are nulls as a consequence of needing 4 images
				<img className='centered' draggable="false" src={item_background} alt="img" />,
				<img className='centered' draggable="false" src={content_img} alt="img" />,
			]
		)
	}

	return (
		[
			<img className='centered'       draggable="false" src={connection_error_background} alt="img" />,
			<img className='ghosting'       draggable="false" src={connection_error_background} alt="img" />,
			<img className='error'          draggable="false" src={connection_error_text} alt="img" />,
			<img className='error ghosting' draggable="false" src={connection_error_text} alt="img" />,
		]
	)
}

// hold html class names as an list of string to be able to append more below
// a valid img means it can be clicked while an invalid img must be unclickable
export function populate_attributes(content_img) {
	if (content_img) {
		return ["item-card", "clickable"];
	}

	return ["item-card", "unclickable"];
}