import View from "./view.js";
import previewView from "./previewView.js";
import icons from "url:../../img/icons.svg";

class ResultsView extends View {
  _parrentElement = document.querySelector(".results");
  _errorMessage = `No recipes found for your query! Please try again or see <a class="twitter-link" target="_blank" href="https://forkify-api.jonas.io/phrases.html">search query example</a>`;
  _message = "";

  _generateMarkup() {
      return this._data
        .map((result) => previewView.render(result, false))
        .join("");
    }
}

export default new ResultsView();
