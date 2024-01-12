import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('form');
const searchValue = document.querySelector('input');
const gallery = document.querySelector('.gallery');

const searchParams = new URLSearchParams({
  key: '41708261-c154389f16c12e10553f8f229',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
});

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    gallery.innerHTML = '<span class="loader"></span>';
    searchParams.set("q", searchValue.value.trim());
    fetchImages();
    searchValue.value = '';
});

const fetchImages = () => {
    return fetch(
        `https://pixabay.com/api/?${searchParams}`
    )
        .then(response => {
            if (!response.ok) {
                throw new Errop(response.statusText);
            }
            return response.json();
        })
        .then(({ hits }) => {
            if (hits.length > 0) {
                const markup = hits
                    .map(hit => {
                        const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = hit;
                        return `<li class="gallery-item">
                            <a class="gallery-link" href="${largeImageURL}">
                                <img
                                    class="gallery-image"
                                    src="${webformatURL}"
                                    data-source="${largeImageURL}"
                                    alt="${tags}"
                                />
                                <ul class="img-description">
                                    <li class="img-description-item">Likes<span class="img-description-item-num">${likes}</span></li>
                                    <li class="img-description-item">Views<span class="img-description-item-num">${views}</span></li>
                                    <li class="img-description-item">Comments<span class="img-description-item-num">${comments}</span></li>
                                    <li class="img-description-item">Downloads<span class="img-description-item-num">${downloads}</span></li>
                                </ul>
                            </a>
                        </li>`
                    })
                    .join("");
                gallery.innerHTML = markup;

                lightbox.refresh();
            } else {
                gallery.innerHTML = '';
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: "topRight",
                });
            }
        })
        .catch(error => console.log(error));
}