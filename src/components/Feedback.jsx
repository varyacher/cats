import React from 'react'


function Feedback(){
	return(
		<div className="feedback">
			<h2>Напишите нам</h2>
			<form action="">
				<input type="text" placeholder="Имя" />
				<input type="text" placeholder="E-mail" />
				<label for="topic">Что вас интересует?</label>
				<select name="" id="topic">
					<option value="">Советы по уходу</option>
					<option value="">Породы кошек</option>
					<option value="">Новости о кошках</option>
				</select>
				<label for="message">Ваше сообшение</label>
				<textarea name="" id="message"></textarea>
				<input type="submit" className="button" />
			</form>
		</div>
		)
}


export default Feedback