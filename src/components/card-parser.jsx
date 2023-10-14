import './card.css';

export default function Card({content}) {
	return (
		<div>
			<div class="center">
				<div class="article-card">
					<div class="content">
						<p class="title">{content.title}</p>
						<p class="subtitle">{content.subtitle}</p>
					</div>

					<img src={content.img} alt="img"/>
				</div>
			</div>
		</div>
	)
}