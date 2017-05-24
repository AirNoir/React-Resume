export const CHANGE_MENU = 'CHANGE_MENU';

export function selectMenu(selectedMenu){

    return {
        type: CHANGE_MENU,
        payload: selectedMenu
    }

}