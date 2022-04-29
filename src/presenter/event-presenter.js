import SortView from '../view/list-sort-view.js';
import TripListView from '../view/trip-list-view.js';
import TripListItemView from '../view/trip-list-item-view.js';
import TripPointView from '../view/trip-point-view.js';
import TripPointEditView from '../view/trip-point-edit-view.js';

import {render, RenderPosition} from '../render.js';

export default class EventPresenter {
  tripListComponent = new TripListView();
  tripListItemComponent = new TripListItemView();
  pointEditComponent = new TripPointEditView();

  init = (eventContainer) => {
    this.eventContainer = eventContainer;

    render(new SortView(), this.eventContainer);
    render(this.tripListComponent, this.eventContainer);

    for (let i = 0; i < 3; i++) {
      render(new TripListItemView(), this.tripListComponent.getElement());
    }

    const tripListItems = document.querySelectorAll('.trip-events__item');
    tripListItems.forEach((item) => render(new TripPointView(), item));

    render(this.tripListItemComponent, this.tripListComponent.getElement(), RenderPosition.AFTERBEGIN);
    render(this.pointEditComponent, this.tripListItemComponent.getElement());
  };
}
