import React from 'react';
import { IonChip,IonIcon,IonBadge,IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import './item.components.css';
import { pin, heart, closeCircle, close, hammer } from 'ionicons/icons';
interface ButtonProps {
  nom: string;
  prenom: string;
}
const Item: React.FC<ButtonProps> = (ButtonProps) => {
  return(
    <IonItem color="warning">
      <IonLabel>{ButtonProps.nom} {ButtonProps.prenom}</IonLabel>
      <IonBadge color="primary">Docteur</IonBadge>
        <IonIcon slot="end" color="danger" size="large" icon={closeCircle} />
        <IonIcon slot="end" color="success" size="large" icon={hammer} />
    </IonItem>
  )
};

export {Item};