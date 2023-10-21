import {populate_attributes, populate_images} from './card_helper';

export default function Card({ content }) {
	let card_images = populate_images(content.img);
	let card_attributes = populate_attributes(content.img);

	return (
		<div>
			<div class="center">
				<div className={card_attributes.join(" ")} draggable="false">
					{card_images[0]};
					{card_images[1]};
					{card_images[2]};
					{card_images[3]};

					<div className="content unselectable">
						<p className="title">{content.title ? content.title : ""}</p>
						<p className="class">{content.class ? content.class : ""}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
