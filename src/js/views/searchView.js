class SearchView {
  _parrentElement = document.querySelector(".search");

  getQuery() {
    const query = this._parrentElement.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parrentElement.querySelector(".search__field").value = "";
  }

  addHandleSearch(handler) {
    this._parrentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
