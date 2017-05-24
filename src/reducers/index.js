import {CHANGE_MENU} from 'actions/index'

let initState = {
    selectedMenu: 'SKILLS',
    menus:[
        {id:1, name: 'SKILLS',path: '/skills'},
        {id:2, name: 'EXPERIENCES',path: '/timeline'},
        {id:3, name: 'TOOLS',path: '/tools'},
        {id:4, name: 'EDUCATION',path: '/education'}
    ]

}


export default function(state=initState,action){
    switch(action.type){
        case CHANGE_MENU:
            return Object.assign({},state,{
                selectedMenu: action.payload
            });
        default:
        break;
    }
    return state;
}