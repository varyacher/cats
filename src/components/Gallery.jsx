import React from 'react'
import gallery1 from "./img/gallery1.jpg"
import gallery2 from "./img/gallery2.jpg"
import gallery3 from "./img/gallery3.jpg"
import gallery4 from "./img/gallery4.jpg"

function Gallery(){
	return(
		<div className="gallery">
			<h2>Галерея</h2>
			<div className="images">
				<img src={gallery1} alt=""/>
				<img src={gallery2} alt=""/>
				<img src={gallery3} alt=""/>
				<img src={gallery4} alt=""/>
			</div>
		</div>
		)
}


export default Gallery