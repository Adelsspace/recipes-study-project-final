import View from './view';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg'; //parcel 2 для статичных фалов(картики, видео, аудио, не код нужно добавить "url:")

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errrorMessage = `No bookmark yet. Find a nice recipe and bookmark it 🔖 `;
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
