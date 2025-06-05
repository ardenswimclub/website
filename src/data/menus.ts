
import { menu as mainMenu, contact, footerMain }  from './main-menu.ts';
import { menu as swimTeamMenu }  from './swim-team-menu.ts';
import { menu as swimMeetMenu }  from './swim-meet-menu.ts';

interface menuItem {
    title: string | undefined
    path: string
    children?: menuItem[] | undefined
};

export interface menuT {
    heading: string
    key: string
    path: string
    items: menuItem[]    
}
export const menus = { 
    'main': mainMenu, 
    'swim-meet': swimMeetMenu ,
    'swim-team': swimTeamMenu , 
};

export const footerMenus : menuT[] = [
    footerMain, 
    swimMeetMenu ,
    swimTeamMenu , 
    contact
];
// function injectChildren(key, childMenu, targetMenu) {    
    
//     return {
//         heading: targetMenu.heading,
//         items: targetMenu.items.map(item => item.path.includes(key) ?
//         {
//             title: item.title,
//             path: '#',
//             children: childMenu
//         } : item)
//     };
// }

// const swimTeamMenu2 = injectChildren('swim-meets', swimMeetMenu, swimTeamMenu);
// const mainMenu2 = injectChildren('swim-team', swimTeamMenu2, mainMenu);

// interface s {
//     heading: string | undefined,
//     items: menuItem[]
// }

// export const accordionMenu = mainMenu2;

//console.log(JSON.stringify(accordionMenu,null, 3));
