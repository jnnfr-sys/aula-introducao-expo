import { createDrawerNavigator } from '@react-navigation/drawer';

import Atividades from '../atividades';
import Sobre from '../sobre';

const DrawerNavigation = createDrawerNavigator();

export default function Drawer() {
    return{
        //<DrawerNavigation.Navigator>
      //  <DrawerNavigation.Screen name='Feed' component={Atividades}/>
       // </DrawerNavigation.Navigator>
    };
};

const Drawer = createDrawerNavigator({
    screens: {
      Atividades,
      Sobre,
    },
  });

  