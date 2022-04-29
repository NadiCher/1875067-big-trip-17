import FilterView from './view/list-filter-view.js';
import EventPresenter from './presenter/event-presenter.js';
import { render } from './render.js';

const sitePageHeader = document.querySelector('.page-header');
const siteFiltersContainer = sitePageHeader.querySelector('.trip-controls__filters');

const siteMainElement = document.querySelector('.page-main');
const siteEventContainer = siteMainElement.querySelector('.trip-events');

const eventPresenter = new EventPresenter();

render(new FilterView(), siteFiltersContainer);

eventPresenter.init(siteEventContainer);
