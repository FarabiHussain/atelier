import './card.css';
import img00 from './../assets/00.jpg'

export default function Card({ content }) {
	return (
		<div>
			<div class="center">
				<div class="article-card">
					<div class="content">
						<p class="title">{content.title? content.title : ""}</p>
						<p class="subtitle">{content.subtitle? content.subtitle : ""}</p>
					</div>

					<img src={content.img? content.img : img00} alt="img" />
				</div>
			</div>
		</div>
	)
}
