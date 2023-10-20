import { Container, Row, Col } from 'react-bootstrap';
import Card from './card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Grid(cards) {
	return (
		<Container fluid>
			<Row xs={1} md={5}>
				{
					cards.list.map(
						(card) => (
							<Col><Card content={card} /></Col>
						)
					)
				}
			</Row>
		</Container>
	);
}
