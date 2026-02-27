import View from "./view.js";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parrentElement = document.querySelector(".pagination");

  addHandleClick(handler) {
    this._parrentElement.addEventListener('click', function(e) {
        const button = e.target.closest('.btn--inline')
        if (!button) return

        const goToPage = +button.dataset.goto;
        handler(goToPage)
    })
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(this._data.results / this._data.recipesPerPage);

    // Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return `
        <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
    }

    // Last Page
    if (currentPage === numPages && numPages > 1) {
      return `
        <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>
        `;
    }

    // Other page
    if (currentPage < numPages) {
      return `
        <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>
        
        <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
        `;
    }

    // Page 1, and there are NO other pages
    if (currentPage === 1 && numPages === 1) {
      return "";
    }
  }
}

export default new PaginationView();
