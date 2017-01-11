import React from 'react';
import {Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Function component
const AlbumDetail = (props) =>
		<Card>
			<CardSection>
				<Text>{props.album.title}</Text>
			</CardSection>
		</Card>;

// Export
export default AlbumDetail;
