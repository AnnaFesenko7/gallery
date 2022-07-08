import dataGalleryMarkup from '../data.json';
console.log(dataGalleryMarkup);
const galleryContainer = document.querySelector('.page');
const cardsMarkup = createGalleryCardMarkup();
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardMarkup() {
	return dataGalleryMarkup
		.map(({ description, src, title }) => {
			return `
        <li class="galleryItem">
					<div class="card">
						<a
							class="cardLink"
							href=${src}
							target="_blank"
							data-title=${title}
							data-description=${description}
						>
							<div class="cardContent">
								<h3 class="cardTitle">${title}</h3>
								<p class="cardDescription">${description}</p>
							</div>
							<div class="cardHover"></div>
							 <img class="cardImage" src=${src} alt=${title} /> 
						</a>
					</div>
				</li>
        `;
		})
		.join('');
}
