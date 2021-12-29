import View from './view';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg'; //parcel 2 для статичных фалов(картики, видео, аудио, не код нужно добавить "url:")

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errrorMessage = `No recipe found for your query! Please try another`;
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
