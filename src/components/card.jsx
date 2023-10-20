import './card.css';
import item_background from './../assets/item_background.webp'
import connection_error_background from './../assets/connection_error_background.webp'
import connection_error from './../assets/connection_error.webp'

export default function Card({ content }) {
	return (
		<div>
			<div class="center">
				<div class="item-card">

					{/* display item background, or error background if no img was provided */}
					<img src={content.img ? item_background : connection_error_background} alt="img" />

					{/* display item icon, or error text if no img was provided */}
					<img src={content.img ? content.img : connection_error} alt="img" />

					{/* display the `title` and `class` of item */}
					<div class="content">
						<p class="title">{content.title ? content.title : ""}</p>
						<p class="class">{content.class ? content.class : ""}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
