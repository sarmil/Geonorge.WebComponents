// Dependencies
import {
    Component, CustomElement, CustomElementOptions, Prop, Dispatch, DispatchEmitter,
    Listen, Watch, getElement, getShadowRootElement, Toggle
} from 'super-custom-elements';


// Assets
import MenuIcon from 'assets/svg/menu-icon.svg';
import CloseIcon from 'assets/svg/close-icon.svg';

// Functions
import { fetchMenuItems } from 'functions/apiHelpers';
import { watch } from 'fs';

interface MainMenuOptions extends CustomElementOptions {
    active?: boolean,
    onClick?: () => void
}

interface MenuItem extends Object {
    Name: string,
    SubMenuItem: Array<MenuItem>,
    Url: string
}

@Component({
    tag: 'main-menu',
    template: import('./main-menu.html'),
    style: import('./main-menu.scss')
})

export class MainMenu extends CustomElement {
    private static readonly elementSelector = 'main-menu';
    private menuButton: HTMLButtonElement;
    private menuIcon: HTMLSpanElement;
    private menuWrapper: HTMLElement;
    private menuContainer: HTMLElement;
    private menuItemListContainer: HTMLElement;
    private menuActionsRow: HTMLElement;

    @Prop() id: string;
    @Prop() language: string;
    @Toggle() multilingual: boolean;
    @Toggle() supportsLogin: boolean;
    @Toggle() isLoggedIn: boolean;
    @Toggle() showMenu: boolean;
    @Prop() menuItems: Array<MenuItem>;
    @Toggle() staticPosition: boolean;


    constructor() {
        super();
        this.clickOutsideMenuContainer = this.clickOutsideMenuContainer.bind(this);
    }

    setup(options?: MainMenuOptions): void {
        this.connect(options.container);
        if (options.id) {
            this.id = options.id;
        }
    }

    connectedCallback() {
        this.menuButton = getShadowRootElement(this, '#menu-toggle-button');
        this.menuIcon = getShadowRootElement(this, '#menu-icon');
        this.menuWrapper = getShadowRootElement(this, '#menu-wrapper');
        this.menuContainer = getShadowRootElement(this, '#menu-container');
        this.menuItemListContainer = getShadowRootElement(this, '#menu-item-list-container');
        this.menuActionsRow = getShadowRootElement(this, '#menu-actions-row');
        this.menuIcon.innerHTML = MenuIcon;

        fetchMenuItems(this.language).then(menuItems => {
            this.menuItems = menuItems;
        });

        if (this.supportsLogin) {
            const loginToggleElement = document.createElement("a");
            loginToggleElement.innerText = this.isLoggedIn ? "Logg ut" : "Logg inn"
            this.menuActionsRow.appendChild(loginToggleElement);
        }

        if (this.multilingual) {
            const languageToggleElement = document.createElement("a");
            languageToggleElement.innerText = "English"
            this.menuActionsRow.appendChild(languageToggleElement);
        }

        if(this.staticPosition) {
            this.menuWrapper.classList.add('static-position');
         }

        document.addEventListener('click', this.clickOutsideMenuContainer);
    }

    disconnectedCallback() {
        document.removeEventListener('click', this.clickOutsideMenuContainer);
    }

    hideMenuContainer = () => {
        this.showMenu = false;
    }


    clickOutsideMenuContainer(event: MouseEvent) {
        const targetElement = event.composedPath()[0] as Element;
        targetElement.closest('#menu-container');
        if (targetElement.closest('#menu-container') || targetElement.closest('#menu-toggle-button')) return
        this.hideMenuContainer();
    }

    renderMenuItems = (menuItems: Array<MenuItem>, hierarchyLevel: number = 0, maxHierarchyLevel: number = 1) => {
        const menuItemsListElement = menuItems.map((menuItem: MenuItem) => {
            const subItems = menuItem.SubMenuItem && menuItem.SubMenuItem.length ? menuItem.SubMenuItem : null;
            const menuItemElement = `<a href="${menuItem.Url}">${menuItem.Name}</a>`;
            const subItemElements = subItems && hierarchyLevel + 1 <= maxHierarchyLevel ? this.renderMenuItems(subItems, hierarchyLevel + 1, maxHierarchyLevel) : '';
            return `<li>${menuItemElement}${subItemElements}</li>`;
        }).join('');
        return `<ul class="menuItemList hierarchy-level-${hierarchyLevel}">${menuItemsListElement}</ul>`;
    }

    @Listen('click', '#menu-toggle-button')
    buttonClicked(event: MouseEvent) {
        event.stopPropagation();
        this.showMenu = !this.showMenu;
    }

    @Watch('showmenu')
    showMenuChanged() {
        this.showMenu ? this.menuContainer.classList.add('open') : this.menuContainer.classList.remove('open');
        this.showMenu ? this.menuButton.classList.add('open') : this.menuButton.classList.remove('open');
        this.menuIcon.innerHTML = this.showMenu ? CloseIcon : MenuIcon;
    }

    @Watch('menuItems')
    menuItemsChanged() {
        if (this.menuItems && this.menuItems.length) {
            this.menuItemListContainer.innerHTML = this.renderMenuItems(this.menuItems);
        }
    }

   


    public static setup(selector: string, options: MainMenuOptions) {
        const element = getElement<MainMenu>(selector);

        if (options.onClick) {
            element.addEventListener('menuButtonClick', options.onClick);
        }
        if (options.active) {
            element.showMenu = options.active;
        }
    }
}