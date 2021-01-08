import React from 'react';
import './PlaylistMeta.css';
import coverIMG from '../assets/playlist-cover.jpg';

class NotSidenav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<div className='playlist-meta'>
				<img
					className='playlist-cover-img'
					src={coverIMG}
					alt='playlist cover'
				/>

				<div className='all-playlist-text'>
					<p className='text-playlist'>PLAYLIST</p>

					<h1 className='text-sorting-algorithms'>Sorting Algorithms</h1>
					<p className='text-all-the-best'>
						All the best sorting algorithms, all in one place.
					</p>

					<div className='stats'>
						<a href='https://github.com/kai-wei-mo' target='_blank'>
							kai-wei-mo
						</a>
						<span>302,887 likes</span>
						<span>XX songs, Xhr XX min</span>
					</div>
				</div>
			</div>
		);
	}
}

export default NotSidenav;
