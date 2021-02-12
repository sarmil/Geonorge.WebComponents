// Dependencies
import {
   Component, CustomElement, CustomElementOptions, Prop, Dispatch, DispatchEmitter,
   Listen, Watch, getElement, getShadowRootElement, Toggle
} from 'super-custom-elements';


// Assets
import MapIcon from 'assets/svg/map-icon.svg';
import TrashIcon from 'assets/svg/trash-icon.svg';

// Functions
import { getMapItems, removeMapItem } from 'functions/mapItemHelpers';
import { getKartkatalogUrl } from 'functions/urlHelpers';

interface MapItem extends Object {
   Title: string,
   Uuid: string
}

interface MapItemsOptions extends CustomElementOptions {
   active?: boolean
}

@Component({
   tag: 'map-items',
   template: import('./map-items.html'),
   style: import('./map-items.scss')
})

export class MapItems extends CustomElement {
   private static readonly elementSelector = 'map-items';
   private mapButton: HTMLButtonElement;
   private mapIcon: HTMLElement;
   private mapIconCounter: HTMLSpanElement;
   private mapItemListContainer: HTMLDivElement;
   private mapItems: Array<MapItem>;

   @Prop() id: string;
   @Prop() environment: string;
   @Prop() language: string;
   @Toggle() showList: boolean;
   @Toggle() preventRedirect: boolean;
   @Dispatch('onOpenEmptyMapItemsList') onOpenEmptyMapItemsList: DispatchEmitter;

   constructor() {
      super();
      this.clickOutsideMapItemsContainer = this.clickOutsideMapItemsContainer.bind(this);
   }

   setup(options?: MapItemsOptions): void {
      this.connect(options.container);
      if (options.id) {
         this.id = options.id;
      }
   }

   connectedCallback() {
      this.mapButton = getShadowRootElement(this, '#map-toggle-button');
      this.mapIcon = getShadowRootElement(this, '#map-toggle-button-icon');
      this.mapIconCounter = getShadowRootElement(this, '#map-toggle-button-counter');
      this.mapItemListContainer = getShadowRootElement(this, '#map-item-list-container');

      this.getUpdatedMapItems();
      this.mapIcon.innerHTML = MapIcon;
      this.renderMapItemsCounter();

      document.addEventListener('click', this.clickOutsideMapItemsContainer);

      document.addEventListener('mapItemsChanged', () => {
         if (this.mapItems && this.mapItems.length) {
            this.renderMapItems(this.mapItems);
            this.renderMapItemsCounter();
         }
      });
   }

   getUpdatedMapItems() {
      this.mapItems = getMapItems();
   }

   disconnectedCallback() {
      document.removeEventListener('click', this.clickOutsideMapItemsContainer);
   }

   hideListContainer = () => {
      this.showList = false;
   }

   clickOutsideMapItemsContainer(event: MouseEvent) {
      const targetElement = event.composedPath()[0] as Element;
      if (targetElement.closest('#map-item-list-container') || targetElement.closest('#map-toggle-button')) return
      this.hideListContainer();
   }

   renderMapItemsCounter() {
      if (this.mapItems && this.mapItems.length) {
         this.mapIconCounter.innerHTML = this.mapItems.length.toString();
         this.mapIconCounter.classList.remove('hidden');
      } else {
         this.mapIconCounter.innerHTML = '';
         this.mapIconCounter.classList.add('hidden');
      }
   }

   renderMapItems = (mapItems: Array<MapItem>) => {
      const mapItemsListElement = mapItems.map((mapItem: MapItem) => {
         const mapItemElement = document.createElement('span');
         mapItemElement.innerText = mapItem.Title;

         const removeMapItemElement = document.createElement('button');
         removeMapItemElement.classList.add('list-icon');
         removeMapItemElement.innerHTML = TrashIcon;
         removeMapItemElement.dataset['mapItem'] = JSON.stringify(mapItem);
         mapItemElement.appendChild(removeMapItemElement);

         return `<li>${mapItemElement.innerHTML}</li>`;
      }).join('');
      let mapItemLinkElement;
      if (this.preventRedirect) {
         mapItemLinkElement = document.createElement('span');
         mapItemLinkElement.addEventListener("click", () => {
            this.onOpenEmptyMapItemsList.emit();
         });
      } else {
         mapItemLinkElement = document.createElement('a');
         mapItemLinkElement.href = `${getKartkatalogUrl(this.environment)}/kart`;
      }
      mapItemLinkElement.innerText = this.language === 'en' ? 'Show map' : 'Vis kart';
      mapItemLinkElement.classList.add('page-link-element');
      this.mapItemListContainer.innerHTML = `<ul>${mapItemsListElement}</ul>`;
      this.mapItemListContainer.prepend(mapItemLinkElement);
   }

   @Listen('click', '#map-toggle-button')
   buttonClicked(event: MouseEvent) {

      if (this.mapItems && this.mapItems.length) {
         this.showList = !this.showList;
      } else {
         this.showList = false;
         if (this.preventRedirect){
            this.onOpenEmptyMapItemsList.emit();
         } else {
            window.location.href = `${getKartkatalogUrl(this.environment)}/kart`
         }
      }
   }

   @Listen('click', '#map-item-list-container')
   removeMapItemClicked(event: MouseEvent) {
      const targetElement = event.composedPath()[0] as Element;
      targetElement.closest('#menu-container');
      const removeMapItemButtonElement = targetElement.closest('button');

      if (removeMapItemButtonElement) {
         const mapItem = removeMapItemButtonElement.dataset && removeMapItemButtonElement.dataset.mapItem ? JSON.parse(removeMapItemButtonElement.dataset.mapItem) : null;
         if (mapItem) {
            event.stopPropagation();
            removeMapItem(mapItem);
            this.getUpdatedMapItems();
            this.renderMapItems(this.mapItems);
            this.renderMapItemsCounter();
            if (!this.mapItems || !this.mapItems.length) {
               this.showList = false;
            }
         }
      }
   }

   @Watch('showlist')
   showMenuChanged() {
      this.showList ? this.mapItemListContainer.classList.add('open') : this.mapItemListContainer.classList.remove('open');
      this.showList ? this.mapButton.classList.add('open') : this.mapButton.classList.remove('open');
   }

   @Watch('mapItems')
   mapItemsChanged() {
      if (this.mapItems && this.mapItems.length) {
         this.renderMapItems(this.mapItems);
         this.renderMapItemsCounter();
      }
   }

   @Watch('preventredirect')
   preventRedirectChanged(){
      if (this.mapItems && this.mapItems.length) {
         this.renderMapItems(this.mapItems);
         this.renderMapItemsCounter();
      }
   }

   public static setup(selector: string, options: MapItemsOptions) {
      const element = getElement<MapItems>(selector);
      if (options.active) {
         element.showList = options.active;
      }
   }
}
