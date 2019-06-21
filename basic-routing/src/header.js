import Menu from './menu.js';
export default {
    template: `
    <div>
        <h1>MY APP</h1>
        <app_menu></app_menu>
    </div>
    `,
    components: {
        app_menu: Menu
    }
}