import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import {Item,Button} from '../../components';
import './list.containers.css';
const List: React.FC = () => { return(
  <IonContent>
    {/*-- List of Text Items --*/}
    <IonList>
        <Item/>
    </IonList>
</IonContent> )};

export {List}