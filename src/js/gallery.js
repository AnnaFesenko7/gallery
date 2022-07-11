import dataGalleryMarkup from '../data.json';
import * as imgs from '../images/gallery/*.jpg';
console.log(imgs);
console.log(dataGalleryMarkup);
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardMarkup();
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardMarkup() {
  return dataGalleryMarkup
    .map(({ description, src, title }, index) => {
      return `
        <li class="galleryItem">
					<div class="card">
						<a
							class="cardLink"
							href=${imgs[index + 1]}
							target="_blank"
							data-title=${title}
							data-description=${description}
						>
							<div class="cardContent">
								<h3 class="cardTitle">${title}</h3>
								<p class="cardDescription">${description}</p>
							</div>
							<div class="cardHover"></div>
							 <img class="cardImage" src=${imgs[index + 1]} alt=${title} /> 
						</a>
					</div>
				</li>
        `;
    })
    .join('');
}
